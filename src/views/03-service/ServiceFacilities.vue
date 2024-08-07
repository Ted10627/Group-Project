<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'

const facility = ({
  f1: {
    name: '旅客諮詢櫃檯',
    time: '服務時間 06:00~23:00',
    tel: '',
    icon: '/icon/wifi.png',
    location:'航廈1樓',
    to: '/'
  },
  default: {
    name: '',
    time: '',
    tel: '',
    icon: '/public/icon/faciliry-card-icon.png',
    location:'',
    to: '/'
  }
})

console.log(facility.f1.name)
console.log(facility)

</script>

<template>
  <div class="banner-service w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover">
    <div class="w-[1260px] px-5 mx-auto headline-bolded-white">服務設施</div>
  </div>
  <div class="w-full px-5">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁 > 機場服務 > 1F服務設施</div>
      <mainTitle>
        <template #title >1F服務設施</template>
      </mainTitle>
      <section class="w-full flex flex-col lg:flex-row gap-[50px]">
        <div class="w-full lg:w-[260px] flex flex-row lg:flex-col gap-2 sm:gap-5 lg:gap-[50px]">
          <select name="floor" class="w-full flex-1 px-4 py-2 lg:px-10 lg:py-5 air-purple content-text-white">
            <option value="floor-b1">機場 B1</option>
            <option value="floor-1f" selected>機場 1F</option>
            <option value="floor-2f">機場 2F</option>
            <option value="floor-3f">機場 3F</option>
            <option value="floor-4f">機場 4F</option>
          </select>
          <select name="facility" class="facility-select-phone w-full flex-1 px-4 py-2 lg:px-10 lg:py-5 background-light-gray content-text-black">
            <option value="facility-all" selected>全部</option>
            <option value="facility-1">旅客諮詢櫃檯</option>
            <option value="facility-2">金融服務</option>
            <option value="facility-3">保險服務</option>
            <option value="facility-4">電信網路</option>
            <option value="facility-5">租車服務</option>
            <option value="facility-6">行李打包服務</option>
            <option value="facility-7">投幣式儲物櫃</option>
            <option value="facility-8">購物及餐廳</option>
            <option value="facility-8">旅遊服務中心</option>
            <option value="facility-8">護理服務</option>
            <option value="facility-8">充電服務</option>
            <option value="facility-8">其他服務</option>
          </select>
          <ul class="facility-select background-light-gray rounded-[20px]">
            <li class="content-text-black font-medium">全部</li>
            <li class="content-text-black font-medium">旅客諮詢櫃檯</li>
            <li class="content-text-black font-medium">金融服務</li>
            <li class="content-text-black font-medium">保險服務</li>
            <li class="content-text-black font-medium">電信網路</li>
            <li class="content-text-black font-medium">租車服務</li>
            <li class="content-text-black font-medium">行李打包服務</li>
            <li class="content-text-black font-medium">投幣式儲物櫃</li>
            <li class="content-text-black font-medium">購物及餐廳</li>
            <li class="content-text-black font-medium">旅遊服務中心</li>
            <li class="content-text-black font-medium">護理服務</li>
            <li class="content-text-black font-medium">充電服務</li>
            <li class="content-text-black font-medium">其他服務</li>
          </ul>
        </div>
        <!-- 卡片區 -->
        <div class="grow flex flex-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <!-- 設施卡片 -->
          <RouterLink :to="{ name: 'facility-information' }">
            <div class="grow h-[400px] white rounded-[20px] p-5">
              <div class="h-[200px] w-full bg-cover bg-top" style="background-image: url(/image/facility/information.jpg)"></div>
              <div class="h-[160px] pt-5 flex flex-col content-between">
                <div class="content-text-black font-medium">旅客諮詢櫃檯</div>
                <div class="notes">服務時間 06:00~23:00</div>
                <div class="mt-auto flex justify-self-end">
                  <div class="notes">位置</div>
                  <div class="notes text-air-purple pl-5 flex">
                    <img class="w-5 h-5 my-auto pr-1" src="/public/icon/faciliry-card-icon.png" alt="">
                    航廈1樓
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.banner-service{
  background-image: url(/public/image/banner-service.png);
}
option{
  background-color:#ffffff;
  color: black;
}
.facility-select li{
  padding: 20px 40px;
}
.facility-select li:hover{
  color:#471c87;
  background-color: #ffffff;
}
.facility-select-phone{
    display: none;
  }
@media (max-width: 1024px) {
  .facility-select-phone{
    display: block;
  }
  .facility-select{
    display: none;
  }
}
</style>
