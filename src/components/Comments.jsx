import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Comments({ article_id }) {
  const navigate = useNavigate();
  const [commentView, setCommentView] = useState(false);
  function changeCommentView() {
    navigate(`/article/${article_id}?show_comments=${!commentView}`);
    setCommentView(!commentView);
  }
  return (
    <section id="article-comments">
      <CommentForm />
      <button id="comment-view-button" onClick={changeCommentView}>
        {commentView ? "Hide" : "Show"} Comments
      </button>
      {commentView ? <CommentsList article_id={article_id} /> : null}
    </section>
  );
}
