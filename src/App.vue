<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navButton from './components/AppVue/NavButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between items-center w-full">
    <header class="flex justify-center items-center z-10 bg-white w-full h-[165px]">
      <div
        class="flex justify-between items-end text-[30px] bg-white border-gray-200 w-full h-[165px]"
      >
        <RouterLink to="/" class="flex items-center w-[390px] h-[145px]">
          <img src="/logo.png" alt="Flowbite Logo" />
        </RouterLink>
        <div>
          <nav class="h-[40px] flex justify-end items-center">
            <ul
              class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-[20px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
            >
              <li class="vice-nav-button">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <img src="/icon/nav-earth-48-filled.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">Language</div></RouterLink
                >
              </li>
              <li class="relative">
                <input class="vice-nav-search pl-[20px]" placeholder="搜尋" type="text" />

                <button class="absolute vice-nav-search-button top-[2px] right-[2px]">
                  <img class="vice-nav-search-icon" src="/icon/tabler-search.png" alt="" />
                </button>
              </li>
              <li class="vice-nav-button">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <img src="/icon/nav-map-bold.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">機場地圖</div></RouterLink
                >
              </li>
              <li class="vice-nav-button">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <img src="/icon/nav-question-fill.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">常見問題</div></RouterLink
                >
              </li>
              <li class="vice-nav-button">
                <RouterLink
                  class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                  to="/about"
                >
                  <img src="/icon/nav-accessibility.png" class="vice-nav-icon" alt="" />
                  <div class="notes-bolded">無障礙導覽</div></RouterLink
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
    <main class="flex-grow flex flex-col items-center">
      <RouterView />
    </main>
    <footer class="bg-gray-200 p-4 text-center w-full"></footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  background-color: white;
}
.group:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
}
.nav-icon {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}
.nav-button {
  display: flex;
  justify-content: end;
  height: 100px;
}
.vice-nav-button {
  display: flex;
  justify-content: end;
  height: 35px;
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
</style>
