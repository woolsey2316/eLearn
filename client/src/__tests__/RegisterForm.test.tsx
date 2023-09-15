import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterForm from '../pages/RegisterPage/RegisterForm';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store';

describe('<RegisterForm />', () => {
  let submitButton: Element
  let emailTextBox
  let nameTextBox: Element
  let addressTextBox
  const setup = () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );
    submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    emailTextBox = screen.getByRole('textbox', {
      name: /email/i,
    });
    nameTextBox = screen.getByRole('textbox', {
      name: /name/i,
    });
    addressTextBox = screen.getByRole('textbox', {
      name: /address/i,
    });
  };

  test('should accept input', async () => {
    setup();
    const user = userEvent.setup();
    await user.clear(nameTextBox);
    await user.type(nameTextBox, 'fake person');
    userEvent.click(submitButton)
    const emailErrorMessage = screen.getByText('Email is required')
    expect(emailErrorMessage).toHaveValue('Email is required');

  });
});