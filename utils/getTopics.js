import axios from "axios";

export default function getTopics() {
  return axios
    .get("https://nc-news-o4bo.onrender.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
}
