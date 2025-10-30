"use client";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";
export default function SiteHeader() {
  const { user } = useUser();
  return (
    <header>
      <nav className="flex justify-between gap-4 px-4 bg-black text-white py-8">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Home
          </Link>
          <p>
            {user.name} {user.loggedIn ? "Logged In" : "Logged Out"}
          </p>
        </div>
        <ul className="flex gap-4 text-lg">
          <li>
            <Link href="week-2">Week 2</Link>
          </li>
          <li>
            <Link href="week-3">Week 3</Link>
          </li>
          <li>
            <Link href="week-4">Week 4</Link>
          </li>
          <li>
            <Link href="week-5">Week 5</Link>
          </li>
          <li>
            <Link href="week-9">Week 9</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
