import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId, postId } = await params;

  console.log(`user id is ${userId}`);
  console.log(`post id is ${postId}`);

  return NextResponse.json({
    userId: userId,
    postId: postId,
  });
}
