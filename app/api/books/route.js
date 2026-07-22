import { NextResponse } from "next/server";
import { getBooks } from "@/lib/books";
export function GET() {
    return NextResponse.json(getBooks(), {
        headers: {
            "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
        },
    });
}
