const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

const counterReducer = (state=0,action) => {
  switch(action.type){
    case INCREMENT:
    state++;
    break;
    case DECREMENT:
    state--;
    break;
    default:
    break;
  }
  return state;
}; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => ({type: INCREMENT}); // define an action creator for incrementing

const decAction = () => ({type: DECREMENT}); // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers
