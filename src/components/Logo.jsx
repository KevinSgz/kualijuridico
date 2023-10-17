import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/logoBanner.png" alt="Kuali Juridico" className="h-16" />
    </Link>
  );
}

export default Logo;
