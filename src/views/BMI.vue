<script setup>
import { ref } from 'vue'
const title0 = ref('BMI計算')
const input_1 = ref(null)
const input_2 = ref(null)
const out = ref(null)
const calc = (event) => {
  event.preventDefault()
  const incalc = input_2.value / ((input_1.value / 100) * (input_1.value / 100))
  console.log(incalc.toFixed(1))
  out.value = incalc.toFixed(1)
}
</script>
<!-- 內容 -->
<template>
  <main>
    <div class="box-all">
      <div class="">{{ title0 }}</div>
      <form id="in">
        <label class="title">身高</label>
        <div>
          <input
            class="border border-gray-500"
            v-model="input_1"
            type="number"
            id="input-1"
            required
          /><span class="unit">cm</span>
        </div>
        <label class="title">體重</label>
        <div>
          <input
            class="border border-gray-500"
            v-model="input_2"
            type="number"
            id="input-2"
            required
          /><span class="unit">kg</span>
        </div>
        <button
          @click="calc"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
          id="submit"
        >
          計算
        </button>
      </form>
      <h2>
        BMI指數:<span id="out">{{ out }}</span>
      </h2>
      <table>
        <thead>
          <tr class="thead">
            <th></th>
            <th>身體指數</th>
          </tr>
        </thead>
        <tbody class="tr">
          <tr id="heavy-1" :class="{ 'bg-red-3': out > 0 && out <= 18.5 }">
            <th>體重過輕</th>
            <th>BMI &lt; 18.5</th>
          </tr>
          <tr id="heavy-2" :class="{ 'bg-green': out > 18.5 && out <= 24 }">
            <th>正常範圍</th>
            <th>18.5 &lt; BMI &lt; 24</th>
          </tr>
          <tr id="heavy-3" :class="{ 'bg-yellow': out > 24 && out <= 27 }">
            <th>過重</th>
            <th>24 &lt; BMI &lt; 27</th>
          </tr>
          <tr id="heavy-4" :class="{ 'bg-red-1': out > 27 && out <= 30 }">
            <th>輕度肥胖</th>
            <th>27 &lt; BMI &lt; 30</th>
          </tr>
          <tr id="heavy-5" :class="{ 'bg-red-2': out > 30 && out <= 35 }">
            <th>中度肥胖</th>
            <th>30 &lt; BMI &lt; 35</th>
          </tr>
          <tr id="heavy-6" :class="{ 'bg-red-3': out > 35 }">
            <th>重度肥胖</th>
            <th>BMI &gt; 35</th>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<!-- CSS樣式 -->
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url('https://drive.google.com/thumbnail?id=1Mu0tJ2h5GuwDtec_UfXXZ-4aN1u34cJC&sz=w1366'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.in-button {
  display: block;
  margin-top: 10px;
  width: 110px;
  font-size: 20px;
}

.unit {
  font-size: 18px;
  margin-left: 6px;
}

.box-all {
  background-color: rgba(250, 235, 215, 0.3764705882);
  padding: 0 16px;
}

table {
  border: 2px solid black;
  width: 220px;
}

.thead {
  background-color: #ffe65b;
}

.tr {
  background-color: #d8ffff;
} /*# sourceMappingURL=13-0620BMI計算.css.map */

.bg-red-3 {
  background-color: rgb(255, 73, 73);
}
.bg-green {
  background-color: #91ff75;
}
.bg-yellow {
  background-color: #fdff6c;
}
.bg-red-1 {
  background-color: #ffc085;
}
.bg-red-2 {
  background-color: #ff6739;
}
</style>
