import { connectToDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";

connectToDB();

export async function GET(request) {
  //* get all the tasks
  try {
    const tasks = await Task.find({});

    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting tasks",
      status: false,
      error: err.message,
    });
  }
}

export const POST = async (request) => {
  const { title, description, addedDate, status, userId } =
    await request.json();

  const taskInstance = new Task({
    title,
    description,
    addedDate,
    status,
    userId,
  });

  try {
    const newTask = await taskInstance.save();

    console.log(newTask);

    //* create a task and save it to database
    return NextResponse.json({
      message: "Task craeted successfully",
      status: true,
      data: newTask,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error creating task",
      status: false,
      error: err.message,
    });
  }
};
