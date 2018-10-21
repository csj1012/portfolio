// State arg is not application state, only the state that this reducer is responsible for.
export default function(state = null, action) {
  switch (action.type) {
    case 'select_project':
      console.log(action);
      return action.payload;
  }

  return state;
}
