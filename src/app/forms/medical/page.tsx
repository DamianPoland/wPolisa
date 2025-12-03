"use client";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { IDBUser } from "@/utils/types";

const MedicalPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Partial<IDBUser>>({
    defaultValues: {
      pesel: "",
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      description: "",
      note: "",
    },
  });

  const [message, setMessage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (data: Partial<IDBUser>) => {
    setMessage(null);
    setErrorMsg(null);
    try {
      const response = await axios.post("/api/users", data);
      console.log(`User created successfully: ${response.data}`);
      setMessage("Formularz został pomyślnie wysłany.");
      reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMsg(error?.response?.data?.error || error.message || "Failed to submit form");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pakiet medyczny</h1>

      {message && <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">{message}</div>}

      {errorMsg && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">{errorMsg}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* PESEL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">PESEL *</label>
          <input
            {...register("pesel", {
              required: "PESEL jest wymagany",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "PESEL musi mieć 11 cyfr",
              },
            })}
            type="text"
            placeholder="Wpisz 11-cyfrowy PESEL"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.pesel && <span className="text-red-600 text-sm">{errors.pesel.message}</span>}
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Imię *</label>
          <input
            {...register("name", {
              required: "Imię jest wymagane",
            })}
            type="text"
            placeholder="Wpisz imię"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nazwisko *</label>
          <input
            {...register("surname", {
              required: "Nazwisko jest wymagane",
            })}
            type="text"
            placeholder="Wpisz nazwisko"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.surname && <span className="text-red-600 text-sm">{errors.surname.message}</span>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail *</label>
          <input
            {...register("email", {
              required: "Adres e-mail jest wymagany",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Nieprawidłowy format adresu e-mail",
              },
            })}
            type="email"
            placeholder="Wpisz adres e-mail"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numer telefonu</label>
          <input
            {...register("phone_number")}
            type="tel"
            placeholder="Wpisz numer telefonu"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
          <textarea
            {...register("description")}
            placeholder="Wpisz opis"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notatka</label>
          <textarea
            {...register("note")}
            placeholder="Wpisz notatkę"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting} className="w-full bg-gray-400">
          {isSubmitting ? "Wysyłanie..." : "Wyślij formularz"}
        </button>
      </form>
    </div>
  );
};

export default MedicalPage;
