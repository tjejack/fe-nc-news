import { useState, useEffect } from "react";
import getCommentsByArticleId from "../../utils/getCommentsByArticleId.js";
import CommentCard from "./CommentCard.jsx"

export default function CommentsList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments([...commentsData]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  return (
    <section className="comments-list">
      {comments.map((comment) => {
        return (
          <CommentCard key={comment.comment_id} comment={{ ...comment }} />
        );
      })}
    </section>
  );
}
