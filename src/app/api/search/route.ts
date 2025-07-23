import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  console.error("The search API is currently disabled because the Bing API has been retired. Please update your code to use a new search provider.");
  return new NextResponse(
    JSON.stringify({
      message: "The search API is currently disabled because the Bing API has been retired. Please update your code to use a new search provider."
    }),
    { status: 500 }
  );
}