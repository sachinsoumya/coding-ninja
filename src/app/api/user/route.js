import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/helper/db";
import { User } from "@/models/user";

connectToDB();

//* GET request function - GET all users
export async function GET(req) {
  console.log("GET api called");

  let users;

  try {
    users = await User.find({}).select("-password");
    console.log(users);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json(users);
}
//* POST request function - POST a user to database
export async function POST(request) {
  console.log("Post api called");

  // Get the user data from the request body

  // console.log( await request.json());

  const { name, email, password, about, profileImage } = await request.json();

  //create a user with user model

  const createdUser = new User({
    name,
    email,
    password,
    about,
    profileImage,
  });

  //save the user to the database
  //* used try and catch for handling the ERROR if the error occours in try block
  try {
    const user = await createdUser.save();

    console.log(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Error creating user",
      status: false,
    });
  }

  return Response.json({
    message: "User created successfully",
    status: true,
  });
}

export function DELETE(request) {
  //* DELETE request function */

  //* to get the something(userID) to delete we can get

  //* uri variables
  //* or req.body
  //* or query parameters

  console.log("Delete api called");

  return NextResponse.json(
    {
      message: "User deleted successfully",
      status: true,
    },
    {
      status: 201,
      statusText: "hey status text is changed",
    },
  );
}

export function PUT() {}
