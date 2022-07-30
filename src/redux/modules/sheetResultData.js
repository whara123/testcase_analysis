const CREATE = 'sheetResultData/CREATE';

const initialState = { data: [] };

export function createSheetResultData(data) {
  return { type: CREATE, data };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE: {
      return { data: [...state.data, action.data.count] };
    }
    default:
      return state;
  }
}
