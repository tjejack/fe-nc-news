export default function CommentCard({ comment }) {
  const published = new Date(comment.created_at);
  const displayTime = published.toUTCString();
  return (
    <div className="comment-card-extra-height">
      <div className="comment-card" xs={6} md={6} lg={6}>
        <header className="comment-author">{comment.author}</header>
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
