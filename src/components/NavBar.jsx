import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <div id="nav-holder">
      <div id="navigation-bar">
        <Link to="/" className="nav-button" id="home-nav">
          Home
        </Link>
      {currentUser.username === "anonymous" ? (
        <p id="navbar-current-username">Browsing Anonymously</p>
      ) : (
        <p id="navbar-current-username">{currentUser.username}</p>
      )}
      </div>
      <Link to="/login/">
        <img
          id="current-user-avatar"
          src={currentUser.avatar_url}
          alt={`avatar-for-${currentUser.username}`}
        />
      </Link>
    </div>
  );
}
