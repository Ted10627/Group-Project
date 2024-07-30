<script setup>
import { ref } from 'vue'
const props = defineProps({
  trafficName: {
    //指定props資料是字串
    type: String,
    default: 'default'
  }
})
const traffic = ref({
  bus: {
    icon: '/icon/bxs-bus.png',
    name: '公車路線',
    click: ''
  },
  speedRail: {
    icon: '/icon/high-speed-train.png',
    name: '轉乘高鐵',
    click: ''
  },
  taxi: {
    icon: '/icon/taxi.png',
    name: '計程車服務',
    click: ''
  },
  car: {
    icon: '/icon/car.png',
    name: '租車服務',
    click: ''
  },
  pin: {
    icon: '/icon/map-pin-fill.png',
    name: '機場位置',
    click: ''
  },
  default: {
    icon: '',
    name: '',
    click: ''
  }
})
</script>

<template>
  <button :click="traffic[props.trafficName].click">
    <div
      class="flex w-[280px] h-[50px] mt-[20px] rounded-full justify-between items-center bg-white"
    >
      <slot name="left-icon">
        <img
          class="flex w-[30px] h-[30px] ml-[28px]"
          :src="traffic[props.trafficName].icon"
          alt="left icon"
        />
      </slot>
      <slot name="text">
        <div class="flex content-text-black">{{ traffic[props.trafficName].name }}</div>
      </slot>
      <slot name="right-icon">
        <img
          class="flex w-[30px] h-[30px] mr-[28px]"
          src="/icon/black-park-right.png"
          alt="right icon"
        />
      </slot>
    </div>
  </button>
</template>

<style scoped></style>
