import axios from "axios";

export default function getArticles() {
  return axios
    .get("https://nc-news-o4bo.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
}
