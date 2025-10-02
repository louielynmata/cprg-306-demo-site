import Link from "next/link";
export default function StudentInfoCard({
  name = "Jar Jar Skywalker",
  description = "The plot twist of the century. And a cunning warrior.",
  image = { path: "#", altText: "Placeholder Image" },
  repo = { link: "", text: "Trolling Star Wars" },
  homePage = {
    link: "",
    text: "Best Profile in the Galaxy",
  },
}) {
  return (
    <article>
      <header>
        {/* In middle visually */}
        <div>
          <h2 className="text-2xl lg:text-3xl mb-2 lg:mb-3">{name}</h2>
          <p className="text-xl lg:text-2xl mb-2 lg:mb-3">Student Card</p>
          <p className="text-lg mb-4">{description}</p>
        </div>
        {/* Align to top of card */}
        <div className="bg-blue-800 max-w-xs py-4">
          <p>
            <span className="block text-xl text-center font-bold">Place</span>
            <span className="block text-xl text-center font-bold">Holder</span>
            <span className="block text-xl text-center font-bold">Image</span>
          </p>
        </div>
      </header>
      {/* right aligned at bottom */}
      <div>
        <Link
          href={repo.link}
          className=" outline px-4 py-2 rounded-full block max-w-fit"
        >
          {repo.text}
        </Link>
        <Link
          href={homePage.link}
          className=" bg-blue-700 px-4 py-2 rounded-full block max-w-fit"
        >
          {homePage.text}
        </Link>
      </div>
    </article>
  );
}
