import { createI18n } from 'vue-i18n'
import dashboardEn from '@/domains/dashboard/messages/en.json'
import functionalEn from '@/domains/functional/messages/en.json'

export const i18n = createI18n({
  fallbackLocale: 'en',
  messages: {
    en: {
      ...dashboardEn,
      ...functionalEn,
    },
  },
})
