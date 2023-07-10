// customBlock.stories.ts|tsx

import customBlock from '../components/customBlock';
import block from './block.mdx';

export default {
  component: customBlock,
  tags: ['autodocs'],
};

export const FirstStory = {
  args: {
    title: '我是标题',
  },
};

export const 调用展示 = (args) => ({ // 渲染组件
  components: { customBlock },
  setup() {
    return {
      ...args,
    };
  },
  template: '<customBlock title="我是标题">我是内容</customBlock>',
});

export const Expriment = () => ({ // 渲染组件
  docs: {
    page: block,
  },
});
