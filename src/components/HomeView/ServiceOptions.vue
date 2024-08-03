<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  serviceName: {
    //指定props資料是字串
    type: String,
    default: 'default'
  }
})
const service = ref({
  s1: {
    name: '電信服務',
    icon: '/icon/wifi.png',
    to: '/'
  },
  s2: {
    name: '旅客諮詢櫃檯',
    icon: '/icon/serve-question.png',
    to: '/'
  },
  s3: {
    name: '無障礙服務',
    icon: '/icon/accessibility.png',
    to: '/'
  },
  s4: {
    name: '金融服務',
    icon: '/icon/money-dollar.png',
    to: '/'
  },
  s5: {
    name: '購物及餐廳',
    icon: '/icon/fluent-food.png',
    to: '/'
  },
  s6: {
    name: '行李打包服務',
    icon: '/icon/serve-luggage.png',
    to: '/'
  },
  default: {
    name: '---',
    icon: '',
    to: '/'
  }
})

const now_service = computed(() => {
  return service.value[props.serviceName] || service.value.default
})
</script>

<template>
  <router-link
    class="flex justify-between items-center w-full h-[70px] border-b-[2px] border-[#4C4E93]"
    :to="now_service.to"
  >
    <div>
      <img class="w-[30px] h-[30px] mr-4" :src="now_service.icon" alt="電信服務icon" />
    </div>
    <div class="flex justify-start w-full">{{ now_service.name }}</div>
    <div>
      <img class="w-[30px] h-[30px]" src="/icon/gravity-arrow-right.png" alt="服務icon" />
    </div>
  </router-link>
</template>
<style></style>
