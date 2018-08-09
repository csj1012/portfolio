// State arg is not application state, only the state that this reducer is responsible for.
export default function(state = null, action) {
  switch (action.type) {
    case 'get_project':
      return action.payload;
  }

  return state;
}
