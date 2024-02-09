import { useEffect, useState } from "react";
import getArticles from "../../utils/getArticles";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

export default function ArticlesList({searchParams}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const topic = searchParams.get('topic');
  const sort_by = searchParams.get('sort_by');
  const order = searchParams.get('order');
  useEffect(() => {
    setIsError(false);
    getArticles(topic, sort_by, order)
      .then((articlesData) => {
        setArticles([...articlesData]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [topic, sort_by, order]);
  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
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
