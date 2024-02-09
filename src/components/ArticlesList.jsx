import { useEffect, useState } from "react";
import getArticles from "../../utils/getArticles";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function ArticlesList({ searchParams }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);
  const [isError, setIsError] = useState(false);
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setIs404(false);
    getArticles(topic, sort_by, order)
      .then((articlesData) => {
        setArticles([...articlesData]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          setIs404(true);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      });
  }, [topic, sort_by, order]);
  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  if(is404){
    return <NotFound message={"Your search query may be invalid."}/>
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
