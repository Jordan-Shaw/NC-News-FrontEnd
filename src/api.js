import axios from 'axios';

const baseURL = "https://nc-news-js.herokuapp.com/api/"

export const getArticles = (sort_by, topic, author, order) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      author: author,
      topic: topic,
      sort_by: sort_by,
      order: order
    }
  }).then(({ data }) => {
    return data.articles;
  })
}

export const getArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(response => {
    return response.data.article;
  })
}

export const getComments = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`).then(response => {
    return response.data.comments
  })
}

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(response => {
    return response.data.topics
  })
}
