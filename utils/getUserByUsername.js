import axios from "axios";

export default function getUserByUsername(username) {
  return axios
    .get(`https://nc-news-o4bo.onrender.com/api/users/${username}`)
    .then(({ data }) => {
      return data.user;
    });
}
