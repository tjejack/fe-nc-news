import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <div id="nav-holder">
      <div id="navigation-bar">
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/login/" className="nav-button">
          Change User
        </Link>
      </div>
        <Link to="/login/">
          <img id="current-user-avatar" src={currentUser.avatar_url} />
        </Link>
    </div>
  );
}
