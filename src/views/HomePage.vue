<template>
  <div class="home-container">
    <div class="home-list">
      <Search />
      <h2>Countries List</h2>
      <Country v-for="country in countries" :country="country.name" />
    </div>
    <div class="home-list">
      <h2>Random countries Widget</h2>
      <RandomCountries />
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '@/components/inputs/Search.vue'
import Country from '@/components/blocks/Country.vue'
import RandomCountries from '@/components/blocks/RandomCountries.vue'
import { countriesStore } from '@/store'
import { onMounted, Ref, ref } from 'vue'

const store = countriesStore()
const countries: Ref<{ countryCode: string; name: string }[]> = ref([])

const getRandomCountries = (count: number) => {
  const shuffled = [...countries.value].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count).map((country) => country.countryCode)
}

onMounted(async () => {
  await store.getAll()
  countries.value = store.countries
  const codes = getRandomCountries(3)
  await store.getHolidays(codes)
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.home-page;
</style>
