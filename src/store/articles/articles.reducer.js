const name = 'ARTICLES_REDUCER';

export const LOAD_ARTICLES = `${name}/LOAD_ARTICLES`;
export const LOAD_ARTICLES_SUCCESS = `${name}/LOAD_ARTICLES_SUCCESS`;
export const LOAD_ARTICLES_FAILED = `${name}/LOAD_ARTICLES_FAILED`;

export const loadArticlesAction = (term) => ({
  type: LOAD_ARTICLES,
  payload: term,
});

export const loadArticlesSuccess = (data) => ({
  type: LOAD_ARTICLES_SUCCESS,
  payload: data,
});

export const loadArticlesFailed = () => ({
  type: LOAD_ARTICLES_FAILED,
});

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: '',
  term: '',
};

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        term: action.payload,
        loading: true,
        error: '',
      };
    }
    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case LOAD_ARTICLES_FAILED: {
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

export default articlesReducer;
