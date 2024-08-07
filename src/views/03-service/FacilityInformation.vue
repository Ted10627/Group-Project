<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'

</script>

<template>
  <div class="w-full px-5">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁 > 機場服務 > 1F服務設施 > 金融服務</div>
      <mainTitle>
        <template #title>旅客諮詢櫃檯</template>
      </mainTitle>
      <!-- 卡片 -->
      <section class="w-full h-[1000px] lg:h-auto flex flex-col lg:flex-row gap-[50px] white rounded-[20px] p-10">
        <div class="basis-1/2 flex flex-col justify-between">
          <div>
            <div class="flex">
              <p class="content-text-black pb-3 border-b-2 text-air-purple font-bold mb-[30px]" style="border-color: #471c87;">服務項目</p>
              <div class="flex-initial"></div>
            </div>
            <p class="content-text-black mb-8">
              1. 航班諮詢服務<br>
              2. 各項設施指引諮詢<br>
              3. 代寄卡片、明信片<br>
              4. 接受旅客建議服務<br>
              5. 提供貼心物品
            </p>  
          </div>
          <div>
            <div class="flex items-center">
              <img class="w-6 h-6 mr-5" src="/icon/ion.timeclock.png" alt="">
              <p class="content-text-black">06:00~23:00(因應航班調整服務時間)</p>
            </div>
            <div class="flex items-center">
              <img class="w-6 h-6 mr-5" src="/icon/foot-map-pin.png" alt="">
              <!-- 點擊彈出導覽圖 -->
              <p class="content-text-black text-air-purple">航廈一樓</p>
            </div>  
          </div>
        </div>
        <div class="basis-1/2 bg-cover bg-center" style="background-image: url(/image/facility/information.jpg)">
        </div>
      </section>
      <section class="w-full h-[530px] flex flex-col gap-5">
        <div class="flex items-center justify-center">
          <p class="content-text-black mr-[10px]">旅客諮詢櫃檯位置圖</p>
          <img class="w-[30px] h-[30px]" src="/icon/park-down.png" alt="">
        </div>
        <div class="w-auto h-full bg-cover bg-no-repeat" style="background-image: url(/image/information.map.png)"></div>
      </section>
    </div>
  </div>
</template>

<style>
option{
  background-color:#ffffff;
  color: black;
}
.facility-select li{
  font-size: 24px;
  font-weight: 500;
  color:black;
  padding: 20px 40px;
}
.facility-select li:hover{
  color:#471c87;
  background-color: #ffffff;
}
</style>
