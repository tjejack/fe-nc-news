import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  function goToArticle() {
    navigate(`/article/${article.article_id}`);
  }

  return (
    <div className="article-card-extra-height">
      <div className="article-card" xs={6} md={6} lg={6}>
        <img src={article.article_img_url} alt={`article image for ${article.title}`} />
        <header clasName="article-title">{article.title}</header>
        <p className="article-author">{article.author}</p>
          <button className="read-button" onClick={goToArticle}>Read</button>
      </div>
    </div>
  );
}
