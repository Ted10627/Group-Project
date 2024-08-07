<script setup>
import { ref, onMounted, watch } from 'vue'
import { airData } from '@/stores/AirDate.js'
import axios from 'axios'
import autoPlayCarousel from '@/components/HomeView/AutoPlayCarousel.vue'
import mainTitle from '@/components/HomeView/MainTitle.vue'
import trafficButton from '@/components/HomeView/TrafficButton.vue'
import busInformation from '@/components/HomeView/BusInformation.vue'
import parkingLot from '@/components/HomeView/ParkingLot.vue'
import guideCards from '@/components/HomeView/GuideCards.vue'
import service from '@/components/HomeView/ServiceOptions.vue'
import announcementCarousel from '@/components/HomeView/AnnouncementCarousel.vue'
<<<<<<< Updated upstream
=======
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const planeRef = ref(null)

onMounted(() => {
  gsap.to(planeRef.value, {
    duration: 10,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: -200, y: -100 },
        { x: -400, y: 0 },
        { x: -300, y: 350 },
        { x: 400, y: -50 },
        { x: 1000, y: -600 }
      ],
      type: 'quadratic',
      autoRotate: true
    },
    repeat: -1,
    ease: 'linear'
  })
})
>>>>>>> Stashed changes
const getAirData = airData()
// 航空公司
const airname = ref(getAirData.allAirname)
// 國內航線
const domestic = ref(getAirData.allDomestic)
// 國際航線
const foreign = ref(getAirData.allForeign)
//天氣描述
const describeUrl =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWA-AB77557D-8FFC-412D-91D5-8D4235C1406D&limit=1&format=JSON&locationName=%E6%B2%99%E9%B9%BF%E5%8D%80&elementName=Wx'
//取得攝氏度
const temperatureUrl =
  'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWA-AB77557D-8FFC-412D-91D5-8D4235C1406D&limit=1&format=JSON&locationName=%E6%B2%99%E9%B9%BF%E5%8D%80&elementName=AT'
//溫度
const temperature = ref('')
//天氣描述
const description = ref('')
//取得使用者時間
const userTime = ref(new Date())
<<<<<<< Updated upstream
const ONE_DAY_MS = 24 * 60 * 60 * 1000 // 1 天的毫秒數
=======
>>>>>>> Stashed changes

const getWeather = async () => {
  try {
    // 當前時間
    const now = new Date()

    // 檢查 localStorage 是否過期
    const storedData = localStorage.getItem('weatherData')
    const storedTime = localStorage.getItem('lastFetchedTime')

    if (storedData && storedTime) {
      const dataAge = now - new Date(storedTime)
      if (dataAge < ONE_DAY_MS) {
        const { description: storedDescription, temperature: storedTemperature } =
          JSON.parse(storedData)
        description.value = storedDescription
        temperature.value = storedTemperature
        console.log('使用暫存的天氣:', description.value)
        console.log('使用暫存的溫度:', temperature.value)
        return
      }
    }

    // 取得天氣描述
    const describeRes = await axios.get(describeUrl)
    const weatherElements = describeRes.data.records.locations[0].location[0].weatherElement[0].time

<<<<<<< Updated upstream
    // 取得溫度
    const tempRes = await axios.get(temperatureUrl)
    const tempData = tempRes.data.records.locations[0].location[0].weatherElement[0].time

    // 取得當日日期
    const today = new Date().toISOString().split('T')[0]

    // 篩選當日的溫度
    const todayTemps = tempData.filter((item) => item.dataTime && item.dataTime.startsWith(today))

    // 取得最高和最低溫度
    let maxTemp = -Infinity
    let minTemp = Infinity

    if (todayTemps.length > 0) {
      todayTemps.forEach((item) => {
        const temp = parseFloat(item.elementValue[0].value)
        if (temp > maxTemp) maxTemp = temp
        if (temp < minTemp) minTemp = temp
      })
      temperature.value = `${maxTemp}°C / ${minTemp}°C`
    } else {
      temperature.value = `-X / X`
    }

    // 儲存資料到 localStorage
    localStorage.setItem(
      'weatherData',
      JSON.stringify({ description: description.value, temperature: temperature.value })
    )
    localStorage.setItem('lastFetchedTime', now.toISOString())

    console.log('取得天氣API:', description.value)
    console.log('取得溫度API:', temperature.value)
=======
    // 當前時間
    const now = new Date()

    // 選取當前時間的天氣描述
    const currentWeather = weatherElements.find((element) => {
      const startTime = new Date(element.startTime)
      const endTime = new Date(element.endTime)
      return now >= startTime && now < endTime
    })

    // 如果找到當前時間的天氣描述，更新 description
    if (currentWeather) {
      description.value = currentWeather.elementValue[1].value
      console.log('取得當前時間的天氣API:', description.value)
    } else {
      console.log('未找到當前時間的天氣描述')
    }
>>>>>>> Stashed changes
  } catch (error) {
    console.error('取得天氣錯誤:', error)
  }
}

const fetchTemperature = async () => {
  try {
    const response = await fetch(temperatureUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    if (data.success === 'true' && data.records && data.records.locations) {
      const location = data.records.locations[0]
      const weatherElement = location.location[0].weatherElement.find(
        (element) => element.elementName === 'AT'
      )

      if (weatherElement && weatherElement.time && weatherElement.time.length > 0) {
        const temperatures = weatherElement.time.map((t) => parseFloat(t.elementValue[0].value))
        const maxTemp = Math.max(...temperatures)
        const minTemp = Math.min(...temperatures)

        temperature.value = `${maxTemp}°C / ${minTemp}°C`
      } else {
        temperature.value = '無法獲取溫度'
      }
    } else {
      temperature.value = '無法獲取溫度'
    }
  } catch (error) {
    console.error('獲取溫度數據時出錯:', error)
    temperature.value = '無法獲取溫度'
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
  fetchTemperature()
  setInterval(() => {
    userTime.value = new Date()
  }, 1000)
})
const messages = ref(getAirData.allMessages)
//交通資訊輪流撥放
const cards = ['card1', 'card2', 'card3']
<<<<<<< Updated upstream
const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
}
=======
>>>>>>> Stashed changes
</script>

<template>
  <div class="flex w-full justify-center bg-white">
    <div class="flex w-full max-w-[1720px] justify-center">
      <div class="relative flex justify-center w-full h-[916px]">
        <!-- 圖片切換區 -->
        <autoPlayCarousel />
        <!-- 航空資訊 -->
        <div
          class="absolute w-full max-w-[1080px] top-[70%] left-[22%] text-2xl shadow-md z-index-2"
        >
          <div class="flex">
            <button
              type="button"
              @click="setCategory('international')"
              :class="[category === 'international' ? 'airportMainColor' : 'airportAuxiliaryColor']"
              class="hover:airportMainColor rounded-tl-my flight-button"
            >
              國際及兩岸航線
            </button>
            <button
              type="button"
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
              class="relative p-5 airportAuxiliaryColor w-[500px] h-[110px] flex items-center border"
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
<<<<<<< Updated upstream
                  <td colspan="5" class="text-center text-[30px] py-4 bg-slate-200">查無資料</td>
=======
                  <td colspan="5" class="text-center subtitle py-4 bg-slate-200">查無資料</td>
>>>>>>> Stashed changes
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
                        :src="`https://www.tca.gov.tw/upload/webstyle_7_default/img/air_logo/${flightItem.AirlineID}.png`"
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
<<<<<<< Updated upstream
        <div class="text-2xl absolute top-[22%] right-[0%]">
          <table class="w-[500px]">
=======
        <div class="content-text absolute top-[22%] right-[0%]">
          <table class="w-full max-w-[500px]">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <div class="flex ml-14 items-center border-r-2 h-[20px]"></div>
=======
                    <div class="flex ml-12 items-center border-r-2 h-[20px]"></div>
>>>>>>> Stashed changes
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
        <div class="text-2xl absolute top-[5%] left-[20%]">
          <div class="flex w-full max-w-[1080px] h-[80px] announcement shadow-xl">
            <div
              class="flex justify-center items-center w-full max-w-[220px] announcement-title content-text"
            >
              <img src="/icon/announcement.png" class="w-[44px] h-[44px]" />公告資訊
            </div>
<<<<<<< Updated upstream
            <div class="flex ml-8 relative overflow-hidden w-[750px]">
              <div class="marquee-content">
=======
            <div class="flex ml-8 mr-[50px] relative overflow-hidden w-[750px]">
              <div class="marquee-content content-text">
>>>>>>> Stashed changes
                <div
                  v-for="(message, index) in messages"
                  :key="index"
                  class="flex items-center min-w-[100%]"
                >
                  {{ message }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 地圖區 -->
<<<<<<< Updated upstream
  <div class="flex w-full justify-center translate-y-[-100px] bg-white overflow-hidden">
    <img class="z-index-0" src="/image/bg-map.png" alt="" />
=======
  <div class="relative flex w-full justify-center translate-y-[-100px] bg-white overflow-hidden">
    <img class="z-index-0" src="/image/bg-map.png" alt="背景地圖" />
    <img
      ref="planeRef"
      class="z-10 absolute bottom-[27%] left-[48%]"
      src="/image/plane.png"
      alt="飛機"
    />
>>>>>>> Stashed changes
  </div>
  <!-- 交通資訊 -->
  <div class="flex w-full h-[490px] justify-center items-center bg-[#f6f6f6]">
    <div class="w-full max-w-[1400px] h-[370px]">
      <div class="mb-[50px] w-full h-[70px]">
        <mainTitle>
          <template #title>交通資訊</template>
        </mainTitle>
      </div>
      <div class="flex justify-between w-full h-[300px]">
        <!-- 公車班次 -->
        <div class="flex-1 border-r border-gray-500">
          <div class="bus-list">
            <div class="flex flex-col justify-center">
              <trafficButton traffic-name="bus"></trafficButton>
              <busInformation traffic-name="bus1"></busInformation>
              <busInformation traffic-name="bus2"></busInformation>
              <busInformation traffic-name="bus3"></busInformation>
              <busInformation traffic-name="bus4"></busInformation>
            </div>
          </div>
        </div>
        <!-- 其他交通 -->
        <div class="flex-1">
          <div class="bus-list">
            <div class="flex flex-col justify-center">
              <trafficButton traffic-name="speedRail"></trafficButton>
              <trafficButton traffic-name="taxi"></trafficButton>
              <trafficButton traffic-name="car"></trafficButton>
              <trafficButton traffic-name="pin"></trafficButton>
            </div>
          </div>
        </div>
        <!-- 停車場資訊 -->
        <div class="flex-1">
          <div
            class="flex-col w-full h-full py-[20px] px-[60px] background-light-gray rounded-[20px] content-text-black"
          >
            <div class="flex items-center w-full h-[44px]">
              停車場<img
                class="flex max-w-[24px] w-full h-[24px] ml-2"
                src="/icon/page-right.png"
                alt="icon"
              />
            </div>
            <parkingLot traffic-name="state1"></parkingLot>
            <parkingLot traffic-name="state2"></parkingLot>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 搭機指南 -->
<<<<<<< Updated upstream
  <div class="relative flex justify-center items-end w-full h-[850px] bg-[#f6f6f6]">
    <div
      class="absolute w-full max-w-[495px] h-[495px] left-0 top-10 bg-[#471C87] bg-opacity-10 rounded-r-[50px]"
    ></div>
    <div
      class="flex justify-between w-full max-w-[1600px] h-[700px] py-[100px] px-[60px] rounded-t-[50px] bg-white"
    >
=======
  <div class="flex justify-center items-end w-full h-[850px] bg-[#f6f6f6]">
    <div
      class="relative flex justify-between w-full max-w-[1600px] h-[700px] py-[100px] px-[60px] rounded-t-[50px] bg-white"
    >
      <div
        class="absolute w-full max-w-[495px] h-[495px] left-[-200px] top-[-100px] bg-[#471C87] bg-opacity-10 rounded-r-[50px]"
      ></div>
>>>>>>> Stashed changes
      <div class="flex">
        <mainTitle>
          <template #title>搭機指南</template>
        </mainTitle>
      </div>
<<<<<<< Updated upstream
      <div class="relative w-full max-w-[1200px] h-[500px] overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 41}%)` }"
        >
          <guideCards v-for="(card, index) in cards" :key="index" :guideName="card" />
        </div>
        <div
          class="absolute top-0 -right-1 w-[87px] h-full bg-gradient-to-r from-transparent to-white"
        ></div>
        <button
          @click="prev"
          class="flex justify-center items-center absolute w-[84px] h-[84px] rounded-full top-[44%] left-1 bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)]"
        >
          <img class="w-[28px] h-[28px]" src="/icon/guide-left-arrow.png" alt="左按鈕" />
        </button>
        <button
          @click="next"
          class="flex justify-center items-center absolute w-[84px] h-[84px] rounded-full top-[44%] right-1 bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)]"
        >
          <img class="w-[28px] h-[28px]" src="/icon/guide-right-arrow.png" alt="右按鈕" />
        </button>
=======
      <!-- 搭機指南輪播 -->
      <div class="relative w-full max-w-[1200px] h-[500px] items-center">
        <announcementCarousel carousel-name="carousel1">
          <guideCards v-for="(card, index) in cards" :key="index" :guideName="card" />
        </announcementCarousel>
        <div
          class="absolute z-0 top-0 -right-1 w-[87px] h-full bg-gradient-to-r from-transparent to-white"
        ></div>
>>>>>>> Stashed changes
      </div>
    </div>
  </div>
  <!-- 旅客服務專區 -->
  <div class="relative flex justify-center w-full h-[1450px] py-[150px]">
    <div class="w-full max-w-[1600px] h-full bg-white z-10">
      <div class="flex-1 w-full h-[50%] z-10 px-[110px] py-[100px]">
        <div class="mb-[80px]">
          <mainTitle>
            <template #title>旅客服務專區</template>
          </mainTitle>
        </div>
        <div class="flex justify-between w-full content-text">
          <div class="flex-col flex w-full mr-[80px]">
            <service service-name="s1"></service>
            <service service-name="s2"></service>
            <service service-name="s3"></service>
          </div>
          <div class="w-full">
            <service service-name="s4"></service>
            <service service-name="s5"></service>
            <service service-name="s6"></service>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full h-[50%] z-10 px-[110px] py-[100px]">
        <div class="mb-[80px]">
          <mainTitle>
            <template #title>政府公告</template>
          </mainTitle>
        </div>
<<<<<<< Updated upstream
        <announcementCarousel>
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-1.png" alt="公告-1" />
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-2.png" alt="公告-2" />
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-3.png" alt="公告-3" />
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-4.png" alt="公告-4" />
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-5.png" alt="公告-5" />
          <img class="w-[450px] h-[250px] mr-4" src="/image/government-notice-6.png" alt="公告-6" />
        </announcementCarousel>
=======
        <!-- 旅客服務輪播 -->
        <div class="w-full max-w-[1400px] h-[250px]">
          <announcementCarousel carousel-name="carousel2">
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-1.png"
              alt="公告-1"
            />
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-2.png"
              alt="公告-2"
            />
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-3.png"
              alt="公告-3"
            />
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-4.png"
              alt="公告-4"
            />
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-5.png"
              alt="公告-5"
            />
            <img
              class="w-[450px] h-[250px] mr-4"
              src="/image/government-notice-6.png"
              alt="公告-6"
            />
          </announcementCarousel>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
    <!-- 背景圖 -->
    <img
      class="absolute w-full h-full top-0 left-0 object-cover object-center z-0"
      src="/image/service-area-background.png"
      alt="旅客服務底圖"
    />
  </div>
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

.marquee-content {
  display: flex;
  width: calc(100% * 3.5);
  animation: marquee 25s linear infinite;
  height: 100%;
<<<<<<< Updated upstream
  font-size: 24px;
=======
>>>>>>> Stashed changes
  font-weight: bold;
}
.transportation-guide {
  width: 100%;
  height: 490px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
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
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}
</style>
