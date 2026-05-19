import { NextResponse } from "next/server";

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

export function POST() {}

export function DELETE(request) {

    console.log("Delete api called")

    return NextResponse.json({
        message:"User deleted successfully",
        status:true
    }, {
        status:201,
        statusText:"hey status text is changed"
    })

}

export function PUT() {}
