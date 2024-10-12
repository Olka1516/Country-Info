import { getAllCountries } from '@/server'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const countriesStore = defineStore('countriesInfo', () => {
  const countries: Ref<{ countryCode: string; name: string }[]> = ref([])

  const getAll = async () => {
    const data = await getAllCountries()
    countries.value = data
  }

  return { countries, getAll }
})
