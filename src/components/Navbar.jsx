"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth();
  const pathName = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className={`nav-link ${pathName === "/" ? "active" : ""}`}>
        Home
      </Link>

      {isAuthenticated ? (
        <>
          <Link
            href="/profile"
            className={`nav-link ${pathName === "/profile" ? "active" : ""}`}
          >
            Profile
          </Link>
        </>
      ) : (
        <Link
          href="/sign-in"
          className={`nav-link ${pathName === "/sign-in" ? "active" : ""}`}
        >
          Sign in
        </Link>
      )}
      {isAuthenticated && user.isSubscribed && (
        <Link
          href="/news"
          className={`nav-link ${pathName === "/news" ? "active" : ""}`}
        >
          News
        </Link>
      )}
    </nav>
  );
}
