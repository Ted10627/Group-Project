<script setup>
import { ref } from 'vue'
import {} from 'vue-router'

const props = defineProps({
  downName: {
    type: String,
    default: 'default'
  }
})

const navDown = ref({
  down1: {
    name: '航班資訊',
    icon: '/icon/nav-airplane-takeoff.png',
    img: '/image/nav-img1.png'
  },
  down2: {
    name: '搭機指南',
    icon: '/icon/nav-luggage.png',
    img: '/image/nav-img2.png'
  },
  down3: {
    name: '機場服務',
    icon: '/icon/nav-fluent_building-people-24-filled.png',
    img: '/image/nav-img3.png'
  },
  down4: {
    name: '機場交通',
    icon: '/icon/nav_bus.png',
    img: '/image/nav-img4.png'
  },
  down5: {
    name: '行政專區',
    icon: '/icon/nav_document-solid.png',
    img: '/image/nav-img5.png'
  },
  default: {
    name: '',
    icon: '',
    img: ''
  }
})

const content = ref({
  down1_1: [
    { text: '即時航班', href: '/InternationalFlights' },
    { text: '定期航班', href: '/InternationalScheduled' },
    { text: '航空公司', href: '/airline' }
  ],
  down1_2: [
    { text: '即時航班', href: '/DomesticFlights' },
    { text: '定期航班', href: '/DomesticScheduled' },
    { text: '航空公司', href: '/airline' },
    { text: '國內線候補資訊', href: '/Flight-standby-information' }
  ],
  down2_1: [
    { text: '搭機流程', href: '/flight-process/exit' },
    { text: '報到及通關', href: '/check-in' },
    { text: '搭機安全須知', href: '/security-notice' },
    { text: '票價優惠說明', href: '/concession-ticket' }
  ],
  down2_2: [
    { text: '注意事項', href: '/relevant-regulation' },
    { text: '外籍旅客購物退稅須知', href: '/tax-refund' },
    { text: '來往兩岸港澳地區須知', href: '' },
    { text: '國際線出入境虛擬導覽', href: '' }
  ],
  down3_1: [
    { text: '機場導覽圖', href: '/floor-plan/1f' },
    { text: '服務設施', href: '/service-facilities' },
    { text: '無障礙服務', href: '/accessible-service/transportation' },
    { text: '嬰兒車借用', href: '/baby-stroller' },
    { text: '遺失物查詢', href: '/lost-property' }
  ],
  down3_2: [
    { text: '服務電話', href: '' },
    { text: '旅客申訴專區', href: '/passenger-complaints' },
    { text: '線上問卷與建議', href: '' },
    { text: '線上申辦', href: '' },
    { text: '表單下載', href: '' }
  ],
  down4_1: [
    { text: '機場位置', href: '/google-map' },
    { text: '停車資訊', href: '/parking-lot' },
    { text: '計程車服務', href: '/taxi-service' }
  ],
  down4_2: [
    { text: '租車服務', href: '/car-rental-service' },
    { text: '公車資訊', href: '/bus-information' },
    { text: '觀光指南', href: '/sightseeing-guide' }
  ],
  down5_1: [
    { text: '機場簡介', href: '' },
    { text: '機場景點與公共藝術', href: '' },
    { text: '國際貨運資訊', href: '' },
    { text: '開放資料專區', href: '' },
    { text: '政府資訊公開', href: '' },
    { text: '相關作業規定', href: '' }
  ],
  down5_2: [
    { text: '飛安宣導專區', href: '' },
    { text: '遙控無人機飛行指南', href: '' },
    { text: '噪音補償', href: '' },
    { text: '人事園地', href: '' },
    { text: 'SMS安全管理系統', href: '' },
    { text: '場內駕駛許可證題庫與教材', href: '' }
  ],
  default: []
})
</script>

<template>
  <div
    class="flex-col w-full h-[416px] px-[100px] py-[50px] bg-light-gray rounded-b-[80px] shadow-lg"
  >
    <div class="flex w-full items-center h-[36px] mb-[30px]">
      <img :src="navDown[props.downName].icon" class="w-[36px] h-[36px] mr-3" alt="icon" />
      <div class="headline">{{ navDown[props.downName].name }}</div>
    </div>
    <div class="flex w-full notes">
      <img
        :src="navDown[props.downName].img"
        class="flex w-[400px] h-[180px] 2xl:w-[555px] 2xl:h-[250px] mr-[73px]"
        alt="img"
      />
      <div class="flex-1 h-full mr-[24px]">
        <div
          v-if="props.downName === 'down1'"
          class="w-full content-text text-air-orange border-b-[1px] border-[#F59801] mb-5"
        >
          國際及兩岸航班
        </div>
        <div v-if="content[`${props.downName}_1`]">
          <router-link
            v-for="(item, index) in content[`${props.downName}_1`]"
            :key="index"
            :to="item.href"
            class="flex items-center py-[5px] downlist-button"
          >
            <img class="flex w-[20px] h-[20px]" src="/icon/black-park-right.png" alt="arrow" />
            <div class="flex w-full">{{ item.text }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-1 h-full">
        <div
          v-if="props.downName === 'down1'"
          class="w-full content-text text-air-orange border-b-[1px] border-[#F59801] mb-5"
        >
          國內航班
        </div>
        <div v-if="content[`${props.downName}_2`]">
          <router-link
            v-for="(item, index) in content[`${props.downName}_2`]"
            :key="index"
            :to="item.href"
            class="flex items-center py-[5px] downlist-button"
          >
            <img class="flex w-[20px] h-[20px]" src="/icon/black-park-right.png" alt="arrow" />
            <div class="flex w-full">{{ item.text }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.downlist-button:hover {
  background-color: #e1e1e1;
}
</style>
