import Link from "next/link";
export default function StudentInfo({ name, repoLink, repoLinkText }) {
  return (
    <section>
      <h2>Student Name: {name}</h2>
      <p>
        Github Repository <Link href={repoLink}> {repoLinkText}</Link>
      </p>
    </section>
  );
}
