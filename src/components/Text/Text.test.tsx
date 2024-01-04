import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Text } from './Text';

describe('Text component', () => {
  test('renders correctly with default classNames', () => {
    render(<Text>Hello world!</Text>);

    const text = screen.getByText('Hello world!');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Hello world');
    expect(text).toHaveClass('w-full text-base text-left');
  });

  test('renders correctly with align prop', () => {
    render(<Text align='right'>Hello world!</Text>);

    const text = screen.getByText('Hello world!');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Hello world');
    expect(text).toHaveClass('w-full text-base text-right');
  });

  test('renders correctly with size variant', () => {
    render(<Text size='xl'>Hello world!</Text>);

    const text = screen.getByText('Hello world!');

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Hello world');
    expect(text).toHaveClass('w-full text-xl text-left');
  });
});
