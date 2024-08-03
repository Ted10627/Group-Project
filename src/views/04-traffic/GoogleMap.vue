<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'
</script>

<template>
    <img
      class="max-w-full w-auto m-auto"
      src="/image/banner-security-notice.png"
      alt="國際線搭機流程"
    />
    <div class="px-5">
      <div class="w-full max-w-[1260px] flex flex-col gap-5 lg:gap-12 m-auto py-10">
        <div class="w-full text-sm lg:text-2xl">首頁>機場交通>Google Map</div>
        <mainTitle>
          <template #title>Google Map</template>
        </mainTitle>
        <div>
            <iframe class="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.6514471640576!2d120.59694067504438!3d24.253966678330134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346911535f840371%3A0x586410335e8a5024!2sTaichung%20International%20Airport!5e0!3m2!1sen!2stw!4v1722651760068!5m2!1sen!2stw" width="1260" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="w-full text-sm lg:text-2xl">文章最後更新日期：2024-08-03</div>
      </div>
    </div>
  </template>

<style></style>
