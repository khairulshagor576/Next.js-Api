import { users } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request,response)
{
    //console.log(response.params.id);
    const data = users;
    const userData = data.filter((item)=>item.id==response.params.id);
    return NextResponse.json(
        userData.length==0?{result:"No data found!",success:false}:{result:userData[0],success:true},{status:200});
}

export async function PUT (request,content) {
    const payload = await request.json();
    payload.id = content.params.id;

    if(!payload.id || !payload.name || !payload.age || !payload.email ){
        return NextResponse.json({result:"Request data is not valid!",success:false},{status:400});
    }
    //console.log();
    return NextResponse.json({result:payload,success:true},{status:200});
}