import { addRelevantArticles, addErrorMessage, isLoading } from '../actions';

export const fetchRelevantArticles = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else if (response.ok && response.totalResults <= 0) {
        throw Error('There are no articles that match this query');
      }
      dispatch(isLoading(false));
      const result = await response.json();
      dispatch(addRelevantArticles(result.articles));
    } catch (error) {
      dispatch(addErrorMessage(error.message))
    }
  }
}