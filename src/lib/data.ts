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
    hero:"/images/company/hero.webp",
    about:"/images/company/contact.webp",
    whoWeAre:"/images/company/about.webp",
    logo:    "/brand/andus-original.webp",
    logoBig: "/brand/andus-original.webp",
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
    short: "Loan and business-finance enquiries",
    description:
      "Enquiries for consumer loans, SME financing, asset finance, LPO funding and financial consultations, subject to eligibility and written terms.",
    icon: "💰",
    href: "/services/financial-services",
    oldHref: "/financial-services/",
    features: ["Consumer Loans", "SME Financing", "Asset Finance", "LPO Funding", "Financial Consultation"],
    image: "/images/divisions/financial-services.webp",
  },
  {
    id: "oil-gas",
    number: "02",
    title: "Oil & Gas",
    short: "Petroleum supply and logistics enquiries",
    description:
      "Supply enquiries for diesel, petrol, kerosene, LPG and lubricants, including commercial delivery and logistics requirements.",
    icon: "⚡",
    href: "/services/oil-gas",
    oldHref: "/oil-gas/",
    features: ["Diesel Supply", "Petroleum Products", "Kerosene", "LPG", "Lubricants"],
    image: "/images/divisions/oil-gas.webp",
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate & Construction",
    short: "Properties built for lasting value",
    description:
      "Property, land acquisition, construction and renovation enquiries for residential and commercial customers.",
    icon: "🏛",
    href: "/services/real-estate",
    oldHref: "/real-estate/",
    features: ["Property Sales", "Land Acquisition", "Residential Construction", "Commercial Projects", "Property Advisory"],
    image: "/images/divisions/real-estate.webp",
  },
  {
    id: "automobile-logistics",
    number: "04",
    title: "Automobile & Logistics",
    short: "Vehicle import/export & freight logistics",
    description:
      "Vehicle importation, goods import and export, freight logistics, customs clearing and warehousing enquiries.",
    icon: "🚗",
    href: "/services/automobile-logistics",
    oldHref: "/automobile-logistics/",
    features: ["Vehicle Importation", "Goods Import/Export", "Freight & Cargo", "Customs Clearing", "Warehousing", "Agri-Commodity Export"],
    image: "/images/divisions/automobile-logistics.webp",
  },
  {
    id: "agriculture",
    number: "05",
    title: "Farming & Livestock",
    short: "Farming, livestock and farm-produce enquiries",
    description:
      "Farming and livestock services covering piggery, cattle, aquaculture, poultry, crop cultivation and produce supply.",
    icon: "🌱",
    href: "/services/agriculture",
    oldHref: "/farming-livestock/",
    features: ["Piggery", "Cattle Rearing", "Fish Farming", "Poultry", "Crop Cultivation"],
    image: "/images/divisions/agriculture.webp",
  },
  {
    id: "general-contracting",
    number: "06",
    title: "General Contractors",
    short: "Building with precision and integrity",
    description:
      "Construction, renovation, electrical and solar installation, metal fabrication and related contracting enquiries.",
    icon: "🔧",
    href: "/services/general-contracting",
    oldHref: "/general-contractors/",
    features: ["Building Construction", "Electrical Installations", "Solar Systems", "Metal Fabrication", "Renovation"],
    image: "/images/divisions/general-contracting.webp",
  },
  {
    id: "cac-registration",
    number: "07",
    title: "CAC Registration",
    short: "Formalise your business with ease",
    description:
      "Business Name, limited company, PLC, Incorporated Trustees, post-incorporation and tax-related registration enquiries.",
    icon: "📋",
    href: "/services/cac-registration",
    oldHref: "/cac-registration/",
    features: ["Business Name Registration", "Private Limited (Ltd)", "Public Limited (PLC)", "NGO / Trustees", "Post-Incorporation", "TIN & Tax Compliance"],
    image: "/images/divisions/cac-registration.webp",
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
    description: "We aim to build lasting trust through responsible communication and dependable service.",
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
  { icon: "🛡", title: "Accountability", body: "Our values emphasise responsible service and clear communication." },
  { icon: "👥", title: "Client-First Always",               body: "Every product and service is designed around your real needs — accessible, transparent, and community-focused." },
  { icon: "⚡", title: "Clear Enquiry Process", body: "Begin by discussing the relevant service and confirming requirements with the team." },
  { icon: "💰", title: "Written Terms", body: "Request documented fees and service terms before proceeding with any transaction." },
  { icon: "📍", title: "Community Impact",                  body: "Rooted in Ogun State, we invest in the communities we serve — our success is measured by the lives we transform." },
  { icon: "🏢", title: "7 Diversified Divisions",           body: "From finance to farming, oil & gas to real estate, CAC registration — one trusted partner for all your Nigerian business needs." },
];

export const TESTIMONIALS: {name:string;role:string;body:string;rating:number}[] = [];

export const COMPANY_STORY = {
  founded: "ANDUS International Nigeria Limited",
  registration: "Registration and licensing claims require documentary verification",
  location: "Bankole Estate, Ibasa Magboro, Ogun State, Nigeria",
  mission: "To provide accessible and transparent financial and business services that empower individuals and organizations to achieve their full potential, transforming lives and communities across Nigeria.",
  vision: "To be the most trusted, diversified, and impactful business group in Nigeria, known for ethical leadership, community transformation, and excellence across all our business divisions.",
  story: "ANDUS International Nigeria Limited is a multi-sector business group presenting financial, energy, property, logistics, agricultural, contracting and registration services to individuals and businesses in Nigeria. Our name is not just a brand — it is a binding pledge. Every letter represents a core value that influences every decision we make.",
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
