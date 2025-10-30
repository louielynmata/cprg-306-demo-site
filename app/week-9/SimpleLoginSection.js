"use client";
import { useUser } from "../contexts/UserContext";
import { AppButton } from "../components/Button";
export default function SimpleLoginSection() {
  const { toggleUserLogin } = useUser();
  return (
    <section>
      <header>
        <h2>Log Herbert in our out</h2>
        <p>Using context to avoid props drilling</p>
        <AppButton text="Log In" onClick={toggleUserLogin} />
      </header>
    </section>
  );
}
