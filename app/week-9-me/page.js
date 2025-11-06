import AuthDemoSection from "./AuthDemoSection";
import CounterDemoSection from "./CounterDemoSection";
import DataFetchSection from "./DataFetchSection";
import SimpleLoginScreen from "./SimpleLoginScreen";

// This is a component
const PageHeader = (title) => {
  return (
    <header className="my-4">
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
};

export default function Page() {
  return (
    <main>
      <header>
        <h1 className="text-2xl font-bold">Custom Hooks and Functions</h1>
        <p className="text-gray-600">Does this text have a server side?</p>
      </header>
      <AuthDemoSection />
      <CounterDemoSection />
      <DataFetchSection />
      <SimpleLoginScreen />
    </main>
  );
}
