import PageHeader from "../components/PageHeader";
import StudentInfoSection from "./StudentInfoSection";

const studentInfo = {
  name: "Ashlyn",
  repoLink: "https://github.com/ashx3s/cprg-306-demo-site",
  repoLinkText: "CPRG 306 Demo Site",
};
export default function Page() {
  return (
    <main>
      <PageHeader />
      <StudentInfoSection {...studentInfo} />
    </main>
  );
}
