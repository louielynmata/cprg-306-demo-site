import Image from "next/image";
import Link from "next/link";
import PageHeader from "./components/PageHeader";
import SiteHeader from "./components/SiteHeader";
// TODO: Remove content and add links to the weekly sessions

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <PageHeader
        title="The Home Page"
        description="It's not much but it's honest work."
      />
      <section>
        <header>
          <h2 className="text-2xl">Pages</h2>
        </header>
        <ul>
          <li>
            <Link href="protected">Protected Route</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
