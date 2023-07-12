// customBlock.stories.ts|tsx

import customBlock from '../../../components/custom-block';
import block from './block.mdx';

export default {
  title: 'demo/CustomBlock',
  component: customBlock,
  tags: ['autodocs'],
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
  args: {
    title: '我是标题',
  },
  docs: {
    page: block,
  },
});
