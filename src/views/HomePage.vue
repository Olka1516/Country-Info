<template>
  <div class="home-container">
    <div class="home-list">
      <Search v-model="searchCountry" />
      <h2>Countries List</h2>
      <Country v-for="country in countries" :country="country" />
    </div>
    <div class="home-list">
      <h2>Random countries Widget</h2>
      <RandomCountries :countries="countryNames" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '@/components/inputs/Search.vue'
import Country from '@/components/blocks/Country.vue'
import RandomCountries from '@/components/blocks/RandomCountries.vue'
import { countriesStore } from '@/store'
import { onMounted, Ref, ref, watch } from 'vue'
import { ICountryProps } from '@/types'

const searchCountry = ref('')
const countryNames: Ref<string[]> = ref([])

const store = countriesStore()
const countries: Ref<ICountryProps[]> = ref([])

const getRandomCountries = (count: number) => {
  const temp = [...countries.value].sort(() => 0.5 - Math.random())
  countryNames.value = temp.slice(0, count).map((country) => country.name)
  return temp.slice(0, count).map((country) => country.countryCode)
}

watch(
  () => searchCountry.value,
  () => {
    countries.value = store.countries.filter((country) =>
      country.name.toLowerCase().startsWith(searchCountry.value.toLowerCase())
    )
  }
)

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
