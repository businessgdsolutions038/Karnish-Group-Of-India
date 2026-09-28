export const COMPANY = {
  name: 'Karnish Group of India',
  tagline: 'Solar & Power Engineering',
  phone: '+91 79787 63611',
  whatsapp: '919073338336',
  whatsappDisplay: '+91 90733 38336',
  email: 'care@karnishgroup.com',
  hours: 'Open 24 × 7',
};

export const WHATSAPP_LINK = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hello, I'd like to know more about your solar solutions."
)}`;

export const TEL_LINK = `tel:${COMPANY.phone.replace(/\s/g, '')}`;

export const LOCATIONS = [
  {
    type: 'Head Office',
    city: 'Berhampur, Odisha',
    address: 'Saliabandha Street, Gosaninuagaon, Berhampur, Ganjam - 760003',
  },
  {
    type: 'Showroom',
    city: 'Berhampur, Odisha',
    address: 'Solaris Galleria, Andhapasara Ring Road, Gosaninuagaon, Berhampur, Ganjam - 760003',
  },
  {
    type: 'Showroom',
    city: 'Bhubaneswar, Odisha',
    address: 'Ketuka Complex 2, Jagamara Square, Bhubaneswar - 750001',
  },
  {
    type: 'Showroom',
    city: 'Noida, Uttar Pradesh',
    address: 'Main Road, Sector 53, Jhijhore Main Road, Noida, UP - 234560',
  },
];

export const ESCALATION = {
  level1: { email: 'care@karnishgroup.com' },
  technical: {
    email: 'technologydirector@karnishgroup.com',
    name: 'Rajesh Kumar Padhy',
    phone: '9073338336',
  },
  billing: {
    email: 'operations@karnishgroup.com',
    name: 'Nisha Nidhi Singh',
    phone: '9911043958',
  },
  level3: {
    email: 'headmanagement@karnishgroup.com',
    name: 'Rashmita Sabat',
    phone: '7978763611',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Solar Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact', href: '#contact' },
];

export const REQUIREMENT_OPTIONS = [
  'On-Grid Solar',
  'Off-Grid Solar',
  'Solar Pump',
  'Solar Street Light',
  'Solar EPC',
  'Inverter Battery',
  'E-Rickshaw Battery',
  'Other',
];

export const IMAGES = {
  heroRooftop: 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  heroPortrait: 'https://images.pexels.com/photos/29206491/pexels-photo-29206491.jpeg?auto=compress&cs=tinysrgb&w=800',
  heroPanelDetail: 'https://images.pexels.com/photos/38171120/pexels-photo-38171120.jpeg?auto=compress&cs=tinysrgb&w=940',
  aboutEngineering: 'https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=940',
  aboutEngineer: 'https://images.pexels.com/photos/4254159/pexels-photo-4254159.jpeg?auto=compress&cs=tinysrgb&w=940',
  serviceOnGrid: 'https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=940',
  serviceOffGrid: 'https://images.pexels.com/photos/6961112/pexels-photo-6961112.jpeg?auto=compress&cs=tinysrgb&w=940',
  serviceConditioning: 'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&w=940',
  serviceEpc: 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=940',
  productPump: 'https://images.pexels.com/photos/28240873/pexels-photo-28240873.jpeg?auto=compress&cs=tinysrgb&w=940',
  productSubmersible: 'https://images.pexels.com/photos/36797458/pexels-photo-36797458.jpeg?auto=compress&cs=tinysrgb&w=940',
  productController: 'https://images.pexels.com/photos/4254163/pexels-photo-4254163.jpeg?auto=compress&cs=tinysrgb&w=940',
  productStreetLight: 'https://images.pexels.com/photos/32915849/pexels-photo-32915849.jpeg?auto=compress&cs=tinysrgb&w=940',
  batteryInverter: 'https://images.pexels.com/photos/36594160/pexels-photo-36594160.jpeg?auto=compress&cs=tinysrgb&w=940',
  batteryERickshaw: 'https://images.pexels.com/photos/37384330/pexels-photo-37384330.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectRooftop: 'https://images.pexels.com/photos/29923348/pexels-photo-29923348.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectCommercial: 'https://images.pexels.com/photos/5819949/pexels-photo-5819949.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectPumping: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectStreetLight: 'https://images.pexels.com/photos/19665970/pexels-photo-19665970.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectIndustrial: 'https://images.pexels.com/photos/15751131/pexels-photo-15751131.jpeg?auto=compress&cs=tinysrgb&w=940',
  projectOffGrid: 'https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg?auto=compress&cs=tinysrgb&w=940',
  ctaBg: 'https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600',
};
