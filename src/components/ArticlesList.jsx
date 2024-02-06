import { useEffect, useState } from "react";
import getArticles from "../../utils/getArticles";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles([...articlesData]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);
  if(isLoading){
    return <p>Loading articles...</p>
  }
  if(isError){
    return <p>Something went wrong!</p>
  }
  return (
    <section className="articles-list">
      {articles.map((article) => {
        return (
          <ArticleCard key={article.article_id} article={{ ...article }} />
        );
      })}
    </section>
  );
}
