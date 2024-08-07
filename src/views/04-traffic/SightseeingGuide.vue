<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'
</script>

<template>
  <div class="banner-service w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover">
    <div class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">觀光指南</div>
  </div>
  <div class="px-5 w-full">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁>搭機指南>觀光指南</div>
      <div class="flex w-full">
        <button
          class="flex-1 rounded-l-[40px] shadow-xl p-2 lg:p-5 air-purple text-xl lg:text-3xl text-[#FFFFFF]"
        >
        中臺灣觀光自由行
        </button>
        <RouterLink
          to="#"
          class="flex-1 rounded-r-[40px] shadow-xl p-2 lg:p-5 white text-xl lg:text-3xl text-[#471C87] text-center"
        >
          <button>自行車休閒路線</button>
        </RouterLink>
      </div>
      <div class="w-full flex gap-3 flex-wrap text-sm lg:text-2xl justify-center">
        <a href="https://travel.taichung.gov.tw/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">台中市觀光旅遊</a>
        <a href="https://travel.nantou.gov.tw/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">南投旅遊網</a>
        <a href="https://tourism.chcg.gov.tw/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">彰化縣觀光旅遊</a>
        <a href="https://tour.yunlin.gov.tw/wt-front/Home/Index" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">雲林縣觀光旅遊</a>
        <a href="https://miaolitravel.net/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">苗栗縣觀光旅遊</a>
        <a href="https://tbocc.cyhg.gov.tw/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">嘉義縣觀光旅遊</a>
        <a href="https://travel.chiayi.gov.tw/" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">嘉義市觀光旅遊</a>
        <a href="https://www.taiwan.net.tw/m1.aspx?sNo=0000193&id=78" target="_blank" class="shadow-lg px-5 py-2 content-text-white air-orange hover:bg-gray-400 rounded-md">國家公園</a>
      </div>
      <div class="w-full p-10" style="background-color: white;">
        <img class="w-full m-auto" src="/public/image/sightseeingGuide.jpg" alt="觀光指南" />
      </div>
      <div class="w-full text-sm lg:text-2xl">文章最後更新日期：2024-06-14</div>
    </div>
  </div>
</template>

<style>
.banner-service{
  background-image: url(/public/image/banner-google-map.png);
}
</style>
