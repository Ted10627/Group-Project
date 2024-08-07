<script setup>
import 'animate.css'
import { ref } from 'vue'
import mainTitle from '@/components/HomeView/MainTitle.vue'

const imageVisible = ref(false)

function showImage() {
  imageVisible.value = true
}
function hideImage() {
  imageVisible.value = false
}
</script>

<template>
  <div
    class="banner-service w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover"
  >
    <p class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">
      機場導覽圖
    </p>
  </div>
  <div class="px-5">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁>機場服務>機場導覽圖>B1</div>
      <mainTitle>
        <template #title>機場導覽圖</template>
      </mainTitle>
      <div class="flex w-full">
        <RouterLink
          :to="{ name: 'floor-plan-1f' }"
          class="flex-1 rounded-l-[40px] shadow-xl p-2 lg:p-5 white text-xs md:text-base lg:text-2xl text-[#471C87] text-center hover:bg-[#471C87] hover:text-[#FFFFFF]"
        >
          1F
        </RouterLink>
        <RouterLink
          :to="{ name: 'floor-plan-2f' }"
          class="flex-1 shadow-xl p-2 lg:p-5 white text-xs md:text-base lg:text-2xl text-[#471C87] text-center hover:bg-[#471C87] hover:text-[#FFFFFF]"
        >
          2F
        </RouterLink>
        <RouterLink
          :to="{ name: 'floor-plan-3f' }"
          class="flex-1 shadow-xl p-2 lg:p-5 white text-xs md:text-base lg:text-2xl text-[#471C87] text-center hover:bg-[#471C87] hover:text-[#FFFFFF]"
        >
          3F
        </RouterLink>
        <RouterLink
          :to="{ name: 'floor-plan-4f' }"
          class="flex-1 shadow-xl p-2 lg:p-5 white text-xs md:text-base lg:text-2xl text-[#471C87] text-center hover:bg-[#471C87] hover:text-[#FFFFFF]"
        >
          4F
        </RouterLink>
        <RouterLink
          :to="{ name: 'floor-plan-b1' }"
          class="flex-1 rounded-r-[40px] shadow-xl p-2 lg:p-5 air-purple text-xs md:text-base lg:text-2xl text-[#FFFFFF] text-center"
        >
          B1
        </RouterLink>
      </div>
      <img
        @click.prevent="showImage"
        href="#"
        src="/image/floor-plan-b1.png"
        alt="地下一樓機場導覽圖"
      />
      <div class="w-full text-sm lg:text-2xl">文章最後更新日期：2023-11-10</div>
    </div>
  </div>
  <div
    v-if="imageVisible"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    @click="hideImage"
  >
    <img
      src="/image/floor-plan-b1.png"
      alt="地下一樓機場導覽圖"
      class="fadeInUp w-screen mx-10"
      @click.stop
    />
  </div>
</template>

<style>
.banner-service {
  background-image: url(/public/image/banner-service.png);
}
.fadeInUp {
  animation: fadeInUp;
  animation-duration: 1s;
}
</style>
