import React from 'react';
import {render, screen} from '@testing-library/react-native';
import UserAccount, {User} from '../../src/components/UserAccount';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = {
      id: 1,
      name: 'Eyup',
    };

    const {getByText} = render(<UserAccount user={user} />);

    expect(getByText(/user profile/i)).toBeTruthy();
  });

  it('should render edit button if user is admin', () => {
    const user: User = {
      id: 1,
      name: 'Eyup',
      isAdmin: true,
    };

    render(<UserAccount user={user} />);

    expect(screen.getByText(/edit/i)).toBeTruthy();
  });
});
