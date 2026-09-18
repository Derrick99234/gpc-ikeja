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
  arkName: "The Ark of Light",
  branch: "Global Headquarters",
  slogans: ["Where God is", "The Place of His Glory."],
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
      text: "The Honour of God in all decisions.",
      icon: "military_tech"
    },
    {
      number: "02",
      text: "The Sight of God in manifestation.",
      icon: "visibility"
    },
    {
      number: "03",
      text: "The Power of God in demonstration to all peoples, nations, and governments.",
      icon: "bolt"
    }
  ],
  pattern: "Eradicating human efforts and dependence on the arm of flesh by leaning solely on JEHOVAH as LORD and MASTER, with full dependence on the Holy Spirit.",
  mandate: [
    { target: "Prepare for the Second Coming of the LORD", icon: "cloud" },
    { target: "1 Billion Souls Harvest", icon: "public" },
    { target: "3 Million Jews Conversion", icon: "synagogue" }
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
  { value: "10,000+", label: "Sanctuary Capacity", sub: "Acoustically engineered auditorium" },
  { value: "24/7", label: "OneSound Revival TV", sub: "Continuous satellite broadcasting" },
  { value: "150,000+", label: "Meals Distributed", sub: "Through the Ark Food Bank" },
  { value: "100+", label: "Global Church Plants", sub: "Across four continents" }
];

export const SERVICE_SCHEDULES: ServiceScheduleItem[] = [
  {
    id: "sunday",
    day: "Sunday Gatherings",
    title: "Sunday Service",
    time: "1st: 8:00 AM - 9:15 AM | 2nd: 9:15 AM - 11:00 AM",
    description: "A joyful atmosphere to praise and dance before the Lord, grow spiritually, and receive life-transforming revelation from God's Word.",
    tag: "Sunday Gathering",
    highlight: "Doors Open: 7:45 AM • Arrival: 7:50 AM",
    icon: "wb_sunny"
  },
  {
    id: "wednesday",
    day: "Midweek Gathering",
    title: "Midweek Service",
    time: "Every Wednesday | 7:00 PM – 9:00 PM WAT",
    description: "An enriching expository Bible study designed to ground believers in scriptural truth, practical wisdom for business and career, and spiritual maturity.",
    tag: "Bible Study",
    highlight: "Word & Wisdom Encounter",
    icon: "menu_book"
  },
  {
    id: "friday",
    day: "Prayer & Intercession",
    title: "Friday Reblaze Prayer",
    time: "Every Friday Evening | 7:00 PM – 8:00 PM WAT",
    description: "An intense spiritual altar of fervent prayer, Holy Ghost intercession, and personal revival where burdens are lifted and spiritual strength is renewed.",
    tag: "Revival Prayer",
    highlight: "Altar of Intercession",
    icon: "local_fire_department"
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: "offerings",
    category: "Offerings",
    accountName: "Gospel Pillars Church Ikeja",
    accountNumber: "1313569390",
    bankName: "Zenith Bank",
    description: "Sunday and midweek worship offerings, seed sowing, and thanksgiving.",
    icon: "church"
  },
  {
    id: "tithes",
    category: "Tithes",
    accountName: "Gospel Pillars Church Ikeja",
    accountNumber: "1311531234",
    bankName: "Zenith Bank",
    description: "Covenant tithes, firstfruits, and foundational worship honor to God.",
    icon: "payments"
  },
  {
    id: "partnership",
    category: "GGP- Partnership",
    accountName: "Gospel Pillars Church Ikeja",
    accountNumber: "1311681081",
    bankName: "Zenith Bank",
    description: "Global Gospel Partnership, kingdom advancement, and missionary support.",
    icon: "handshake"
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
  facebookPage: "https://www.facebook.com/share/1ByvCzBdPs/?mibextid=wwXIfr",
  instagramPage: "https://www.instagram.com/gpc.ikeja?stkn=MWx1a2E3NGgwb2t0Nw%3D%3D&utm_source=qr",
  tiktokPage: "https://www.tiktok.com/@gpc.ikeja?_r=1&_t=ZS-99pkWlnMcra"
};
