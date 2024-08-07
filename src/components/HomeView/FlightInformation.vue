<script setup>
<<<<<<< Updated upstream
import { ref, onMounted } from 'vue'
=======
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { airData } from '@/stores/AirDate.js'

const getAirData = airData()

// 航空公司
const airname = ref(getAirData.allAirname)
// 國內航線
const domestic = ref(getAirData.allDomestic)
// 國際航線
const foreign = ref(getAirData.allForeign)
>>>>>>> Stashed changes

const AirAPI =
  'https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/RMQ?%24top=30&%24format=JSON'
// 所有航班資料陣列
const flight = ref([])
<<<<<<< Updated upstream
const displayType = ref(['Arrival', 'internationalArrival', 'crossStraitArrival'])
=======
// 顯示更多
const showMoreCount = ref(5)

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

// 用來放按鈕過濾後資料的陣列
const filterFlights = ref([])
// 按鈕功能類別/類型
const category = ref('')
const nowType = ref('')
// 顯示類型
const displayType = ref(['Arrival', 'internationalArrival', 'crossStraitArrival'])

// 國際與國內
const setCategory = (set) => {
  category.value = set
  showMoreCount.value = 5
  setDisplayType()
}

// 起飛與抵達
const setType = (set) => {
  nowType.value = set
  showMoreCount.value = 5
  setDisplayType()
}

// 按鈕回傳分類設定
const setDisplayType = () => {
  // 是否為國際
  if (category.value === 'international') {
    // 是否為抵達
    if (nowType.value === 'Arrival') {
      displayType.value = ['Arrival']
      filterFlights.value = TimeFilter(
        flight.value.arrivals.filter(
          (flight) =>
            flight.ArrivalAirportID === 'RMQ' &&
            foreign.value.some((place) => place.id === flight.DepartureAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMoreCount.value)
    } else if (nowType.value === 'Departure') {
      displayType.value = ['Departure']
      filterFlights.value = TimeFilter(
        flight.value.departures.filter(
          (flight) =>
            flight.DepartureAirportID === 'RMQ' &&
            foreign.value.some((place) => place.id === flight.ArrivalAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMoreCount.value)
    }
  } else if (category.value === 'domestic') {
    if (nowType.value === 'Arrival') {
      displayType.value = ['Arrival']
      filterFlights.value = TimeFilter(
        flight.value.arrivals.filter(
          (flight) =>
            flight.ArrivalAirportID === 'RMQ' &&
            domestic.value.some((place) => place.id === flight.DepartureAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMoreCount.value)
    } else if (nowType.value === 'Departure') {
      displayType.value = ['Departure']
      filterFlights.value = TimeFilter(
        flight.value.departures.filter(
          (flight) =>
            flight.DepartureAirportID === 'RMQ' &&
            domestic.value.some((place) => place.id === flight.ArrivalAirportID) &&
            (!searchQuery.value || flight.FlightNumber.includes(searchQuery.value.toUpperCase()))
        )
      ).slice(0, showMoreCount.value)
    }
  }
}

// 時間過濾航班
const TimeFilter = (flights) => {
  const NowTime = new Date()
  return flights.filter((flightItem) => {
    const FlyTime = new Date(flightItem.ScheduleDepartureTime || flightItem.ScheduleArrivalTime)
    return FlyTime > NowTime
  })
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

// 這是時間格式設定
const formatTime = (time) => {
  return time ? time.substring(11, 16) : '---'
}

// 搜尋
const searchQuery = ref('')
watch(
  searchQuery,
  () => {
    setDisplayType()
  },
  { immediate: true }
)

// 按下搜尋按鈕
const searchFlights = () => {
  setType(nowType.value)
  setDisplayType()
}

// 初始設置
>>>>>>> Stashed changes
onMounted(() => {
  getAPI().then(() => {
    category.value = 'international'
    nowType.value = 'Arrival'
    setDisplayType()
  })
})
</script>
<<<<<<< Updated upstream
=======
<template>
  <!-- 航空資訊 -->
  <div class="absolute w-full max-w-[1080px] top-[70%] left-[22%] text-2xl shadow-md z-index-2">
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
              nowType === 'Arrival' ? '/icon/airplane-landing.png' : '/icon/airplane-landing-ch.png'
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
      <div class="relative p-5 airportAuxiliaryColor w-[500px] h-[110px] flex items-center border">
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
            <td colspan="5" class="text-center subtitle py-4 bg-slate-200">查無資料</td>
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
                <span class="ml-2">{{ flightItem.AirlineID }}-{{ flightItem.FlightNumber }}</span>
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
</template>
>>>>>>> Stashed changes
