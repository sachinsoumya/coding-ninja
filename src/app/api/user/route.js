import { NextRequest, NextResponse } from "next/server";
//* GET request function
export function GET(req) {
  const users = [
    {
      name: "Sachin",
      email: "sachin@gmail.com",
      mobile: 7008812150,
      position: "Batsman",
    },
    {
      name: "Lamda",
      email: "lamda@gmail.com",
      mobile: 7008812151,
      position: "Batsman",
    },
    {
      name: "Dhoni",
      email: "dhoni@gmail.com",
      mobile: 7008812152,
      position: "Wicket-keeper",
    },
  ];

  return NextResponse.json(users);
}
//* POST request function
export async function POST(request) {
  console.log("Post api called");
  // console.log(request);
  // console.log(request.body);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl);
  // console.log(request.nextUrl.pathname); 
  // console.log(request.nextUrl.searchParams);
  // console.log(NextRequest);
  // console.log(request.body);

  // const r = request.json().then((data)=>console.log(data)).catch((err =>console.log(err)));

  // console.log(r);

  const textdata = request.text().then((data)=>console.log(data)).catch(err=>console.log(err));

  console.log(textdata);

  // const r = await request.json();
  // console.log(r);

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
