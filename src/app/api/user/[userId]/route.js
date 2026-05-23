//* DELETE

import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectToDB } from "@/helper/db";

connectToDB();

export async function DELETE(request, { params }) {
  //* Deleting user by id */

  const { userId } = await params;
  console.log("user id is" + " " + userId);

  try {
    const deletedUser = await User.deleteOne({ _id: userId });
    console.log(deletedUser);
    return NextResponse.json({
      message: "User deleted successfully",
      status: true,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Error while deleting the user",
      status: false,
    });
  }
}
