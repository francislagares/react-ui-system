import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/components/Layout';

import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Stack className='gap-4 bg-gray-300 p-4' {...args}>
      <Box className='h-[100px] w-[100px] bg-blue-500' />
      <Box className='h-[100px] w-[100px] bg-red-500' />
      <Box className='h-[100px] w-[100px] bg-green-500' />
    </Stack>
  ),
};
