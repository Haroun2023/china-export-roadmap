import { CityData, RoadmapStep, Supplier } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Suppliers', path: '/suppliers' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'Market Analysis', path: '/market-analysis' },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: '1-1',
    phase: 'Phase 1',
    phaseTitle: 'Legal & Administrative Setup',
    title: 'Obtain Commercial Registration (CR)',
    description: 'Register your business with the Ministry of Commerce to legally operate in Saudi Arabia.',
    isCompleted: false,
    content: {
      instructions: [
        'Visit the Ministry of Commerce portal (mc.gov.sa) or use the Absher platform.',
        "Select 'Trading in Electrical Materials' or 'Trading in Plumbing Materials' as your business activity.",
        'Provide required documents: National ID, proof of address, and initial capital declaration.',
        'Pay the registration fee (approximately 1,200 SAR for 5 years).',
        'Receive your CR number within 24-48 hours.'
      ],
      documents: ['National ID copy', 'Proof of address', 'Bank statement'],
      resources: [{ name: 'Ministry of Commerce Portal', url: 'https://mc.gov.sa' }],
      tips: [
        'Ensure your CR specifically includes import activities.',
        'Consider adding multiple related activities to your CR for flexibility.'
      ]
    }
  },
  {
    id: '1-2',
    phase: 'Phase 1',
    phaseTitle: 'Legal & Administrative Setup',
    title: 'Register with ZATCA & FASAH',
    description: 'Register with Zakat, Tax, and Customs Authority for import permissions and set up your customs portal.',
    isCompleted: false,
    content: {
      instructions: [
        'Create an account on the ZATCA portal (zatca.gov.sa).',
        'Link your Commercial Registration to your ZATCA account.',
        'Apply for an Import Code (required for customs clearance).',
        'Register for VAT if your annual revenue exceeds 375,000 SAR.',
        'Set up your FASAH account (fasah.sa) for customs declarations.'
      ],
      documents: ['Commercial Registration', 'Bank account details', 'Contact information'],
      resources: [{ name: 'ZATCA Portal', url: 'https://zatca.gov.sa' }, { name: 'FASAH Platform', url: 'https://fasah.sa' }],
      tips: [
        'Keep your VAT registration certificate accessible for all transactions.',
        'FASAH declarations must be submitted 48 hours before shipment arrival.'
      ]
    }
  },
  {
    id: '1-3',
    phase: 'Phase 1',
    phaseTitle: 'Legal & Administrative Setup',
    title: 'SABER Portal Registration',
    description: 'Create your account on the mandatory SABER platform for product certification.',
    isCompleted: false,
    content: {
      instructions: [
        'Visit saber.sa and select "Register".',
        'Choose your role as an Importer (requires Saudi CR).',
        'Upload CR copy, ISO certificates (if any), and contact ID.',
        'Appoint a "Communication Officer" to handle uploads.',
        'Verify via OTP/email; access is usually granted in 24-72 hours.'
      ],
      documents: ['Saudi CR copy', 'ISO 9001 (for manufacturers)', 'Contact ID'],
      resources: [{ name: 'SABER Portal', url: 'https://saber.sa' }],
      tips: [
        'Use Chrome for the best portal experience.',
        'Bulk importers can request a dedicated account manager via support@saso.gov.sa.'
      ]
    }
  },
  {
    id: '2-1',
    phase: 'Phase 2',
    phaseTitle: 'Product Compliance via SABER',
    title: 'Identify HS Codes & Technical Regulations',
    description: 'Determine the correct Harmonized System codes and applicable SASO regulations.',
    isCompleted: false,
    content: {
      instructions: [
        'HS codes are 6-10 digit numbers that classify products for customs.',
        'Electrical materials typically fall under HS Chapter 85 (e.g., 8536 for switches).',
        'Plumbing materials typically fall under HS Chapter 39 or 73.',
        'Use the SABER platform to verify which Technical Regulations (TR) apply to your HS code.'
      ],
      documents: ['Product specifications', 'Manufacturer datasheets'],
      resources: [{ name: 'SABER HS Code Lookup', url: 'https://saber.sa' }],
      tips: [
        'Common electrical HS codes: 8536 (switches), 8544 (cables).',
        'Common plumbing HS codes: 3917 (plastic pipes).',
        'Verify if your product requires Water Efficiency or Energy Efficiency labels.'
      ]
    }
  },
  {
    id: '2-2',
    phase: 'Phase 2',
    phaseTitle: 'Product Compliance via SABER',
    title: 'Obtain Product Certificate of Conformity (PCoC)',
    description: 'Get your products certified by a SASO-approved conformity assessment body.',
    isCompleted: false,
    content: {
      instructions: [
        'Register your products on the SABER platform.',
        'Select a SASO-approved Conformity Assessment Body (CAB).',
        'Submit product documentation: test reports, specs, factory audit.',
        'The CAB will verify compliance and issue the PCoC.',
        'PCoC is valid for one year.'
      ],
      documents: ['Test reports (IEC/ISO)', 'Factory QMS (ISO 9001)', 'Manufacturer DoC', 'RoHS Declarations'],
      resources: [{ name: 'SABER Platform', url: 'https://saber.sa' }, { name: 'List of Approved CABs', url: 'https://saber.sa' }],
      tips: [
        'Electrical products may require IECEE CB certification.',
        '2026 Update: RoHS declarations must show heavy metals < 0.01%.',
        'Blockchain QR codes are now piloted for battery-operated products.'
      ]
    }
  },
  {
    id: '3-1',
    phase: 'Phase 3',
    phaseTitle: 'Sourcing & Shipping',
    title: 'Select and Verify Chinese Suppliers',
    description: 'Choose reliable Chinese manufacturers with export experience to Saudi Arabia.',
    isCompleted: false,
    content: {
      instructions: [
        'Use platforms like Alibaba or Made-in-China.',
        'Verify supplier credentials: business license, export license.',
        'Confirm supplier can provide SASO-compliant products and test reports.',
        'Request samples and ensure they have Arabic labeling and safety warnings.'
      ],
      documents: ['Supplier Audit Report', 'Sample Request Form', 'Manufacturer ISO 9001'],
      resources: [{ name: 'Alibaba', url: 'https://alibaba.com' }, { name: 'Made-in-China', url: 'https://made-in-china.com' }],
      tips: [
        'Prioritize suppliers with existing SASO experience.',
        'Ensure the "Made in China" mark is permanent and clearly visible on products and packaging.'
      ]
    }
  },
  {
    id: '3-2',
    phase: 'Phase 3',
    phaseTitle: 'Sourcing & Shipping',
    title: 'Obtain Shipment Certificate of Conformity (SCoC)',
    description: 'Apply for the mandatory certificate for every shipment batch.',
    isCompleted: false,
    content: {
      instructions: [
        'Log in to SABER and select "Shipment Cert".',
        'Link the shipment to your valid PCoC.',
        'Upload the commercial invoice and packing list.',
        'Pay the SCoC fee (~500 SAR).',
        'The certificate is issued instantly if the PCoC is valid.'
      ],
      documents: ['Commercial Invoice', 'Packing List', 'Bill of Lading'],
      resources: [{ name: 'SABER Shipment Portal', url: 'https://saber.sa' }],
      tips: [
        'Apply for SCoC at least 30 days pre-arrival for high-volume shipments.',
        'Ensure invoice values match the SCoC declaration to avoid customs delays.'
      ]
    }
  },
  {
    id: '4-1',
    phase: 'Phase 4',
    phaseTitle: 'Logistics & Customs Clearance',
    title: 'Customs Declaration & Clearance',
    description: 'Finalize the import process through Saudi Customs.',
    isCompleted: false,
    content: {
      instructions: [
        'Submit your customs declaration via FASAH 48 hours before arrival.',
        'Present the SCoC and PCoC (digital copies are accepted).',
        'Customs will scan the QR code on your SCoC for verification.',
        'Pay customs duties and VAT.',
        'Goods are released for local distribution.'
      ],
      documents: ['SCoC', 'PCoC', 'Certificate of Origin', 'Commercial Invoice'],
      resources: [{ name: 'FASAH Platform', url: 'https://fasah.sa' }],
      tips: [
        '95% of compliant shipments clear within 24 hours.',
        'Trusted Traders with a 3+ year clean record can use the "Green Lane" for faster clearance.'
      ]
    }
  }
];

export const SUPPLIERS: Supplier[] = [
  {
    id: 1,
    name: 'CHINT Group',
    category: 'Electrical',
    subCategories: ['Circuit Breakers', 'Distribution Boards', 'Switches', 'Contactors'],
    description: 'Low-voltage distribution, circuit breakers',
    location: 'Wenzhou',
    minOrder: '5,000 USD',
    certifications: ['ISO 9001', 'SASO', 'CE', 'UL'],
    website: 'https://chintglobal.com',
    email: 'info@chint.com',
    phone: '+86-577-62777777',
    rating: 5,
    tags: ['Top Rated', 'Fast Shipping'],
    stats: '40+ years, exports to 140+ countries'
  },
  {
    id: 2,
    name: 'DELIXI Electric',
    category: 'Electrical',
    subCategories: ['Power Distribution Units', 'Industrial Controls', 'Switches', 'Meters'],
    description: 'Power distribution, industrial control',
    location: 'Yueqing',
    minOrder: '3,000 USD',
    certifications: ['ISO 9001', 'SASO', 'CE', 'CCC'],
    website: 'https://www.delixi-electric.com/en',
    email: 'info@delixi-electric.com',
    phone: '+86-577-61778888',
    rating: 5,
    tags: ['Joint Venture', 'High Quality'],
    stats: 'Joint venture with Schneider Electric'
  },
  {
    id: 3,
    name: 'JOMOO Group',
    category: 'Plumbing',
    subCategories: ['Faucets', 'Showers', 'Toilets', 'Sinks'],
    description: 'Faucets, sanitary ware, kitchen/bath',
    location: 'Nanan',
    minOrder: '5,000 USD',
    certifications: ['ISO 9001', 'SASO', 'CE', 'WRAS'],
    website: 'https://en.jomoogroup.com',
    email: 'business@jomoogroup.com',
    phone: '+86-19859597686',
    rating: 5,
    tags: ['Luxury', 'Design Award'],
    stats: 'Leading Chinese kitchen & bath brand'
  },
  {
    id: 4,
    name: 'Zhuji Fengfan (IFAN)',
    category: 'Plumbing',
    subCategories: ['PPR Pipes', 'PVC Pipes', 'PEX Pipes', 'Valves'],
    description: 'PPR/PVC pipes, valves, fittings',
    location: 'Zhuji',
    minOrder: '2,000 USD',
    certifications: ['ISO 9001', 'SASO', 'CE', 'NSF'],
    website: 'https://www.ifanplumbing.com',
    email: 'sales21@ifangroup.com',
    phone: '+86-18158661038',
    rating: 4,
    tags: ['Bulk Supplier', 'Cost Effective'],
    stats: '$36M+ annual exports'
  }
];

export const CITY_DATA: Record<string, CityData> = {
  madinah: {
    id: 'madinah',
    name: 'Madinah',
    arabicName: 'المدينة المنورة',
    population: '1.5 million',
    constructionValue: '$30+ billion',
    primaryPort: 'Jeddah Islamic Port or Yanbu Port',
    demandScore: 75,
    competition: 'Low',
    logisticsCost: 'Medium',
    description: 'The Holy City experiencing rapid expansion to accommodate growing pilgrim numbers.',
    keyProjects: ["Prophet's Mosque expansion", 'Pilgrim City developments', 'New hotel complexes'],
    opportunities: ['High-durability commercial fixtures', 'Emergency lighting systems', 'Hotel-grade switches']
  },
  riyadh: {
    id: 'riyadh',
    name: 'Riyadh',
    arabicName: 'الرياض',
    population: '7.0 million',
    constructionValue: '$120+ billion',
    primaryPort: 'Dry Port (Rail from Dammam)',
    demandScore: 95,
    competition: 'High',
    logisticsCost: 'High',
    description: 'The capital city and economic hub, driving the Vision 2030 transformation with giga-projects.',
    keyProjects: ['Qiddiya', 'Diriyah Gate', 'King Salman Park', 'New Murabba'],
    opportunities: ['Smart home systems', 'Sustainable building materials', 'High-end sanitary ware']
  },
  jeddah: {
    id: 'jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    population: '4.7 million',
    constructionValue: '$65+ billion',
    primaryPort: 'Jeddah Islamic Port',
    demandScore: 85,
    competition: 'High',
    logisticsCost: 'Low',
    description: 'The gateway to Mecca and a major commercial port city with a booming real estate market.',
    keyProjects: ['Jeddah Central', 'Jeddah Economic City', 'Al Arous'],
    opportunities: ['Corrosion-resistant materials', 'Commercial plumbing', 'Marine-grade electrical']
  },
  dammam: {
    id: 'dammam',
    name: 'Dammam',
    arabicName: 'الدمام',
    population: '1.3 million',
    constructionValue: '$40+ billion',
    primaryPort: 'King Abdulaziz Port',
    demandScore: 70,
    competition: 'Medium',
    logisticsCost: 'Low',
    description: 'The industrial heartland of the Kingdom, focusing on energy and manufacturing infrastructure.',
    keyProjects: ['King Salman Energy Park (SPARK)', 'Dammam Airport Expansion'],
    opportunities: ['Industrial electrical gear', 'Heavy-duty piping', 'Explosion-proof fittings']
  }
};
