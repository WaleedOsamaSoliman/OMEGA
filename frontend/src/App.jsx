import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import React from "react";
import { Context } from "./assets/context/mainContext";
import { payload } from "./config/payload";
import { reducer } from "./assets/functions/reducer";
import AppContainer from "./assets/components/AppContainer";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, payload);

  return (
    <CustomProvider theme={state.theme}>
      <Context.Provider value={[state, dispatch]}>
        <AppContainer />
      </Context.Provider>
    </CustomProvider>
  );
}
