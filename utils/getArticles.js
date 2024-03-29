import axios from "axios";

export default function getArticles(topicQuery, sortByQuery, orderQuery, limitQuery, pageQuery) {
  let queriesString = "";
  const queriesArray = [];
  if (topicQuery !== null) {
    queriesArray.push(`topic=${topicQuery}`);
  }
  if (sortByQuery !== null) {
    queriesArray.push(`sort_by=${sortByQuery}`);
  }
  if(orderQuery !== null){
    queriesArray.push(`order=${orderQuery}`)
  }
  if(limitQuery !== null){
    queriesArray.push(`limit=${limitQuery}`)
  }
  if(pageQuery !== null){
    queriesArray.push(`p=${pageQuery}`)
  }
  if (queriesArray.length > 0) {
    const allQueries = queriesArray.join('&&');
    queriesString += "?";
    queriesString += allQueries;
  }
  return axios
    .get(`https://nc-news-o4bo.onrender.com/api/articles/${queriesString}`)
    .then(({ data }) => {
      return data;
    });
}
