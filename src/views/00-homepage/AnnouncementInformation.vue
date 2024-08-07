<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'
</script>

<template>
    <div class="banner-service w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover">
        <div class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">計程車服務</div>
    </div>
    <div class="max-w-[1260px] w-full px-5">
      <div class="w-full flex flex-col gap-5 m-auto py-10">
        <div class="w-full text-sm lg:text-2xl">首頁>公告資訊</div>
      </div>
      <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
        <div class="flex w-full">
            <button class="flex-1 rounded-l-[40px] shadow-xl p-2 lg:p-5 air-purple text-xl lg:text-3xl text-[#FFFFFF]">最新消息</button>
            <RouterLink to="#" class="flex-1 rounded-r-[40px] shadow-xl p-2 lg:p-5 white text-xl lg:text-3xl text-[#471C87] text-center">
            <button>政策宣導</button>
            </RouterLink>
        </div>
        <mainTitle>
            <template #title>最新消息</template>
        </mainTitle>
    </div>
    </div>
  </template>

<style>
.banner-service{
  background-image: url(/public/image/banner-flight.png);
}
</style>