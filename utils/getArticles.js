import axios from "axios";

export default function getArticles(topicQuery) {
  let queriesString = "";
  const queriesArray = [];
  if (topicQuery !== null) {
    queriesArray.push(`topic=${topicQuery}`);
  }
  if(queriesArray.length > 0){
    const allQueries = queriesArray.join("&&");
    queriesString += '?'
    queriesString += allQueries;
  }
  return axios
    .get(`https://nc-news-o4bo.onrender.com/api/articles${queriesString}`)
    .then(({ data }) => {
      return data.articles;
    });
}
