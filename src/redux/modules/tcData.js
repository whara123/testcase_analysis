const CREATE = 'tcData/CREATE';

const initialState = { data: [] };

export function createData(data) {
  return { type: CREATE, data };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'tcData/CREATE': {
      return { data: [...state.data, action.data.data] };
    }
    default:
      return state;
  }
}
