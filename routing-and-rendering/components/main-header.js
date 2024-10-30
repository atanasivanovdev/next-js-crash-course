import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news" name="News" />
          </li>
          <li>
            <NavLink href="/archive" name="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
