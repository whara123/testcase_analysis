const CREATE = 'selectSheet/CREATE';

export function createSelect(data) {
  return { type: CREATE, data };
}

export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case 'selectSheet/CREATE': {
      return action.data;
    }
    default:
      return state;
  }
}
