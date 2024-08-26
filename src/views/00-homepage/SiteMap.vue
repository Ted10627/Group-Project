<script setup>
import mainTitle from '@/components/HomeView/MainTitle.vue'
</script>
<!-- //000 -->
<template>
    <div class="banner-service w-full max-w-[1920px] max-w-auto h-[120px] sm:h-[200px] lg:h-[400px] flex items-center bg-cover">
        <div class="text-xl font-bold sm:text-4xl lg:text-6xl w-[1260px] px-5 mx-auto text-white">網站導覽</div>
    </div>
    <div class="max-w-[1260px] w-full px-5">
      <div class="w-full flex flex-col gap-5 m-auto py-10">
        <div class="w-full text-sm lg:text-2xl">首頁>網站導覽</div>
        <mainTitle>
          <template #title>無障礙導覽說明</template>
        </mainTitle>
        <div class="w-full bg-white py-6 px-8 rounded-xl content-text">
            <p>1. 本網站設計符合無障礙的標準，並提供便捷鍵（Access Key）的設定，以幫助障礙人士使用。<br>
                2. 本網站依無障礙網頁設計原則而建置，分別依網頁佈局方向來設置便捷鍵，並且該便捷鍵均可超連結至此頁完成方便瀏覽本網站的主要功能。<br>
                3. 本網站的便捷鍵（Access Key，也稱為快速鍵）設定如下：<br>
                •Alt+U：上方主選單區、廣告輪播banner。<br>
                •Alt+L：左邊區塊是次選單區。<br>
                •Alt+C：中間主要內容區，此區塊呈現各網頁的網頁內容。<br>
                •Alt+B：下方頁尾區，此區域呈現Fat footer、聯絡方式、更新時間以及隱私權政策等連結。
            </p>
        </div>
        <mainTitle>
          <template #title>網站導覽</template>
        </mainTitle>
        <div class="w-full content-text bg-white py-6 px-8 rounded-xl flex flex-wrap">
            <div class="w-full lg:basis-1/2">
                <div class="mb-3">
                    <RouterLink :to="{ name: 'home' }" class="hover:underline underline-offset-4">1. 首頁</RouterLink>
                    <div class="pl-5">
                        <RouterLink :to="{ name: 'announcement-information' }" class="hover:underline underline-offset-4">1-1. 公告資訊</RouterLink><br>
                        <RouterLink :to="{ name: 'FAQ' }" class="hover:underline underline-offset-4">1-2. 常見問題</RouterLink><br>
                    </div>
                </div>
                <div class="mb-3">
                    <RouterLink :to="{ name: 'InternationalFlights' }">2. 航班資訊</RouterLink>
                    <div class="pl-5">
                        <RouterLink :to="{ name: 'announcement-information' }" class="hover:underline underline-offset-4">2-1. 即時航班</RouterLink><br>
                        <RouterLink :to="{ name: 'DomesticFlights' }" class="hover:underline underline-offset-4">2-2. 定期航班</RouterLink><br>
                        <RouterLink :to="{ name: 'airline' }" class="hover:underline underline-offset-4">2-3. 航空公司</RouterLink><br>
                        <RouterLink :to="{ name: 'Flight-standby-information' }" class="hover:underline underline-offset-4">2-4. 國內線候補資訊</RouterLink>
                    </div>
                </div>
                <div class="mb-3">
                    <a>3. 搭機指南</a>
                    <div class="pl-5">
                        <RouterLink :to="{ name: 'process-exit' }" class="hover:underline underline-offset-4">3-1. 國際線搭機流程</RouterLink><br>
                        <RouterLink :to="{ name: 'check-in' }" class="hover:underline underline-offset-4">3-2. 報到及通關</RouterLink><br>
                        <RouterLink :to="{ name: 'security-notice' }" class="hover:underline underline-offset-4">3-3. 搭機安全須知</RouterLink><br>
                        <RouterLink :to="{ name: 'concession-ticket' }" class="hover:underline underline-offset-4">3-4. 票價優惠說明</RouterLink><br>
                        <RouterLink :to="{ name: 'relevant-regulation' }" class="hover:underline underline-offset-4">3-5. 注意事項</RouterLink><br>
                        <RouterLink :to="{ name: 'tax-refund' }" class="hover:underline underline-offset-4">3-6. 外籍旅客購物退稅須知</RouterLink>
                    </div>
                </div>
                <div class="mb-3">
                    <a href="#">4. 機場服務</a>
                    <div class="pl-5">
                        <RouterLink :to="{ name: 'floor-plan-1f' }" class="hover:underline underline-offset-4">4-1. 機場導覽圖</RouterLink><br>
                        <RouterLink :to="{ name: 'service-facilities' }" class="hover:underline underline-offset-4">4-2. 服務設施</RouterLink>
                        <div>
                            <RouterLink :to="{ name: 'service-facilities' }" class="hover:underline underline-offset-4">4-2-1. 全部</RouterLink><br>
                            <RouterLink :to="{ name: 'facility-information' }" class="hover:underline underline-offset-4">4-2-2. 旅客諮詢櫃檯</RouterLink><br>
                            <RouterLink :to="{ name: 'financial-service' }" class="hover:underline underline-offset-4">4-2-3. 金融服務</RouterLink><br>
                            <RouterLink :to="{ name: 'insurance-service' }" class="hover:underline underline-offset-4">4-2-4. 保險服務</RouterLink><br>
                            <RouterLink :to="{ name: 'telecommunication-network' }" class="hover:underline underline-offset-4">4-2-5. 電信網路</RouterLink><br>
                            <RouterLink :to="{ name: 'cars-rental-service' }" class="hover:underline underline-offset-4">4-2-6. 租車服務</RouterLink><br>
                            <RouterLink :to="{ name: 'food-stores' }" class="hover:underline underline-offset-4">4-2-7. 購物及餐廳</RouterLink><br>
                            <RouterLink :to="{ name: 'tourist-counter' }" class="hover:underline underline-offset-4">4-2-8. 旅遊服務中心</RouterLink><br>
                            <RouterLink :to="{ name: 'baggage-packing' }" class="hover:underline underline-offset-4">4-2-9. 行李打包服務</RouterLink><br>
                            <RouterLink :to="{ name: 'storage-services' }" class="hover:underline underline-offset-4">4-2-10. 投幣式儲物櫃</RouterLink><br>
                            <RouterLink :to="{ name: 'medical-service' }" class="hover:underline underline-offset-4">4-2-11. 護理服務</RouterLink><br>
                            <RouterLink class="hover:underline underline-offset-4">4-2-12. 充電服務</RouterLink><br>
                            <RouterLink class="hover:underline underline-offset-4">4-2-13. 其他服務</RouterLink>
                        </div>
                        <RouterLink :to="{ name: 'accessible-service' }" class="hover:underline underline-offset-4">4-3. 無障礙服務</RouterLink><br>
                        <RouterLink :to="{ name: 'baby-stroller' }" class="hover:underline underline-offset-4">4-4. 嬰兒車借用</RouterLink><br>
                        <RouterLink :to="{ name: 'lost-property' }" class="hover:underline underline-offset-4">4-5. 遺失物查詢</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">4-6. 服務電話</RouterLink><br>
                        <RouterLink :to="{ name: 'passenger-complaints' }" class="hover:underline underline-offset-4">4-7. 旅客申訴</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">4-8. 線上問卷與建議</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">4-9. 線上申辦</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">4-10. 表單下載</RouterLink>
                    </div>
                </div>
            </div>
            <div class="w-full lg:basis-1/2">
                <div class="mb-3">
                    <a href="#">5. 交通．停車</a>
                    <div class="pl-5">
                        <RouterLink :to="{ name: 'google-map' }" class="hover:underline underline-offset-4">5-1. 機場 Google Map</RouterLink><br>
                        <RouterLink :to="{ name: 'parking-lot' }" class="hover:underline underline-offset-4">5-2. 停車資訊</RouterLink><br>
                        <RouterLink :to="{ name: 'taxi-service' }" class="hover:underline underline-offset-4">5-3. 計程車服務</RouterLink><br>
                        <RouterLink :to="{ name: 'car-rental-service' }" class="hover:underline underline-offset-4">5-4. 租車服務</RouterLink><br>
                        <RouterLink :to="{ name: 'bus-information' }" class="hover:underline underline-offset-4">5-5. 公車資訊</RouterLink><br>
                        <RouterLink :to="{ name: 'sightseeing-guide' }" class="hover:underline underline-offset-4">5-7. 觀光指南</RouterLink>
                    </div>
                </div>
                <div class="mb-3">
                    <a href="#">6. 行政專區</a>
                    <div class="pl-5">
                        <RouterLink class="hover:underline underline-offset-4">6-1. 機場簡介</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-2. 機場景點與公共藝術</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-3. 國際貨運資訊</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-4. 開放資料專區</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-5. 政府資訊公開</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-6. 相關作業規定</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-7. 飛安宣導專區</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-8. 遙控無人機飛行指南</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-9. 噪音補償</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-10. 政風園地</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-11. 人事園地</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-12. SMS安全管理系統</RouterLink><br>
                        <RouterLink class="hover:underline underline-offset-4">6-13. 場內駕駛許可證題庫與教材</RouterLink>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>

<style>
.banner-service{
  background-image: url(/public/image/banner-flight.png);
}
</style>