<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDropdownStore } from '@/store'
import navDownList from '@/components/AppVue/DownList.vue'

const dropdownStore = useDropdownStore()
const toggleList = (dropdownName) => {
  dropdownStore.toggleDropdown(dropdownName)
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown-container') && !event.target.closest('.dropdown-list')) {
    dropdownStore.closeDropdown() // 點擊空白處時關閉當前打開的下拉清單
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const props = defineProps({
  buttonName: {
    type: String,
    default: 'default'
  }
})

const button = ref({
  one: {
    name: '航班資訊',
    icon: '/icon/nav-airplane-takeoff.png',
<<<<<<< Updated upstream
    to: '/'
=======
    down: 'down1'
>>>>>>> Stashed changes
  },
  two: {
    name: '搭機指南',
    icon: '/icon/nav-luggage.png',
<<<<<<< Updated upstream
    to: '/'
=======
    down: 'down2'
>>>>>>> Stashed changes
  },
  three: {
    name: '機場服務',
    icon: '/icon/nav-fluent_building-people-24-filled.png',
<<<<<<< Updated upstream
    to: '/'
=======
    down: 'down3'
>>>>>>> Stashed changes
  },
  four: {
    name: '機場交通',
    icon: '/icon/nav_bus.png',
<<<<<<< Updated upstream
    to: '/'
=======
    down: 'down4'
>>>>>>> Stashed changes
  },
  five: {
    name: '行政專區',
    icon: '/icon/nav_document-solid.png',
<<<<<<< Updated upstream
    to: '/'
=======
    down: 'down5'
>>>>>>> Stashed changes
  },
  default: {
    name: '',
    icon: '',
<<<<<<< Updated upstream
    to: '/'
=======
    down: ''
>>>>>>> Stashed changes
  }
})
</script>

<template>
<<<<<<< Updated upstream
  <li class="nav-button">
    <RouterLink
      class="flex items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
      :to="button[props.buttonName].to"
    >
      <img :src="button[props.buttonName].icon" class="max-w-[28px] mr-3" alt="" />
      <div class="content-text-bolded">
        {{ button[props.buttonName].name }}
      </div></RouterLink
=======
  <li class="z-10 nav-button">
    <button
      class="relative flex items-center justify-center dropdown-container w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
      type="button"
      @click="toggleList(button[props.buttonName].down)"
>>>>>>> Stashed changes
    >
      <img :src="button[props.buttonName].icon" class="max-w-[28px] mr-3" alt="" />
      <div class="content-text-bolded">
        {{ button[props.buttonName].name }}
      </div>
    </button>
    <div class="absolute w-full top-0 left-0 mt-[165px]">
      <div v-if="dropdownStore.currentOpenDropdown === 'down1'">
        <navDownList :down-name="'down1'" class="dropdown-list"></navDownList>
      </div>
      <div v-if="dropdownStore.currentOpenDropdown === 'down2'">
        <navDownList :down-name="'down2'" class="dropdown-list"></navDownList>
      </div>
      <div v-if="dropdownStore.currentOpenDropdown === 'down3'">
        <navDownList :down-name="'down3'" class="dropdown-list"></navDownList>
      </div>
      <div v-if="dropdownStore.currentOpenDropdown === 'down4'">
        <navDownList :down-name="'down4'" class="dropdown-list"></navDownList>
      </div>
      <div v-if="dropdownStore.currentOpenDropdown === 'down5'">
        <navDownList :down-name="'down5'" class="dropdown-list"></navDownList>
      </div>
    </div>
  </li>
</template>

<style>
.dropdown-container {
  position: relative;
}
</style>
