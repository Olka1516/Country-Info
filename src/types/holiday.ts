export interface IHoliday {
  counties: string[] | null
  countryCode: string
  date: string
  fixed: boolean
  global: boolean
  launchYear: number | null
  localName: string
  name: string
  types: string[]
}

export interface IHolidayByYears {
  date: number
  holidays: IHoliday[]
  active: boolean
}
