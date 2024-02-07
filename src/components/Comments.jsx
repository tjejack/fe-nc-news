import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Comments({ article_id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [commentView, setCommentView] = useState(false);
  const [latestUserComment, setLatestUserComment] = useState(null)
  function changeCommentView(commentsBool) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("show_comments", commentsBool);
    setSearchParams(newParams);
    setCommentView(commentsBool);
  }
  return (
    <section id="article-comments">
      <CommentForm article_id={article_id} setLatestUserComment={setLatestUserComment}/>
      <button
        id="comment-view-button"
        onClick={() => {
          changeCommentView(!commentView);
        }}
      >
        {commentView ? "Hide" : "Show"} Comments
      </button>
      {commentView ? <CommentsList article_id={article_id} latestUserComment={latestUserComment}/> : null}
    </section>
  );
}
