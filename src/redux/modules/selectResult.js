const CREATE = 'selectResult/CREATE';

export function createResult(data) {
  return { type: CREATE, data };
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'selectResult/CREATE': {
      return action.data;
    }
    default:
      return state;
  }
}
