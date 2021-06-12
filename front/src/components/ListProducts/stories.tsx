import { Story, Meta } from '@storybook/react/types-6-0';
import ListProducts from '.';

export default {
  title: 'ListProducts',
  component: ListProducts,
} as Meta;

export const Default: Story = () => <ListProducts />;
Default.args = {};
