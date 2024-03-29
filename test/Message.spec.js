import { shallowMount } from '@vue/test-utils';
import Message from '@/components/Message.vue';

describe('Message', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Message, {
      propsData: { msg },
    });
    expect(wrapper.text()).toBe(msg);
    // Create Snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'default message';
    const wrapper = shallowMount(Message);
    expect(wrapper.text()).toBe(defaultMessage);
    // Create Snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
