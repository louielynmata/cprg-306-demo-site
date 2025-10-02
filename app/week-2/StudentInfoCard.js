import Link from "next/link";
export default function StudentInfoCard({
  name = "Jar Jar Skywalker",
  repo = { link: "", text: "Trolling Star Wars" },
}) {
  return (
    <article>
      <h2>Student Name: {name}</h2>
      <p>
        Github Repository <Link href={repo.link}> {repo.text}</Link>
      </p>
    </article>
  );
}
