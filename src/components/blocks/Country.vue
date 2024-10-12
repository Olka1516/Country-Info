<template>
  <div class="country">
    <p>
      {{ country }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ country: string }>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.country;
</style>
