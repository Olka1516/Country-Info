<template>
  <div class="country card" @click="showDetails">
    <b>
      {{ country.name }}
    </b>
  </div>
</template>

<script setup lang="ts">
import { ICountryProps } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{ country: ICountryProps }>()

const showDetails = () => {
  router.push('/country/' + props.country.countryCode)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.country;
</style>
