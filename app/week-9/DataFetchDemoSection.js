"use client";
import { useFetch } from "../hooks/useFetch";
export default function DataFetchDemoSection() {
  const { data, error, isLoading } = useFetch(
    "https://api.restful-api.dev/objects"
  );

  if (error) {
    return (
      <div className="bg-red-500">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <section className="my-4">
        <p>Loading...</p>
      </section>
    );
  }
  if (!data) {
    return (
      <section className="my-4">
        <p className="text-lg font-semibold">No Data Available</p>
      </section>
    );
  }
  return (
    <section>
      <header>
        <h2>Fetch Data Example</h2>
      </header>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="font-lg my-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
