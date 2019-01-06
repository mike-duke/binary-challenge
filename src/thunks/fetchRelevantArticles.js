import { addRelevantArticles } from '../actions';

export const fetchRelevantArticles = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response.statusText);
      }
      const result = await response.json();
      dispatch(addRelevantArticles(result.articles));
    } catch (error) {
      console.log(error);
    }
  }
}