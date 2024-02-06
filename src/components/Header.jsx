import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 id="header">
        <span id="NC">NC &nbsp;</span>News
      </h1>
    </Link>
  );
}
