const CREATE = 'bugData/CREATE';
const RESET = 'bugData/RESET';

const initialState = { issueData: [], isLoading: false };

export function createBugData(issueData, isLoading) {
  return { type: CREATE, issueData, isLoading };
}

export function resetBugData() {
  return { type: RESET };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bugData/CREATE': {
      return {
        issueData: [...state.issueData, ...action.issueData.issueData],
        isLoading: action.isLoading,
      };
    }
    case 'bugData/RESET': {
      return { issueData: [], isLoading: false };
    }
    default:
      return state;
  }
}
