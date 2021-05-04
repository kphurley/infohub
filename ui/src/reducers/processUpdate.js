export default function processUpdate(state, action) {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.data };
    default:
      return state;
  }
}
