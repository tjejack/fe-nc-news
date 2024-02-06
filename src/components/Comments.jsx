import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Comments({ article_id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [commentView, setCommentView] = useState(false);
  function changeCommentView(commentsBool) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("show_comments", commentsBool);
    setSearchParams(newParams);
    setCommentView(commentsBool);
  }
  return (
    <section id="article-comments">
      <CommentForm />
      <button
        id="comment-view-button"
        onClick={() => {
          changeCommentView(!commentView);
        }}
      >
        {commentView ? "Hide" : "Show"} Comments
      </button>
      {commentView ? <CommentsList article_id={article_id} /> : null}
    </section>
  );
}
