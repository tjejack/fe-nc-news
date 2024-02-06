import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticleByArticleId from "../../utils/getArticleByArticleId";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [timeOfPublication, setTimeOfPublication] = useState("");
  useEffect(() => {
    getArticleByArticleId(article_id)
      .then((articleById) => {
        setArticle({ ...articleById });
        const published = new Date(articleById.created_at);
        setTimeOfPublication(published.toUTCString());
        setIsLoading(false);
      }).catch((err)=>{
        setIsError(true);
      })
  }, []);
  if(isLoading){
    return <p>Loading article...</p>
  }
  if(isError){
    return <p>Something went wrong!</p>
  }
  return (
    <section id="article-page">
      <h2 id="article-page-title">{article.title}</h2>
      <p id="article-page-byline">by {article.author}</p>
      <p id="article-page-time-published">{timeOfPublication}</p>
      <img
        id="article-page-img"
        src={article.article_img_url}
        alt="image to accompany article"
      />
      <p id="article-page-body">{article.body}</p>
      <div id="article-page-stats">
      <p id="article-page-votes">Votes: {article.votes}</p>
      <p id="article-page-comment-count">Comments: {article.comment_count}</p>
      </div>
    </section>
  );
}
