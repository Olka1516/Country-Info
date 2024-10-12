<template>
  <div class="holiday">
    <p>{{ name }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; date: string }>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.holiday;
</style>
