import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId} = await params;

  console.log(`user id is ${userId}`);

  return NextResponse.json({userId});
}
