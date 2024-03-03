import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ status: "node.js route is working" });
}
