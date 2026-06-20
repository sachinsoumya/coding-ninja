import { NextResponse } from "next/server";
import { connectToDB } from "@/helper/db";
import { Task } from "@/models/task";

connectToDB();

export async function GET(request, { params }) {
  const { userId } = await params;

  console.log(userId);
  try {
    const task = await Task.find({
      userId: userId,
    });
    console.log(task);

    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json({
      message: "Error while getting the task of user",
      status: false,
    });
  }
}
