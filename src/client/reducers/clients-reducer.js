const initialState = {
  hasErrored: false,
  isLoading: false,
  сlients: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLIENTS_HAS_ERRORED':
      return { ...state, hasErrored: action.hasErrored };

    case 'CLIENTS_IS_LOADING':
      return { ...state, isLoading: action.isLoading };

    case 'CLIENTS_FETCH_DATA_SUCCESS': {
      return { ...state, сlients: action.сlients };
    }

    default:
      return state;
  }
};
