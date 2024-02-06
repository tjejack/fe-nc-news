import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticleByArticleId from "../../utils/getArticleByArticleId";
import Comments from "./Comments";
import patchArticleVotes from "../../utils/patchArticleVotes";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLikesError, setIsLikesError] = useState(false);
  const [timeOfPublication, setTimeOfPublication] = useState("");
  const [displayVotes, setDisplayVotes] = useState(0);

  function updateVotes(num) {
    setDisplayVotes((currentCount) => currentCount + num);
    patchArticleVotes(article_id, num).catch((err) => {
      setDisplayVotes((currentCount) => currentCount - num);
      console.log(err);
      setIsLikesError(true);
    });
  }

  useEffect(() => {
    getArticleByArticleId(article_id)
      .then((articleById) => {
        setArticle({ ...articleById });
        const published = new Date(articleById.created_at);
        setTimeOfPublication(published.toUTCString());
        setDisplayVotes(articleById.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return <p>Loading article...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  return (
    <section id="article-page">
      <div id="article">
        <h2 id="article-page-title">{article.title}</h2>
        <p id="article-page-byline">by {article.author}</p>
        <p id="article-page-time-published">{timeOfPublication}</p>
        <img
          id="article-page-img"
          src={article.article_img_url}
          alt="image to accompany article"
        />
        <p id="article-page-body">{article.body}</p>
        <div id="article-page-votes">
          <p id="article-votes">Votes: {displayVotes}</p>
          {isLikesError ? <p>Oops! Your vote could not be counted</p> : null}
          <div className="article-vote-buttons">
            <button className="article-like-button" onClick={()=>{updateVotes(1)}}>Upvote</button>
            <button className="article-dislike-button" onClick={()=>{updateVotes(-1)}}>Downvote</button>
          </div>
        </div>
      </div>
      <p id="article-page-comment-count">Comments: {article.comment_count}</p>
      <Comments article_id={article_id} />
    </section>
  );
}
