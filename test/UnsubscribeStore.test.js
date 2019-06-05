import reducer from "../src/reducer";

test("adds unsubscribe", async () => {
  const state = { unsubscribes: ["a"] };
  const newState = reducer(state, { type: "ADD_UNSUBSCRIBE", payload: "b" });

  expect(newState.unsubscribes).toEqual(["a", "b"]);
});

test("completes unsubscribe", async () => {
  const state = { unsubscribes: ["a", "b"] };
  const newState = reducer(state, { type: "REMOVE_UNSUBSCRIBE", payload: "b" });

  expect(newState.unsubscribes).toEqual(["a"]);
});
