const name = 'BOOKS_REDUCER';

export const LOAD_BOOKS = `${name}/LOAD_BOOKS`;
export const LOAD_BOOKS_SUCCESS = `${name}/LOAD_BOOKS_SUCCESS`;
export const LOAD_BOOKS_FAILED = `${name}/LOAD_BOOKS_FAILED`;

export const loadBooksAction = (term) => ({
  type: LOAD_BOOKS,
  payload: term,
});

export const loadBooksSuccess = (data) => ({
  type: LOAD_BOOKS_SUCCESS,
  payload: data,
});

export const loadBooksFailed = () => ({
  type: LOAD_BOOKS_FAILED,
});

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: '',
  term: '',
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      return {
        ...state,
        term: action.payload,
        loading: true,
        error: '',
      };
    }
    case LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case LOAD_BOOKS_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'LOADING ERROR',
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
