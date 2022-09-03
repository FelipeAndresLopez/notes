import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  const { type } = action;

  switch (type) {
    case "@counter/incremented":
      return state + 1;

    case "@counter/decremented":
      return state - 1;

    default:
      return 0;
  }
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const actionIncremented = {
  type: "@counter/incremented"
};
const actionDecremented = {
  type: "@counter/decremented"
};

const actionReset = {
  type: "@counter/reset"
};

store.getState();

const App = () => {
  return (
    <div>
      {store.getState()}
      <div>
        <button onClick={() => store.dispatch(actionIncremented)}>Increase + </button>
        <button onClick={() => store.dispatch(actionDecremented)}>Decrease -</button>
        <button onClick={() => store.dispatch(actionReset)}>Reset</button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />)
}
renderApp();

store.subscribe(renderApp);
