<template>
  <div class="country-container">
    <h2>Country</h2>
    <div v-if="holidays" class="country-content">
      <Holiday v-for="holiday in holidays" :name="holiday.name" :date="holiday.date" />
    </div>
    <div v-else class="country-empty">This country has no holiday records</div>
    <div v-if="holidays" class="country-tabs">
      <button
        v-for="holiday in holidaysByYears"
        :class="{ active: setActive(holiday) }"
        @click="chooseYear(holiday)"
      >
        {{ holiday.date }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Holiday from '@/components/blocks/Holiday.vue'
import { holidaysStore } from '@/store/holidays'
import { IHoliday, IHolidayByYears } from '@/types'
import { onMounted, Ref, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = holidaysStore()
const ActiveYear = ref()
const holidays: Ref<IHoliday[]> = ref([])
const holidaysByYears: Ref<IHolidayByYears[]> = ref([])

const getHolidays = async () => {
  await store.getAll(route.params.code.toString())
  store.setHolidays(route.params.code.toString())
  holidaysByYears.value = store.holidaysByYears
  console.log(holidaysByYears.value)
}

const setActive = (holiday: IHolidayByYears) => {
  if (!holiday.active) return false
  ActiveYear.value = holiday.date
  holidays.value = holiday.holidays
  return true
}

const chooseYear = (holiday: IHolidayByYears) => {
  holidaysByYears.value[ActiveYear.value % 2020].active = false
  holidaysByYears.value[holiday.date % 2020].active = true
}

watch(
  () => route.params.code,
  async () => {
    await getHolidays()
  }
)

onMounted(async () => {
  await getHolidays()
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/index';
@include index.country-page;
</style>
