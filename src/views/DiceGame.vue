<script setup>
import { ref } from 'vue'
const dicetime = ref(0)
const round = ref(20)
const num1 = ref(null)
const num2 = ref(null)
const num3 = ref(null)
const divs = ref([])
const outtext = ref()
const diceClick = () => {
  for (let re = 0; re < 20; re++) {
    if (round.value == 0 || outtext.value == '你贏了') {
      return
    }
    dicetime.value += 1
    round.value -= 1
    num1.value = Math.round(Math.random() * 6)
    num2.value = Math.round(Math.random() * 6)
    num3.value = Math.round(Math.random() * 6)
    console.log(num1, num2, num3)
    divs.value.push(`次數:${dicetime.value}--骰出:${num1.value} ${num2.value} ${num3.value}`)
    if (num1.value == num2.value && num2.value == num3.value) {
      outtext.value = '你贏了'
    } else {
      outtext.value = '回合用完你輸了'
    }
  }
}
const reClick = () => {
  dicetime.value = 0
  round.value = 20
  divs.value = []
  outtext.value = ''
}
</script>

<template>
  <main>
    <div>
      <br /><span>剩餘回合:{{ round }}</span> <br /><button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        @click="diceClick"
      >
        開始
      </button>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-3"
        type="button"
        @click="reClick"
      >
        重置
      </button>
      <div>{{ outtext }}</div>
      <div v-for="(item, index) in divs" :key="index">
        {{ item }}
      </div>
    </div>
  </main>
</template>
<style></style>
