import { Plus } from '@element-plus/icons-vue';
import uploadCard from '../../components/upload-card';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'form/uploadCard',
  component: uploadCard,
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
export const 拖拽排序 = {
  args: {
    draggable: true,
    limit: '4',
    icon: 'Plus',
  },
};

export const 图片上传前裁切 = {
  args: {
    label: 'Button',
    title: '开启剪裁',
    cropper: true,
    compress: '1',
  },
};
