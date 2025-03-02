import { mount } from '@vue/test-utils'
import DashboardChartBar from './DashboardChartBar.vue'

const options = {
  props: {
    title: 'title',
    switchLabel: 'switchLabel',
    index: 'name',
    categories: ['test'],
    data: [
      {
        name: 'name',
        value: 'value',
      },
    ],
  },
  global: {
    stubs: ['BarChart'],
  },
}

describe('DashboardChartBar', () => {
  it('should display correctly', async () => {
    const wrapper = mount(DashboardChartBar, options)

    expect(
      wrapper.find('[data-test="dashboard-chart-bar__title"]').text(),
    ).toEqual('title')

    expect(
      wrapper.find('[data-test="dashboard-chart-bar__label"]').text(),
    ).toEqual('switchLabel')

    await wrapper.findComponent({ name: 'Switch' }).emitted('update:checked')
  })

  it('should emit correctly', async () => {
    const wrapper = mount(DashboardChartBar, options)

    await wrapper
      .findComponent({ name: 'Switch' })
      .vm.$emit('update:checked', true)

    expect(wrapper.emitted('update:checked')).toEqual([[true]])
  })
})
