const NewsAPI = require('newsapi')
const client = new NewsAPI(process.env.API_KEY)

const topHeadlinesActionHandler = async ({ sources = ['the-new-york-times'] }) => {
  return new Promise((resolve, reject) => {
    client.v2
      .topHeadlines({
        sources: sources,
        language: 'en'
      })
      .then(({ articles }) => {
        resolve({ articles })
      })
      .catch(er => {
        reject(er)
      })
  })
}

module.exports = { topHeadlinesActionHandler }
