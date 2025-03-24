import { updateUserPoints } from "@/utils/db/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, points } = await req.json();

    if (!userId || typeof points !== "number") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const updatedUser = await updateUserPoints(userId, points);

    if (!updatedUser) {
      return NextResponse.json(
        { error: "Failed to update points" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Points updated successfully!" });
  } catch (error) {
    console.error("Error updating points:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
