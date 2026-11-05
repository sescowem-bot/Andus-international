import {notFound,permanentRedirect} from "next/navigation";
const destinations:Record<string,string>={
  "how-to-access-sme-loans-in-nigeria": "/services/financial-services",
  "cac-registration-guide-nigeria": "/services/cac-registration",
  "real-estate-investment-ogun-state": "/services/real-estate",
  "solar-energy-for-nigerian-businesses": "/services/general-contracting",
  "agribusiness-opportunities-nigeria-2025": "/services/agriculture",
  "petroleum-supply-management-nigeria": "/services/oil-gas"
};
export async function generateStaticParams(){return Object.keys(destinations).map(slug=>({slug}));}
export default async function OldResourceRedirect({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const destination=destinations[slug];if(!destination)notFound();permanentRedirect(destination);}
