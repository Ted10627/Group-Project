<script setup>
import { ref } from 'vue'
const input_1 = ref(null)
const input_2 = ref(null)
const input_3 = ref(null)
const input_4 = ref(null)
const input_5 = ref(null)
const average = ref(null)

const scoreClick = (event) => {
  event.preventDefault()
  average.value =
    (input_1.value + input_2.value + input_3.value + input_4.value + input_5.value) / 5
}
</script>
<template>
  <main>
    <h1 class="label-s">成績計算</h1>
    <form id="input">
      <label class="label-s" for="num1">國文</label>
      <input
        class="border border-gray-500"
        v-model="input_1"
        type="number"
        id="num1"
        name="num1"
        required
      />
      <label class="label-s" for="num2">英文</label>
      <input
        class="border border-gray-500"
        v-model="input_2"
        type="number"
        id="num2"
        name="num2"
        required
      />
      <label class="label-s" for="num3">數學</label>
      <input
        class="border border-gray-500"
        v-model="input_3"
        type="number"
        id="num3"
        name="num3"
        required
      />
      <label class="label-s" for="num4">專業一</label>
      <input
        class="border border-gray-500"
        v-model="input_4"
        type="number"
        id="num4"
        name="num4"
        required
      />
      <label class="label-s" for="num5">專業二</label>
      <input
        class="border border-gray-500"
        v-model="input_5"
        type="number"
        id="num5"
        name="num5"
        required
      />
      <button
        @click="scoreClick"
        class="button-s bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        type="submit"
      >
        計算
      </button>
    </form>
    <h2>
      結果
      <br />
      <h5>
        <span id="out-1">平均:{{ average }}</span>
      </h5>
      <span id="out-2"></span>
      <span id="out-3"></span>
      <span id="out-4"></span>
    </h2>
  </main>
</template>
<style>
.label-s {
  display: block;
  margin: 10px 0;
}

.button-s {
  display: block;
  margin: 10px 0;
}
</style>
