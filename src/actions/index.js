export const addRelevantArticles = (articles) => ({
  type: 'ADD_RELEVANT_ARTICLES',
  articles
});

export const addCurrentArticles = (articles) => ({
  type: 'ADD_CURRENT_ARTICLES',
  articles
});

export const addTopic = (topic) => ({
  type: 'ADD_TOPIC',
  topic
});

export const addErrorMessage = (message) => ({
  type: 'ADD_ERROR_MESSAGE',
  message
})