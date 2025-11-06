"use client";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
export default function Page() {
  const { authUser, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [initialUsername, setInitialUsername] = useState("");
  const [updating, setUpdating] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/week-9");
    }
    if (authUser) {
      const displayName = authUser.displayName || "Studebaker";
      setUsername(displayName);
      setInitialUsername(displayName);
    }
    console.log(authUser);
  }, [authUser, loading, router]);

  const handleUpdateDisplayName = async (e) => {
    // prevent default to handle refresh
    e.preventDefault();
    // if no auth user just return
    if (!authUser) return;
    // turn on updating signal
    setUpdating(true);
    // handle asynchronous code gracefully try/catch
    try {
      // update username in firebase
      await updateProfile(authUser, {
        displayName: username,
      });
      // alert that name has been updated
      alert("Username Updated", username);
      // log any errors
    } catch (error) {
      console.error("Update Name Error: ", error);
    } finally {
      // turn off updating state signal
      setUpdating(false);
    }
  };
  const hasChanged = username.trim() !== "";
  // Render functions
  if (loading) {
    return <div>Verifying authentication...</div>;
  }
  if (!authUser) {
    return null;
  }
  return (
    <main>
      <header className="my-4">
        <h1 className="text-5xl">Protected Page {authUser.email}</h1>
        <p className="text-lg">
          only a signed in user should be able to see this
        </p>
      </header>
      <section>
        <header className="my-2">
          {/* TODO: Show user actual display name */}
          <h2 className="text-2xl">
            Update User Display Name{" "}
            <span className="font-bold bg-red-500 p-2 rounded-md">
              {username}
            </span>
          </h2>
        </header>
        {/* TODO: Form function on submit */}
        <form onSubmit={handleUpdateDisplayName}>
          <div className="flex gap-4">
            <label htmlFor="username" className="block">
              {" "}
              User Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block border-black dark:border-white border"
            />
            <button
              type="submit"
              disabled={updating || !hasChanged}
              className="px-4 py-2 bg-blue-500 my-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {updating ? "updating" : "update Username"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
