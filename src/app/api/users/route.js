import { users } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request)
{
    const data = users;
    return NextResponse.json(data,{status:200});
}

export async function POST (request) {
    let payload = await request.json();
    //console.log(payload.name);
    if(!payload.name || !payload.age || !payload.email)
    {
        return NextResponse.json({result:"required field not found!",success:false},{status:400})
    }
    return NextResponse.json({result:"New User Created!",success:true},{status:201})
}