//* DELETE

import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectToDB } from "@/helper/db";

connectToDB();

export const GET = async (request, { params }) => {
  //* GET user by id*/

  const { userId } = await params;

  console.log(userId);

  try {
    const user = await User.findById(userId).select("-password");

    console.log(user);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

    return NextResponse.json({
      message: "success",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in getting user",
      status: false,
    });
  }
};

export async function DELETE(request, { params }) {
  //* Deleting user by id */

  const { userId } = await params;
  console.log("user id is" + " " + userId);

  try {
    const deletedUser = await User.deleteOne({ _id: userId });
    console.log(deletedUser);

    if (deletedUser.deletedCount === 0) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

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

export const PUT = async (request, { params }) => {
  //* Update user by id*/

  const { userId } = await params;

  const { name, email, password, about } = await request.json();

  console.log(name, email, password, about);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          name,
          password,
          about,
        },
      },
      { new: true },
    ).select("-password");
    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }
    return NextResponse.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error while updating the user",
      status: false,
    });
  }
};
