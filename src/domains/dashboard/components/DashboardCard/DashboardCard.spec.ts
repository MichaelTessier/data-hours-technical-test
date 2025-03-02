import { mount } from '@vue/test-utils'
import DashboardCard from './DashboardCard.vue'

describe('DashboardCard', () => {
  it('should display correctly', () => {
    const wrapper = mount(DashboardCard, {
      props: {
        title: 'title',
        content: 'content',
        info: 'info',
      },
    })

    expect(wrapper.find('[data-test="dashboard-card__title"]').text()).toEqual(
      'title',
    )

    expect(
      wrapper.find('[data-test="dashboard-card__content"]').text(),
    ).toEqual('content')

    expect(wrapper.find('[data-test="dashboard-card__info"]').text()).toEqual(
      'info',
    )
  })

  it('should NOT display info if missing', async () => {
    const wrapper = mount(DashboardCard, {
      props: {
        title: 'title',
        content: 'content',
        info: 'info',
      },
    })

    expect(wrapper.find('[data-test="dashboard-card__info"]').text()).toEqual(
      'info',
    )

    await wrapper.setProps({
      info: undefined,
    })

    expect(wrapper.find('[data-test="dashboard-card__info"]').exists()).toBe(
      false,
    )
  })
})
