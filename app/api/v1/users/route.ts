import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ];

    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const data = await request.json();

    // Validate input
    if (!data.name) {
        return NextResponse.json(
            { error: "Name is required" },
            { status: 400 }
        );
    }

    // Process the data
    const newUser = {
        id: Date.now(),
        name: data.name,
    };

    return NextResponse.json(newUser, { status: 201 });
}
