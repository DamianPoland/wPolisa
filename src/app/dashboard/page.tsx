"use client";
import { useRouter } from "next/navigation";
import { Users, FileText } from "lucide-react";

export const FormPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center  min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Wybierz bazę danych</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          onClick={() => router.push("/dashboard/users")}
          className="group relative w-full aspect-square bg-linear-to-br from-sky-500 to-sky-600 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-102 active:scale-95"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-linear-to-tr from-sky-400 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col items-center justify-center w-[200px] h-full">
            <Users className="w-16 h-16 text-white" />
            <h2 className="text-2xl font-bold text-white text-center">Użytkownicy</h2>
          </div>
        </div>

        <div
          onClick={() => router.push("/dashboard/enquiries")}
          className="group relative w-full aspect-square bg-linear-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-102 active:scale-95"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-linear-to-tr from-amber-400 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col items-center justify-center w-[200px] h-full">
            <FileText className="w-16 h-16 text-white" />

            <h2 className="text-2xl font-bold text-white text-center">Zapytania</h2>
            <h2 className="text-2xl font-bold text-white text-center">z formularzy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
