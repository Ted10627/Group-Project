<script setup></script>
<template>
  <div
    class="flex h-screen bg-cover bg-center"
    :style="{ backgroundImage: 'url(your-image-url.jpg)' }"
  >
    <!-- main-left -->
    <div
      class="hidden lg:flex flex-col justify-between w-1/2 bg-black bg-opacity-50 p-10 text-white"
    >
      <div>
        <h1 class="text-5xl font-bold">保持獨特</h1>
        <p class="text-2xl mt-4">隨時隨地以獨特的方式捕捉您的回憶。</p>
      </div>
      <div class="flex justify-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          class="bi bi-twitter-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
          />
        </svg>
      </div>
    </div>

    <!-- main-right -->
    <div
      class="flex flex-col justify-between w-full lg:w-1/2 bg-black bg-opacity-70 p-10 text-white"
    >
      <div class="flex justify-start">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-4xl">歡迎回來！</h1>
        <p class="text-xl mt-2">登錄以繼續</p>
      </div>

      <form class="w-full max-w-sm">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">電子郵件地址</label>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium">密碼</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            登入
          </button>
        </div>
      </form>
      
      <div class="flex justify-center">
        <p class="">忘記密碼了嗎？</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@charset "UTF-8";
body {
  padding: 0;
}

.main-right {
  width: 50%;
}

.bg-img {
  background-image: url(../image/圖1.jpg);
}

.main-bg-left {
  background-color: rgba(0, 0, 0, 0.4941176471);
}

.main-bg-right {
  background-color: #008000;
}

.main-input-bg-right {
  background-color: #004400;
}

.column {
  flex-direction: column;
}

.main-icon-min {
  min-width: 40px;
}

@media (max-width: 991px) {
  .main-right {
    width: 100%;
  }
  .main-bg-right {
    background-color: rgba(0, 0, 0, 0.4941176471);
  }
} /*# sourceMappingURL=13-0611登入.css.map */
</style>
