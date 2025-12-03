"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { IDBUser } from "@/utils/types";

const PageUsers: React.FC = () => {
  const [users, setUsers] = useState<IDBUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/users");
      const data = response.data?.users ?? [];
      setUsers(data as IDBUser[]);
    } catch (err: any) {
      console.error("Error fetching users:", err);
      setError(err?.response?.data?.error || err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Użytkownicy</h1>
        <div className="flex items-center gap-2">
          <Button variant="default" onClick={() => fetchUsers()}>
            Odśwież
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="py-8 text-center">Ładowanie użytkowników…</div>
      ) : error ? (
        <div className="text-red-600">Błąd: {error}</div>
      ) : (
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">PESEL</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Imię</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nazwisko</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Adres e-mail</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Numer telefonu</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Opis</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Notatka</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Data utworzenia</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Akcje</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-4 text-center text-sm text-gray-500">
                    Nie znaleziono użytkowników.
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{u.pesel}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.surname}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.phone_number ?? "-"}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.description ?? "-"}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.note ?? "-"}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{u.created_at ?? "-"}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button
                        onClick={async () => {
                          const ok = window.confirm(`Usuń użytkownika ${u.name} ${u.surname}?`);
                          if (!ok) return;
                          try {
                            await axios.delete("/api/users", {
                              data: { id: u.id },
                            });
                            setUsers((prev) => prev.filter((x) => x.id !== u.id));
                          } catch (err: any) {
                            console.error("Delete failed:", err);
                            setError(err?.response?.data?.error || err.message || "Failed to delete user");
                          }
                        }}
                        className="text-sm text-red-600 hover:underline disabled:opacity-50"
                      >
                        Usuń
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PageUsers;
