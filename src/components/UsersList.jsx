import { useEffect, useState } from "react";
import getUsers from "../../utils/getUsers";
import UserCard from "./UserCard";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getUsers()
      .then((userData) => {
        setUsers([...userData]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  if (isLoading) {
    return <p>Loading users...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  return (
    <section className="users-list">
      {users.map((user) => {
        return <UserCard key={user.username} user={{ ...user }} />;
      })}
    </section>
  );
}
