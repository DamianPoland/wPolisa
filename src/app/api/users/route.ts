import { NextRequest, NextResponse } from "next/server";
import { createUser, getAllUsers, deleteUser } from "@/utils/queriesSQL/queries_user";

export async function GET(request: NextRequest) {
  try {
    const users = await getAllUsers();
    return NextResponse.json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return NextResponse.json(
      { error: "Failed to fetch users", detail: String(err) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { pesel, name, surname, email, phone_number, description, note } = body;

  // Validation
  if (!pesel || !name || !surname || !email) {
    return NextResponse.json(
      { error: "PESEL, name, surname, and email are required" },
      { status: 400 }
    );
  }

  try {
    const user = await createUser(
      pesel,
      name,
      surname,
      email,
      phone_number,
      description,
      note
    );

    return NextResponse.json({
      ok: true,
      id: user.id,
      message: "User saved successfully",
      data: user,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error saving user:", err);
    return NextResponse.json(
      { error: "Failed to save user", detail: String(err) },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body || {};

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    await deleteUser(id);

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: "Failed to delete user", detail: String(err) },
      { status: 500 }
    );
  }
}
