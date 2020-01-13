import axios from 'axios';

export const getArticles = (props) => {
  const { author, topic, sort_by, order } = props;
  return axios.get("https://nc-news-js.herokuapp.com/api/articles", {
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
  return axios.get(`https://nc-news-js.herokuapp.com/api/articles/${article_id}`).then(response => {
    return response.data.article;
  })
}

