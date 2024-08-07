<script setup>
import { ref, onMounted, nextTick } from 'vue'

const imgWidth = ref('')
const headlineRef = ref(null)

const setImgWidth = async () => {
  await nextTick() // 等待 DOM 完全渲染

  if (headlineRef.value) {
    const contentWidth = headlineRef.value.getBoundingClientRect().width
    imgWidth.value = `${contentWidth}px`
  }
}

onMounted(() => {
  setImgWidth()
})
</script>
<template>
  <div>
    <div class="headline-bolded mb-2">
      <span ref="headlineRef">
        <slot name="title">默認標題</slot>
      </span>
    </div>
    <div class="flex">
      <img :style="{ width: imgWidth, height: '10px' }" src="/transportation-border-title.png" />
      <img class="mx-[10px]" src="/transportation-border-title2.png" alt="" />
      <img src="/transportation-border-title3.png" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
