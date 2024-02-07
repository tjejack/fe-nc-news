import axios from "axios";

export default function postComment(article_id, body, username){
  return axios
    .post(`https://nc-news-o4bo.onrender.com/api/articles/${article_id}/comments`, {
      body, username
    })
    .then(({ data }) => {
      return data.comment;
    });
}
