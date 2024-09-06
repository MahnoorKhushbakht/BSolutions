import { Comment } from '@/utils/models/Schema';
import dbConnect from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    try {
        const comments = await Comment.find({});
        return NextResponse.json({ data: comments });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function POST(request) {
    await dbConnect();
    try {
        const body = await request.json();
        console.log("Request Body:", body);
        const { name, message, email } = body;
        const comment = await Comment.create({ name, message, email });
        return NextResponse.json({ data: comment });
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

