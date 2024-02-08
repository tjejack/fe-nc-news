import axios from "axios";

export default function getUsers() {
  return axios
    .get("https://nc-news-o4bo.onrender.com/api/users")
    .then(({ data }) => {
      return data.users;
    });
}
