import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = [ '1', '2' ];
    const wrapper = shallowMount(List, {
      propsData: {
        items,
      },
    });
    expect(wrapper.findAll('li')).toHaveLength(items.length);
    // Create Snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    const items = [ 'item 1', 'item 2' ];
    const wrapper = shallowMount(List, {
      propsData: { items },
    });
    // Create Snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
