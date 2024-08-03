<script setup>
import { ref, onMounted } from 'vue'

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
onMounted(() => {
  getAPI().then(() => {
    category.value = 'international'
    nowType.value = 'Arrival'
    setDisplayType()
  })
})
</script>
