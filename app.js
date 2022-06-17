import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// REDUX CODE
///////////////////////////////////

const increment = () => {
  return { type: 'increment' };
};

const incrementby = (value) => {
  return { type: 'incrementby', payload: value };
};

const decrement = () => {
  return { type: 'decrement' };
};

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'incrementby':
      return state + action.payload;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////

const render = () => {
  ReactDOM.render(<CounterApp state={store.getState()} />, document.getElementById('root'));
};

// Render once with the initial state.
// Subscribe render to changes to the store's state.
render();
function CounterApp(props) {
  const store = props.state;
  const onIncrementButtonClicked = () => {
    store.dispatch(increment());
  };

  const onDecrementButtonClicked = () => {
    store.dispatch(decrement());
  };

  return (
    <div id="counter-app">
      <h1> {store} </h1>
      <button onClick={onIncrementButtonClicked}>+</button>
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  );
}

store.subscribe(render);
