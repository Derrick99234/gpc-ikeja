export interface BankAccount {
  id: string;
  category: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  description: string;
  icon: string;
}

export interface ServiceScheduleItem {
  id: string;
  day: string;
  title: string;
  time: string;
  description: string;
  tag: string;
  highlight?: string;
  icon: string;
}

export interface MinistryItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon: string;
}

export const CHURCH_INFO = {
  name: "Gospel Pillars Church",
  fullName: "Gospel Pillars International Churches",
  cathedralName: "The Ark of Light for All Nations",
  branch: "Ikeja Global Headquarters",
  slogans: ["Where God is.", "The Place of His Glory."],
  themeYear: "2026",
  themeTitle: "Glory, Overflow and Dominion",
  themeScripture: "Genesis 1:26",
  address: "Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos State, Nigeria",
  nearLandmark: "Adjacent Lagos State Secretariat, near Oregun Junction",
  hotlines: ["+234 809 011 1194", "+234 703 690 5175", "+234 706 998 0367"],
  email: "info@gospelpillars.org",
  givingEmail: "giving@gospelpillarsikeja.org",
  website: "https://gospelpillars.org",
  googleMapsQuery: "https://maps.google.com/maps?q=ARK%20OF%20LIGHT%20FOR%20ALL%20NATION%2C%2011C%20KUDIRAT%20ABIOLA%20WAY",
  googleMapsEmbed: "https://maps.google.com/maps?q=ARK%20OF%20LIGHT%20FOR%20ALL%20NATION%2C%2011C%20KUDIRAT%20ABIOLA%20WAY&t=m&z=14&output=embed&iwloc=near"
};

export const LEADERSHIP_INFO = {
  generalOverseer: "Prophet Dr. Isaiah Macwealth",
  coSeniorPastor: "Prophetess Lily Anita Macwealth",
  quote: "We are an apostolic and prophetic family committed to unveiling the tangible presence, power, and glory of Jesus Christ to all nations.",
  bioParagraphs: [
    "Beloved friend, welcome to Gospel Pillars Church Ikeja. For over two decades, the ministry of Prophet Dr. Isaiah Macwealth and Prophetess Lily Anita Macwealth has stood as an uncompromising international voice of revival, prophetic revelation, and compassionate kingdom outreach.",
    "On November 11, 2023, the global headquarters — The Ark of Light for All Nations — was officially commissioned at Plot 11, Kudirat Abiola Way, Alausa, Ikeja. It has rapidly grown into a gospel epicenter in Lagos, welcoming thousands of worshippers each week.",
    "Through international crusades, authorship of more than 100 life-transforming books, the OneSound Revival Fellowship, and the massive relief efforts of the Ark Food and Emergency Bank, the ministry continues to impact millions across Africa, Europe, and the Americas."
  ]
};

export const STATS = [
  { value: "10,000+", label: "Sanctuary Capacity", sub: "Acoustically engineered cathedral" },
  { value: "24/7", label: "OneSound Revival TV", sub: "Continuous satellite broadcasting" },
  { value: "150,000+", label: "Meals Distributed", sub: "Through the Ark Food Bank" },
  { value: "100+", label: "Global Church Plants", sub: "Across four continents" }
];

export const SERVICE_SCHEDULES: ServiceScheduleItem[] = [
  {
    id: "sunday",
    day: "Sunday Gatherings",
    title: "Sunday Glory Celebrations",
    time: "1st: 8:00 AM - 9:15 AM | 2nd: 9:15 AM - 11:00 AM | 3rd: 11:00 AM (1st Sun)",
    description: "High praise, celestial worship, expository apostolic doctrine, and the miraculous flow of the Holy Spirit.",
    tag: "Lord's Day",
    highlight: "Kingdom Kids & Creche Open • Arrival: 7:50 AM",
    icon: "wb_sunny"
  },
  {
    id: "wednesday",
    day: "Midweek Gathering",
    title: "Word & Miracle Encounter",
    time: "Every Wednesday | 7:00 PM – 9:00 PM WAT",
    description: "In-depth expository revelation of the Scriptures accompanied by communion, instant healing, and prophetic deliverance.",
    tag: "Midweek Service",
    highlight: "Holy Communion Service • Simulcast on OneSound TV",
    icon: "menu_book"
  },
  {
    id: "friday",
    day: "Prayer & Intercession",
    title: "Friday Reblaze Prayer",
    time: "Every Friday Evening | 6:00 PM – 8:30 PM WAT",
    description: "Intense Holy Ghost intercession, spiritual warfare, prophetic decreeing, and personal rejuvenation under the fire of the altar.",
    tag: "Revival Fire",
    highlight: "Send Prayer Petitions Ahead",
    icon: "local_fire_department"
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: "tithe",
    category: "Tithe & Firstfruit",
    accountName: "Gospel Pillars Ministry Lagos",
    accountNumber: "1012870407",
    bankName: "Zenith Bank PLC",
    description: "General ministry tithes, firstfruit covenants, and foundational worship honor.",
    icon: "payments"
  },
  {
    id: "offering",
    category: "General Offering",
    accountName: "Gospel Pillars Int'l Church Lagos HQ",
    accountNumber: "1015224331",
    bankName: "Zenith Bank PLC",
    description: "Sunday and midweek worship offerings, seed sowing, and operations.",
    icon: "church"
  },
  {
    id: "sanctuary",
    category: "Ark of Light Sanctuary",
    accountName: "Ark of Light for All Nations Sanctuary",
    accountNumber: "1310011908",
    bankName: "Zenith Bank PLC",
    description: "Building, architecture, and infrastructure expansion of the cathedral.",
    icon: "foundation"
  },
  {
    id: "foodbank",
    category: "Ark Food Bank (TIWI)",
    accountName: "Isaiah Wealth Initiative (Ark Food Bank)",
    accountNumber: "1013167948",
    bankName: "Zenith Bank PLC",
    description: "Feeding indigent families, orphans, disaster relief, and community aid.",
    icon: "volunteer_activism"
  },
  {
    id: "partnership",
    category: "Ministry Partnership",
    accountName: "Gospel Pillars Ministry",
    accountNumber: "1012861782",
    bankName: "Zenith Bank PLC",
    description: "Mission Assisted Project (MAP) and global kingdom propagation.",
    icon: "handshake"
  },
  {
    id: "thanksgiving",
    category: "Thanksgiving Offering",
    accountName: "Gospel Pillars Int'l Operations",
    accountNumber: "1015307166",
    bankName: "Zenith Bank PLC",
    description: "Vows, annual gratitude offerings, and celebration seed donations.",
    icon: "celebration"
  }
];

export const MINISTRIES: MinistryItem[] = [
  {
    id: "npa",
    title: "Next Pillar Association (NPA)",
    description: "Discipleship maturation academy structured across Paul's Class (foundation), Philip's Class (executive/online), and Cornelius Class (leadership).",
    ctaText: "Enroll in NPA",
    ctaHref: "#visit-planner",
    icon: "school"
  },
  {
    id: "kids",
    title: "Kingdom Kids Church",
    description: "A joyful, spiritually enriching, and secure environment nurturing our infants, children, and pre-teens in godly virtues and prayer.",
    ctaText: "Children Ministry",
    ctaHref: "#visit-planner",
    icon: "face"
  },
  {
    id: "foodbank",
    title: "Ark Food & Emergency Bank",
    description: "Community food distribution center, emergency shelter, and compassion outreach providing free food and care to thousands across Lagos.",
    ctaText: "Partner With Food Bank",
    ctaHref: "#giving",
    icon: "volunteer_activism"
  },
  {
    id: "choir",
    title: "OneSound Choir & Music",
    description: "Prophetic psalmists, anointed vocalists, and skilled instrumentalists establishing celestial portals of praise in every service.",
    ctaText: "Audition & Join",
    ctaHref: "#visit-planner",
    icon: "music_note"
  }
];

export const MEDIA_LINKS = {
  liveStreamEmbed: "https://www.youtube.com/embed/OPERFrYRwPQ",
  liveStreamChannel: "https://www.youtube.com/@gospelpillarsinternational/live",
  teachingsChannel: "https://youtube.com/@isaiahmacwealth",
  audioBooksChannel: "https://www.youtube.com/@MacwealthAudioBooks/videos",
  facebookPage: "https://web.facebook.com/isaiahmacwealth",
  instagramPage: "https://www.instagram.com/isaiahmacwealth/"
};
