import { NextResponse } from "next/server";
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
export function POST() {}
//* DELETE request function */

//* to get the something(userID) to delete we can get

//* uri variables
//* or req.body
//* or query parameters
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
