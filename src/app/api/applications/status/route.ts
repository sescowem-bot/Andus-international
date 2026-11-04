import {NextResponse} from "next/server";export async function GET(){return NextResponse.json({available:false,cac:false,loan:false,investment:false},{headers:{"Cache-Control":"no-store"}})}
