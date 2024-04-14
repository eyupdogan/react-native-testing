import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
  it('should render hello with name when the name is provided', () => {
    render(<Greet name="Eyup" />);

    expect(screen.getByText(/hello eyup/i)).toBeTruthy();
  });

  it('should render login button when name is not provided', () => {
    render(<Greet />);

    expect(screen.getByText(/login/i)).toBeTruthy();
  });
});
