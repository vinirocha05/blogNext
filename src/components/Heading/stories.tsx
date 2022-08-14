import Heading, { HeadingProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'uma coisa qlq',
  },
} as Meta;

export const Heading1: Story<HeadingProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    {' '}
    <Heading {...args} />
  </div>
);
