import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setCurrentUser(user);
    navigate("/");
  };
  return (
    <div className="user-card-extra-height">
      <div className="user-card" xs={6} md={6} lg={6} onClick={handleClick}>
        <img
          className="user-card-avatar"
          src={user.avatar_url}
          alt={`avatar image for ${user.username}`}
        />
        {user.username === "anonymous" ? (
          <header className="anonymous-user">Browse anonymously</header>
        ) : (
          <>
            <header className="user-screen-name">{user.name}</header>
            <p className="user-username">({user.username})</p>
          </>
        )}
      </div>
    </div>
  );
}
