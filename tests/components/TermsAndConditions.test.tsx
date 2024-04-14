import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TermsAndConditions from '../../src/components/TermsAndConditions';

describe('TermsAndConditions', () => {
  const renderComponent = async () => {
    render(<TermsAndConditions />);

    return {
      termsAndConditionsText: screen.getByText('Terms & Conditions'),
      pressable: await screen.findByTestId('pressable-check'),
      submitButton: screen.getByText('Submit'),
    };
  };
  it('should render with correct text and initial state', async () => {
    const {termsAndConditionsText, pressable, submitButton} =
      await renderComponent();

    expect(termsAndConditionsText).toBeTruthy();

    expect(pressable).toBeDefined();

    expect(submitButton).toBeTruthy();
    expect(submitButton).toBeDisabled();
  });

  it('should enable the button when the check is checked', async () => {
    const {termsAndConditionsText, pressable, submitButton} =
      await renderComponent();

    expect(termsAndConditionsText).toBeTruthy();

    expect(pressable).toBeDefined();

    fireEvent.press(pressable);
    expect(screen.getByText('Checked')).toBeTruthy();

    expect(submitButton).toBeTruthy();
    expect(submitButton).toBeEnabled();
  });
});
