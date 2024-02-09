import { Link } from "react-router-dom";
export default function NotFound({message}) {
  return (
    <div id="error-404">
        <h2 id="404">
          Error 404! Page not found.
        </h2>
        <p>{message}</p>
      <Link to="/" style={{ textDecoration: "none" }} id="go-home-404">
        Return to Home
      </Link>
    </div>
  );
}
