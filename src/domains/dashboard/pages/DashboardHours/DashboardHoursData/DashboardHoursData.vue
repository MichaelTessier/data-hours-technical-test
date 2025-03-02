<script setup lang="ts">
  import type { HoursData } from './DashboardHours.model'

  interface Props {
    data: HoursData
  }

  const props = defineProps<Props>()

  const { t } = useI18n()

  const hourlyAveragesByWeekdayFormatted = computed<DashboardChartBarProps>(
    () => {
      return {
        title: t('dashboard.hours.hourlyAverages'),
        index: 'day',
        categories: ['average'],
        data:
          Object.entries(props.data.hourlyAveragesByWeekday ?? {}).map(
            ([key, value]) => {
              return {
                day: t(`dashboard.day.${key}`),
                average: value.toString(),
              }
            },
          ) ?? [],
      }
    },
  )

  const hourlyAveragesByFormatted = computed<DashboardChartBarProps>(() => {
    return {
      title: t('dashboard.hours.hourlyAverages'),
      index: 'hours',
      categories: ['average'],
      data:
        Object.entries(props.data.hourlyAverages ?? {}).map(([key, value]) => {
          return {
            hour: key.toString(),
            average: value.toString(),
          }
        }) ?? [],
    }
  })

  const chartBarAveragesSelected = ref(hourlyAveragesByFormatted.value)

  const onUpdateChecked = (payload: boolean) => {
    chartBarAveragesSelected.value = payload
      ? hourlyAveragesByWeekdayFormatted.value
      : hourlyAveragesByFormatted.value
  }
</script>

<template>
  <div
    class="flex flex-col gap-4"
    data-test="dashboard-hours__data"
  >
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <DashboardCard
        v-if="data.overallHourlyAverage"
        :title="t('dashboard.hours.overallHourlyAverage')"
        :content="data.overallHourlyAverage"
        icon="arrow-up-wide-narrow"
        data-test="dashboard-hours__overall-hourly-average"
      />
      <DashboardCard
        v-if="data.hourWithHighestAverage"
        :title="t('dashboard.hours.hourWithHighestAverage')"
        :content="data.hourWithHighestAverage.value"
        :info="data.hourWithHighestAverage.time"
        icon="arrow-up-right"
        data-test="dashboard-hours__highest-average"
      />
      <DashboardCard
        v-if="data.hourWithLowestAverage"
        :title="t('dashboard.hours.hourWithLowestAverage')"
        :content="data.hourWithLowestAverage.value"
        :info="data.hourWithLowestAverage.time"
        icon="arrow-down-right"
        data-test="dashboard-hours__lowest-average"
      />
    </div>

    <div>
      <DashboardChartBar
        data-test="dashboard-hours__chart"
        :title="chartBarAveragesSelected.title"
        :categories="chartBarAveragesSelected.categories"
        :index="chartBarAveragesSelected.index"
        :data="chartBarAveragesSelected.data"
        :switch-label="'By weekday'"
        @update:checked="onUpdateChecked"
      />
    </div>
  </div>
</template>
./DashboardHours.model
