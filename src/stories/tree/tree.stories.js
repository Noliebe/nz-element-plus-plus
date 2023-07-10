// import MyButton from '@/components/button/button.vue';
import ledgerTree from '../../components/ledgerTree';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'demo/ledgerTree',
  component: ledgerTree,
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
        dataSource: [
          {
            id: 1,
            label: 'Level one 1',
            children: [
              {
                id: 4,
                label: 'Level two 1-1',
                children: [
                  {
                    id: 9,
                    label: 'Level three 1-1-1',
                  },
                  {
                    id: 10,
                    label: 'Level three 1-1-2',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: 'Level one 2',
            children: [
              {
                id: 5,
                label: 'Level two 2-1',
              },
              {
                id: 6,
                label: 'Level two 2-2',
              },
            ],
          },
          {
            id: 3,
            label: 'Level one 3',
            children: [
              {
                id: 7,
                label: 'Level two 3-1',
              },
              {
                id: 8,
                label: 'Level two 3-2',
              },
            ],
          },
        ],
      };
    },
    components: {
      ledgerTree,
    },
    template: '<ledgerTree :data="dataSource" />',
  }),
};
