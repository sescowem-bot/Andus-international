export type Division = {slug:string;index:string;title:string;headline:string;lede:string;intro:string;offerings:[string,string][];focusTitle:string;focusText:string;highlights:string[];action?:string;actionText?:string;videos?:[string,string][]};
export const DIVISIONS:Record<string,Division> = {
  "financial-services": {
    "slug": "financial-services",
    "index": "01",
    "title": "Financial Services",
    "headline": "Finance to move your plans forward.",
    "lede": "Personal loans, SME financing, LPO funding and asset finance, with a clear discussion of requirements and repayment terms.",
    "intro": "ANDUS provides a point of contact for individual and business financing enquiries. The right product and documentation will depend on eligibility and assessment.",
    "offerings": [
      [
        "Business & Personal Loans",
        "Enquire about funding for personal needs, working capital and eligible business activities."
      ],
      [
        "SME Financing",
        "Discuss capital requirements for small and medium-sized businesses, from day-to-day operations to growth."
      ],
      [
        "LPO & Contract Funding",
        "Explore financing enquiries connected to verified purchase orders and commercial supply contracts."
      ],
      [
        "Asset Finance",
        "Enquire about funding arrangements for eligible business equipment and asset purchases."
      ],
      [
        "Financial Consultation",
        "Discuss available solutions, documents and terms with the appropriate ANDUS team."
      ]
    ],
    "focusTitle": "Understand the full terms before applying",
    "focusText": "Every financing decision should be based on a confirmed offer, documented eligibility and an affordable repayment plan.",
    "highlights": [
      "Ask about applicable fees and repayment schedules",
      "Confirm current eligibility and documents directly with the team",
      "Do not submit BVN or identification through ordinary messages"
    ],
    "action": "/loan-application",
    "actionText": "Loan application"
  },
  "oil-gas": {
    "slug": "oil-gas",
    "index": "02",
    "title": "Oil & Gas",
    "headline": "Energy supply for homes and businesses.",
    "lede": "Diesel, petrol, kerosene, cooking gas, lubricants and petroleum logistics.",
    "intro": "ANDUS supports supply enquiries across petroleum products and associated logistics, helping customers describe their specifications, delivery location and expected volumes.",
    "offerings": [
      [
        "Diesel (AGO)",
        "Diesel supply enquiries for generators, industrial operations, transport fleets and commercial customers."
      ],
      [
        "Petroleum (PMS)",
        "Petrol procurement enquiries for eligible commercial uses and fleet operations."
      ],
      [
        "Kerosene (DPK)",
        "Kerosene supply enquiries for households, distributors and commercial customers."
      ],
      [
        "LPG / Cooking Gas",
        "Liquefied petroleum gas enquiries for domestic, hospitality and commercial needs."
      ],
      [
        "Lubricants",
        "Engine oils, industrial lubricants and automotive fluids for equipment and vehicle maintenance."
      ],
      [
        "Petroleum Logistics",
        "Coordination enquiries for haulage, storage, delivery and petroleum supply-chain requirements."
      ]
    ],
    "focusTitle": "Supply starts with the right specification",
    "focusText": "Share product type, required quantity, delivery location and timing. Our team can then discuss availability, applicable safety requirements and a quotation.",
    "highlights": [
      "AGO, PMS, DPK, LPG and lubricants",
      "Bulk and commercial supply enquiries",
      "Haulage and delivery coordination"
    ]
  },
  "real-estate": {
    "slug": "real-estate",
    "index": "03",
    "title": "Real Estate & Construction",
    "headline": "Spaces, land and projects with a clear purpose.",
    "lede": "Residential and commercial properties, land acquisition, construction, renovation and property advisory.",
    "intro": "From property enquiries to construction requirements, ANDUS works with customers and partners to identify available options and next steps.",
    "offerings": [
      [
        "Residential Property Sales",
        "Explore apartments, duplexes, terrace homes and estates available through relevant property networks."
      ],
      [
        "Commercial Property Sales",
        "Enquiries for offices, retail premises, warehouses and other commercial buildings."
      ],
      [
        "Land Acquisition",
        "Discuss land for residential, commercial, agricultural and investment purposes, subject to independent title verification."
      ],
      [
        "Construction Projects",
        "Enquire about planned building works, project scope, cost expectations and delivery requirements."
      ],
      [
        "Renovation & Remodelling",
        "Residential and commercial interior improvements, partial upgrades and renovation projects."
      ],
      [
        "Property Investment Advisory",
        "Discuss property opportunities, practical due diligence and investment considerations."
      ]
    ],
    "focusTitle": "Every property decision deserves due diligence",
    "focusText": "Request evidence of title and ownership, verify documentation independently and confirm all project details before making payment.",
    "highlights": [
      "Residential and commercial enquiries",
      "Land and title review",
      "Construction and renovation planning"
    ],
    "videos": [
      [
        "Real estate and construction",
        "5DLpXQd5fXY"
      ],
      [
        "Property tour",
        "vLnA7OGG3kk"
      ],
      [
        "Land tour",
        "9GR7OuzJjZw"
      ]
    ]
  },
  "automobile-logistics": {
    "slug": "automobile-logistics",
    "index": "04",
    "title": "Automobile & Logistics",
    "headline": "Connected trade. Better movement.",
    "lede": "Vehicle importation, goods import and export, freight logistics, customs clearing, commodity export and warehousing.",
    "intro": "ANDUS supports customers navigating the movement of vehicles, cargo and goods across markets, with services shaped around documentation, transport modes and delivery requirements.",
    "offerings": [
      [
        "Vehicle Importation",
        "New and used cars, trucks, buses and commercial vehicle enquiries from overseas markets."
      ],
      [
        "Goods Import & Export",
        "Commercial goods, machinery, products, raw materials and commodity trade enquiries."
      ],
      [
        "Freight & Cargo Logistics",
        "Sea, air and land freight coordination tailored to shipment requirements and destinations."
      ],
      [
        "Customs Clearing",
        "Enquiries concerning customs documentation, duty processes and port-related clearance support."
      ],
      [
        "Agricultural Commodity Export",
        "Export enquiries for eligible Nigerian commodities such as cocoa, cashew, sesame and palm oil."
      ],
      [
        "Warehousing & Distribution",
        "Enquiries for short- and long-term storage and distribution of goods."
      ]
    ],
    "focusTitle": "From origin to destination",
    "focusText": "Share what is being moved, its origin and destination, expected dates and available documents to begin a practical logistics discussion.",
    "highlights": [
      "Vehicle and cargo movement",
      "Freight and clearing support",
      "Distribution and export enquiries"
    ]
  },
  "agriculture": {
    "slug": "agriculture",
    "index": "05",
    "title": "Farming & Livestock",
    "headline": "Cultivating value from the ground up.",
    "lede": "Piggery, cattle, aquaculture, poultry, crop farming and farm-produce supply.",
    "intro": "ANDUS participates in agricultural and livestock-related activity. Its original website covers several production categories and field videos.",
    "offerings": [
      [
        "Piggery",
        "Pig production and supply enquiries for commercial buyers and food businesses."
      ],
      [
        "Cattle & Livestock",
        "Livestock rearing, sale and supply enquiries for relevant markets and food customers."
      ],
      [
        "Fish Farming & Fishing",
        "Aquaculture activities including catfish and tilapia, with distribution enquiries for fish products."
      ],
      [
        "Poultry — Chicken & Eggs",
        "Broiler and layer operations and enquiries for poultry meat and egg supply."
      ],
      [
        "Crop & General Farming",
        "Cultivation enquiries across vegetables, grains, tubers and agricultural produce."
      ],
      [
        "Farm Produce Supply",
        "Connecting buyers with farm produce and discussing procurement and distribution requirements."
      ]
    ],
    "focusTitle": "Food production and responsible supply",
    "focusText": "Our farming activities span animal husbandry, aquaculture and crops. Discuss the product, quantity, season and delivery needs with our team.",
    "highlights": [
      "Livestock and poultry",
      "Aquaculture and fish",
      "Crops and produce supply"
    ],
    "videos": [
      [
        "Aquaculture",
        "Y_d-T4EKOzI"
      ],
      [
        "Poultry operations",
        "Obxp_lQ_eEk"
      ],
      [
        "Cattle and livestock",
        "17GTXgk7PwQ"
      ],
      [
        "Plantation farming",
        "9KzbCSJhqG4"
      ],
      [
        "Crop and plantain farming",
        "D-7iVyuscJ8"
      ]
    ]
  },
  "general-contracting": {
    "slug": "general-contracting",
    "index": "06",
    "title": "General Contractors",
    "headline": "A practical partner for the entire build.",
    "lede": "Residential and commercial construction, renovation, electrical works, solar installations, fabrication and building services.",
    "intro": "ANDUS receives contracting enquiries across building works, energy systems and specialist installations. Start with your scope and project location.",
    "offerings": [
      [
        "Residential Construction",
        "Homes, duplexes, apartments and estates, from structural works to finishing."
      ],
      [
        "Commercial Construction",
        "Offices, shops, schools, warehouses and commercial developments."
      ],
      [
        "Renovation & Remodelling",
        "Modernisation and improvement of existing residential and commercial spaces."
      ],
      [
        "Electrical Installation",
        "Electrical wiring, fittings and installations for new builds and renovation projects."
      ],
      [
        "Solar & Alternative Energy",
        "Solar panel, battery, inverter and hybrid power system installation enquiries."
      ],
      [
        "Electronics Supply & Installation",
        "CCTV, networking, intercoms, generators and building-electrical systems."
      ],
      [
        "Metal Structures & Steelwork",
        "Steel roofing, structural metalwork and industrial fabrication."
      ],
      [
        "Gates, Fencing & Security",
        "Custom security gates, railings, fencing, windows and related fabrications."
      ],
      [
        "Custom Fabrication",
        "Bespoke metalwork and specialist fabrication for architectural and industrial needs."
      ]
    ],
    "focusTitle": "Define the scope. Then build with clarity.",
    "focusText": "Share your drawings, project location, intended outcome and timeline. The team can discuss site assessment and a written quotation.",
    "highlights": [
      "Building and renovation",
      "Electrical and solar",
      "Fabrication and security fittings"
    ]
  },
  "cac-registration": {
    "slug": "cac-registration",
    "index": "07",
    "title": "CAC & Business Registration",
    "headline": "Give your business the right foundation.",
    "lede": "Business Name, Private Limited (Ltd), Public Limited (PLC), Incorporated Trustees, post-incorporation and tax-related enquiries.",
    "intro": "ANDUS guides businesses and organisations through registration enquiries and filing requirements. Choose the structure that suits the organisation and confirm current CAC fees and processing conditions.",
    "offerings": [
      [
        "Business Name",
        "Registration enquiries for sole proprietors and qualifying partnerships."
      ],
      [
        "Private Limited Company (Ltd)",
        "Incorporation enquiries for eligible private companies, shareholders and directors."
      ],
      [
        "Public Limited Company (PLC)",
        "Incorporation enquiries for companies seeking a public-company structure."
      ],
      [
        "Incorporated Trustees",
        "Registration enquiries for associations, charities, ministries and other eligible non-profit organisations."
      ],
      [
        "Post-Incorporation",
        "Annual returns, changes to directors, registered office, share capital and related filings."
      ],
      [
        "TIN & Tax Compliance",
        "Tax identification and associated compliance information or referral enquiries."
      ]
    ],
    "focusTitle": "Registration with the correct information",
    "focusText": "Confirm the current registration requirements and official fees. Sensitive identification and documents should only be submitted through a verified secure channel.",
    "highlights": [
      "Name search and registration",
      "Companies and trustees",
      "Post-incorporation services"
    ],
    "action": "/contact?service=CAC%20Registration",
    "actionText": "Enquire about registration"
  }
};
