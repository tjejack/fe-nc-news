import { useEffect, useState } from "react";
import getArticles from "../../utils/getArticles";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import ArticlesListNavigation from "./ArticlesListNavigation";

export default function ArticlesList({ searchParams, setSearchParams }) {
  const [articles, setArticles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);
  const [isError, setIsError] = useState(false);
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const limit = searchParams.get("limit");
  const p = searchParams.get("p");
  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setIs404(false);
    getArticles(topic, sort_by, order, limit, p)
      .then((articlesData) => {
        setTotalCount(articlesData.total_count);
        setArticles([...articlesData.articles]);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIs404(true);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      });
  }, [topic, sort_by, order, limit, p]);
  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  if (is404) {
    return <NotFound message={"Your search query may be invalid."} />;
  }
  return (
    <section id="articles-explorer">
      <section className="articles-list">
        {articles.map((article) => {
          return (
            <ArticleCard key={article.article_id} article={{ ...article }} />
          );
        })}
      </section>
      <>
        <ArticlesListNavigation
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          totalCount={totalCount}
        />
      </>
    </section>
  );
}
