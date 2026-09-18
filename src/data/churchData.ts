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
  cathedralName: "The Ark of Light",
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

export const CHURCH_VISION_MISSION = {
  vision: "To reveal JEHOVAH as Almighty, all-seeing, all-knowing, and all-powerful, and YESHUA His Son as the ONLY WAY to GOD and to Salvation.",
  purpose: "To reveal the knowledge of the glory of God to the nations as the waters cover the seas, leading to the restoration of the fear of God and the salvation of this Generation.",
  mission: "Holiness, sanctification, and consecration to God.",
  priorities: [
    {
      number: "01",
      title: "The Honour of God",
      desc: "Upholding God's supreme majesty, holy reverence, and divine directives in every spiritual endeavor and leadership decision.",
      icon: "military_tech"
    },
    {
      number: "02",
      title: "The Sight of God",
      desc: "Revealing the manifest presence and glory of God so tangibly that hearts are drawn to genuine repentance and worship.",
      icon: "visibility"
    },
    {
      number: "03",
      title: "The Power of God",
      desc: "Demonstrating supernatural signs, wonders, miraculous healings, and prophetic deliverance across all peoples and nations.",
      icon: "bolt"
    }
  ],
  pattern: "Eradicating human efforts and dependence on the arm of flesh by leaning solely on JEHOVAH as LORD and MASTER, with full dependence on the Holy Spirit.",
  mandate: [
    { target: "1 Billion Souls", description: "Global end-time harvest preparing the earth for Yeshua's return", icon: "public" },
    { target: "3 Million Jews", description: "Spiritual awakening and Messianic salvation in Christ", icon: "synagogue" },
    { target: "Second Coming", description: "Equipping a glorious, holy, and uncompromising church", icon: "auto_awesome" }
  ],
  resolution: "To die to the fear of man and live to the fear of God."
};

export const PROPHET_PROFILE = {
  roleTag: "Head of the Ministry",
  title: "Prophet Isaiah Macwealth",
  designation: "General Overseer & Apostolic Leader",
  portrait: "/images/prophet_isaiah_portrait.jpg",
  quote: "We are on an urgent end-time commission to reveal the unadulterated power and glory of Yeshua, eradicating the arm of flesh and awakening a generation consecrated to God.",
  scripturalAnchor: "Ephesians 4:11–13 • Isaiah 60:1–3",
  bio: [
    "Prophet Dr. Isaiah Macwealth is an apostolic and prophetic minister of the gospel, international teacher of kingdom mysteries, author of over 100 transformative Christian books, and a dedicated philanthropist.",
    "Called by God with a global mandate of revival, he is the Founder and General Overseer of Gospel Pillars International Churches, with its world headquarters — The Ark of Light — situated on Plot 11, Kudirat Abiola Way, Alausa, Ikeja.",
    "His ministry is distinguished by deep expository preaching, spontaneous prophetic revelation, verifiable healings, and supernatural interventions. Prophet Isaiah is committed to the Second Coming of the Lord, actively pursuing the prophetic harvest of 1 Billion souls and the awakening of nations.",
    "Beyond the pulpit, his heart for humanity has touched hundreds of thousands across multiple continents through The Isaiah Wealth Initiative (TIWI), operating the Ark Food Bank, healthcare outreaches, and emergency relief programs."
  ],
  achievements: [
    { value: "100+", title: "Published Books", detail: "Prolific author on faith, prayer, and doctrine" },
    { value: "1 Billion", title: "Harvest Mandate", detail: "Global prophetic end-time commission" },
    { value: "TIWI", title: "Humanitarian Impact", detail: "Ark Food Bank feeding thousands monthly" },
    { value: "Global", title: "Apostolic Network", detail: "Church plants & conferences across continents" }
  ]
};

export const LEADERSHIP_INFO = {
  generalOverseer: "Prophet Dr. Isaiah Macwealth",
  coSeniorPastor: "Prophetess Lily Anita Macwealth",
  quote: "We are an apostolic and prophetic family committed to unveiling the tangible presence, power, and glory of Jesus Christ to all nations.",
  bioParagraphs: [
    "Beloved friend, welcome to Gospel Pillars Church Ikeja. For over two decades, the ministry of Prophet Dr. Isaiah Macwealth has stood as an uncompromising international voice of revival, prophetic revelation, and compassionate kingdom outreach.",
    "On November 11, 2023, the global headquarters — The Ark of Light — was officially commissioned at Plot 11, Kudirat Abiola Way, Alausa, Ikeja. It has rapidly grown into a gospel epicenter in Lagos, welcoming thousands of worshippers each week.",
    "Through international crusades, authorship of more than 100 life-transforming books, and the massive relief efforts of the Ark Food Bank, the ministry continues to impact millions across Africa, Europe, and the Americas."
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
    time: "1st: 8:00 AM - 9:15 AM | 2nd: 9:15 AM - 11:00 AM",
    description: "High praise, celestial worship, expository apostolic doctrine, and the miraculous flow of the Holy Spirit.",
    tag: "Lord's Day",
    highlight: "Arrival: 7:50 AM • In-Person & Online",
    icon: "wb_sunny"
  },
  {
    id: "wednesday",
    day: "Midweek Gathering",
    title: "Midweek Service",
    time: "Every Wednesday | 7:00 PM – 9:00 PM WAT",
    description: "In-depth expository revelation of the Scriptures accompanied by instant healing and prophetic deliverance.",
    tag: "Midweek Service",
    highlight: "Word & Prayer Encounter",
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
