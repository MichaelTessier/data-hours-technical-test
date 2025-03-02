<script setup lang="ts">
  import type { HoursData } from './DashboardHoursData/DashboardHours.model'

  const { t } = useI18n()

  const url = `${import.meta.env.VITE_API_URL}/data`
</script>

<template>
  <DashboardLayout :title="t('dashboard.hours.title')">
    <DataProvider :url="url">
      <template #data="{ data }: { data: HoursData }">
        <DashboardHoursData :data="data" />
      </template>
    </DataProvider>
  </DashboardLayout>
</template>
