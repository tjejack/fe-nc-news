import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  function changeUser() {
    navigate("/login");
  }
  return (
    <div id="navigation-bar">
      <button className="nav-button" id="home-button" onClick={goHome}>Home</button>
      <button className="nav-button" id="user-button" onClick={changeUser}>Change User</button>
    </div>
  );
}
