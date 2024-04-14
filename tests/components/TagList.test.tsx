import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TagList from '../../src/components/TagList';

describe('TagList', () => {
  it('should render todos', async () => {
    render(<TagList />);

    const todoItems = await screen.findAllByTestId('tag-item');
    expect(todoItems.length).toBeGreaterThan(0);
  });
});
