import { mount } from '@vue/test-utils'
import DashboardHeader from './DashboardHeader.vue'

describe('DashboardHeader', () => {
  it('should display correctly', () => {
    const wrapper = mount(DashboardHeader, {
      props: {
        links: [
          {
            label: 'label 1',
            to: 'to 1',
          },
          {
            label: 'label 2',
            to: 'to 2',
          },
        ],
      },
      global: {
        stubs: ['router-link'],
      },
    })

    const links = wrapper.findAllComponents({ name: 'RouterLink' })

    expect(links.length).toEqual(2)
    expect(links[1].props('to')).toEqual({
      name: 'to 2',
    })
  })
})
