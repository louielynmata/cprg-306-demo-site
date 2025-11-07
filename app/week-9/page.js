import AuthDemoSection from "./AuthDemoSection";
import CounterDemoSection from "./CounterDemoSection";
import DataFetchSection from "./DataFetchSection";
import SimpleLoginSection from "./SimpleLoginSection";
export default function Page() {
  return (
    <main>
      <header className="my-4">
        <h1 className="text-2xl">Custom Hooks and Use Context Example</h1>
        <p>
          Does this text need to be client side generated? or is it better off
          server side?
        </p>
      </header>
      <AuthDemoSection />
      <CounterDemoSection />
      <DataFetchSection />
      <SimpleLoginSection />
    </main>
  );
}
