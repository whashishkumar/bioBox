import Link from "next/link";
import './style.css'

export default function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-text">Looks like this page doesn’t exist!</p>
      <p className="error-subtext">Go back to home and continue exploring.</p>
      <Link href="/" className="error-button">
        Back to Home
      </Link>
    </div>
  );
}
