"use client";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/week-9");
    }
  }, [authUser, loading, router]);
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
    </main>
  );
}
