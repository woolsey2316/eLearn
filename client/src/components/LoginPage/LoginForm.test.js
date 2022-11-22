import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import LoginForm from "./LoginForm";

import MainButtons from "./MainButtons";

import rootReducer from "../../reducers/index";

configure({ adapter: new Adapter() });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
);

describe("Login form", () => {
  it.skip("renders without crashing", () => {
    mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  it("renders buttons for 1st form", () => {
    const loginForm = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const mainButtons = <MainButtons forgotPassword={false} />;
    const loginButton = (
      <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
        Login
      </button>
    );
    const requestPassword = (
      <button
        type="submit"
        className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
      >
        Request Password
      </button>
    );
    const signUp = (
      <a
        href="/signup"
        className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
      >
        Sign up
      </a>
    );
    const resetPassword = (
      <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 mt-5">
        reset password
      </button>
    );
    expect(loginForm.containsMatchingElement(mainButtons)).toEqual(true);
    expect(loginForm.containsMatchingElement(loginButton)).toEqual(true);
    expect(loginForm.containsMatchingElement(signUp)).toEqual(true);
    expect(loginForm.containsMatchingElement(requestPassword)).toEqual(false);
    expect(loginForm.containsMatchingElement(resetPassword)).toEqual(false);
  });

  it("renders buttons for change password page", () => {
    const loginForm = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    // press forgot password button, setting forgotPassword = true
    const forgotPass = loginForm.find("#forgotPass");
    forgotPass.simulate("click");

    const loginButton = (
      <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
        Login
      </button>
    );
    const requestPassword = (
      <button
        type="submit"
        className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
      >
        Request Password
      </button>
    );
    const signUp = (
      <a
        href="/signup"
        className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
      >
        Sign up
      </a>
    );

    expect(loginForm.containsMatchingElement(loginButton)).toEqual(false);
    expect(loginForm.containsMatchingElement(signUp)).toEqual(true);
    expect(loginForm.containsMatchingElement(requestPassword)).toEqual(true);
  });

  it("renders reset button for 2nd form", () => {
    const loginForm = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    // press forgot password button, setting forgotPassword = true
    const forgotPass = loginForm.find("#forgotPass");
    forgotPass.simulate("click");

    // enter email address in form
    const emailField = loginForm.find("#email-field");
    emailField.instance().value = "woolsey2316@gmail.com";
    emailField.simulate("change");

    // submit 1st form
    const form = loginForm.find("form").first();
    form.simulate("submit");

    const resetPassword = (
      <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 mt-5">
        reset password
      </button>
    );

    expect(loginForm.containsMatchingElement(resetPassword)).toEqual(true);
  });
});
