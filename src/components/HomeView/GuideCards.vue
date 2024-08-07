<script setup>
import { defineProps, reactive } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  guideName: {
    type: String,
    default: 'default'
  }
})

const guide = reactive({
  card1: {
    img: '/image/guide-1.png',
    title: '出發',
    smtitle: '旅行前請確認以下資訊',
    content1: '搭機報到手續',
    content2: '搭機出示證明文件',
    content3: '出境流程',
    to1: '/',
    to2: '/',
    to3: '/'
  },
  card2: {
    img: '/image/guide-2.png',
    title: '抵達',
    smtitle: '台中機場提供最好的服務品質',
    content1: '入境流程',
    content2: '檢疫',
    content3: '如何離開機場',
    to1: '/',
    to2: '/',
    to3: '/'
  },
  card3: {
    img: '/image/guide-3.png',
    title: '搭機安全須知',
    smtitle: '遵守行李規範，安全登機',
    content1: '搭機安全須知',
    content2: '注意事項',
    content3: '來往兩岸港澳地區須知',
    to1: '/',
    to2: '/',
    to3: '/'
  },
  default: {
    img: '',
    title: '',
    smtitle: '',
    content1: '',
    content2: '',
    content3: '',
    to1: '/',
    to2: '/',
    to3: '/'
  }
})
</script>

<template>
  <div class="relative flex items-center justify-end w-full flex-shrink-0 md:w-[450px] ml-[40px]">
    <div
      class="absolute left-0 top-[110px] w-[300px] h-[285px] bg-white rounded-tl-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.25)]"
    >
      <div class="flex flex-col justify-between w-full h-full pt-8 pl-10 pb-12">
        <div>
          <div class="content-text-black font-bold">{{ guide[guideName].title }}</div>
          <div class="notes text-[#5d5d5d]">{{ guide[guideName].smtitle }}</div>
        </div>
        <div class="notes">
          <RouterLink :to="guide[guideName].to1">
            <div class="flex items-center text-[#471C87]">
              {{ guide[guideName].content1 }}
              <img class="flex ml-2 w-[20px] h-[20px]" src="/icon/guide-park-right.png" alt="" />
            </div>
          </RouterLink>
          <RouterLink :to="guide[guideName].to2">
            <div class="flex items-center mt-3 text-[#471C87]">
              {{ guide[guideName].content2 }}
              <img class="flex ml-2 w-[20px] h-[20px]" src="/icon/guide-park-right.png" alt="" />
            </div>
          </RouterLink>
          <RouterLink :to="guide[guideName].to3">
            <div class="flex items-center mt-3 text-[#471C87]">
              {{ guide[guideName].content3 }}
              <img class="flex ml-2 w-[20px] h-[20px]" src="/icon/guide-park-right.png" alt="" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <img class="w-[350px] h-[400px]" :src="guide[guideName].img" alt="" />
  </div>
</template>

<style></style>
