const CREATE = 'tcData/CREATE';

export function createData(data) {
  return { type: CREATE, data };
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'tcData/CREATE': {
      return action.data;
    }
    default:
      return state;
  }
}
