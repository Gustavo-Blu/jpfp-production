import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          JPFP
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link href="/students">Students</Link>
          </li>
          <li>
            <Link href="/campuses">Campuses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
