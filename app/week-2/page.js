import PageHeader from "../components/PageHeader";
import StudentInfoSection from "./student-info";

const studentInfo = {
  name: "Ashlyn",
  repoLink: "https://github.com/ashx3s/cprg-306-demo-site",
  repoLinkText: "CPRG 306 Demo Site",
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
