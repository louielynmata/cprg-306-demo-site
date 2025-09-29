export default function SectionHeader({
  title,
  description,
  bgColor = "bg-orange-200",
}) {
  return (
    <header className={`mt-8 mb-4 p-4 ${bgColor}`}>
      <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
      <p className="text-lg">{description}</p>
    </header>
  );
}
