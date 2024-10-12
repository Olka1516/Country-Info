<template>
  <div class="random-countries">
    <RandomCountry
      v-for="holidays in store.holidays"
      :country="holidays[0].countryCode"
      :holiday="holidays[0].name"
      :date="holidays[0].date"
    />
  </div>
</template>

<script setup lang="ts">
import { countriesStore } from '@/store'
import RandomCountry from './RandomCountry.vue'

const store = countriesStore()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.random-countries;
</style>
