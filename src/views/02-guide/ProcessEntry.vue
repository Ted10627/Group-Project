<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'
</script>

<template>
  <div
    class="banner-guide w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover"
  >
    <p class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">
      國際線搭機流程
    </p>
  </div>
  <div class="px-5">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁>搭機指南>國際線搭機流程>入境流程</div>
      <div class="flex w-full">
        <RouterLink
          :to="{ name: 'process-exit' }"
          class="flex-1 rounded-l-[40px] shadow-xl p-2 lg:p-5 white text-xl lg:text-3xl text-[#471C87] text-center"
        >
          <button>出境</button>
        </RouterLink>
        <button
          class="flex-1 rounded-r-[40px] shadow-xl p-2 lg:p-5 air-purple text-xl lg:text-3xl text-[#FFFFFF]"
        >
          入境
        </button>
      </div>
      <mainTitle>
        <template #title>國際線入境流程</template>
      </mainTitle>
      <div class="w-full flex flex-col lg:flex-row white rounded-[20px]">
        <div class="order-2 lg:order-1 flex-1 m-auto">
          <img src="/image/process-entry.jpg" alt="搭機流程說明圖(出境)" />
        </div>
        <div class="order-1 lg:order-2 flex-1 flex flex-col justify-center p-10 gap-10">
          <div>
            <p class="text-xl lg:text-3xl text-[#471C87]">出境必備證件 :</p>
            <p class="text-sm lg:text-2xl">
              1.護照。 2.入境旅客申報單。3.外籍旅客：簽證、機票、入境登記表。
            </p>
          </div>
          <div>
            <a href="" class="text-xl lg:text-2xl">國際線入境虛擬導覽></a>
          </div>
        </div>
      </div>
      <div class="w-full text-sm lg:text-2xl">文章最後更新日期：2024-06-14</div>
    </div>
  </div>
</template>

<style>
.banner-guide {
  background-image: url(/public/image/banner-guide.png);
}
</style>
