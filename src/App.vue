<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import navButton from './components/AppVue/NavButton.vue'
import languageSelection from './components/AppVue/LanguageSelection.vue'
import HamButton from './components/AppVue/HamButton.vue'

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
    <header class="flex justify-center items-center bg-white w-full h-16 md:h-[100px] lg:h-[165px]">
      <div
        ref="goTopButton"
        class="fixed z-30 bottom-4 right-4 hidden transform scale-0 transition-transform duration-300"
      >
        <button
          @click="scrollToTop"
          class="flex justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-dark-gray text-white p-2 rounded-full shadow-lg hover:bg-[#471c87]"
        >
          <img src="/icon/go-top.png" alt="Go-top" />
        </button>
      </div>
      <div
        class="fixed z-30 flex justify-between items-center bg-white border-gray-200 w-screen h-16 md:h-[100px] lg:h-[165px] lg:p-4"
      >
        <div class="flex justify-between items-center w-full max-w-[1736px] mx-auto">
          <RouterLink
            to="/"
            class="flex items-center w-[170px] md:w-[240px] xl:w-[300px] 2xl:w-[390px] h-[145px] ml-4 object-cover"
          >
            <img src="/logo.png" alt="Flowbite Logo" />
          </RouterLink>
          <div class="lg:mr-2 h-full items-center lg:pt-[30px]">
            <nav class="h-[40px] justify-end items-center hidden lg:block">
              <ul
                class="flex flex-col justify-end font-medium mr-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-[20px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
              >
                <!-- 語言選擇 -->
                <languageSelection></languageSelection>
                <li class="relative">
                  <input class="vice-nav-search pl-[20px]" placeholder="搜尋" type="text" />

                  <button class="absolute vice-nav-search-button top-[2px] right-[2px]">
                    <img class="vice-nav-search-icon" src="/icon/tabler-search.png" alt="" />
                  </button>
                </li>
                <li
                  class="flex items-center vice-nav-button hover:border-b-2 hover:border-[#343557]"
                >
                  <RouterLink
                    class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    :to="{ name: 'announcement-information' }"
                  >
                    <img src="/icon/nav-map-bold.png" class="vice-nav-icon" alt="" />
                    <div class="notes-bolded">公告資訊</div></RouterLink
                  >
                </li>
                <li
                  class="flex items-center vice-nav-button hover:border-b-2 hover:border-[#343557]"
                >
                  <RouterLink
                    class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    to="/FAQ"
                  >
                    <img src="/icon/nav-question-fill.png" class="vice-nav-icon" alt="" />
                    <div class="notes-bolded">常見問題</div></RouterLink
                  >
                </li>
                <li
                  class="flex items-center vice-nav-button hover:border-b-2 hover:border-[#343557]"
                >
                  <RouterLink
                    class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    to="sitemap"
                  >
                    <div class="notes-bolded">網站導覽</div></RouterLink
                  >
                </li>
              </ul>
            </nav>
            <nav class="flex justify-end items-center">
              <div class="w-16 md:w-[100px] lg:w-full lg:h-full h-16 md:h-[100px]">
                <HamButton></HamButton>
                <div class="hidden w-full lg:block lg:w-auto text-nowrap" id="navbar-dropdown">
                  <ul
                    class="flex flex-col justify-between font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg space-x-4 2xl:space-x-9 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
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
      </div>
    </header>
    <main class="flex-grow flex flex-col items-center w-full">
      <RouterView />
    </main>
    <footer class="w-full max-h-[915px]">
      <div class="flex flex-col 2xl:flex-row w-full 2xl:h-[745px] h-full notes bg-white">
        <div
          class="flex flex-wrap md:flex-nowrap gap-5 xl:gap-10 2xl:flex-col 2xl:justify-between items-end 2xl:items-start w-full 2xl:max-w-[500px] h-full rounded-br-[10rem] 2xl:rounded-tr-[250px] 2xl:rounded-br-[0px] bg-[#471c87] bg-opacity-10 px-5 lg:px-10 py-10 2xl:py-20 notes-bolded"
        >
          <img
            class="logo-big flex max-w-[22.5rem] max-h-[255px]"
            src="/foot-logo.png"
            alt="footerLogo"
          />
          <img
            class="logo-small flex w-full max-w-[22.5rem] max-h-[255px] object-cover"
            src="/logo.png"
            alt="footerLogo"
          />
          <div class="flex flex-col">
            <a
              href="https://maps.app.goo.gl/NYHYkNNBQBYUXAmh8"
              class="flex items-center mb-[10px] text-nowrap"
              target="_blank"
            >
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-map-pin.png" alt="footicon" />
              433014 臺中市沙鹿區中航路1段168號
            </a>
            <div class="flex flex-wrap items-center mb-[10px]">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/foot-telephone.png" alt="footicon" />
              TEL：04-26155000
              <div class="pl-6">傳真：04-26155201</div>
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
        <div class="footer-item flex justify-center w-full h-full bg-white px-5 py-20">
          <div class="flex w-full h-[490px] justify-around items-start">
            <div class="flex-col min-w-[160px]">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-airplane.png"
                  alt="footicon"
                />航班資訊
              </div>
              <RouterLink :to="{ name: '' }" class="flex m-2">即時航班</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">定期航班</RouterLink>
              <RouterLink :to="{ name: 'airline' }" class="flex m-2">航空公司</RouterLink>
              <RouterLink :to="{ name: 'Flight-standby-information' }" class="flex m-2"
                >國內線候補資訊</RouterLink
              >
            </div>
            <div class="flex-col min-w-[216px]">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-luggage.png"
                  alt="footicon"
                />搭機指南
              </div>
              <RouterLink :to="{ name: 'process-exit' }" class="flex m-2">搭機流程</RouterLink>
              <RouterLink :to="{ name: 'check-in' }" class="flex m-2">報到及通關</RouterLink>
              <RouterLink :to="{ name: 'security-notice' }" class="flex m-2"
                >搭機安全須知</RouterLink
              >
              <RouterLink :to="{ name: 'concession-ticket' }" class="flex m-2"
                >票價優惠說明</RouterLink
              >
              <RouterLink :to="{ name: 'relevant-regulation' }" class="flex m-2"
                >注意事項</RouterLink
              >
              <RouterLink :to="{ name: 'tax-refund' }" class="flex m-2"
                >外籍旅客購物退稅須知</RouterLink
              >
              <RouterLink :to="{ name: '' }" class="flex m-2">來往兩岸港澳地區須知</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">國際線出入境虛擬導覽</RouterLink>
            </div>
            <div class="flex-col min-w-[160px]">
              <div class="flex items-center content-text text-air-purple mb-[10px]">
                <img
                  class="w-[30px] h-[30px] mr-1"
                  src="/icon/foot-airplane.png"
                  alt="footicon"
                />機場服務
              </div>
              <RouterLink :to="{ name: 'floor-plan-1f' }" class="flex m-2">機場導覽圖</RouterLink>
              <RouterLink :to="{ name: 'service-facilities' }" class="flex m-2"
                >服務設施</RouterLink
              >
              <RouterLink :to="{ name: 'accessible-transportation' }" class="flex m-2"
                >無障礙服務</RouterLink
              >
              <RouterLink :to="{ name: 'baby-stroller' }" class="flex m-2">嬰兒車借用</RouterLink>
              <RouterLink :to="{ name: 'lost-property' }" class="flex m-2">遺失物查詢</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">服務電話</RouterLink>
              <RouterLink :to="{ name: 'passenger-complaints' }" class="flex m-2"
                >旅客申訴</RouterLink
              >
              <RouterLink :to="{ name: '' }" class="flex m-2">線上問卷與建議</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">線上申辦</RouterLink>
              <RouterLink :to="{ name: '' }" class="flex m-2">表單下載</RouterLink>
            </div>
            <div class="flex-col min-w-[150px]">
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
              <RouterLink :to="{ name: 'car-rental-service' }" class="flex m-2"
                >租車服務</RouterLink
              >
              <RouterLink :to="{ name: 'bus-information' }" class="flex m-2">公車資訊</RouterLink>
              <RouterLink :to="{ name: 'sightseeing-guide' }" class="flex m-2">觀光指南</RouterLink>
            </div>
            <div class="flex-col min-w-[256px]">
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
      <div class="w-full min-h-[160px] bg-[#F6F6F6] notes content-center">
        <div class="flex-col flex justify-center w-full h-full">
          <div
            class="footer-end flex flex-col lg:flex-row gap-6 lg:gap-0 w-full bg-[#FFFFFF] lg:bg-[#F6F6F6] py-10 px-2 sm:px-4 lg:p-10 lg:py-0"
          >
            <a href="" class="flex items-center pr-5 h-4 lg:border-r-[1px] lg:border-black">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/park-right.png" alt="footicon" />
              網站導覽
            </a>
            <a href="" class="flex items-center lg:px-5 h-4 lg:border-r-[1px] lg:border-black">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/park-right.png" alt="footicon" />
              網站資料開放宣告
            </a>
            <a href="" class="flex items-center lg:px-5 h-4 lg:border-r-[1px] lg:border-black">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/park-right.png" alt="footicon" />
              資訊安全政策
            </a>
            <a href="" class="flex items-center lg:px-5 h-4">
              <img class="w-[20px] h-[20px] mr-2" src="/icon/park-right.png" alt="footicon" />
              隱私權保護政策</a
            >
          </div>
          <div class="flex flex-col lg:flex-row justify-between w-full px-2 sm:px-4 lg:px-10">
            <div class="py-[10px] flex flex-col sm:flex-row">
              <div class="pr-2">本網適用Internet Explorer 11.0以上版本</div>
              <div>最佳瀏覽解析度：1920 x 1080</div>
            </div>
            <div class="py-[10px]">© 2024臺中航空站 版權所有 v8.8</div>
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

.vice-nav-button:hover img {
  margin-bottom: -2px;
}
.vice-nav-button:hover div {
  margin-bottom: -2px;
}
.footer-end img {
  display: none;
}
.logo-small {
  display: none;
}
.footer-item a:hover {
  color: #f59801;
  font-weight: 500;
}
.footer-end a:hover {
  color: #f59801;
  font-weight: 500;
}
@media (max-width: 1024px) {
  .footer-item {
    display: none;
  }
  .footer-end img {
    display: block;
  }
}
@media (max-width: 768px) {
  .logo-big {
    display: none;
  }
  .logo-small {
    display: block;
  }
}
</style>
