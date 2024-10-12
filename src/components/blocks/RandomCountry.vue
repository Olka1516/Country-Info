<template>
  <div class="random-country">
    <p>{{ country }}</p>
    <p>{{ holiday }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  country: string
  holiday: string
  date: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.random-country;
</style>
