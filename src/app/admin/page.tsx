import type {Metadata} from "next";
import AdminConsole from "@/components/admin/AdminConsole";
export const metadata:Metadata={title:"Staff | ANDUS International",robots:{index:false,follow:false}};
export default function AdminPage(){return <AdminConsole/>;}
