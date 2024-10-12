import http from '../http-common'

export const getAllCountries = async () => {
  const data = await http.get('/AvailableCountries')
  return data.data
}

export const getNextHoliday = async (code: string) => {
  const data = await http.get('/NextPublicHolidays/' + code)
  return data.data
}

export const getHolidayByYearAndCode = async (year: number, code: string) => {
  const data = await http.get(`/PublicHolidays/${year}/${code}`)
  return data.data
}

export const getCountryInfo = async (code: string) => {
  const data = await http.get('/CountryInfo/' + code)
  return data.data
}
