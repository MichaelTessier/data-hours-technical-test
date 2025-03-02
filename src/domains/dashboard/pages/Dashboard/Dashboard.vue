<script setup lang="ts">
  const { t } = useI18n()
  const links = computed(() => [
    {
      label: t('dashboard.navigation.root'),
      to: DASHBOARD_ROUTES.ROOT,
    },
    {
      label: t('dashboard.navigation.analytics'),
      to: DASHBOARD_ROUTES.ANALYTICS,
    },
  ])
</script>

<template>
  <section class="flex min-h-screen w-full flex-col">
    <DashboardHeader :links="links" />

    <div class="flex items-center gap-4 m-4">
      <RouterView />
    </div>
  </section>
</template>
