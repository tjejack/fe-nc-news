import { useState } from "react";
import postComment from "../../utils/postComment.js";

export default function CommentForm({ article_id, setLatestUserComment }) {
  const [commentBody, setCommentBody] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  function handleChange(event) {
    setCommentBody(event.target.value);
    setIsError(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsPosted(false);
    if (commentBody.length !== 0) {
      setIsLoading(true);
      postComment(article_id, commentBody, "anonymous")
        .then((newComment) => {
          setIsLoading(false);
          setIsPosted(true);
          setLatestUserComment({ ...newComment });
          setCommentBody("");
        })
        .catch((err) => {
          setIsError(true);
        });
    } else {
      setIsError(true);
    }
  }
  return (
    <section id="post-comment-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend id="legend">Post a Comment</legend>
          <label id="comment-body-label" htmlFor="comment-body" required>
            Enter your comment
          </label>
          <textarea
            name="comment-body"
            type="text"
            id="comment-body"
            value={commentBody}
            onChange={handleChange}
          />
          {isLoading ? (
            <div id="comment-loading" role="alert">
              Your comment is being processed.
            </div>
          ) : null}
          {isError ? (
            <div id="comment-error" role="alert">
              Your comment could not be posted at this time. Please make sure
              you are logged in and your comment is not blank.
            </div>
          ) : null}
          {isPosted ? (
            <div id="comment-posted" role="alert">
              Thank you for sharing your thoughts!
            </div>
          ) : null}
        </fieldset>
        <button type="submit" id="comment-form-submit">Submit!</button>
      </form>
    </section>
  );
}
