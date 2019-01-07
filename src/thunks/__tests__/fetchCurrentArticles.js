import { fetchCurrentArticles } from '../fetchCurrentArticles';
import { addCurrentArticles, addErrorMessage } from '../../actions';

describe('fetchCurrentArticles', () => {
  const mockDispatch = jest.fn();
  const thunk = fetchCurrentArticles('cats-are-the-best.com');
  
  it('should call fetch with the correct parameters', () => {
    const expected = 'cats-are-the-best.com';
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
    const expected = addCurrentArticles([{title: 'Cats of the pacific northwest', author: 'Silas J. Cat'}]);
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