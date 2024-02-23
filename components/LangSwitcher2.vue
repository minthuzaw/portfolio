<script setup>
const cookieLocale = useLocaleStore()

onMounted(() => {
  useLocaleStore()
})

function changeLang() {
  if (locale.value === 'tr') {
    cookieLocale.setLocale('en')
    locale.value = 'en'
  }
  else {
    cookieLocale.setLocale('tr')
    locale.value = 'tr'
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade" @click="changeLang()">
    <img :src="`/flags/${locale}.png`" class="h-6">
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>
