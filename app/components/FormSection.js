"use client";
import { useState } from "react";
import SimpleForm from "./SimpleForm";

export default function FormSection() {
  const [formData, setFormData] = useState("");
  function handleChildData(data) {
    setFormData(data);
  }
  return (
    <section>
      <header>
        <h2 className="text-3xl mb-4">Form Componnet Example with Output</h2>
        <p className="text-xl font-bold my-4">
          Data from Child Component: {formData}
        </p>
      </header>
      <SimpleForm onDataSend={handleChildData} />
    </section>
  );
}
