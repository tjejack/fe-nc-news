import { useNavigate } from "react-router-dom";
import getUserByUsername from "../../utils/getUserByUsername.js"
import { useEffect, useState } from "react";

export default function ArticleCard({ article }) {
  const [articleAuthor, setArticleAuthor] = useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    getUserByUsername(article.author).then((articleAuthorAccount) => {
      setArticleAuthor({...articleAuthorAccount});
    })
  }, [])
  function goToArticle() {
    navigate(`/article/${article.article_id}`);
  }

  return (
    <div className="article-card-extra-height">
      <div className="article-card" xs={6} md={6} lg={6}>
        <img className="article-card-img" src={article.article_img_url} alt={`article image for ${article.title}`} />
        <header className="article-card-title">{article.title}</header>
        <p className="article-card-author">by {articleAuthor.name}</p>
          <button className="read-button" onClick={goToArticle}>Read</button>
      </div>
    </div>
  );
}
