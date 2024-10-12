<template>
  <div class="holiday">
    <b class="holiday-name">{{ name }}</b>
    <p class="holiday-date">{{ date }}</p>
    <div class="holiday-tags">
      <div class="holiday-tag" v-for="type in types">
        {{ type }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; date: string; types: string[] }>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.holiday;
</style>
