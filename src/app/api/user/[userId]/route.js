//* DELETE

import { NextResponse } from "next/server";

export async function DELETE(request , {params}){

  

    const {userId , title}  = await params;
    
    console.log("user id is" + " "+userId);
    console.log("title is "+ " "+title);
    return NextResponse.json({
        message:"Deleted successfully"
    });
}