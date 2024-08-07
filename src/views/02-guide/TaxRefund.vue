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
    class="banner-guide w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover"
  >
    <p class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">
      外國旅客購物退稅須知
    </p>
  </div>
  <div class="px-5">
    <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
      <div class="w-full text-sm lg:text-2xl">首頁>搭機指南>外國旅客購物退稅須知</div>
      <mainTitle>
        <template #title>外國旅客購物退稅須知</template>
      </mainTitle>
      <div class="flex flex-col gap-5 lg:gap-10 white p-5 lg:p-10 rounded-[20px]">
        <img src="/image/tax-refund.png" alt="退稅服務櫃台" />
        <div>
          <p class="text-xl lg:text-3xl font-bold text-[#471C87]">> 申請購物退稅條件</p>
          <ol class="list-decimal px-3 lg:px-5 text-sm lg:text-2xl">
            <li>持有「非中華民國國籍之護照、無戶籍之中華民國護照及入出境證」者。</li>
            <li>
              至台灣向經核准貼有核准銷售特定貨物退稅標誌(TRS)之商店，當日同一家購買可退稅貨品達新臺幣2000元以上，並在30天內將隨行貨物攜帶出境者。
            </li>
          </ol>
        </div>
        <div class="flex flex-col gap-3">
          <p class="text-xl lg:text-3xl font-bold text-[#471C87]">> 申請退稅地點</p>
          <div class="flex">
            <img class="w-max mr-2" src="/icon/ph_map-pin-fill.png" alt="" />
            <a @click.prevent="showImage" href="#" class="text-sm lg:text-2xl text-blue-500"
              >國際航廈1樓之海關「外籍旅客退稅服務台」</a
            >
          </div>
          <div class="flex">
            <img class="w-max mr-2" src="/icon/bi_telephone-fill.png" alt="" />
            <p class="text-sm lg:text-2xl">(04) 26155019 / (04) 26155022</p>
          </div>
        </div>
        <div>
          <p class="text-xl lg:text-3xl font-bold text-[#471C87]">> 申請退稅程序</p>
          <ol class="list-decimal px-3 lg:px-5 text-sm lg:text-2xl">
            <li>
              出示退稅明細申請表、護照、攜帶出境之退稅範圍內貨物及統一發票收執聯正本，供海關人員查核。
            </li>
            <li>海關審核後，核發「外籍旅客購買特定貨物退稅明細核定單」。</li>
            <li>
              持憑海關核發之「外籍旅客購買特定貨物退稅明細核定單」，向設置於出境機場或港口之指定銀行申領退稅款。
            </li>
          </ol>
          <p class="text-sm lg:text-2xl pt-5">
            外籍旅客購物退稅資訊請詳「外籍旅客e化退稅服務網」。
          </p>
        </div>
      </div>
      <div class="w-full text-sm lg:text-2xl">文章最後更新日期：2024-04-26</div>
    </div>
  </div>
  <div
    v-if="imageVisible"
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    @click="hideImage"
  >
    <img
      src="/image/tax-refund-map.png"
      alt="申請退稅地點位置圖"
      class="fadeInUp max-w-full max-h-full"
      @click.stop
    />
  </div>
</template>

<style>
.banner-guide {
  background-image: url(/public/image/banner-guide.png);
}
.fadeInUp {
  animation: fadeInUp;
  animation-duration: 1s;
}
</style>
