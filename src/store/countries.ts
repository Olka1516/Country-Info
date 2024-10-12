import { getAllCountries, getNextHoliday } from '@/server'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const countriesStore = defineStore('countriesInfo', () => {
  const countries: Ref<{ countryCode: string; name: string }[]> = ref([])
  const holidays = ref([])

  const getAll = async () => {
    const data = await getAllCountries()
    countries.value = data
  }

  const getHolidays = async (codes: string[]) => {
    for (let i = 0; i < 3; i++) {
      const data = await getNextHoliday(codes[i])
      holidays.value.push(data)
    }
    console.log(holidays.value)
  }

  return { holidays, countries, getAll, getHolidays }
})
