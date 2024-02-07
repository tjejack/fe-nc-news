import { useEffect, useState } from "react";
import getUserByUsername from "../../utils/getUserByUsername.js";

export default function CommentCard({ comment }) {
  const [commentUser, setCommentUser] = useState({});
  const published = new Date(comment.created_at);
  const displayTime = published.toUTCString();
  useEffect(()=>{
    getUserByUsername(comment.author).then((commentAuthorAccount) => {
      setCommentUser({...commentAuthorAccount});
    })
  }, [])
  return (
    <div className="comment-card-extra-height">
      <div className="comment-card" xs={6} md={6} lg={6}>
        <div className="comment-author-container">
        <img className="comment-avatar" src={commentUser.avatar_url} />
        <header className="comment-author">{commentUser.name}</header>
        </div>
        <p className="comment-published">{displayTime}</p>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-votes">Votes: {comment.votes}</p>
        <div className="comment-vote-buttons">
        <button className="comment-like-button">Upvote</button>
        <button className="comment-dislike-button">Downvote</button>
        </div>
      </div>
    </div>
  );
}
