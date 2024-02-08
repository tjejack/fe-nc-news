import ArticlesList from "./ArticlesList";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div id="home-page">
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />
      <ArticlesList searchParams={searchParams} />
    </div>
  );
}
