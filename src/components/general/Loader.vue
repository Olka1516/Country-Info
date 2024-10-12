<template>
  <div class="loader-container">
    <div class="dot-spinner">
      <div v-for="_ in 8" class="dot-spinner__dot"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.loader;
</style>
