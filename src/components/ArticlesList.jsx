import { useEffect, useState } from "react";
import getArticles from "../../utils/getArticles";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles([...articlesData]);
    });
  }, []);
  return (
    <div id="articles-list">
      <ul>
        {articles.map((article)=>{
            return <ArticleCard key={article.article_id} article={{...article}}/>
        })}
      </ul>
    </div>
  );
}
