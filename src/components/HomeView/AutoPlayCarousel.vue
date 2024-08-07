<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = ref([
  { src: './image/banner-1.png', alt: '...' },
  { src: './image/banner-2.png', alt: '...' },
  { src: './image/banner-3.png', alt: '...' }
])

const currentIndex = ref(0)
let intervalId = null

const showNextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

onMounted(() => {
  intervalId = setInterval(showNextImage, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="z-0 relative w-full max-w-[1720px] h-[865px] rounded-tl-bigimg overflow-hidden">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'absolute transition-opacity duration-1000 ease-in-out w-full h-full',
        { 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }
      ]"
    >
      <img :src="item.src" class="block object-cover" :alt="item.alt" />
    </div>
  </div>
</template>

<style scoped>
.absolute {
  transition: opacity 3s ease-in-out;
}
.opacity-100 {
  opacity: 1 !important;
}
.opacity-0 {
  opacity: 0 !important;
}
.rounded-tl-bigimg {
  border-top-left-radius: 200px;
}
</style>
