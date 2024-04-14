import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
  const renderSearchBox = () => {
    const onChange = jest.fn();
    render(<SearchBox onChange={onChange} />);

    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange,
      user: fireEvent,
    };
  };
  it('should call onChange when Enter is pressed', async () => {
    const {input, onChange, user} = renderSearchBox();

    const searchTerm = 'I love React Native';
    user.changeText(input, searchTerm);
    user(input, 'endEditing');

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it('should call onChange when submitButton is pressed', async () => {
    const {input, onChange, user} = renderSearchBox();

    const searchTerm = 'I love React Native';
    user.changeText(input, searchTerm);

    const submitButton = await screen.findByTestId('pressable-check');

    user.press(submitButton);

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it('should not call onChange if input field is empty', () => {
    const {input, onChange, user} = renderSearchBox();

    const searchTerm = '';
    user.changeText(input, searchTerm);
    user(input, 'endEditing');

    expect(onChange).not.toHaveBeenCalled();
  });
});
