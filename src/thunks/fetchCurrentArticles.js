import { addCurrentArticles } from '../actions';

export const fetchCurrentArticles = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response.statusText);
      }
      const result = await response.json();
      dispatch(addCurrentArticles(result.articles));
    } catch (error) {
      console.log(error);
    }
  }
}