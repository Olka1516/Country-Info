<template>
  <div class="home-container">
    <div class="home-list">
      <Search />
      <h2>Countries List</h2>
      <Country v-for="country in countries" :country="country.name" />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Search from '@/components/inputs/Search.vue'
import Country from '@/components/blocks/Country.vue'
import { countriesStore } from '@/store'
import { onMounted, Ref, ref } from 'vue'

const store = countriesStore()
const countries: Ref<{ countryCode: string; name: string }[]> = ref([])

onMounted(async () => {
  await store.getAll()
  countries.value = store.countries
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.home-page;
</style>
