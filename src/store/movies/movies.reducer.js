const name = 'MOVIES_REDUCER';

export const LOAD_MOVIES = `${name}/LOAD_MOVIES`;
export const LOAD_MOVIES_SUCCESS = `${name}/LOAD_MOVIES_SUCCESS`;
export const LOAD_MOVIES_FAILED = `${name}/LOAD_MOVIES_FAILED`;
export const MOVIE_DETAIL = `${name}/MOVIE_DETAIL`;
export const MOVIE_DETAIL_SUCCESS = `${name}/MOVIE_DETAIL_SUCCESS`;

export const loadMoviesAction = (term) => ({
  type: LOAD_MOVIES,
  payload: term,
});

export const loadMoviesSuccess = (top, popular) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: {
    popular,
    top,
  },
});

export const loadMoviesFailed = () => ({
  type: LOAD_MOVIES_FAILED,
});

export const loadMovieDetail = (id) => ({
  type: MOVIE_DETAIL,
  payload: id,
});

export const loadMovieDetailSuccess = (details) => ({
  type: MOVIE_DETAIL_SUCCESS,
  payload: details,
});

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: '',
  term: '',
  popular: {},
  top: [],
  id: '',
  details: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return {
        ...state,
        term: action.payload,
        loading: true,
        error: '',
      };
    }
    case LOAD_MOVIES_SUCCESS: {
      return {
        ...state,
        popular: action.payload.popular,
        top: action.payload.top,
        loading: false,
      };
    }
    case LOAD_MOVIES_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'LOADING ERROR',
      };
    }
    case MOVIE_DETAIL: {
      return {
        ...state,
        loading: false,
        id: action.payload,
      };
    }
    case MOVIE_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
