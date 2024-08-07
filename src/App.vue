<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import navButton from './components/AppVue/NavButton.vue'
import languageSelection from './components/HomeView/LanguageSelection.vue'
const goTopButton = ref(null)

const handleScroll = () => {
  if (window.scrollY > 750) {
    goTopButton.value.classList.remove('hidden')
    goTopButton.value.classList.add('scale-100')
  } else {
    goTopButton.value.classList.remove('scale-100')
    goTopButton.value.classList.add('scale-0')
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between items-center w-full">
    <header class="flex justify-center items-center bg-white w-full h-[165px]">
      <div
        ref="goTopButton"
        class="fixed z-30 bottom-4 right-4 hidden transform scale-0 transition-transform duration-300"
      >
        <button
          @click="scrollToTop"
          class="flex justify-center items-center w-[50px] h-[50px] bg-dark-gray text-white p-2 rounded-full shadow-lg hover:bg-[#471c87]"
        >
          <img src="/icon/go-top.png" alt="Go-top" />
        </button>
      </div>
      <div class="flex justify-between items-center bg-white border-gray-200 w-full h-[165px]">
        <RouterLink to="/" class="flex ml-[72px] items-center w-[390px] h-[145px]">
          <img src="/logo.png" alt="Flowbite Logo" />
        </RouterLink>
        <div class="mr-[74px]">
          <nav class="h-[40px] flex justify-end items-center">
            <ul
              class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-[20px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
            >
              <!-- 語言選擇 -->
              <languageSelection></languageSelection>
              <li class="relative">
                <input class="vice-nav-search pl-[20px]" placeholder="搜尋" type="text" />

                <button class="absolute vice-nav-search-button top-[2px] right-[2px]">
                  <img class="vice-nav-search-icon" src="/icon/tabler-search.png" alt="" />
                </button>
              </li>
              <li class="flex items-center">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  :to="{ name: 'about' }"
                >
                  <img src="/icon/nav-map-bold.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">機場地圖</div></RouterLink
                >
              </li>
              <li class="flex items-center">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <img src="/icon/nav-question-fill.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">常見問題</div></RouterLink
                >
              </li>
              <li class="flex items-center">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <div class="notes-bolded">網站導覽</div></RouterLink
                >
              </li>
            </ul>
          </nav>
          <nav class="flex justify-end items-center">
            <div>
              <!-- 漢堡 -->
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul
                  class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-[60px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
                >
                  <navButton buttonName="one"></navButton>
                  <navButton buttonName="two"></navButton>
                  <navButton buttonName="three"></navButton>
                  <navButton buttonName="four"></navButton>
                  <navButton buttonName="five"></navButton>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex-grow flex flex-col items-center w-full">
      <RouterView />
    </main>
    <footer class="w-full h-[915px]">
      <div class="flex w-full h-[745px] notes bg-white">
        <div
          class="flex flex-col justify-between w-full max-w-[560px] h-full rounded-tr-[250px] bg-[#471c87] bg-opacity-10 p-20 pr-0 notes-bolded"
        >
          <img class="flex max-w-[360px] max-h-[255px]" src="/foot-logo.png" alt="footerLogo" />
          <div class="flex flex-col">
            <div class="flex items-center mb-[10px]">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-map-pin.png" alt="footicon" />
              433014 臺中市沙鹿區中航路1段168號
            </div>
            <div class="flex items-center mb-[10px]">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-telephone.png" alt="footicon" />
              TEL：04-26155000
              <div class="pl-5">傳真：04-26155201</div>
            </div>
            <div class="flex items-center mb-[10px]">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-mail.png" alt="footicon" />
              電子信箱：director@tca.gov.tw
            </div>
            <div class="flex items-center mb-[10px]">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-people.png" alt="footicon" />
              服務時間 : 上午6時至下午11時
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center w-full h-full bg-white px-5">
          <div class="flex grid md:grid-cols-3 lg:grid-cols-5 w-full max-w-[1175px] h-[490px] justify-between items-start">
            <div class="flex-col">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-airplane.png"
                  alt="footicon"
                />航班資訊
              </div>
              <RouterLink :to="{ name: '' }" class="flex m-2">即時航班</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">定期航班</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">航空公司</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">國內線候補資訊</RouterLink>
            </div>
            <div class="flex-col">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-luggage.png"
                  alt="footicon"
                />搭機指南
              </div>
              <RouterLink :to="{ name: 'process-exit' }" class="flex m-2">搭機流程</RouterLink>
              <RouterLink :to="{ name: 'check-in' }" class="flex m-2">報到及通關</RouterLink>
              <RouterLink :to="{ name: 'security-notice' }" class="flex m-2">搭機安全須知</RouterLink>
              <RouterLink :to="{ name: 'concession-ticket' }" class="flex m-2">票價優惠說明</RouterLink>
              <RouterLink :to="{ name: 'relevant-regulation' }" class="flex m-2">注意事項</RouterLink>
              <RouterLink :to="{ name: 'tax-refund' }" class="flex m-2">外籍旅客購物退稅須知</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">來往兩岸港澳地區須知</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">國際線出入境虛擬導覽</RouterLink>
            </div>
            <div class="flex-col">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-airplane.png"
                  alt="footicon"
                />機場服務
              </div>
              <RouterLink :to="{ name: 'floor-plan-1f' }" class="flex m-2">機場導覽圖</RouterLink>
              <RouterLink :to="{ name: 'service-facilities' }" class="flex m-2">服務設施</RouterLink>
              <RouterLink :to="{ name: 'accessible-transportation' }" class="flex m-2">無障礙服務</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">嬰兒車借用</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">遺失物查詢</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">服務電話</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">旅客申訴</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">線上問卷與建議</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">線上申辦</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">表單下載</RouterLink>
            </div>
            <div class="flex-col">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-bus.png"
                  alt="footicon"
                />機場交通
              </div>
              <RouterLink :to="{ name: 'google-map' }" class="flex m-2">機場位置</RouterLink>
              <RouterLink :to="{ name: 'parking-lot' }" class="flex m-2">停車資訊</RouterLink>
              <RouterLink :to="{ name: 'taxi-service' }" class="flex m-2">計程車服務</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">租車服務</RouterLink>
              <RouterLink :to="{ name: 'bus-information' }" class="flex m-2">公車資訊</RouterLink>
              <RouterLink :to="{ name: 'sightseeing-guide' }" class="flex m-2">觀光指南</RouterLink>
            </div>
            <div class="flex-col">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-document.png"
                  alt="footicon"
                />行政專區
              </div>
              <RouterLink :to="{ name: '' }" class="flex m-2">機場簡介</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">機場景點與公共藝術</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">國際貨運資訊</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">開放資料專區</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">政府資訊公開</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">相關作業規定</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">飛安宣導專區</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">遙控無人機飛行指南</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">噪音補償</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">政風園地</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">人事園地</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">SMS安全管理系統</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">場內駕駛許可證題庫與教材</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[170px] bg-[#F6F6F6] px-20 notes">
        <div class="flex-col flex justify-center w-full h-full">
          <div class="flex w-full">
            <a href="" class="flex items-center pr-[10px] h-[15px] border-r-[1px] border-black">
              網站導覽
            </a>
            <a href="" class="flex items-center pr-[10px] h-[15px] border-r-[1px] border-black">
              網站資料開放宣告
            </a>
            <a href="" class="flex items-center pr-[10px] h-[15px] border-r-[1px] border-black">
              資訊安全政策
            </a>
            <a href="" class="flex items-center pr-[10px] h-[15px]">隱私權保護政策</a>
          </div>
          <div class="flex justify-between w-full">
            <div class="p-[10px] pl-0">
              本網適用Internet Explorer 11.0 以上版本 最佳瀏覽解析度：1920 x 1080
            </div>
            <div class="p-[10px] pr-0">© 2024臺中航空站 版權所有</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.group:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
}

.nav-button {
  display: flex;
  height: 100px;
}
.vice-nav-icon {
  width: 22px;
  height: 22px;
  margin-right: 6px;
}
.vice-nav-search {
  display: flex;
  align-items: center;
  width: 200px;
  height: 38px;
  border-radius: 40px;
  background-color: #dedede;
  font-size: 18px;
}
.vice-nav-search-icon {
  width: 20px;
  height: 20px;
  background-color: #343557;
}
.vice-nav-search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  background-color: #343557;
  border-radius: 40px;
}
.dropdown-container {
  position: relative;
}
</style>
