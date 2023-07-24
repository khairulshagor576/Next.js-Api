import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name:"khairul",age:32},{status:200})
}