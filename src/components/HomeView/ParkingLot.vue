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
  state1: {
    name: '國內航廈北側(室外)',
    color: 'warning-green',
    out: '空曠'
  },
  state2: {
    name: '國際航廈B1',
    color: 'warning-red',
    out: '擁擠'
  },
  default: {
    name: '',
    color: '',
    out: ''
  }
})
</script>

<template>
  <div class="w-[250px] mt-4">
    <div class="flex items-center w-full mb-2">
      <img class="flex w-[30px] h-[30px] ml-2" src="/icon/parking-fill.png" alt="icon" />{{
        traffic[props.trafficName].name
      }}
    </div>
    <div class="flex justify-end items-center">
      <div
        class="flex justify-center items-center w-[120px] h-[38px] content-text-white rounded-[4px] mr-3"
        :class="[traffic[props.trafficName].color]"
      >
        {{ traffic[props.trafficName].out }}
      </div>
      <a class="flex items-center small-text-18 underline text-gray" href="">查看位置</a>
    </div>
  </div>
</template>
<style></style>
