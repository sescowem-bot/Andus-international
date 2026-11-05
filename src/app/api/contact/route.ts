import type {NextRequest} from "next/server";
import {submitPublicApplication} from "@/lib/andus-submit";
export const dynamic="force-dynamic";
export const runtime="nodejs";
export async function POST(req:NextRequest){return submitPublicApplication(req,"contact");}
