<script setup>
import { ref } from 'vue'
const title1 = ref('密碼:')
const title2 = ref('切換顏色:')
const box_class = ref('box')
const pass_type = ref('password')

const passClick = () => {
  console.log('密碼按鈕確認')
  pass_type.value = pass_type.value === 'password' ? 'number' : 'password'
}
</script>

<template>
  <main>
    {{ title1 }}
    <input :type="pass_type" />
    <button type="button" @click="passClick">顯示/隱藏</button>
    <div class=".all-box">
      {{ title2 }}
      <div :class="box_class"></div>
    </div>
    <TheWelcome />
  </main>
</template>
<style>
.all-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box {
  width: 200px;
  height: 200px;
  background-color: forestgreen;
}
.ch-box {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
