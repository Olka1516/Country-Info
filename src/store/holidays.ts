import { getHolidayByYearAndCode, getNextHoliday } from '@/server'
import { IHoliday, IHolidayByYears } from '@/types'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const holidaysStore = defineStore('holidaysInfo', () => {
  const holidays: Ref<IHoliday[]> = ref([])
  const holidaysByYears: Ref<IHolidayByYears[]> = ref([])

  const getAll = async (code: string) => {
    const data = await getNextHoliday(code)
    holidays.value = data
  }

  const setHolidays = async (code: string) => {
    const year = 2020
    for (let i = 0; i <= 10; i++) {
      holidaysByYears.value.push({
        date: year + i,
        holidays: await getHolidayByYearAndCode(year + i, code),
        active: new Date().getFullYear() === year + i ? true : false
      })
    }
  }

  return { holidays, holidaysByYears, getAll, setHolidays }
})
