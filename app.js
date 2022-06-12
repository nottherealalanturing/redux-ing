const initialState = { supplies: 100, distance: 0, days: 0, cash: 200 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case 'travel': {
      if (state.supplies - action.payload < 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        days: state.days + action.payload,
        distance: state.distance + 10 * action.payload,
      };
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    case 'sell': {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5,
      };
    }
    case 'buy': {
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15,
      };
    }
    case 'theft': {
      return {
        ...state,
        cash: state.cash / 15,
      };
    }
    default:
      return state;
  }
};

let wagon = reducer(undefined, {});
wagon = reducer(wagon, { type: 'travel', payload: 1 });
wagon = reducer(wagon, { type: 'gather' });
wagon = reducer(wagon, { type: 'tippedWagon' });
wagon = reducer(wagon, { type: 'travel', payload: 3 });
wagon = reducer(wagon, { type: 'buy' });
wagon = reducer(wagon, { type: 'buy' });
wagon = reducer(wagon, { type: 'sell' });
wagon = reducer(wagon, { type: 'theft' });

console.log(wagon);
