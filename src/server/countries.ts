import http from '../http-common'

export const getAllCountries = async () => {
  const data = await http.get('/api/v3/AvailableCountries')
  return data.data
}
