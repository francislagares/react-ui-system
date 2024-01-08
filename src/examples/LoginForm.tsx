import { Button, Input, Text } from '@/components';
import { Box, Stack } from '@/components/Layout';

export const LoginForm = () => {
  return (
    <Box className='rounded-xl border border-gray-300 px-8 py-12'>
      <Stack>
        <Text
          as='h2'
          weight={'bold'}
          align={'center'}
          size={'3xl'}
          className='mb-2'
        >
          Login
        </Text>

        <Text
          as='span'
          emphasis={'low'}
          size={'sm'}
          align={'center'}
          className='mb-8'
        >
          Please enter your credentials to login
        </Text>

        <Text
          as='label'
          htmlFor='username'
          size={'sm'}
          weight={'medium'}
          className='mb-1.5'
        >
          Username
        </Text>
        <Input
          type='text'
          id='username'
          placeholder='Username'
          className='mb-4'
        />

        <Text
          as='label'
          htmlFor='password'
          size={'sm'}
          weight={'medium'}
          className='mb-1.5'
        >
          Password
        </Text>
        <Input id='password' type='password' placeholder={'Password'} />

        <Button type='submit' variant={'solid'} className='mt-10'>
          Login
        </Button>
      </Stack>
    </Box>
  );
};
