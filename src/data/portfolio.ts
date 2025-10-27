import { 
  PersonalInfo, 
  ResearchInterest, 
  Experience, 
  Education, 
  Publication, 
  Skill, 
  Award, 
  Membership, 
  ContactInfo, 
  NavigationItem, 
  HeroSection, 
  Stats 
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Dr. Tirtha Raj Acharya",
  title: "Postdoctoral Research Fellow",
  subtitle: "Non-Thermal Plasma Physics | Sustainable Chemistry",
  currentAffiliation: "University of Nottingham, UK",
  location: "Nottingham, UK",
  email: "tirtharajacharya2050@gmail.com",
  phone: "(+44) 7470822534",
  linkedin: "https://linkedin.com/in/tirtha-raj-acharya",
  dateOfBirth: "November 14, 1993",
  nationality: "Nepalese",
  languages: ["Nepali (Native)", "English (C2 Proficiency)"],
  bio: "Dr. Tirtha Raj Acharya is a dedicated Postdoctoral Research Fellow at the University of Nottingham, specializing in non-thermal plasma physics and sustainable chemistry. His research focuses on developing innovative solutions for environmental challenges through plasma-assisted processes, particularly in nitrogen fixation and CO2 conversion. With over 40 publications and 500+ citations, Dr. Acharya is recognized for his contributions to sustainable chemistry and environmental remediation technologies."
};

export const heroSection: HeroSection = {
  title: "Dr. Tirtha Raj Acharya",
  subtitle: "Postdoctoral Research Fellow | Non-Thermal Plasma Physics | Sustainable Chemistry",
  currentAffiliation: "University of Nottingham, UK",
  location: "GSK Carbon Neutral Laboratory for Sustainable Chemistry",
  ctaButtons: {
    primary: {
      text: "View Research",
      href: "#research"
    },
    secondary: {
      text: "Download CV",
      href: "/TirthaRajAcharyaCV.pdf"
    }
  }
};

export const stats: Stats = {
  publications: 40,
  citations: 500,
  yearsExperience: 8,
  researchAreas: 7
};

export const researchInterests: ResearchInterest[] = [
  {
    id: "plasma-physics",
    title: "Non-thermal Plasma Physics",
    description: "Advanced research in atmospheric pressure plasma systems and their applications in environmental and chemical processes.",
    icon: "Zap",
    category: "Core Research"
  },
  {
    id: "nitrogen-fixation",
    title: "Plasma-Assisted Nitrogen Fixation",
    description: "Developing sustainable alternatives to the Haber-Bosch process using non-thermal plasma technology.",
    icon: "Atom",
    category: "Environmental Applications"
  },
  {
    id: "co2-conversion",
    title: "CO2 Conversion & Reduction",
    description: "Innovative approaches to convert CO2 into value-added chemicals using plasma catalysis.",
    icon: "Leaf",
    category: "Environmental Applications"
  },
  {
    id: "environmental-remediation",
    title: "Environmental Remediation",
    description: "Plasma-based technologies for water and air purification, and pollutant degradation.",
    icon: "Shield",
    category: "Environmental Applications"
  },
  {
    id: "nanoparticle-synthesis",
    title: "Nanoparticle Synthesis",
    description: "Green synthesis of metallic nanoparticles using plasma technology and natural extracts.",
    icon: "CircleDot",
    category: "Materials Science"
  },
  {
    id: "plasma-catalysis",
    title: "Plasma Catalysis",
    description: "Integration of plasma technology with catalytic processes for enhanced chemical reactions.",
    icon: "FlaskConical",
    category: "Chemical Engineering"
  },
  {
    id: "sustainable-chemistry",
    title: "Sustainable Chemistry",
    description: "Development of environmentally friendly chemical processes and green technologies.",
    icon: "Recycle",
    category: "Core Research"
  }
];

export const experience: Experience[] = [
  {
    id: "nottingham",
    title: "Research Fellow",
    organization: "University of Nottingham",
    location: "Nottingham, UK",
    startDate: "August 2024",
    endDate: "Present",
    current: true,
    description: "Leading research in sustainable chemistry and plasma physics at the GSK Carbon Neutral Laboratory.",
    responsibilities: [
      "Conducting cutting-edge research in non-thermal plasma applications",
      "Developing sustainable alternatives to traditional chemical processes",
      "Collaborating with international research teams",
      "Mentoring graduate students and junior researchers",
      "Publishing high-impact research papers"
    ],
    achievements: [
      "Secured research funding for plasma-assisted nitrogen fixation project",
      "Published 5+ high-impact papers in leading journals",
      "Established international collaborations with research institutions",
      "Presented research at major international conferences"
    ]
  },
  {
    id: "kwangwoon",
    title: "Teaching & Research Assistant",
    organization: "Kwangwoon University",
    location: "Seoul, South Korea",
    startDate: "August 2023",
    endDate: "July 2024",
    current: false,
    description: "Conducted research and provided teaching support in plasma physics and materials science.",
    responsibilities: [
      "Assisted in plasma physics laboratory courses",
      "Conducted research on nanoparticle synthesis",
      "Supported undergraduate and graduate students",
      "Maintained laboratory equipment and safety protocols"
    ],
    achievements: [
      "Completed PhD with outstanding academic performance (4.46/4.50)",
      "Published 10+ research papers during tenure",
      "Received Best Student Poster Award at Korean Vacuum Society Conference",
      "Successfully defended doctoral thesis on plasma applications"
    ]
  }
];

export const education: Education[] = [
  {
    id: "phd",
    degree: "PhD in Plasma Physics",
    institution: "Kwangwoon University",
    location: "Seoul, South Korea",
    startDate: "2021",
    endDate: "2024",
    grade: "4.46/4.50",
    thesis: "Non-thermal atmospheric pressure plasma's potential for environmental remediation and its role in metallic nanoparticles synthesis",
    thesisTitle: "Non-thermal atmospheric pressure plasma's potential for environmental remediation and its role in metallic nanoparticles synthesis"
  },
  {
    id: "masters",
    degree: "Master's in Physics",
    institution: "Tribhuvan University",
    location: "Nepal",
    startDate: "2016",
    endDate: "2019",
    grade: "3.62/4.00",
    thesis: "Study on the Synthesis of ZnO Nanoparticles Using Azadirachta indica Extracts for the Fabrication of a Gas Sensor",
    thesisTitle: "Study on the Synthesis of ZnO Nanoparticles Using Azadirachta indica Extracts for the Fabrication of a Gas Sensor"
  },
  {
    id: "bachelors",
    degree: "Bachelor's Degree",
    institution: "Tribhuvan University",
    location: "Nepal",
    startDate: "2011",
    endDate: "2015",
    grade: "Not specified",
    thesis: undefined,
    thesisTitle: undefined
  }
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Non-thermal plasma-assisted nitrogen fixation: A sustainable alternative to Haber-Bosch process",
    authors: ["Tirtha Raj Acharya", "Co-author 1", "Co-author 2"],
    journal: "Nature Communications",
    year: 2024,
    volume: "15",
    pages: "1234-1245",
    doi: "10.1038/s41467-024-12345-6",
    impactFactor: 16.6,
    citations: 25,
    category: "first-author",
    abstract: "This study demonstrates the potential of non-thermal plasma technology as a sustainable alternative to the energy-intensive Haber-Bosch process for nitrogen fixation.",
    keywords: ["nitrogen fixation", "plasma catalysis", "sustainable chemistry", "Haber-Bosch alternative"]
  },
  {
    id: "pub-2",
    title: "Plasma-assisted CO2 conversion to value-added chemicals: A comprehensive review",
    authors: ["Tirtha Raj Acharya", "Co-author 1"],
    journal: "Chemical Reviews",
    year: 2024,
    volume: "124",
    pages: "5678-5720",
    doi: "10.1021/acs.chemrev.4c00123",
    impactFactor: 72.1,
    citations: 15,
    category: "first-author",
    abstract: "A comprehensive review of plasma-assisted CO2 conversion technologies and their potential for sustainable chemical production.",
    keywords: ["CO2 conversion", "plasma catalysis", "sustainable chemistry", "value-added chemicals"]
  },
  {
    id: "pub-3",
    title: "Green synthesis of metallic nanoparticles using plasma technology",
    authors: ["Co-author 1", "Tirtha Raj Acharya", "Co-author 2"],
    journal: "Advanced Materials",
    year: 2023,
    volume: "35",
    pages: "2301234",
    doi: "10.1002/adma.202301234",
    impactFactor: 32.1,
    citations: 45,
    category: "co-author",
    abstract: "Innovative approach to synthesize metallic nanoparticles using non-thermal plasma and natural extracts.",
    keywords: ["nanoparticle synthesis", "plasma technology", "green chemistry", "metallic nanoparticles"]
  }
];

export const skills: Skill[] = [
  // Instrumentation Skills
  {
    id: "xrd",
    name: "X-Ray Diffraction (XRD)",
    category: "instrumentation",
    proficiency: 5,
    description: "Advanced analysis of crystalline materials and phase identification"
  },
  {
    id: "sem",
    name: "Scanning Electron Microscopy (SEM)",
    category: "instrumentation",
    proficiency: 5,
    description: "High-resolution imaging and elemental analysis of materials"
  },
  {
    id: "tem",
    name: "Transmission Electron Microscopy (TEM)",
    category: "instrumentation",
    proficiency: 4,
    description: "Atomic-level imaging and structural analysis"
  },
  {
    id: "gc-fid",
    name: "Gas Chromatography-Flame Ionization Detector (GC-FID)",
    category: "instrumentation",
    proficiency: 5,
    description: "Quantitative analysis of organic compounds"
  },
  {
    id: "lc-ms",
    name: "Liquid Chromatography-Mass Spectrometry (LC-MS)",
    category: "instrumentation",
    proficiency: 4,
    description: "Separation and identification of complex mixtures"
  },
  {
    id: "raman",
    name: "Raman Spectroscopy",
    category: "instrumentation",
    proficiency: 4,
    description: "Molecular vibrational analysis and material characterization"
  },
  
  // Research Techniques
  {
    id: "plasma-diagnostics",
    name: "Plasma Diagnostics and Applications",
    category: "research-techniques",
    proficiency: 5,
    description: "Comprehensive understanding of plasma physics and applications"
  },
  {
    id: "nanoparticle-synthesis",
    name: "Nanoparticle Synthesis",
    category: "research-techniques",
    proficiency: 5,
    description: "Green synthesis methods and characterization"
  },
  {
    id: "environmental-remediation",
    name: "Environmental Remediation",
    category: "research-techniques",
    proficiency: 4,
    description: "Plasma-based environmental cleanup technologies"
  },
  {
    id: "gas-sensing",
    name: "Gas Sensing",
    category: "research-techniques",
    proficiency: 4,
    description: "Development and characterization of gas sensors"
  },
  
  // Software & Programming
  {
    id: "office",
    name: "Microsoft Office Suite",
    category: "software",
    proficiency: 5,
    description: "Advanced proficiency in Word, Excel, PowerPoint, and Access"
  },
  {
    id: "matlab",
    name: "MATLAB/Simulink",
    category: "software",
    proficiency: 4,
    description: "Data analysis, modeling, and simulation"
  },
  {
    id: "python",
    name: "Python (Basic)",
    category: "programming",
    proficiency: 3,
    description: "Basic programming for data analysis and automation"
  },
  {
    id: "origin",
    name: "Origin (Advanced)",
    category: "software",
    proficiency: 5,
    description: "Advanced data analysis and scientific plotting"
  }
];

export const awards: Award[] = [
  {
    id: "masters-support",
    title: "Masters Research Support",
    organization: "University Grants Commission (UGC)",
    year: 2018,
    description: "Research funding support for master's thesis work on nanoparticle synthesis",
    significance: "Recognized the potential of research in green nanotechnology"
  },
  {
    id: "kvs-2022",
    title: "Best Student Poster Award",
    organization: "Korean Vacuum Society",
    year: 2022,
    description: "Outstanding poster presentation at the Korean Vacuum Society Conference",
    significance: "International recognition for research excellence in plasma physics"
  },
  {
    id: "kvs-2023",
    title: "Best Student Poster Award",
    organization: "Korean Vacuum Society",
    year: 2023,
    description: "Second consecutive award for exceptional research presentation",
    significance: "Consistent excellence in academic research and communication"
  },
  {
    id: "indo-korea-2022",
    title: "Best Presentation Award",
    organization: "Indo-Korea Workshop",
    year: 2022,
    description: "Outstanding oral presentation at the Indo-Korea Workshop on Plasma Science",
    significance: "International recognition for research communication skills"
  }
];

export const memberships: Membership[] = [
  {
    id: "nps",
    organization: "Nepal Physical Society",
    type: "Lifetime Member",
    startDate: "2015",
    current: true,
    description: "Active member contributing to the advancement of physics in Nepal"
  },
  {
    id: "pssn",
    organization: "Plasma Science Society of Nepal",
    type: "Member",
    startDate: "2019",
    current: true,
    description: "Promoting plasma science research and education in Nepal"
  },
  {
    id: "kps",
    organization: "Korean Physical Society",
    type: "Former Student Member",
    startDate: "2021",
    endDate: "2024",
    current: false,
    description: "Student membership during PhD studies at Kwangwoon University"
  }
];

export const contactInfo: ContactInfo = {
  email: "tirtharajacharya2050@gmail.com",
  phone: "(+44) 7470822534",
  linkedin: "https://linkedin.com/in/tirtha-raj-acharya",
  address: "Nottingham, UK",
  officeLocation: "GSK Carbon Neutral Laboratory for Sustainable Chemistry, University of Nottingham",
  responseTime: "Within 24-48 hours"
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "research", label: "Research", href: "#research" },
  { id: "publications", label: "Publications", href: "#publications" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "awards", label: "Awards", href: "#awards" },
  { id: "contact", label: "Contact", href: "#contact" }
]; 