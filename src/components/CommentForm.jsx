import { useContext, useState } from "react";
import postComment from "../../utils/postComment.js";
import { UserContext } from "../contexts/User.jsx";

export default function CommentForm({ article_id, setLatestUserComment }) {
  const [commentBody, setCommentBody] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const {currentUser} = useContext(UserContext);
  function handleChange(event) {
    setCommentBody(event.target.value);
    setIsError(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsPosted(false);
    setIsError(false);
    if (commentBody.length !== 0) {
      setIsLoading(true);
      postComment(article_id, commentBody, currentUser.username)
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
    <section id="comment-form">
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
