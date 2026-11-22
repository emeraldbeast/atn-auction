import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db("auction_system").command({ ping: 1 });

    return NextResponse.json({ database: "connected" });
  } catch {
    return NextResponse.json(
      { database: "disconnected" },
      { status: 500 }
    );
  }
}