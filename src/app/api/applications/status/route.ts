import {isBackendReady} from "@/lib/andus-backend";
export const dynamic="force-dynamic";
export async function GET() {
  const ready=isBackendReady();
  return Response.json({available:ready,contact:ready,loan:ready,cac:ready,investment:ready,sensitiveDocumentUploads:false},
    {headers:{"Cache-Control":"no-store"}});
}
