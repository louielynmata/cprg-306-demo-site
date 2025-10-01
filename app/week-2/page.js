import StudentInfo from "./student-info";

const studentInfo = {
  name: "Ashlyn",
  repoLink: "https://github.com/ashx3s/cprg-306-demo-site",
  repoLinkText: "CPRG 306 Demo Site",
};
export default function Page() {
  return (
    <main>
      <header>
        <h1>Page Header</h1>
      </header>
      <StudentInfo {...studentInfo} />
    </main>
  );
}
