<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function changeLanguage(language) {
  console.log(`選擇的語言: ${language}`)
}

function handleClickOutside(event) {
  if (!event.target.closest('.dropdown-language') && !event.target.closest('.dropdown-list')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <li
    class="z-30 flex justify-end h-[35px] dropdown-language hover:border-b-2 hover:border-[#343557]"
  >
    <RouterLink
      @click.prevent="toggleMenu"
      class="flex items-center justify-center w-full py-2"
      to=""
    >
      <img src="/icon/nav-earth-48-filled.png" class="mr-[5px]" alt="icon" />
      <div class="notes-bolded">Language</div>
      <img src="/icon/park-down.png" alt="" class="w-[22px] h-[22px]" />
    </RouterLink>
    <ul v-if="isOpen" class="absolute top-6 left-0 w-full mt-2 bg-white shadow-lg dropdown-list">
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

<style scoped>
.dropdown-language {
  position: relative;
}
.dropdown-language:hover img {
  margin-bottom: -2px;
}
.dropdown-language:hover div {
  margin-bottom: -2px;
}
</style>
