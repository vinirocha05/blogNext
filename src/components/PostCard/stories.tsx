import PostCard, { PostCardProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default title',
    cover:
      'https://blog.rocketseat.com.br/content/images/2019/03/TypeScript_Vantagens_mitos_e_aplicacoes.png',
  },
} as Meta;

export const Typescript: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    {' '}
    <PostCard {...args} />
  </div>
);

export const Javascript: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    {' '}
    <PostCard {...args} />
  </div>
);

Javascript.args = {
  cover:
    'https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg',
};
