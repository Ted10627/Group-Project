<script setup>
import { ref, onMounted, watch } from 'vue'
import { airData } from '@/stores/AirDate.js'
import axios from 'axios'
import autoPlayCarousel from '@/components/AutoPlayCarousel.vue'
import mainTitle from '@/components/MainTitle.vue'
import trafficButton from '@/components/TrafficButton.vue'
const getAirData = airData()
// 航空公司
const airname = ref(getAirData.allAirname)
// 國內航線
const domestic = ref(getAirData.allDomestic)
// 國際航線
const foreign = ref(getAirData.allForeign)
//天氣描述
const describeUrl =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWA-EF35A2DE-8C81-4411-94CF-4E2D13A3DC31&limit=1&format=JSON&locationName=%E6%B2%99%E9%B9%BF%E5%8D%80&elementName=Wx'
//取得攝氏度
const temperatureUrl =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWA-EF35A2DE-8C81-4411-94CF-4E2D13A3DC31&limit=1&format=JSON&locationName=%E6%B2%99%E9%B9%BF%E5%8D%80&elementName=AT'
//溫度
const temperature = ref('')
//天氣描述
const description = ref('')
//取得使用者時間
const userTime = ref(new Date())
const getWeather = async () => {
  try {
    // 取得天氣描述
    const describeRes = await axios.get(describeUrl)
    const describeData =
      describeRes.data.records.locations[0].location[0].weatherElement[0].time[0].elementValue[1]
        .value
    description.value = describeData

    // 取得溫度數據
    const tempRes = await axios.get(temperatureUrl)
    const tempData = tempRes.data.records.locations[0].location[0].weatherElement[0].time

    // 取得當日日期
    const today = new Date().toISOString().split('T')[0]

    // 篩選當日的溫度數據
    const todayTemps = tempData.filter((item) => item.dataTime && item.dataTime.startsWith(today))

    // 取得最高和最低溫度
    let maxTemp = -Infinity
    let minTemp = Infinity

    todayTemps.forEach((item) => {
      const temp = parseFloat(item.elementValue[0].value)
      if (temp > maxTemp) maxTemp = temp
      if (temp < minTemp) minTemp = temp
    })

    temperature.value = `${maxTemp}°C / ${minTemp}°C`
    console.log('取得天氣API:', description.value)
    console.log('取得溫度API:', temperature.value)
  } catch (error) {
    console.error('取得天氣錯誤:', error)
  }
}
const AirAPI =
  'https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/RMQ?%24top=30&%24format=JSON'
// 所有航班資料陣列
const flight = ref([])
const displayType = ref(['Arrival', 'internationalArrival', 'crossStraitArrival'])
// 取得 API 資料
const getAPI = async () => {
  try {
    // 抓取API資料給resFlights(航班資訊)
    const cachedData = localStorage.getItem('apiData')
    //資料日期
    const cachedDate = localStorage.getItem('apiDate')
    //取得當日日期
    const todayDate = new Date().toISOString().split('T')[0]
    let resFlights = ref([])
    //利用localStorage給資料到cachedData，並檢查cachedData有無資料，無資料就抓給他
    if (cachedData && cachedDate === todayDate) {
      resFlights.value = JSON.parse(cachedData)
    } else {
      const response = await axios.get(AirAPI)
      resFlights.value = response.data
      localStorage.setItem('apiData', JSON.stringify(resFlights.value))
      localStorage.setItem('apiDate', todayDate)
      console.log('API 暫存資料:', resFlights.value)
    }
    // 確保資料存在
    if (!Array.isArray(resFlights.value) || resFlights.value.length === 0) {
      throw new Error('API 資料格式錯誤或無資料')
    }

    // 使用 flatMap 處理 FIDSDeparture 和 FIDSArrival
    const departures = resFlights.value.flatMap((item) => item.FIDSDeparture || [])
    const arrivals = resFlights.value.flatMap((item) => item.FIDSArrival || [])

    // 出入境放入陣列flight(所有資料)
    flight.value = { departures, arrivals }
    console.log('所有航班資料:', flight.value)
    console.log('所有出境航班資料:', flight.value.departures)
    console.log('所有入境航班資料:', flight.value.arrivals)
  } catch (error) {
    console.error('獲取資料錯誤:', error)
  }
}
//顯示更多
const showMoreCount = ref(5)
const showMore = () => {
  showMoreCount.value += 5
  setDisplayType()
}
//時間過濾航班
const TimeFilter = (flights) => {
  const NowTime = new Date()
  return flights.filter((flightItem) => {
    const FlyTime = new Date(flightItem.ScheduleDepartureTime || flightItem.ScheduleArrivalTime)
    return FlyTime > NowTime
  })
}
//用來放按鈕過濾後資料的陣列
const filterFlights = ref([])
//按鈕功能類別/類型
const category = ref('')
const nowType = ref('')
//國際與國內
const setCategory = (set) => {
  category.value = set
  showMoreCount.value = 5
  setDisplayType()
}
//起飛與抵達
const setType = (set) => {
  nowType.value = set
  showMoreCount.value = 5
  setDisplayType()
}
//按鈕回傳分類設定
const setDisplayType = () => {
  //是否為國際
  if (category.value === 'international') {
    //是否為抵達
    if (nowType.value === 'Arrival') {
      displayType.value = ['Arrival']
      filterFlights.value = TimeFilter(
        flight.value.arrivals.filter(
          (flight) =>
            flight.ArrivalAirportID === 'RMQ' &&
            foreign.value.some((place) => place.id === flight.DepartureAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMore.value)
      //是否為起飛
    } else if (nowType.value === 'Departure') {
      displayType.value = ['Departure']
      filterFlights.value = TimeFilter(
        flight.value.departures.filter(
          (flight) =>
            flight.DepartureAirportID === 'RMQ' &&
            foreign.value.some((place) => place.id === flight.ArrivalAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMore.value)
    }
    //是否為國內
  } else if (category.value === 'domestic') {
    //抵達
    if (nowType.value === 'Arrival') {
      displayType.value = ['Arrival']
      filterFlights.value = TimeFilter(
        flight.value.arrivals.filter(
          (flight) =>
            flight.ArrivalAirportID === 'RMQ' &&
            domestic.value.some((place) => place.id === flight.DepartureAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMore.value)
      //起飛
    } else if (nowType.value === 'Departure') {
      displayType.value = ['Departure']
      filterFlights.value = TimeFilter(
        flight.value.departures.filter(
          (flight) =>
            flight.DepartureAirportID === 'RMQ' &&
            domestic.value.some((place) => place.id === flight.ArrivalAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMore.value)
    }
  }
}

// 根據 AirlineID 獲取航空公司名稱
const getname = (AirlineID) => {
  const airline = airname.value.find((a) => a.id === AirlineID)
  return airline ? airline.name : '未知航空公司'
}

// 根據 ArrivalAirportID 或 DepartureAirportID 獲取地點名稱
const getPlaceName = (airportID) => {
  const place = [...foreign.value, ...domestic.value].find((a) => a.id === airportID)
  return place ? place.name : '未知地點'
}

//這是時間格式設定
const formatTime = (time) => {
  return time ? time.substring(11, 16) : '---'
}
//搜尋
const searchQuery = ref('')
watch(
  searchQuery,
  () => {
    setDisplayType()
  },
  { immediate: true }
)
const searchFlights = () => {
  setType(nowType.value)
  setDisplayType()
}

onMounted(() => {
  getAPI().then(() => {
    category.value = 'international'
    nowType.value = 'Arrival'
    setDisplayType()
  })
  getWeather()
  setInterval(() => {
    userTime.value = new Date()
  }, 1000)
})
const messages = ref(getAirData.allMessages)
</script>

<template>
  <main>
    <div class="flex justify-center">
      <div class="relative flex justify-center w-[1750px] h-[916px]">
        <!-- 圖片切換區 -->
        <autoPlayCarousel />
        <!-- 航空資訊 -->
        <div class="absolute top-[684px] left-[328px] w-[1080px] text-2xl shadow-md">
          <div class="flex">
            <button
              @click="setCategory('international')"
              :class="[category === 'international' ? 'airportMainColor' : 'airportAuxiliaryColor']"
              class="hover:airportMainColor rounded-tl-my flight-button"
            >
              國際及兩岸航線
            </button>
            <button
              @click="setCategory('domestic')"
              :class="[category === 'domestic' ? 'airportMainColor' : 'airportAuxiliaryColor']"
              class="hover:airportMainColor rounded-tr-my flight-button"
            >
              國內航線
            </button>
          </div>
          <div v-if="category" class="flex items-center mt-2">
            <button
              @click="setType('Arrival')"
              :class="[nowType === 'Arrival' ? 'airportMainColor' : 'bg-white']"
              class="hover:airportMainColor flight-button"
            >
              <div class="flex justify-center items-center">
                <img
                  :src="[
                    nowType === 'Arrival'
                      ? '/icon/airplane-landing.png'
                      : '/icon/airplane-landing-ch.png'
                  ]"
                />
                抵達
              </div>
            </button>

            <button
              @click="setType('Departure')"
              :class="[nowType === 'Departure' ? 'airportMainColor' : 'bg-white']"
              class="hover:airportMainColor flight-button"
            >
              <div class="flex justify-center items-center">
                <img
                  :src="[
                    nowType === 'Departure'
                      ? '/icon/airplane-takeoff.png'
                      : '/icon/airplane-takeoff-ch.png'
                  ]"
                />
                起飛
              </div>
            </button>
            <div
              class="p-5 airportAuxiliaryColor w-[500px] h-[110px] flex items-center border relative"
            >
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜尋航班編號"
                class="p-2 airportAuxiliaryColor flex-1 h-[60px] w-[460px] border-width border-2 rounded"
              />
              <img
                src="/icon/search.png"
                class="w-[40px] h-[40px] cursor-pointer absolute right-10"
                @click="searchFlights"
              />
            </div>
          </div>
          <div v-if="nowType" class="mt-2">
            <table class="w-full border-collapse">
              <thead class="h-[65px]">
                <tr class="airportAuxiliaryColor-2">
                  <th class="text-center from-items-1">
                    <div class="flex justify-center items-center border-r-2">時間</div>
                  </th>
                  <th class="text-center from-items-2">
                    <div class="flex justify-center items-center border-r-2">班機編號</div>
                  </th>
                  <th v-if="displayType.includes('Arrival')" class="text-center from-items-1">
                    <div class="flex justify-center items-center border-r-2">出發地</div>
                  </th>
                  <th v-if="displayType.includes('Departure')" class="text-center from-items-1">
                    <div class="flex justify-center items-center border-r-2">目的地</div>
                  </th>
                  <th class="text-center">狀態</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-if="filterFlights.length === 0">
                  <td colspan="5" class="text-center text-[30px] py-4 bg-slate-200">查無資料</td>
                </tr>
                <tr
                  v-for="flightItem in filterFlights.slice(0, showMoreCount)"
                  :key="flightItem.FlightNumber"
                  class="border shadow-md p-2 h-[65px]"
                  :class="{
                    'text-red-600':
                      flightItem.ArrivalRemark === '延誤' ||
                      flightItem.ArrivalRemark === '取消' ||
                      flightItem.DepartureRemark === '延誤' ||
                      flightItem.DepartureRemark === '取消',
                    'text-black': !(
                      flightItem.ArrivalRemark === '延誤' ||
                      flightItem.ArrivalRemark === '取消' ||
                      flightItem.DepartureRemark === '延誤' ||
                      flightItem.DepartureRemark === '取消'
                    )
                  }"
                >
                  <!-- 表定到達時間 -->
                  <td v-if="displayType.includes('Arrival')" class="text-center from-items-1">
                    {{ formatTime(flightItem.ScheduleArrivalTime) }}
                  </td>
                  <!-- 表定出發時間 -->
                  <td v-if="displayType.includes('Departure')" class="text-center from-items-1">
                    {{ formatTime(flightItem.ScheduleDepartureTime) }}
                  </td>
                  <td class="from-items-2">
                    <div class="flex items-center justify-center">
                      <img
                        :src="`/AviationLogo/${flightItem.AirlineID}.png`"
                        alt="logo"
                        class="w-5 h-5"
                      />
                      <span class="ml-2">{{ getname(flightItem.AirlineID) }}</span>
                      <span class="ml-2"
                        >{{ flightItem.AirlineID }}-{{ flightItem.FlightNumber }}</span
                      >
                    </div>
                  </td>
                  <td v-if="displayType.includes('Arrival')" class="text-center from-items-1">
                    {{ getPlaceName(flightItem.DepartureAirportID) }}
                  </td>
                  <td v-if="displayType.includes('Departure')" class="text-center from-items-1">
                    {{ getPlaceName(flightItem.ArrivalAirportID) }}
                  </td>
                  <td v-if="displayType.includes('Arrival')" class="text-center from-items-1">
                    {{ flightItem.ArrivalRemark }}
                  </td>
                  <td v-if="displayType.includes('Departure')" class="text-center from-items-1">
                    {{ flightItem.DepartureRemark }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-center items-center bg-white bg-opacity-50 h-[80px]">
              <button @click="showMore" class="h-[40px]">顯示更多航班</button>
              <img src="/icon/park-right.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 天氣卡 -->
        <div class="text-2xl absolute top-[164px] right-[18px]">
          <table class="w-[500px]">
            <thead class="h-[80px]">
              <tr class="airportAuxiliaryColor-2 flex justify-center items-center rounded-time">
                <th class="text-center">
                  <div class="flex justify-center items-center from-items-1 h-[25px]">
                    台中
                    {{
                      userTime.toLocaleTimeString('zh-TW', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hourCycle: 'h23'
                      })
                    }}
                    <div class="flex ml-14 items-center border-r-2 h-[20px]"></div>
                  </div>
                </th>
                <th class="text-center">
                  <div class="flex justify-center items-center">
                    {{ temperature }}
                    <div class="flex h-[80px] items-center ml-3">
                      <img
                        :src="`https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${description}.svg`"
                        alt="天氣圖"
                        class="w-[40px] h-[40px] m-2"
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <!-- 公告區 -->
        <div class="text-2xl absolute top-[22px] left-[328px]">
          <div class="flex w-[1080px] h-[100px] announcement shadow-xl">
            <div
              class="flex justify-center items-center w-[220px] h-[100px] announcement-title content-text"
            >
              <img src="/icon/announcement.png" class="w-[44px] h-[44px]" />公告資訊
            </div>
            <div class="flex ml-8 marquee-container">
              <div class="marquee-content">
                <div v-for="(message, index) in messages" :key="index" class="marquee-item">
                  {{ message }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <img src="/首頁-導覽地圖.png" alt="" />
    </div>
    <div class="transportation-guide">
      <div class="transportation-main">
        <div class="mb-[50px] w-[full] h-[70px]">
          <mainTitle>
            <template #title>交通資訊</template>
          </mainTitle>
        </div>

        <div class="flex justify-between w-full h-[300px]">
          <div class="flex-1">
            <div class="flex flex-col justify-center">
              <trafficButton traffic-name="bus"></trafficButton>
              <div class="flex items-center w-[280px] h-[44px]">
                <div
                  class="flex justify-center items-center w-[100px] h-[24px] bg-white rounded-full small-text"
                >
                  -------
                </div>
                <div class="flex justify-center items-center h-full small-text">台中車站</div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-center">
              <trafficButton traffic-name="speedRail"></trafficButton>
              <trafficButton traffic-name="taxi"></trafficButton>
              <trafficButton traffic-name="car"></trafficButton>
              <trafficButton traffic-name="pin"></trafficButton>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex justify-center">
              <trafficButton traffic-name="pin"></trafficButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="/搭機指南區.png" alt="" />
    </div>
    <div>
      <img src="/服務及相關連結區.png" alt="" />
    </div>
  </main>
</template>

<style>
th,
td {
  text-align: left;
}
td {
  padding: 8px;
}

.airportMainColor {
  background-color: #471c87;
  color: white;
}
.airportAuxiliaryColor {
  background-color: #dedede;
  color: black;
}
.airportAuxiliaryColor-2 {
  background-color: #343557;
  color: white;
}
.rounded-tl-my {
  border-top-left-radius: 50px;
}
.rounded-time {
  border-top-left-radius: 80px;
  border-bottom-left-radius: 15px;
}
.rounded-tr-my {
  border-top-right-radius: 50px;
}
.rounded-banner {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.flight-button {
  width: 290px;
  height: 110px;
}

.from-items-1 {
  width: 250px;
  height: 80px;
}
.from-items-2 {
  width: 330px;
  height: 80px;
}
.announcement-title {
  background-color: #f59801;
  color: white;
  border-radius: 80px;
}
.announcement {
  background-color: white;
  color: black;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 160px;
  border-bottom-right-radius: 30px;
  position: relative;
}
.marquee-container {
  position: relative;
  overflow: hidden;
  width: 750px;
  height: 100px;
}

.marquee-content {
  display: flex;
  width: calc(100% * 3.5);
  animation: marquee 25s linear infinite;
  height: 100%;
  font-size: 24px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
}

.marquee-item {
  display: flex;
  align-items: center;
  height: 100px;
  min-width: 100%;
  text-align: left;
  padding-left: 20px;
}
.transportation-guide {
  width: 1920px;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}
.transportation-main {
  width: 1400px;
  height: 370px;
}

@keyframes marquee {
  0%,
  12.5% {
    transform: translateX(100%);
  }
  25%,
  37.5% {
    transform: translateX(0%);
  }
  50%,
  62.5% {
    transform: translateX(-100%);
  }
  75%,
  87.5% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(-300%);
  }
}
</style>
