<template>
  <Loader v-if="loader" />
  <div v-else>
    <div class="country-container">
      <div class="country_navs">
        <h2>{{ store.country }}</h2>
        <button @click="returnBack()">
          <img src="@/assets/images/exit.svg" alt="" />
        </button>
      </div>

      <div v-if="holidays" class="country-content">
        <Holiday
          v-for="holiday in holidays"
          :name="holiday.name"
          :date="holiday.date"
          :types="holiday.types"
        />
      </div>
      <div v-else class="country-empty">This country has no holiday records</div>
      <div v-if="holidays" class="country-tabs">
        <button v-for="n in range" :class="{ active: setActive(n) }" @click="chooseYear(n)">
          {{ n }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loader from '@/components/general/Loader.vue'
import Holiday from '@/components/blocks/Holiday.vue'
import { holidaysStore } from '@/store/holidays'
import { IHoliday, IHolidayByYears } from '@/types'
import { onMounted, Ref, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const loader = ref(true)
const range = Array.from({ length: 11 }, (_, i) => 2020 + i)
const route = useRoute()
const router = useRouter()
const store = holidaysStore()
const activeYear = ref(new Date().getFullYear())
const holidays: Ref<IHoliday[]> = ref([])
const holidaysByYears: Ref<IHolidayByYears[]> = ref([])

const setActive = (year: number) => {
  const holiday = holidaysByYears.value.find((h) => h.date === year)
  if (!holiday || holiday.date !== activeYear.value) return false

  holidays.value = holiday.holidays
  return true
}

const chooseYear = async (year: number) => {
  const currentActiveHoliday = holidaysByYears.value.find((h) => h.date === activeYear.value)
  if (currentActiveHoliday) {
    currentActiveHoliday.active = false
  }

  let holiday = holidaysByYears.value.find((h) => h.date === year)
  activeYear.value = year
  if (!holiday) {
    await getHolidays()
    holiday = holidaysByYears.value.find((h) => h.date === year)
  }

  holiday!.active = true
  holidays.value = holiday!.holidays
}

const getHolidays = async () => {
  await store.setHolidays(route.params.code.toString(), activeYear.value)
  holidaysByYears.value = store.holidaysByYears
}

const returnBack = () => {
  router.push('/')
}

onMounted(async () => {
  holidaysByYears.value = []
  holidays.value = []
  store.resetHolidays()
  await getHolidays()
  await store.setCountry(holidaysByYears.value[0].holidays[0].countryCode)
  loader.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.country-page;
</style>
