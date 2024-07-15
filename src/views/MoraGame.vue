<script setup>
import { ref } from 'vue'
const out = ref()
// 剪刀
const userClick_0 = () => {
  let pc = Math.round(Math.random() * 2)
  if (pc == 1) {
    out.value = '電腦出石頭，你輸了'
  } else if (pc == 2) {
    out.value = '電腦出布，你贏了'
  } else {
    out.value = '電腦出剪刀，平手'
  }
}
// 石頭
const userClick_1 = () => {
  let pc = Math.round(Math.random() * 2)
  if (pc == 2) {
    out.value = '電腦出布，你輸了'
  } else if (pc == 0) {
    out.value = '電腦出剪刀，你贏了'
  } else {
    out.value = '電腦出石頭，平手'
  }
}
// 石頭
const userClick_2 = () => {
  let pc = Math.round(Math.random() * 2)
  if (pc == 0) {
    out.value = '電腦出剪刀，你輸了'
  } else if (pc == 1) {
    out.value = '電腦出石頭，你贏了'
  } else {
    out.value = '電腦出布，平手'
  }
}
</script>
<template>
  <main>
    <button
      @click="userClick_0"
      type="button"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    >
      剪刀
    </button>
    <button
      @click="userClick_1"
      type="button"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    >
      石頭
    </button>
    <button
      @click="userClick_2"
      type="button"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    >
      布
    </button>
    <div>{{ out }}</div>
  </main>
</template>
<style></style>
