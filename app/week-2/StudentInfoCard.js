import Link from "next/link";

// TODO: Create card sub components

// CardHeader: text props
function CardHeader({ name, description, bgColor }) {
  return (
    <header className="flex flex-col">
      {/* In middle visually */}
      <div className="ml-2 mt-2">
        <h2 className="text-2xl lg:text-3xl mb-2 lg:mb-3">{name}</h2>
        <p className="text-xl lg:text-2xl mb-2 lg:mb-3">Student Card</p>
        <p className="text-lg mb-4">{description}</p>
      </div>
      {/* Align to top of card */}
      <CardHeaderImage bgColor={bgColor} />
    </header>
  );
}
// CardHeaderTextBox

// CardHeaderImage
function CardHeaderImage({ bgColor = "bg-blue-800" }) {
  return (
    <div className={`${bgColor} max-w-xs py-4 order-first rounded-t-lg`}>
      <p>
        <span className="block text-xl text-center font-bold">Place</span>
        <span className="block text-xl text-center font-bold">Holder</span>
        <span className="block text-xl text-center font-bold">Image</span>
      </p>
    </div>
  );
}
// CardButtons: text prop, link prop, style prop

// CardButton (secondary and primary props)

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
    <article className="flex flex-col max-w-xs rounded-lg outline">
      <CardHeader name={name} description={description} bgColor="bg-red-500" />
      {/* right aligned at bottom */}
      <div className="flex gap-2 my-4 self-end mr-2">
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
