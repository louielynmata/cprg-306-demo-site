import PageHeader from "../components/PageHeader";
import StudentInfoSection from "./StudentInfoCard";

const studentInfo = {
  name: "Ashlyn",
  description: "An glib and meaningles",
  image: {
    path: "",
    altText: "profile picture of Ashlyn doing cool stuff.",
  },
  repo: {
    link: "https://github.com/ashx3s/cprg-306-demo-site",
    text: "CPRG 306 Demo Site",
  },
  homePage: {
    link: "",
    text: "Go to Ashlyn's Portfolio",
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
      <StudentInfoSection {...studentInfo} />
    </main>
  );
}
