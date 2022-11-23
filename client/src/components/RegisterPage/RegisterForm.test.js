import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../reducers/index";
import thunk from "redux-thunk";
import RegisterForm from "./RegisterForm";

configure({ adapter: new Adapter() });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
);

describe("Register form", () => {
  it("error messages below form inputs show", () => {
    const registerForm = mount(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );
    const form = registerForm.find("form");
    form.simulate("submit");
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Email is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Full Name is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Address is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Gender is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Area is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">State is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">ClassName is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Mobile is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode must be 6 digits long</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">School is required</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Password is required</div>
      )
    ).toEqual(true);
  });

  it("does not show error message below form inputs", () => {
    const registerForm = mount(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    // Entering values into form
    const emailField = registerForm.find("input[name='email']");
    emailField.instance().value = "woolsey2316@gmail.com";
    emailField.simulate("change");

    const fullNameField = registerForm.find("input[name='name']");
    fullNameField.instance().value = "Richard Rohr";
    fullNameField.simulate("change");

    const addressField = registerForm.find("input[name='address']");
    addressField.instance().value = "123 fake street";
    addressField.simulate("change");

    const genderField = registerForm.find("input[name='gender']");
    genderField.instance().value = "gender";
    genderField.simulate("change");

    const areaField = registerForm.find("input[name='area']");
    areaField.instance().value = "area";
    areaField.simulate("change");

    const stateField = registerForm.find("input[name='state']");
    stateField.instance().value = "state";
    stateField.simulate("change");

    const classNameField = registerForm.find("input[name='className']");
    classNameField.instance().value = "class";
    classNameField.simulate("change");

    const mobileField = registerForm.find("input[name='mobile']");
    mobileField.instance().value = "04123456";
    mobileField.simulate("change");

    const pincodeField = registerForm.find("input[name='pincode']");
    pincodeField.instance().value = "123456";
    pincodeField.simulate("change");

    const schoolField = registerForm.find("input[name='school']");
    schoolField.instance().value = "school";
    schoolField.simulate("change");

    const passwordField = registerForm.find("input[name='password']");
    passwordField.instance().value = "password";
    passwordField.simulate("change");

    const password2Field = registerForm.find("input[name='password2']");
    password2Field.instance().value = "password";
    password2Field.simulate("change");

    const form = registerForm.find("form");
    form.simulate("submit");
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Email is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Full Name is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Address is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Gender is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Area is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">State is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">ClassName is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Mobile is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode must be 6 digits long</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">
          Pincode must be only composed of digits
        </div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">School is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Password is required</div>
      )
    ).toEqual(false);
  });

  it("pincode errors display appropriately", () => {
    const registerForm = mount(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    // pincode is valid
    const pincodeField = registerForm.find("input[name='pincode']");
    pincodeField.instance().value = "123456";
    pincodeField.simulate("change");

    registerForm.simulate("submit");
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode must be 6 digits long</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">
          Pincode must be only composed of digits
        </div>
      )
    ).toEqual(false);

    // pincode is invalid as it contains letters
    pincodeField.instance().value = "12345r";
    pincodeField.simulate("change");

    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode must be 6 digits long</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">
          Pincode must be only composed of digits
        </div>
      )
    ).toEqual(true);

    // pincode is invalid as it contains letters
    pincodeField.instance().value = "12345rrrr";
    pincodeField.simulate("change");

    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode is required</div>
      )
    ).toEqual(false);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">Pincode must be 6 digits long</div>
      )
    ).toEqual(true);
    expect(
      registerForm.containsMatchingElement(
        <div className="text-theme-6 mt-2">
          Pincode must be only composed of digits
        </div>
      )
    ).toEqual(true);
  });
});
