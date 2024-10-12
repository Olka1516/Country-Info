import { getAllCountries, getNextHoliday } from '@/server'
import { ICountryProps, IHoliday } from '@/types'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const countriesStore = defineStore('countriesInfo', () => {
  const countries: Ref<ICountryProps[]> = ref([])
  const holidays: Ref<IHoliday[][]> = ref([])

  const getAll = async () => {
    const data = await getAllCountries()
    countries.value = data
  }

  const getHolidays = async (codes: string[]) => {
    let temp = []
    for (let i = 0; i < 3; i++) {
      const data = await getNextHoliday(codes[i])
      temp.push(data)
    }
    holidays.value = temp
  }

  return { holidays, countries, getAll, getHolidays }
})
