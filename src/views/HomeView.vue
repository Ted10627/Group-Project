<script setup>
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
const title1 = ref('密碼:')
const title2 = ref('切換顏色:')
const title3 = ref('圖片:')
const box_class = ref('box')
const pass_type = ref('password')
const imgch = ref('/image/0.gif')

const passClick = () => {
  console.log('密碼按鈕確認')
  pass_type.value = pass_type.value === 'password' ? 'number' : 'password'
}
const chClick = () => {
  console.log('按鈕確認!')
  box_class.value = box_class.value === 'box' ? 'ch-box' : 'box'
}
const imgClick = () => {
  console.log('圖片確認!')
  imgch.value = imgch.value === '/image/0.gif' ? '/image/1.gif' : '/image/0.gif'
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
      <button type="button" @click="chClick">切換按鈕</button>
      <br />{{ title3 }} <br /><img :src="imgch" alt="圖片沒上工" class="box" /> <br /><button
        type="button"
        @click="imgClick"
      >
        不獸控制!
      </button>
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
