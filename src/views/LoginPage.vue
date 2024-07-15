<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const submit = () => {
  console.log('Email:', email.value)
  console.log('Password', password.value)
}
</script>
<template>
  <div class="flex justify-center">
    <form @submit.prevent="submit" class="w-full max-w-sm">
      <div class="mb-4">
        <label for="email" class="text-sm font-medium">電子郵件地址</label>
        <el-input v-model="email" type="email" class="mt-1 w-full" />
      </div>
      <div class="mb-4">
        <label for="password" class="text-sm font-medium">密碼</label>
        <el-input v-model="password" type="password" class="mt-1 w-full" />
      </div>

      <button
        type="submit"
        class="w-full flex bg-green-500 hover:bg-green-600 focus:bg-green-800 text-white justify-center py-2 px-4 rounded-md"
      >
        登入
      </button>
      <div>沒有註冊?<router-link to="/enroll" class="text-cyan-600"> 現在註冊! </router-link></div>
    </form>
  </div>
</template>
<style></style>
