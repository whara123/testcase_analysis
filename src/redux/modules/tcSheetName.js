const CREATE = 'tcSheetName/CREATE';

const initialState = { name: [] };

export function createName(key) {
  return { type: CREATE, key };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE: {
      return { name: [...state.name, action.key] };
    }
    default:
      return state;
  }
}
