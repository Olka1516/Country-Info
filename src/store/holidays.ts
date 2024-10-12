import { getHolidayByYearAndCode } from '@/server'
import { IHolidayByYears } from '@/types'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const holidaysStore = defineStore('holidaysInfo', () => {
  const holidaysByYears: Ref<IHolidayByYears[]> = ref([])

  const setHolidays = async (code: string, year: number) => {
    let temp = {
      date: year,
      holidays: await getHolidayByYearAndCode(year, code),
      active: false
    }
    holidaysByYears.value.push(temp)
  }

  const resetHolidays = () => {
    holidaysByYears.value = []
  }

  return { holidaysByYears, setHolidays, resetHolidays }
})
