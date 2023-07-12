// import MyButton from '@/components/button/button.vue';
import arrayStore from '../../../components/array-store';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'data/array-store',
  component: arrayStore,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const LoggedIn = {
  render: () => ({
    data() {
      return {
        dataList: [],
      };
    },
    components: {
      arrayStore,
    },
    template: '<arrayStore v-model="dataList" />',
  }),
};
