<script setup>
import { ref } from 'vue'
const props = defineProps({
  buttonName: {
    //指定props資料是字串
    type: String,
    default: 'default'
  }
})
const button = ref({
  one: {
    name: '航班資訊',
    icon: '/icon/nav-airplane-takeoff.png',
    to: '/'
  },
  two: {
    name: '搭機指南',
    icon: '/icon/nav-luggage.png',
    to: '/'
  },
  three: {
    name: '機場服務',
    icon: '/icon/nav-fluent_building-people-24-filled.png',
    to: '/'
  },
  four: {
    name: '交通．指南',
    icon: '/icon/nav_bus.png',
    to: '/'
  },
  five: {
    name: '行政專區',
    icon: '/icon/nav_document-solid.png',
    to: '/'
  },
  default: {
    name: '',
    icon: '',
    to: '/'
  }
})
</script>
<template>
  <li class="nav-button">
    <RouterLink
      class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
      :to="button[props.buttonName].to"
    >
      <img :src="button[props.buttonName].icon" class="max-w-[28px] mr-3" alt="" />
      <div class="content-text-bolded">
        {{ button[props.buttonName].name }}
      </div></RouterLink
    >
  </li>
</template>
<style></style>
