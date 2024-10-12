import { getCountryInfo, getHolidayByYearAndCode } from '@/server'
import { IHolidayByYears } from '@/types'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const holidaysStore = defineStore('holidaysInfo', () => {
  const holidaysByYears: Ref<IHolidayByYears[]> = ref([])
  const country = ref('')

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
    country.value = ''
  }

  const setCountry = async (code: string) => {
    const data = await getCountryInfo(code)
    country.value = data.commonName
  }

  return { holidaysByYears, setHolidays, resetHolidays, country, setCountry }
})
