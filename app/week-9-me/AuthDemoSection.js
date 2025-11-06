"use client";
import LoginForm from "../auth-forms/LoginForm";
import SignUpForm from "../auth-forms/SignupForm";

export default function AuthDemoSection() {
  return (
    <section>
      <header>
        <h2>
          Authenticated User on Firebase Example
          {/* TODO: Add user email  here */}
          <p>User Name: </p>
        </h2>
      </header>
      {/* TODO: Add Login and Sign up button here */}
      <section>
        <LoginForm />
        <SignUpForm />
      </section>
    </section>
  );
}
