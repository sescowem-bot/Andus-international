export const SITE = {
  name: "ANDUS International",
  fullName: "ANDUS International Nigeria Limited",
  tagline: "Empowering Lives. Transforming Communities.",
  phone: ["08068833012", "08021058328"],
  whatsapp: "2348129972493",
  email: "info@andusinternationalng.com",
  address: "Bankole Estate, Ibasa Magboro, Ogun State, Nigeria",
  hours: "Mon–Fri: 8am–6pm · Sat: 9am–3pm",
  socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  // Real images from their server
  images: {
    hero:    "/brand/andus-mark.svg",
    about:   "/brand/andus-mark.svg",
    whoWeAre:"/brand/andus-mark.svg",
    logo:    "/brand/andus-mark.svg",
    logoBig: "/brand/andus-mark.svg",
  },
  // Backend URLs
  api: {
    cms: "",
    cac: "",
    admin: "",
  },
};

export const SERVICES = [
  {
    id: "financial-services",
    number: "01",
    title: "Financial Services",
    short: "Fast, flexible loans for individuals & businesses",
    description:
      "Fast, flexible loan products — consumer loans, SME financing, asset finance, LPO funding, and strategic financial consultation — designed to unlock opportunity for every Nigerian.",
    icon: "💰",
    href: "/services/financial-services",
    oldHref: "/financial-services/",
    features: ["Consumer Loans", "SME Financing", "Asset Finance", "LPO Funding", "Financial Consultation"],
    image: "/images/divisions/financial-services.svg",
  },
  {
    id: "oil-gas",
    number: "02",
    title: "Oil & Gas",
    short: "Reliable petroleum supply across Nigeria",
    description:
      "Dependable supply of diesel, petroleum, kerosene, LPG, and lubricants — ensuring homes, businesses, and industries across Nigeria never run dry.",
    icon: "⚡",
    href: "/services/oil-gas",
    oldHref: "/oil-gas/",
    features: ["Diesel Supply", "Petroleum Products", "Kerosene", "LPG", "Lubricants"],
    image: "/images/divisions/oil-gas.svg",
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate & Construction",
    short: "Properties built for lasting value",
    description:
      "Residential and commercial property sales, strategic land acquisition, and premium construction — creating spaces that stand as testaments to quality craftsmanship.",
    icon: "🏛",
    href: "/services/real-estate",
    oldHref: "/real-estate/",
    features: ["Property Sales", "Land Acquisition", "Residential Construction", "Commercial Projects", "Property Advisory"],
    image: "/images/divisions/real-estate.svg",
  },
  {
    id: "automobile-logistics",
    number: "04",
    title: "Automobile & Logistics",
    short: "Vehicle import/export & freight logistics",
    description:
      "End-to-end vehicle import/export, freight logistics, customs clearance, and secure warehousing — connecting Nigerian businesses to global markets with precision.",
    icon: "🚗",
    href: "/services/automobile-logistics",
    oldHref: "/automobile-logistics/",
    features: ["Vehicle Importation", "Goods Import/Export", "Freight & Cargo", "Customs Clearing", "Warehousing", "Agri-Commodity Export"],
    image: "/images/divisions/automobile-logistics.svg",
  },
  {
    id: "agriculture",
    number: "05",
    title: "Farming & Livestock",
    short: "Feeding Nigeria, securing tomorrow",
    description:
      "Integrated farming operations spanning piggery, cattle rearing, fish farming, poultry, and crop cultivation — actively contributing to Nigeria's food security agenda.",
    icon: "🌱",
    href: "/services/agriculture",
    oldHref: "/farming-livestock/",
    features: ["Piggery", "Cattle Rearing", "Fish Farming", "Poultry", "Crop Cultivation"],
    image: "/images/divisions/agriculture.svg",
  },
  {
    id: "general-contracting",
    number: "06",
    title: "General Contractors",
    short: "Building with precision and integrity",
    description:
      "Professional building construction, electrical and solar installations, metal fabrication, and renovation works — delivered on time, within budget, to exacting standards.",
    icon: "🔧",
    href: "/services/general-contracting",
    oldHref: "/general-contractors/",
    features: ["Building Construction", "Electrical Installations", "Solar Systems", "Metal Fabrication", "Renovation"],
    image: "/images/divisions/general-contracting.svg",
  },
  {
    id: "cac-registration",
    number: "07",
    title: "CAC Registration",
    short: "Formalise your business with ease",
    description:
      "Complete business registration services — Business Names, Limited Liability Companies, PLCs, NGOs/Trustees, and all post-incorporation requirements — fast, accurate, fully handled.",
    icon: "📋",
    href: "/services/cac-registration",
    oldHref: "/cac-registration/",
    features: ["Business Name Registration", "Private Limited (Ltd)", "Public Limited (PLC)", "NGO / Trustees", "Post-Incorporation", "TIN & Tax Compliance"],
    image: "/images/divisions/cac-registration.svg",
  },
];

export const STATS = [{number:"7",suffix:"",label:"Business Divisions",description:"Across multiple sectors in Nigeria"},{number:"5",suffix:"",label:"Core Values",description:"Accountability, nurturing, dependability, uniqueness and sustainability"}];

export const VALUES = [
  {
    letter: "A",
    word: "Accountability",
    description: "We take full responsibility for every promise, every transaction, and every outcome we deliver to our clients.",
    icon: "🛡",
  },
  {
    letter: "N",
    word: "Nurturing",
    description: "We grow long-term relationships, not just transactions — supporting our clients at every stage of their journey.",
    icon: "🤝",
  },
  {
    letter: "D",
    word: "Dependability",
    description: "When you need us, we show up. Consistent, reliable, and always ready to deliver — without exception.",
    icon: "✅",
  },
  {
    letter: "U",
    word: "Uniqueness",
    description: "We bring innovative, tailored solutions that stand apart — crafted specifically for each client's needs.",
    icon: "⭐",
  },
  {
    letter: "S",
    word: "Sustainability",
    description: "We build services and businesses that create lasting impact for today and for generations still to come.",
    icon: "🌱",
  },
];

export const WHY_REASONS = [
  { icon: "🛡", title: "Fully Registered & Licensed",       body: "Fully registered with CAC and licensed as a money lender — operate with complete legal confidence and regulatory compliance." },
  { icon: "👥", title: "Client-First Always",               body: "Every product and service is designed around your real needs — accessible, transparent, and community-focused." },
  { icon: "⚡", title: "Fast & Reliable Processing",        body: "We respond quickly, process efficiently, and deliver results — no unnecessary delays or hidden bureaucracy." },
  { icon: "💰", title: "Transparent Pricing",               body: "No hidden fees, no surprises. We quote clearly and deliver exactly what we promise at the price agreed." },
  { icon: "📍", title: "Community Impact",                  body: "Rooted in Ogun State, we invest in the communities we serve — our success is measured by the lives we transform." },
  { icon: "🏢", title: "7 Diversified Divisions",           body: "From finance to farming, oil & gas to real estate, CAC registration — one trusted partner for all your Nigerian business needs." },
];

export const TESTIMONIALS: {name:string;role:string;body:string;rating:number}[] = [];

export const COMPANY_STORY = {
  founded: "Fully registered and licensed",
  registration: "CAC Registered · Licensed Money Lender",
  location: "Bankole Estate, Ibasa Magboro, Ogun State, Nigeria",
  mission: "To provide accessible and transparent financial and business services that empower individuals and organizations to achieve their full potential, transforming lives and communities across Nigeria.",
  vision: "To be the most trusted, diversified, and impactful business group in Nigeria, known for ethical leadership, community transformation, and excellence across all our business divisions.",
  story: "ANDUS International Nigeria Limited is a fully registered and licensed, multi-sector company committed to empowering individuals, businesses, and communities across Nigeria through accessible, integrity-driven services. Our name is not just a brand — it is a binding pledge. Every letter represents a core value that influences every decision we make.",
};

export const NAV_LINKS = [
  { label: "About",      href: "/about" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Financial Services",         href: "/services/financial-services",   icon: "💰" },
      { label: "Oil & Gas",                  href: "/services/oil-gas",              icon: "⚡" },
      { label: "Real Estate & Construction", href: "/services/real-estate",          icon: "🏛" },
      { label: "Automobile & Logistics",     href: "/services/automobile-logistics", icon: "🚗" },
      { label: "Farming & Livestock",        href: "/services/agriculture",          icon: "🌱" },
      { label: "General Contractors",        href: "/services/general-contracting",  icon: "🔧" },
      { label: "CAC Registration",           href: "/services/cac-registration",     icon: "📋" },
    ],
  },
  { label: "Investment", href: "/investment" },
  { label: "Projects",   href: "/projects"   },
  { label: "Blog",       href: "/blog"        },
  { label: "Contact",    href: "/contact"     },
];

export const NIGERIA_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT Abuja","Gombe",
  "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
  "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
  "Taraba","Yobe","Zamfara",
];

export const CAC_REGISTRATION_TYPES = [
  {
    id: "business-name",
    icon: "📋",
    title: "Business Name",
    description: "Sole trader or partnership. Most common and affordable registration for small businesses.",
    timeline: "3–5 working days",
    features: ["Name availability search", "CAC form preparation", "Application filing", "Certificate of Registration"],
    badge: "Most Common",
  },
  {
    id: "limited-liability-company",
    icon: "🏢",
    title: "Limited Liability Company",
    description: "Private limited company with directors and shareholders. Full legal entity with liability protection.",
    timeline: "5–10 working days",
    features: ["Name availability search", "Memorandum & Articles", "Director registration", "Certificate of Incorporation", "Status Report & Form C02/C07", "TIN Registration"],
    badge: "Most Popular",
  },
  {
    id: "public-limited-company",
    icon: "🌐",
    title: "Public Limited (PLC)",
    description: "For larger enterprises with complex ownership structures seeking stock exchange listing.",
    timeline: "10–15 working days",
    features: ["Name availability search", "Regulatory compliance", "Share structure advisory", "Full documentation"],
    badge: "",
  },
  {
    id: "incorporated-trustee",
    icon: "🤝",
    title: "NGO / Incorporated Trustee",
    description: "For non-profits, churches, mosques, clubs and associations seeking legal recognition.",
    timeline: "10–20 working days",
    features: ["Name availability search", "Constitution drafting", "Newspaper publication", "CAC form preparation & filing", "Certificate of Registration"],
    badge: "",
  },
  {
    id: "limited-liability-partnership",
    icon: "👥",
    title: "Limited Liability Partnership",
    description: "Partnership with liability protection — ideal for professionals, consultants, and joint ventures.",
    timeline: "5–10 working days",
    features: ["Name availability search", "Partnership agreement", "Registration filing", "Certificate"],
    badge: "",
  },
  {
    id: "post-incorporation",
    icon: "📄",
    title: "Post-Incorporation Services",
    description: "Annual returns, change of directors, address changes, share capital increases, and more.",
    timeline: "3–7 working days",
    features: ["Annual Returns Filing", "Change of Directors", "Change of Address", "Increase in Share Capital"],
    badge: "",
  },
];
