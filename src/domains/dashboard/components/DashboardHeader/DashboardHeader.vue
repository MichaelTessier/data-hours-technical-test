<script setup lang="ts">
  interface Link {
    label: string
    to: string
  }

  interface Props {
    links: Link[]
  }

  defineProps<Props>()
</script>

<template>
  <header
    class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4"
  >
    <nav class="flex gap-6 text-lg font-medium">
      <RouterLink
        v-for="(link, index) in links"
        :key="index"
        :to="{
          name: link.to,
        }"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
