<script setup lang="ts">
  import type { DashboardChartBarProps } from './DashboardChartBar.model'

  interface Props {
    switchLabel?: string
  }

  defineProps<Props & DashboardChartBarProps>()

  const id = useId()

  const emit = defineEmits<{
    'update:checked': [payload: boolean]
  }>()

  const isChecked = ref(false)

  const onUpdateChecked = (payload: boolean) => {
    isChecked.value = payload
    emit('update:checked', payload)
  }
</script>

<template>
  <Card>
    <CardHeader
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <CardTitle
        class="text-2xl font-bold mb-4"
        data-test="dashboard-chart-bar__title"
      >
        {{ title }}
      </CardTitle>

      <div
        v-if="switchLabel"
        class="flex items-center space-x-2"
      >
        <Switch
          :id="id"
          @update:checked="onUpdateChecked"
        />
        <Label
          :for="id"
          data-test="dashboard-chart-bar__label"
        >
          {{ switchLabel }}
        </Label>
      </div>
    </CardHeader>
    <CardContent>
      <BarChart
        :key="isChecked.toString()"
        :data="data"
        :index="index"
        :categories="categories"
        :show-tooltip="false"
        :show-legend="false"
      />
    </CardContent>
  </Card>
</template>
