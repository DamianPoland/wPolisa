import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Pobierz parametr z query string
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name') || 'Guest';

    return NextResponse.json({
        message: `Hello, ${name}!`,
        timestamp: new Date().toISOString(),
    });
}

export async function POST(request: NextRequest) {
    // Pobierz dane z body (JSON)
    const body = await request.json();
    const { name, email } = body;

    // Walidacja
    if (!name) {
        return NextResponse.json(
            { error: 'Name is required' },
            { status: 400 }
        );
    }

    return NextResponse.json({
        message: `Hello, ${name}!`,
        email: email || 'not provided',
        timestamp: new Date().toISOString(),
        received: true,
    });
}
