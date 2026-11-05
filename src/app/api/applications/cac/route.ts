import {NextResponse} from "next/server";
export async function POST(){return NextResponse.json({success:false,message:"The secure CAC application system is not available yet. Please contact ANDUS for verified submission instructions."},{status:503,headers:{"Cache-Control":"no-store"}})}
