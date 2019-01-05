import { addArticles } from '../actions';

export const fetchArticles = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response.statusText);
      }
      const result = await response.json();
      console.log(result.articles);
      dispatch(addArticles(result.articles));
    } catch (error) {
      console.log(error);
    }
  }
}