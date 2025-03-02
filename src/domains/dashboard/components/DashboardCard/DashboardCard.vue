<script setup lang="ts">
  import type { IconName } from '@/components/app/Icon/Icon.model'

  interface Props {
    title: string
    content: string | number
    info?: string
    icon?: IconName
  }

  defineProps<Props>()
</script>

<template>
  <Card>
    <CardHeader
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <div class="flex gap-3 items-center">
        <Icon
          v-if="icon"
          class="text-primary"
          :icon="icon"
        />
        <CardTitle
          class="text-sm font-medium"
          data-test="dashboard-card__title"
        >
          {{ title }}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div
        class="text-2xl font-bold text-primary"
        data-test="dashboard-card__content"
      >
        {{ content }}
      </div>
      <p
        v-if="info"
        class="text-xs text-muted-foreground"
        data-test="dashboard-card__info"
      >
        {{ info }}
      </p>
    </CardContent>
  </Card>
</template>
@/domains/functional/components/Icon/Icon.model
