<template>
  <div class="random-country" @click="showDetails">
    <p>{{ country }}</p>
    <p>{{ holiday }}</p>
    <p>{{ date }}</p>
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
