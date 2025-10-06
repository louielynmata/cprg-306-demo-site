import PageHeader from "../components/PageHeader";
import StudentInfoSection from "./StudentInfoCard";

const studentInfo = {
  name: "Ashlyn",
  description: "An glib and meaningles",
  image: {
    path: "#",
    altText: "profile picture of Ashlyn doing cool stuff.",
  },
  repo: {
    link: "https://github.com/ashx3s/cprg-306-demo-site",
    text: "Demo Site",
  },
  homePage: {
    link: "#",
    text: "Portfolio",
  },
};

const pageHeader = {
  title: "Student Info Page",
  description: "Week 2 assignment",
};
export default function Page() {
  return (
    <main className="">
      {/* Pass header props to page header component */}
      <PageHeader {...pageHeader} />
      <section className="ml-2 container flex flex-col">
        <header>
          <h2 className="text-3xl font-semibold mb-2">Student Info Cards</h2>
        </header>
        <div className="flex gap-4">
          <StudentInfoSection {...studentInfo} />
        </div>
      </section>
    </main>
  );
}
