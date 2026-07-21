import { NextResponse } from "next/server";

import { getBookById } from "@/lib/books";

interface BookRouteProps {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: BookRouteProps) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    return NextResponse.json({ message: "Book not found." }, { status: 404 });
  }

  return NextResponse.json(book);
}
