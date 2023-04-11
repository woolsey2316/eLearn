import React from 'react'
import TaskModalContent from './TaskModalContent'
import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
);

const AllTheProviders = ({children}) => {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

describe("Task form render Page", () => {
  it('renders the Task form', () => {
    customRender(<TaskModalContent/>);
    expect(screen.getByText(/Add a new Task/i)).toBeInTheDocument();
  });

  it('render 2 input components', () => {
    customRender(<TaskModalContent/>);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/due/i)).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    customRender(<TaskModalContent/>);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});