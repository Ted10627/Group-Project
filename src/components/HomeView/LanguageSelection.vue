<<<<<<< Updated upstream
<template>
  <li class="relative flex justify-end h-[35px]">
=======
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
  if (!event.target.closest('.dropdown-container') && !event.target.closest('.dropdown-list')) {
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
  <li class="z-20 flex justify-end h-[35px] dropdown-container">
>>>>>>> Stashed changes
    <RouterLink
      @click.prevent="toggleMenu"
      class="flex items-center justify-center w-full py-2 px-3"
      to=""
    >
<<<<<<< Updated upstream
      <img src="/icon/nav-earth-48-filled.png" class="mr-[5px]" alt="" />
=======
      <img src="/icon/nav-earth-48-filled.png" class="mr-[5px]" alt="icon" />
>>>>>>> Stashed changes
      <div class="notes-bolded">Language</div>
      <img
        :src="isOpen ? '/icon/park-down.png' : '/icon/park-right.png'"
        alt=""
        class="w-[22px] h-[22px]"
      />
    </RouterLink>
<<<<<<< Updated upstream
    <ul v-if="isOpen" class="absolute top-6 left-0 w-full mt-2 bg-white shadow-lg">
=======
    <ul v-if="isOpen" class="absolute top-6 left-0 w-full mt-2 bg-white shadow-lg dropdown-list">
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
<style scoped>
.dropdown-container {
  position: relative;
}
</style>
>>>>>>> Stashed changes
