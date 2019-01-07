import { fetchRelevantArticles } from '../fetchRelevantArticles';
import { addRelevantArticles, addErrorMessage } from '../../actions';

describe('fetchRelevantArticles', () => {
  const mockDispatch = jest.fn();
  const thunk = fetchRelevantArticles('cat-videos-4eva.com');
  
  it('should call fetch with the correct parameters', () => {
    const expected = 'cat-videos-4eva.com';
    window.fetch = jest.fn();

    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should dispatch addErrorMessage if the promise rejects', async () => {
    const expected = addErrorMessage('Error: No Dogs Allowed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Error: No Dogs Allowed'
      })
    });
    
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should dispatch addErrorMessage if the promise resolves but is not ok', async () => {
    const expected = addErrorMessage('an error has occurred');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should dispatch addErrorMessage if the promise resolves and is ok, but there are no results', async () => {
    const expected = addErrorMessage('There are no articles that match this query');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        totalResults: 0
      });
    });

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should dispatch addCurrentArticles if the promise resolves, is ok, and there are results', async () => {
    const expected = addRelevantArticles([{title: 'Cats of the pacific northwest', author: 'Silas J. Cat'}]);
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        totalResults: 1,
        json: () => Promise.resolve({
          articles: [{title: 'Cats of the pacific northwest', author: 'Silas J. Cat'}]
        })
      });
    });

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});