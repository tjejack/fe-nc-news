import { useEffect, useState } from "react";
import getTopics from "../../utils/getTopics.js";

export default function SearchTopic({ searchParams, setSearchParams }) {
  const [topics, setTopics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const currentTopic = searchParams.get('topic');
  function changeTopic(e) {
    const newParams = new URLSearchParams(searchParams);
    if (e.target.value.length > 0) {
      newParams.set("topic", e.target.value);
      setSearchParams(newParams);
    } else {
      newParams.delete("topic");
      setSearchParams(newParams);
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
          <p>Oops! Topic Search Unavailable!</p>
        </div>
      </div>
    );
  }
  return (
    <div id="topic-controls">
      <label id="topic-label" htmlFor="topic-query">
        By topic:
      </label>
      <select onChange={changeTopic} id="topic-query" name="topic-query" defaultValue={currentTopic}>
        <option key="all-topics" value=""></option>
        {topics.map((topic) => {
          return (
            <option key={topic} value={topic}>
              {topic}
            </option>
          );
        })}
      </select>
    </div>
  );
}
