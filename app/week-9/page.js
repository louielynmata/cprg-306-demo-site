import CounterDemoSection from "./CounterDemoSection";

const PageHeader = () => {
  return (
    <header>
      <h1>Week 9 Part 1</h1>
      <p>Custom hooks and use context</p>
    </header>
  );
};
export default function Page() {
  return (
    <main>
      <PageHeader />
      <CounterDemoSection />
    </main>
  );
}
