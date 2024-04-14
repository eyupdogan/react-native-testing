import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import ExpandableText from '../../src/components/ExpandableText';

describe('ExpandableText', () => {
  const limit = 255;
  const longText = 'a'.repeat(256);
  const truncatedText = longText.substring(0, limit) + '...';
  it('should render original text when text length smaller than limit', () => {
    const text = 'I love React Native';
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeOnTheScreen();
  });

  it('should truncate text if longer than limit character', () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeOnTheScreen();

    const button = screen.getByText(/more/i);
    expect(button).toBeOnTheScreen();
  });

  it('should expand text when show more button is pressed', () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole('button', {name: /more/i});
    fireEvent.press(showMoreButton);

    expect(screen.getByText(longText)).toBeOnTheScreen();

    const showLessButton = screen.getByRole('button', {name: /less/i});
    expect(showLessButton).toBeOnTheScreen();
  });

  it('should collapse text when show less button pressed', () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole('button', {name: /more/i});
    fireEvent.press(showMoreButton);

    const showLessButton = screen.getByRole('button', {name: /less/i});
    fireEvent.press(showLessButton);
    expect(screen.getByText(truncatedText)).toBeOnTheScreen();

    expect(showMoreButton).toHaveTextContent(/more/i);
  });
});
