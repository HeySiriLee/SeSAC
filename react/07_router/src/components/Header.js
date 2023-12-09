import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">Router Example</div>
        <nav>
          <div>
            <Link to="">Home</Link>
          </div>
          <div>
            <Link to="/products">Product</Link>
          </div>
          <div>
            <Link to="/notice">Notice</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
