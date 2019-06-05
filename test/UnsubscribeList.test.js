import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../src/context";
import reducer from "../src/reducer";
import UnsubscribeList from "../src/components/UnsubscribeList";

Enzyme.configure({ adapter: new Adapter() });

test("<UnsubscribeList /> #display", async () => {
  const unsubscribes = ["a", "b", "c"];
  const dispatch = () => {};
  const list = mount(
    <Store.Provider value={{ state: { unsubscribes }, dispatch }}>
      <UnsubscribeList />
    </Store.Provider>
  );

  expect(list.find("li").length).toEqual(3);
  expect(
    list
      .find("li")
      .first()
      .html()
  ).toEqual(
    '<li class="list-group__item"><span class="list-group__content">a</span><button class="list-group__button" title="Resubscribe"><span aria-hidden="true">×</span></button></li>'
  );
  expect(
    list
      .find("li")
      .last()
      .html()
  ).toEqual(
    '<li class="list-group__item"><span class="list-group__content">c</span><button class="list-group__button" title="Resubscribe"><span aria-hidden="true">×</span></button></li>'
  );
});

test("<UnsubscribeList /> #completeCalls", async () => {
  const unsubscribes = ["a", "b", "c"];
  const dispatch = jest.fn();
  const list = mount(
    <Store.Provider value={{ state: { unsubscribes }, dispatch }}>
      <UnsubscribeList />
    </Store.Provider>
  );

  list.find("button").forEach(b => b.simulate("click"));
  expect(dispatch.mock.calls.length).toBe(3);
});

test("<UnsubscribeList /> #completeMutates", async () => {
  let state = { unsubscribes: ["a", "b", "c"] };
  const dispatch = action => {
    state = reducer(state, action);
  };
  const list = mount(
    <Store.Provider value={{ state, dispatch }}>
      <UnsubscribeList />
    </Store.Provider>
  );

  await list
    .find("button")
    .last()
    .simulate("click");
  expect(state.unsubscribes.length).toBe(2);
  expect(state.unsubscribes).toEqual(["a", "b"]);
});
