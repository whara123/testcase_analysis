const CREATE = 'bugData/CREATE';

export function createBugData(issueData, isLoading) {
  return { type: CREATE, issueData, isLoading };
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'bugData/CREATE': {
      return { issueData: action.issueData, isLoading: action.isLoading };
    }
    default:
      return state;
  }
}
