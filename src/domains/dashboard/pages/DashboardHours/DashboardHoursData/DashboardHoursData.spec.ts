import { mount } from '@vue/test-utils'
import DashboardHoursData from './DashboardHoursData.vue'
import receveid from './__data-test__/receveid.json'

describe('DashboardHoursData', async () => {
  it('should display correctly if data exists', async () => {
    const wrapper = mount(DashboardHoursData, {
      props: {
        data: receveid,
      },
      global: {
        stubs: ['DashboardChartBar', 'DashboardCard'],
      },
    })

    const dashboardHoursData = wrapper.findComponent({
      name: 'DashboardHoursData',
    })

    expect(
      dashboardHoursData
        .find('[data-test="dashboard-hours__overall-hourly-average"]')
        .exists(),
    ).toEqual(true)

    expect(
      dashboardHoursData
        .find('[data-test="dashboard-hours__highest-average"]')
        .exists(),
    ).toEqual(true)

    expect(
      dashboardHoursData
        .find('[data-test="dashboard-hours__lowest-average"]')
        .exists(),
    ).toEqual(true)

    expect(
      dashboardHoursData.find('[data-test="dashboard-hours__chart"]').exists(),
    ).toEqual(true)
  })
})
