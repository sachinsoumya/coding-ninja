import { NextResponse } from "next/server";
import { connectToDB } from "@/helper/db";
import { Task } from "@/models/task";

connectToDB();

export async function GET(request, { params }) {
  const { taskId } = await params;

  try {
    const task = await Task.findById(taskId);

    console.log(task);

    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting task by id",
      status: false,
      error: err.message,
    });
  }
}

export async function PUT(request, { params }) {
  const { taskId } = await params;

  const { title, description, addedDate, status } = await request.json();
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        $set: {
          title,
          description,
          status,
          addedDate,
        },
      },
      { after: true },
    );

    return NextResponse.json({
      message: "Task updated  successfully",
      data: updatedTask,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error while updating the task",
      status: false,
      error: err.message,
    });
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = await params;

  try {
    const task = await Task.findByIdAndDelete(taskId);

    console.log(task);

    return NextResponse.json({
      message: "Task deleted successfully",
      status: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: " Error while deleting the task",
      status: false,
      error: err.message,
    });
  }
}
