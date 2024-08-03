<template>
  <div class="relative w-full max-w-[1400px]">
    <div class="w-full overflow-hidden">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 33.5}%)` }"
      >
        <slot></slot>
      </div>
    </div>

    <button
      @click="prev"
      :class="`flex justify-center items-center w-[84px] h-[84px] absolute rounded-full top-[33%] left-[-42px] bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] ${currentIndex > 0 ? 'block' : 'hidden'}`"
    >
      <img class="w-[28px] h-[28px]" src="/icon/guide-left-arrow.png" alt="左按鈕" />
    </button>
    <button
      @click="next"
      :class="`flex justify-center items-center w-[84px] h-[84px] absolute rounded-full top-[33%] right-[-42px] bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] ${currentIndex < 3 ? 'block' : 'hidden'}`"
    >
      <img class="w-[28px] h-[28px]" src="/icon/guide-right-arrow.png" alt="右按鈕" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const next = () => {
  if (currentIndex.value < 3) {
    currentIndex.value++
  }
}

defineExpose({ prev, next })
</script>
