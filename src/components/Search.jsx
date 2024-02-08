import { useEffect, useState } from "react";
import getTopics from "../../utils/getTopics.js";

export default function Search({ searchParams, setSearchParams }) {
  const [topics, setTopics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  function changeTopic(e) {
    if (e.target.value.length > 0) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("topic", e.target.value);
      setSearchParams(newParams);
    } else {
      setSearchParams();
    }
  }
  useEffect(() => {
    getTopics()
      .then((topicsData) => {
        const topicSlugs = [...topicsData].map((topic) => {
          return topic.slug;
        });
        const sortedTopics = topicSlugs.toSorted();
        setTopics(sortedTopics);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div id="search-bar">
        <div id="search-loading">
          <p>Loading Topics...</p>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div id="search-bar">
        <div id="search-error">
          <p>Oops! Search Unavailable!</p>
        </div>
      </div>
    );
  }
  return (
    <div id="search-bar">
      <p>Search</p>
      <form id="search-params">
        <label id="topic-label" htmlFor="topic-query">
          By topic:
        </label>
        <select onChange={changeTopic} id="topic-query" name="topic-query">
          <option key="all-topics" value=""></option>
          {topics.map((topic) => {
            return (
              <option key={topic} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
