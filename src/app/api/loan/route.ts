import {NextResponse} from "next/server";
export async function POST(){return NextResponse.json({success:false,error:"Secure loan applications are currently unavailable. Please contact ANDUS for the verified application process."},{status:503,headers:{"Cache-Control":"no-store"}})}
