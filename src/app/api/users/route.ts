import { IDBUser } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body: IDBUser = await request.json();
  const { name, email } = body;

  // Validation
  if (!name || !email) {
    return NextResponse.json({ error: "Name, and email are required" }, { status: 400 });
  }

  try {
    // TODO : Save user to the database

    return NextResponse.json({
      ok: true,
      message: "User saved successfully",
      data: body,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error saving user:", err);
    return NextResponse.json({ error: "Failed to save user", detail: String(err) }, { status: 500 });
  }
}
