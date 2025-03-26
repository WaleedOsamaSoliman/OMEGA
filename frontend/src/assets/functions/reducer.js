export const reducer = (currentState, action) => {
  const newState = JSON.parse(JSON.stringify(currentState));

  // add some actions
  switch (action.type) {
    case "change.theme":
      action.isDark ? (newState.theme = "light") : (newState.theme = "dark");
      return newState;
    default:
      return newState;
  }
};
