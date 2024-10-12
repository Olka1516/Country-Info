<template>
  <div class="random-countries">
    <RandomCountry
      v-for="(holidays, index) in store.holidays"
      :country="countries[index]"
      :holiday="holidays[0].name"
      :date="holidays[0].date"
      :code="holidays[0].countryCode"
    />
  </div>
</template>

<script setup lang="ts">
import { countriesStore } from '@/store'
import RandomCountry from './RandomCountry.vue'
defineProps<{ countries: string[] }>()

const store = countriesStore()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.random-countries;
</style>
