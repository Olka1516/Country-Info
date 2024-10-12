<template>
  <div class="random-country" @click="showDetails">
    <p class="random-name">{{ country }}</p>
    <b class="random-holiday">{{ holiday }}</b>
    <p class="random-date">{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  country: string
  holiday: string
  date: string
  code: string
}>()

const showDetails = () => {
  router.push('/country/' + props.code)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.random-country;
</style>
