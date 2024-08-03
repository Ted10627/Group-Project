<template>
  <li class="relative flex justify-end h-[35px]">
    <RouterLink
      @click.prevent="toggleMenu"
      class="flex items-center justify-center w-full py-2 px-3"
      to=""
    >
      <img src="/icon/nav-earth-48-filled.png" class="mr-[5px]" alt="" />
      <div class="notes-bolded">Language</div>
      <img
        :src="isOpen ? '/icon/park-down.png' : '/icon/park-right.png'"
        alt=""
        class="w-[22px] h-[22px]"
      />
    </RouterLink>
    <ul v-if="isOpen" class="absolute top-6 left-0 w-full mt-2 bg-white shadow-lg">
      <li>
        <button
          @click="changeLanguage('en')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          English
        </button>
      </li>
      <li>
        <button
          @click="changeLanguage('zh')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          中文
        </button>
      </li>
      <li>
        <button
          @click="changeLanguage('ja')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          日本語
        </button>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function changeLanguage(language) {
  console.log(`選擇的語言: ${language}`)
}
</script>

<style scoped></style>
