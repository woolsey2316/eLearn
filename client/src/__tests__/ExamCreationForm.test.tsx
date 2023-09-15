import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-canvas-mock'
import { CreateExam } from '../pages/CreateExam/CreateExam';
import { Provider } from 'react-redux';
import store from '../store';

describe('<ExamCreationForm />', () => {
  const setup = () => {
    render(
      <Provider store={store}>
        <CreateExam/>
      </Provider>
    );
  };

  test('It should not allow letters to be inputted', () => {
    setup()
    const input = screen.getByRole("textbox", {name: /input 0/i});
    expect(input.innerHTML).toBe('') // empty before
    fireEvent.change(input, {target: {value: 'Good Day'}})
    expect(input.innerHTML).toBe('') // empty after
  })
});