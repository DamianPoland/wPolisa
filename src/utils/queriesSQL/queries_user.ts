import sql from "@/lib/db";
import { IDBUser } from "@/utils/types";

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; // jeśli jeszcze nie jest dodane
// CREATE TABLE users (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   pesel VARCHAR(11) NOT NULL UNIQUE,
//   name VARCHAR(255) NOT NULL,
//   surname VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   phone VARCHAR(25),
//   description VARCHAR(255),
//   note TEXT,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// create new user in db
export async function createUser(
  pesel: string,
  name: string,
  surname: string,
  email: string,
  phone?: string,
  description?: string,
  note?: string
): Promise<IDBUser> {
  const result = await sql`
    INSERT INTO users (pesel, name, surname, email, phone, description, note)
    VALUES (${pesel}, ${name}, ${surname}, ${email}, ${phone || null}, ${description || null}, ${note || null})
    RETURNING id, pesel, name, surname, email, phone, description, note, created_at
  `;

  return result[0] as IDBUser;
}

//get all users from db
export async function getAllUsers(): Promise<IDBUser[]> {
  const result = await sql`
    SELECT id, pesel, name, surname, email, phone, description, note, created_at
    FROM users
    ORDER BY created_at DESC
  `;

  return result as unknown as IDBUser[];
}

// get user from db by id
export async function getUserById(id: string): Promise<IDBUser | null> {
  const result = await sql`
    SELECT id, pesel, name, surname, email, phone, description, note, created_at
    FROM users
    WHERE id = ${id}
  `;

  return result.length > 0 ? (result[0] as IDBUser) : null;
}

// update user in db
export async function updateUser(
  id: string,
  updates: Partial<Omit<IDBUser, "id" | "created_at">>
): Promise<IDBUser | null> {
  const { pesel, name, surname, email, phone, description, note } = updates;

  const result = await sql`
    UPDATE users
    SET 
      pesel = COALESCE(${pesel || null}, pesel),
      name = COALESCE(${name || null}, name),
      surname = COALESCE(${surname || null}, surname),
      email = COALESCE(${email || null}, email),
      phone = COALESCE(${phone || null}, phone),
      description = COALESCE(${description || null}, description),
      note = COALESCE(${note || null}, note)
    WHERE id = ${id}
    RETURNING id, pesel, name, surname, email, phone, description, note, created_at
  `;

  return result.length > 0 ? (result[0] as IDBUser) : null;
}

// delete user from db
export async function deleteUser(id: string): Promise<boolean> {
  await sql`
    DELETE FROM users
    WHERE id = ${id}
  `;

  return true;
}
