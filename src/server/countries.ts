import http from '../http-common'

export const getAllCountries = async () => {
  const data = await http.get('/api/v3/AvailableCountries')
  return data.data
}

export const getNextHoliday = async (code: string) => {
  const data = await http.get('/api/v3/NextPublicHolidays/' + code)
  return data.data
}

export const getHolidayByYearAndCode = async (year: number, code: string) => {
  const data = await http.get(`/api/v3/PublicHolidays/${year}/${code}`)
  return data.data
}
