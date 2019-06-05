import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../src/context";
import UnsubscribeForm from "../src/components/UnsubscribeForm";

Enzyme.configure({ adapter: new Adapter() });

test("<UnsubscribeForm /> #addUnsubscribe", async () => {
  const dispatch = jest.fn();
  const form = mount(
    <Store.Provider value={{ dispatch }}>
      <UnsubscribeForm />
    </Store.Provider>
  );

  form
    .find("input")
    .simulate("change", { target: { value: "a new unsubscribe" } });
  form.find("button").simulate("click");

  expect(dispatch).toBeCalledWith({
    type: "ADD_UNSUBSCRIBE",
    payload: "a new unsubscribe"
  });
});
