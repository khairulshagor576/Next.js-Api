import { users } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request,response)
{
    //console.log(response.params.id);
    const data = users;
    const userData = data.filter((item)=>item.id==response.params.id);
    return NextResponse.json(
        userData.length==0?{result:"No data found!",success:false}:{result:userData,success:true},{status:200});
}