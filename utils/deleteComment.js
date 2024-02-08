import axios from "axios";

export default function deleteComment(comment_id) {
  return axios.delete(
    `https://nc-news-o4bo.onrender.com/api/comments/${comment_id}`
  );
}
