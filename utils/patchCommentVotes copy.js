import axios from "axios";

export default function patchCommentVotes(comment_id, num) {
  return axios
    .patch(`https://nc-news-o4bo.onrender.com/api/comments/${comment_id}`, {
      inc_votes: num,
    })
    .then(({ data }) => {
      return data.comment;
    });
}
