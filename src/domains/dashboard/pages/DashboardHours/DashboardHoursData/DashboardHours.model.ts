export interface HoursData {
  overallHourlyAverage: number
  hourlyAverages: HourlyAverages
  hourlyAveragesByWeekday: HourlyAveragesByWeekday
  hourWithHighestAverage: HourWithHighestAverage
  hourWithLowestAverage: HourWithLowestAverage
}

export interface HourlyAverages {
  '0': number
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '7': number
  '8': number
  '9': number
  '10': number
  '11': number
  '12': number
  '13': number
  '14': number
  '15': number
  '16': number
  '17': number
  '18': number
  '19': number
  '20': number
  '21': number
  '22': number
  '23': number
}

export interface HourlyAveragesByWeekday {
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '7': number
}

export interface HourWithHighestAverage {
  value: number
  time: string
}

export interface HourWithLowestAverage {
  value: number
  time: string
}
