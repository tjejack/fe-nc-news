import axios from "axios";

export default function getArticleByArticleId(article_id) {
  return axios
    .get(`https://nc-news-o4bo.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
}
