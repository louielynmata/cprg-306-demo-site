"use client";
export default function Page() {
  function alertWithMessage(msg = "this is a great time to be a developer!") {
    alert(`Hello user, ${msg}`);
  }
  return (
    <main className="mx-4 xl:mx-8  my-4">
      <header className="py-8 bg-blue-200 md:bg-purple-300   px-4 rounded-md">
        <h1 className="text-4xl font-semibold mb-4">Week 4 Demo</h1>
        <p className="text-lg">Events and useState. basic Interactivity</p>
        <div className="flex gap-4">
          <button
            className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer"
            onClick={alertWithMessage}
          >
            Alert Static
          </button>
          <button
            onClick={() => alertWithMessage("Cool is as cool does")}
            className="bg-white py-4 px-12 my-4 rounded-lg  hover:bg-blue-100 cursor-pointer"
          >
            Alert Dynamic
          </button>
        </div>
      </header>
      <section>
        <header>
          <h2 className="text-2xl font-semibold mb-2">
            Demonstrate buttons that use state to update visual data
          </h2>
        </header>
      </section>
    </main>
  );
}
