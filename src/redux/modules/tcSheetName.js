const CREATE = 'tcSheetName/CREATE';

export function createName(key) {
  return { type: CREATE, key };
}

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE: {
      return action.key;
    }
    default:
      return state;
  }
}
