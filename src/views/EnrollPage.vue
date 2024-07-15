<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const {MongoClient} = require{'mongodb'};
const uri = "mongodb+srv://cluster0.xx82ed9.mongodb.net/"
const name = ref('')
const email = ref('')
const password = ref('')
const confirmpassword = ref('')
const router = useRouter()
const submitForm = () => {
  if (name.value === '' || email.value === '' || password.value === '') {
    alert('有欄位空白!')
    return
  }
  if (password.value !== confirmpassword.value) {
    alert('兩次輸入的密碼不一樣!')
    return
  }
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  router.push('/login')
}
</script>
<template>
  <div class="flex justify-center">
    <form class="w-full max-w-sm" @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="text-sm font-medium">姓名</label>
        <el-input v-model="name" type="text" class="mt-1 w-full" placeholder="請輸入姓名" />
      </div>
      <div class="mb-4">
        <label for="email" class="text-sm font-medium">電子郵件地址</label>
        <el-input v-model="email" type="email" class="mt-1 w-full" placeholder="請入電子郵件地址" />
      </div>
      <div class="mb-4">
        <label for="password" class="text-sm font-medium">密碼</label>
        <el-input v-model="password" type="password" class="mt-1 w-full" placeholder="請入密碼" />
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="text-sm font-medium">請再次輸入密碼</label>
        <el-input
          v-model="confirmpassword"
          type="password"
          class="mt-1 w-full"
          placeholder="請再次輸入密碼"
        />
      </div>
      <button
        type="submit"
        class="w-full flex bg-green-500 hover:bg-green-600 focus:bg-green-800 text-white justify-center py-2 px-4 rounded-md"
      >
        開始註冊
      </button>
      <div>已註冊?<router-link to="/login" class="text-cyan-600"> 立即登入!</router-link></div>
    </form>
  </div>
</template>
<style></style>
