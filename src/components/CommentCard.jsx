import { useEffect, useState } from "react";
import getUserByUsername from "../../utils/getUserByUsername.js";
import { UserContext } from "../contexts/User.jsx";
import { useContext } from "react";
import deleteComment from "../../utils/deleteComment.js";

export default function CommentCard({ comment }) {
  const { currentUser } = useContext(UserContext);
  const [commentUser, setCommentUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const published = new Date(comment.created_at);
  const displayTime = published.toUTCString();

  function removeComment() {
    setIsLoading(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    setIsError(false);
    getUserByUsername(comment.author).then((commentAuthorAccount) => {
      setCommentUser({ ...commentAuthorAccount });
    });
  }, []);

  if (isDeleted) {
    return (
      <div className="deleted-card">
        <p className="deleted-message">This Comment No Longer Exists</p>
      </div>
    );
  }
  return (
    <div className="comment-card-extra-height">
      <div className="comment-card" xs={6} md={6} lg={6}>
        <div className="comment-author-container">
          <img className="comment-avatar" src={commentUser.avatar_url} alt={`avatar for ${commentUser.username}`}/>
          <header className="comment-author">{commentUser.name}</header>
        </div>
        <p className="comment-published">{displayTime}</p>
        {isError || isLoading ? (
          <p className="comment-body-short">{comment.body}</p>
        ) : (
          <p className="comment-body">{comment.body}</p>
        )}
        <p className="comment-votes">Votes: {comment.votes}</p>
        {isError ? (
          <div id="delete-comment-error-container" role="alert">
            <p id="delete-comment-error-message">
              Could not delete comment at this time
            </p>
          </div>
        ) : null}
        {isLoading ? (
          <div id="deleting-comment-container" role="alert">
            <p id="deleting-comment-message">
              Deleting Comment...
            </p>
          </div>
        ) : null}
        {commentUser.username === currentUser.username && currentUser.username !== 'anonymous' ? (
          <button className="comment-delete-button" onClick={removeComment}>
            Delete Comment
          </button>
        ) : (
          <div className="comment-vote-buttons">
            <button className="comment-like-button">Upvote</button>
            <button className="comment-dislike-button">Downvote</button>
          </div>
        )}
      </div>
    </div>
  );
}
