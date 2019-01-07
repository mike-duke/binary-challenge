import { addRelevantArticles, addErrorMessage } from '../actions';

export const fetchRelevantArticles = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else if (response.ok && response.totalResults <= 0) {
        throw Error('There are no articles that match this query');
      }
      const result = await response.json();
      dispatch(addRelevantArticles(result.articles));
    } catch (error) {
      dispatch(addErrorMessage(error.message))
    }
  }
}