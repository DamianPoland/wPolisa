"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";

export const FormPage = () => {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/form", {
        name: "John",
        email: "john@example.com",
      });
      console.log("Response from API:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>Form</div>
      <div>
        <Button variant="default" onClick={(e) => onSubmit(e)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormPage;
