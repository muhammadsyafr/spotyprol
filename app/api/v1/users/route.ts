import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "This is a GET request" });
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    return NextResponse.json({ message: "This is a POST request", data });
}
