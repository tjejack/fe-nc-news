import axios from "axios";

export default function patchArticleVotes(article_id, num) {
  return axios
    .patch(`https://nc-news-o4bo.onrender.com/api/articles/${article_id}`, {
      inc_votes: num,
    })
    .then(({ data }) => {
      return data.article;
    });
}
