export const articlesHelper = (articles) => {
  return articles.reduce((cleanedArticles, article) => {
    const keys = Object.keys(article);
    keys.forEach((key) => {
      if(article[key] === null) {
        article[key] = ''
      }
    });
    cleanedArticles.push(article);
    return cleanedArticles;
  }, []);
}