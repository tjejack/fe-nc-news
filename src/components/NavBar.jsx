import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navigation-bar">
      <Link to='/' className="nav-button">Home</Link>
      <Link to='/login/' className="nav-button">Change User</Link>
    </div>
  );
}
