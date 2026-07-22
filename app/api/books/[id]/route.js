import { NextResponse } from "next/server";
import { getBookById } from "@/lib/books";
export async function GET(_request, { params }) {
    const { id } = await params;
    const book = getBookById(id);
    if (!book) {
        return NextResponse.json({ message: "Book not found." }, { status: 404 });
    }
    return NextResponse.json(book);
}
