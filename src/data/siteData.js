export const company = {
  name: 'Alpha Private Limited',
  shortName: 'Alpha',
  tagline: 'Building better roads, bridges and essential infrastructure.',
  philosophy: 'I Am Assured',
  experienceYears: 25,
  email: import.meta.env.VITE_CONTACT_EMAIL || 'admin@aeinfo.in',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+91 44 2715 6600',
  address:
    import.meta.env.VITE_OFFICE_ADDRESS ||
    'Plot No. 145, SIPCOT, near Surin Automotive, Katrambakkam, Sriperumbudur Taluk, Kanchipuram District, Tamil Nadu 602117',
  mapUrl:
    'https://maps.google.com/?q=Plot+145+SIPCOT+Katrambakkam+Sriperumbudur+Tamil+Nadu+602117',
  website: 'https://aeinfo.in',
  socialLinks: {
    linkedin: '',
    instagram: '',
    facebook: '',
  },
}

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact us', href: '/contact' },
]

export const services = [
  {
    id: 'highway',
    slug: 'highway-construction',
    number: '01',
    title: 'Highway Construction',
    shortTitle: 'Highways',
    category: 'Transport',
    image: '/images/transport-network.webp',
    imageAlt: 'Illustrative image of elevated highway infrastructure on the Indian coast',
    description:
      'Highway works planned around safe, reliable movement—connecting towns, services and opportunity.',
    overview:
      'A highway is more than a line between two places. It is a link between people, services and the economic life of a region. Alpha’s previous company materials describe highway works along NH45C, including toll-plaza buildings and bus-shelter facilities.',
    detail:
      'Our approach brings planning, coordination and construction details into one clear picture. From corridor requirements to supporting facilities, each element should work together to make travel more dependable and easier to use.',
    focus: [
      'Highway and corridor construction',
      'Toll-plaza buildings and supporting facilities',
      'Passenger amenities and bus-shelter infrastructure',
      'Safe, considered movement for road users',
    ],
    projectReference:
      'The previous company website references work along NH45C, including toll-plaza and bus-shelter facilities. Exact package names, dates and scope can be added from the project records.',
  },
  {
    id: 'irrigation',
    slug: 'irrigation-and-water-management',
    number: '02',
    title: 'Irrigation & Water Management',
    shortTitle: 'Irrigation',
    category: 'Water',
    image: '/images/irrigation-canal.webp',
    imageAlt: 'Illustrative image of an irrigation canal through farmland',
    description:
      'Water-control works designed around dependable flow, local conditions and the needs of the communities they serve.',
    overview:
      'Water infrastructure has a direct connection to everyday life and agriculture. Alpha’s earlier materials describe irrigation regulator works across the Vannar and Cauvery river systems in Thanjavur district.',
    detail:
      'Careful planning, suitable equipment and attentive execution help water-management infrastructure perform as intended. Each project calls for a clear understanding of flow, site conditions and the people who rely on the system.',
    focus: [
      'Irrigation and water-management structures',
      'Regulators and river-system infrastructure',
      'Site coordination and construction planning',
      'Reliable operation and maintainability',
    ],
    projectReference:
      'The previous company website refers to regulator works on the Vannar and Cauvery rivers in Thanjavur district. Add project names, client details and dates when confirmed.',
  },
  {
    id: 'bridge',
    slug: 'bridge-construction',
    number: '03',
    title: 'Bridge Construction',
    shortTitle: 'Bridges',
    category: 'Structures',
    image: '/images/bridge-construction.webp',
    imageAlt: 'Illustrative image of bridge and transport infrastructure under construction',
    description:
      'Durable bridge infrastructure that helps people and essential services cross barriers with confidence.',
    overview:
      'Bridges carry more than traffic: they connect neighbourhoods, shorten journeys and keep essential routes moving. Alpha’s earlier company material describes experience in bridge construction and durable structures.',
    detail:
      'Successful bridge delivery depends on disciplined coordination across structural works, access, safety and the surrounding network. Our project approach keeps the wider purpose in view while attending to the details on site.',
    focus: [
      'Bridge and crossing structures',
      'Coordination with connected road networks',
      'Construction sequencing and site access',
      'Durability and whole-life considerations',
    ],
    projectReference:
      'Bridge construction is listed in the previous company website. Add bridge names, locations, client references and project photography after checking the company archive.',
  },
  {
    id: 'road',
    slug: 'road-construction',
    number: '04',
    title: 'Road Construction',
    shortTitle: 'Roads',
    category: 'Transport',
    image: '/images/road-project.webp',
    imageAlt: 'Illustrative image of road construction and transport infrastructure',
    description:
      'Road networks that support smoother everyday journeys and stronger connections between places.',
    overview:
      'Well-planned roads help make towns, services and opportunities easier to reach. Previous Alpha website content describes road-network work intended to improve local connectivity.',
    detail:
      'From urban routes to connecting roads, thoughtful construction considers the people who use the network as well as the conditions in which it is built. Coordination and quality checks keep the focus on safe, dependable movement.',
    focus: [
      'Urban and connecting roads',
      'Roadway construction and improvement',
      'Coordination of supporting infrastructure',
      'Safety, quality and reliable access',
    ],
    projectReference:
      'The previous company website describes a road-network project that improved connectivity. Confirm its location, contract details and delivery dates before adding a formal case study.',
  },
  {
    id: 'pipeline',
    slug: 'pipeline-works',
    number: '05',
    title: 'Pipeline Works',
    shortTitle: 'Pipelines',
    category: 'Water',
    image: '/images/pipeline-network.webp',
    imageAlt: 'Illustrative image of a large water pipeline',
    description:
      'Essential pipeline systems delivered with careful attention to alignment, installation and the land around them.',
    overview:
      'Pipelines are vital connections beneath the surface. Alpha’s earlier website includes pipeline works within its water-infrastructure experience and describes water-supply work in the Chennai region.',
    detail:
      'Pipeline packages need careful route planning, coordinated site work and a consistent focus on system integrity. Our approach considers installation, interfaces and the communities and landscapes along the route.',
    focus: [
      'Water-supply pipeline infrastructure',
      'Route and site coordination',
      'Installation planning and construction',
      'System integrity and responsible reinstatement',
    ],
    projectReference:
      'Previous company materials refer to pipeline and Chennai-region water-infrastructure works. Verify the project title, client and delivered scope before publishing a case study.',
  },
  {
    id: 'urban',
    slug: 'urban-development',
    number: '06',
    title: 'Urban Development',
    shortTitle: 'Urban projects',
    category: 'Community',
    image: '/images/hero-infrastructure.webp',
    imageAlt: 'Illustrative image of urban buildings and infrastructure',
    description:
      'Community-focused places and public infrastructure shaped to serve the people who use them.',
    overview:
      'The places people share—from civic facilities to public spaces—help define how a community works and feels. Alpha’s previous website includes urban-development work among its construction capabilities.',
    detail:
      'Thoughtful delivery starts with how a place will be used. Bringing site planning, public access and construction coordination together helps create infrastructure that feels purposeful and works for the people around it.',
    focus: [
      'Community and civic infrastructure',
      'Public-use and recreational facilities',
      'Site planning and construction coordination',
      'Useful, accessible project outcomes',
    ],
    projectReference:
      'Urban development appears in the previous company website. Add confirmed project examples, facility names and locations as records are collected.',
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure-development',
    number: '07',
    title: 'Infrastructure Development',
    shortTitle: 'Infrastructure',
    category: 'Community',
    image: '/images/urban-corridor.webp',
    imageAlt: 'Illustrative image of transport and infrastructure development',
    description:
      'Connected infrastructure and civil works that support the growth of towns, businesses and communities.',
    overview:
      'Infrastructure brings essential systems together. Alpha’s stated work spans roads, bridges, highways, water management and supporting facilities—project types that help places function and grow.',
    detail:
      'A joined-up view of infrastructure helps coordinate individual works with the wider network. Clear communication, thoughtful planning and attention to delivery support a stronger outcome across each project interface.',
    focus: [
      'Integrated civil and infrastructure works',
      'Road, bridge and water-system interfaces',
      'Public and supporting facilities',
      'Planning, coordination and construction delivery',
    ],
    projectReference:
      'The previous company website describes infrastructure development as a core focus. Add specific, verified project references as the portfolio is confirmed.',
  },
]

export const projectShowcase = [
  {
    id: 'nh45c-highway-facilities',
    number: '01',
    title: 'NH45C highway facilities',
    category: 'Highways',
    location: 'NH45C · Tamil Nadu',
    description:
      'Previous company materials reference NH45C corridor works, including toll-plaza buildings and bus-shelter facilities.',
    image: '/images/transport-network.webp',
    imageAlt: 'Illustrative image of elevated road infrastructure in an Indian city',
    serviceSlug: 'highway-construction',
  },
  {
    id: 'vannar-cauvery-regulators',
    number: '02',
    title: 'Vannar & Cauvery regulators',
    category: 'Water',
    location: 'Thanjavur district · Tamil Nadu',
    description:
      'The earlier company website describes regulator works on the Vannar and Cauvery river systems.',
    image: '/images/irrigation-canal.webp',
    imageAlt: 'Illustrative image of an irrigation canal through farmland',
    serviceSlug: 'irrigation-and-water-management',
  },
  {
    id: 'chennai-region-pipeline',
    number: '03',
    title: 'Water-supply pipeline works',
    category: 'Water',
    location: 'Chennai region · Tamil Nadu',
    description:
      'Pipeline and water-infrastructure work is included in the previous company website. Package specifics can be added from project records.',
    image: '/images/pipeline-network.webp',
    imageAlt: 'Illustrative image of a water-supply pipeline',
    serviceSlug: 'pipeline-works',
  },
  {
    id: 'community-infrastructure',
    number: '04',
    title: 'Community infrastructure',
    category: 'Community',
    location: 'Tamil Nadu',
    description:
      'The previous website includes urban-development and public-facility work. Add confirmed facility and project details here.',
    image: '/images/hero-infrastructure.webp',
    imageAlt: 'Illustrative image of urban buildings and infrastructure',
    serviceSlug: 'urban-development',
  },
  {
    id: 'bridge-construction',
    number: '05',
    title: 'Bridge construction',
    category: 'Structures',
    location: 'Project details to confirm',
    description:
      'Bridge construction is part of the company’s stated capability. Project-specific records and photography can be added here.',
    image: '/images/bridge-construction.webp',
    imageAlt: 'Illustrative image of a bridge structure under construction',
    serviceSlug: 'bridge-construction',
  },
]

export const projectCategories = [
  'All',
  'Highways',
  'Water',
  'Structures',
  'Community',
]
