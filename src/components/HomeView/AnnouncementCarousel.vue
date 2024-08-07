<script setup>
import { ref, reactive, defineProps, watch, defineExpose, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  carouselName: {
    type: String,
    default: 'default'
  }
})

const carousel = reactive({
  carousel1: {
    num: 2,
    distance: 24,
    top: 41
  },
  carousel2: {
    num: 3,
    distance: 34,
    top: 33
  },
  default: {
    num: 1,
    distance: 100,
    top: 0
  }
})

const currentIndex = ref(0)
let inCarousel = carousel[props.carouselName]

const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)

watch(
  () => props.carouselName,
  (newVal) => {
    inCarousel = carousel[newVal]
    currentIndex.value = 0
  }
)

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const next = () => {
  if (currentIndex.value < inCarousel.num - 1) {
    currentIndex.value++
  }
}

const onMouseDown = (event) => {
  isDragging.value = true
  startX.value = event.clientX
  currentX.value = startX.value
}

const onMouseMove = (event) => {
  if (isDragging.value) {
    currentX.value = event.clientX
  }
}

const onMouseUp = () => {
  if (isDragging.value) {
    const movedDistance = startX.value - currentX.value
    if (Math.abs(movedDistance) > 50) {
      // 可以根據需要調整這個閾值
      if (movedDistance > 0) {
        next()
      } else {
        prev()
      }
    }
    isDragging.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})

defineExpose({ prev, next })
</script>

<template>
  <div class="relative w-full h-full" @mousedown="onMouseDown">
    <div class="w-full h-full overflow-hidden">
      <div
        class="flex h-full transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * inCarousel.distance}%)` }"
      >
        <slot></slot>
      </div>
    </div>

    <button
      @click="prev"
      :class="`flex z-10 justify-center items-center w-[84px] h-[84px] absolute rounded-full left-[-42px] bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] ${currentIndex > 0 ? 'block' : 'hidden'}`"
      :style="{ top: `${inCarousel.top}%` }"
    >
      <img class="w-[28px] h-[28px]" src="/icon/guide-left-arrow.png" alt="左按鈕" />
    </button>
    <button
      @click="next"
      :class="`flex z-10 justify-center items-center w-[84px] h-[84px] absolute rounded-full right-[-42px] bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_6px_rgba(0,0,0,0.25)] ${currentIndex < inCarousel.num - 1 ? 'block' : 'hidden'}`"
      :style="{ top: `${inCarousel.top}%` }"
    >
      <img class="w-[28px] h-[28px]" src="/icon/guide-right-arrow.png" alt="右按鈕" />
    </button>
  </div>
</template>
