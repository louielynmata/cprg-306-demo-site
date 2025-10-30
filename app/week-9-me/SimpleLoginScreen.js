"use client";

export default function SimpleLoginScreen({ user, toggleUserLogin }) {
  return (
    <section className="p-8 border border-gray-300 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Simple Login Screen</h2>
      {user ? (
        <>
          <p className="mb-4">Welcome, {user.name}!</p>
          <button
            onClick={toggleUserLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={toggleUserLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      )}
    </section>
  );
}
