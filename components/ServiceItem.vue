<script setup>
const props = defineProps({
  service: Object,
})

onMounted(() => {
  useLocaleStore()
})
</script>

<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img v-if="service.image !== null && service.icon !== ''" :src="service.image" alt="mobile app icon" style="width: 85px">
      <ion-icon v-else :name="service.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>

      <p class="service-item-text">
        {{ service.description?.en }}
      </p>
    </div>
  </li>
</template>
