import { ServiceItem, ReviewItem, FaqItem, PhoneBrand, ServiceEstimateOption } from './types';

export const BUSINESS_INFO = {
  name: "জননী টেলিকম",
  legalName: "জননী টেলিকম ও সফটওয়্যার সলিউশন",
  owner: "মোঃ শামীম আহমেদ",
  experience: "৮+ বছর",
  address: "চিনাকান্দি বাজার (সিএনজি স্ট্যান্ড সংলগ্ন), বিশ্বম্ভরপুর উপজেলা, সুনামগঞ্জ, বাংলাদেশ",
  shortAddress: "চিনাকান্দি বাজার, বিশ্বম্ভরপুর, সুনামগঞ্জ",
  phone: "+8801720302901",
  whatsapp: "+8801720302901",
  displayPhone: "+৮৮০ ১৭২০-৩০২৯০১",
  email: "shamimhossen.tech@gmail.com",
  schedule: {
    days: "শনিবার - বৃহস্পতিবার",
    hours: "সকাল ০৯:০০ - রাত ০৯:০০",
    weekend: "শুক্রবার (সাপ্তাহিক ছুটির দিন - শুধু অত্যন্ত জরুরী প্রয়োজনে ম্যাসেজ করুন)"
  },
  socials: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsappChat: "https://wa.me/8801720302901"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "android-software",
    title: "অ্যান্ড্রয়েড সফটওয়্যার সার্ভিস",
    iconName: "Cpu",
    description: "সব ধরনের অ্যান্ড্রয়েড ব্র্যান্ডের ফাইল ফ্ল্যাশ, সিস্টেমে ওটিএ আপডেট ও সফটওয়্যার বাগ ফিক্স।",
    category: "software",
    popular: true,
    bdtRange: "৩০০ - ১,৫০০ BDT"
  },
  {
    id: "iphone-software",
    title: "আইফোন সফটওয়্যার সলিউশন",
    iconName: "Smartphone",
    description: "iOS আপডেট, আইটিউনস এরর কোড ফিক্স, রিকভারি লুপ মোড সমাধান এবং আইক্লাউড বায়পাস সার্ভিস।",
    category: "software",
    bdtRange: "১,০০০ - ৫,০০০ BDT"
  },
  {
    id: "flash-firmware",
    title: "ফ্ল্যাশ ও ফার্মওয়্যার ইন্সটল",
    iconName: "DownloadCloud",
    description: "অফিসিয়াল স্টোক রম ফ্ল্যাশিং এর মাধ্যমে হ্যাং অন লোগো ও বুটলুপ ড্যামেজ সমস্যার স্থায়ী সমাধান।",
    category: "software",
    bdtRange: "৩০০ - ১,২০০ BDT"
  },
  {
    id: "frp-unlock",
    title: "এফআরপি (FRP) লক আনলক",
    iconName: "KeyRound",
    description: "হার্ড রিসেটের পর ভুলে যাওয়া গুগল অ্যাকাউন্ট (Factory Reset Protection) বাইপাস ও কুইক আনলকিং।",
    category: "unlocking",
    popular: true,
    bdtRange: "৩০০ - ২,০০০ BDT"
  },
  {
    id: "pattern-unlock",
    title: "প্যাটার্ন ও পিন আনলক",
    iconName: "Lock",
    description: "ডাটা ডিলিট না করে অথবা নিরাপদ উপায়ে যেকোনো ফোনের স্ক্রিন লক, পাসকোড এবং পিন কোড রিমুভ।",
    category: "unlocking",
    bdtRange: "২০০ - ১,৫০০ BDT"
  },
  {
    id: "network-unlock",
    title: "কান্ট্রি ও নেটওয়ার্ক আনলক",
    iconName: "Globe",
    description: "বিদেশ থেকে আনা ফোনের কান্ট্রি সিম লক রিলিজ করে বাংলাদেশি সিম ব্যবহারের উপযোগী করা।",
    category: "unlocking",
    bdtRange: "৫০০ - ৪,০০০ BDT"
  },
  {
    id: "dead-repair",
    title: "ডেড মোবাইল মাদারবোর্ড সার্ভিস",
    iconName: "ZapOff",
    description: "মাদারবোর্ডের সর্ট সার্কিট, আইসি (CPU/Power IC) ড্যামেজ রি-বলিং এর মাধ্যমে পুরোপুরি বন্ধ ফোন মেরামত।",
    category: "hardware",
    popular: true,
    bdtRange: "৮০০ - ৬,০০০ BDT"
  },
  {
    id: "display-change",
    title: "টাচ ও ডিসপ্লে প্রতিস্থাপন",
    iconName: "Layers",
    description: "অরিজিনাল সুপার অ্যামোলেড, এলসিডি এবং ওএলইডি ডিসপ্লে গ্লু-ল্যামিনেশন ফিটিংসহ নিখুঁতভাবে পরিবর্তন।",
    category: "hardware",
    popular: true,
    bdtRange: "১,৫০০ - ১০,০০০ BDT"
  },
  {
    id: "battery-replacement",
    title: "অরিজিনাল ব্যাটারি পরিবর্তন",
    iconName: "BatteryCharging",
    description: "শতভাগ অরিজিনাল ব্যাটারি প্রফেশনাল আঠার সিলিং এবং ৩ মাস থেকে ১ বছরের ওয়ারেন্টিসহ রিপ্লেসমেন্ট।",
    category: "hardware",
    bdtRange: "৮০০ - ৩,০০০ BDT"
  },
  {
    id: "charging-problem",
    title: "চার্জিং সমস্যা ও আইসি ফিক্স",
    iconName: "PlugZap",
    description: "ধীর গতির চার্জ বা কানেকশন লুজ হলে টাইপ-সি/মাইক্রো পোর্ট ও চার্জিং রেগুলেটর আইসি পরিবর্তন।",
    category: "hardware",
    bdtRange: "৩০০ - ১,৫০০ BDT"
  },
  {
    id: "water-damage",
    title: "পানিতে ভেজা মোবাইল রিস্টোর",
    iconName: "Droplet",
    description: "পানিতে পড়ে যাওয়া ব্রিকড ফোন বিশেষ আল্ট্রাসনিক ওয়াশ, ড্রাই ও নিখুঁত কম্পোনেন্ট শর্টেজ ফিক্স।",
    category: "hardware",
    bdtRange: "৫০০ - ৩,০০০ BDT"
  },
  {
    id: "speaker-mic",
    title: "স্পিকার, মাইক ও এয়ারপিস ফিক্স",
    iconName: "Volume2",
    description: "কথা শোনা না যাওয়া, গান বাজলে শব্দ ফেটে যাওয়া বা রিংগার নোইজের দ্রুততম ৩0 মিনিটের সলিউশন।",
    category: "hardware",
    bdtRange: "২৫০ - ১,০০০ BDT"
  },
  {
    id: "camera-repair",
    title: "ক্যামেরা বা লেন্স মেরামত",
    iconName: "Camera",
    description: "ঝাপসা ফোকাস ফিক্স, ক্যামেরা কাঁচের স্ক্র্যাচ দূর করা ও মূল ব্যাক/ফ্রন্ট ক্যামেরা মডিউল চেঞ্জ।",
    category: "hardware",
    bdtRange: "৫০০ - ৪,০০০ BDT"
  },
  {
    id: "touch-fix",
    title: "টাচ রেসপন্স ডিসপ্লে মেরামত",
    iconName: "Fingerprint",
    description: "হাত থেকে পড়ে স্ক্রিন ফাটলেও টাচ কাজ করলে ওসিএ (OCA) গ্লাস কাটিং ও ল্যামিনেশন সলিউশন।",
    category: "hardware",
    bdtRange: "১,০০০ - ৪,৫-- BDT"
  },
  {
    id: "os-update",
    title: "অফিসিয়াল ওএস আপডেট ও রুট",
    iconName: "RefreshCw",
    description: "অ্যান্ড্রয়েড ও আইওএস এর অফিসিয়াল আপডেট ফেইল হলে রিকভারি সাইকেল টুল দিয়ে নিরাপদ ডেটা রিস্টোর।",
    category: "software",
    bdtRange: "৩০০ - ১,০০০ BDT"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "আরিফুল ইসলাম",
    location: "বিশ্বম্ভরপুর, সুনামগঞ্জ",
    rating: 5,
    date: "মে ২০, ২০২৬",
    comment: "সুনামগঞ্জে এমন ইন্টারন্যাশনাল মানের সার্ভিস পাবো ভাবিনি। আমার আইফোন ১২ প্রো এর ডিসপ্লে মাত্র দেড় ঘন্টায় চেঞ্জ করে দিয়েছেন মোঃ শামীম ভাই। কালার এবং টাচ রেসপন্স একদম আগের মতো অরিজিনাল ও চমৎকার!",
    device: "iPhone 12 Pro",
    avatarSeed: "ariful"
  },
  {
    id: "rev-2",
    name: "সালমা পারভীন",
    location: "সুনামগঞ্জ সদর",
    rating: 5,
    date: "মে ১৫, ২০২৬",
    comment: "জননী টেলিকমের সার্ভিস আসলেই অসাধারণ। ফোনের চার্জিং প্রবলেম নিয়ে ৩টা দোকান ঘুরেছি, কেউ পারেনি। এখানে মাত্র ৩০ মিনিটে চার্জিং পোর্ট ঠিক করে দেওয়া হয়েছে। ওনাদের টেকনিক্যাল যন্ত্রপাতি অনেক উন্নত।",
    device: "Realme 9 Pro",
    avatarSeed: "salma"
  },
  {
    id: "rev-3",
    name: "আব্দুল করিম",
    location: "চিনাকান্দি বাজার, বিশ্বম্ভরপুর",
    rating: 5,
    date: "মে ১০, ২০২৬",
    comment: "মোবাইলের লক ভুলে গেছিলাম, অন স্ক্রিন প্যাটার্ন আনলক এবং লেটেস্ট ফার্মওয়্যার ফ্ল্যাশ করে দিয়ে ফোনটাকে আগের চেয়ে অনেক ফাস্ট বানিয়ে দিয়েছেন শামীম ভাই। ওনার ব্যবহার খুবই নম্র ও প্রফেশনাল।",
    device: "Samsung A32",
    avatarSeed: "karim"
  },
  {
    id: "rev-4",
    name: "সুহেল আহমেদ",
    location: "সাচনা বাজার, সুনামগঞ্জ",
    rating: 5,
    date: "এপ্রিল ২৮, ২০২৬",
    comment: "আমার রেডমি নোট ১০ প্রো ফোনের ডেড বুটলুপ সমস্যা ছিল। ওনারা আইসি রিবলিংয়ের মাধ্যমে চমৎকারভাবে মাদারবোর্ডটি মেরামত করে দিয়েছেন। এক মাস যাবৎ ফোনটি দারুন চলছে। ধন্যবাদ শামীম ভাই!",
    device: "Redmi Note 10 Pro",
    avatarSeed: "suhel"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "আপনাদের সার্ভিসিং সেন্টারের ঠিকানা কী এবং কীভাবে আসবো?",
    answer: "আমাদের প্রতিষ্ঠান সুনামগঞ্জ জেলার বিশ্বম্ভরপুর উপজেলার 'চিনাকান্দি বাজার'-এর সিএনজি স্ট্যান্ড সংলগ্ন ভবনে অবস্থিত। আপনি সুনামগঞ্জ সদর বা বিশ্বম্ভরপুর চৌরাস্তা থেকে সিএনজি বা লাইনে চলে সরাসরি চিনাকান্দি বাজারে আসতে পারবেন।",
    category: "সাধারণ"
  },
  {
    id: "faq-2",
    question: "ডিসপ্লে বা ব্যাটারি পরিবর্তন করতে কত সময় লাগে?",
    answer: "যদি আমাদের স্টকে পার্টসটি রেডি থাকে, তবে সাধারণ ডিসপ্লে এবং ব্যাটারি রিপ্লেসমেন্ট করতে মাত্র ১ থেকে ২ ঘন্টা সময় লাগে। তবে মেমব্রেন বা ব্যাক গ্লাস ল্যামিনেশনের ক্ষেত্রে ২-৩ ঘন্টা লাগতে পারে।",
    category: "মেরামত সময়"
  },
  {
    id: "faq-3",
    question: "আপনারা কি মাদারবোর্ড এবং আইসি মেরামতের কাজ করেন?",
    answer: "হ্যাঁ, আমরা অত্যন্ত সূক্ষ্ম অকুলার স্টেরিও মাইক্রোস্কোপ ব্যবহার করে মাদারবোর্ডের শর্ট রিমুভ করা, পাওয়ার আইসি রি-বলিং/প্রতিস্থাপন এবং সিপিইউ (CPU) সংক্রান্ত ডেড ফোন মেরামতের কাজ সফলভাবে সম্পন্ন করি।",
    category: "হার্ডওয়্যার"
  },
  {
    id: "faq-4",
    question: "বিদেশ থেকে আনা ফোনের নেটওয়ার্ক ও কান্ট্রি লক খুলতে পারবেন?",
    answer: "হ্যাঁ! আমেরিকা, ইংল্যান্ড, দুবাই, সৌদি আরব সহ বিশ্বের যেকোনো দেশ থেকে আনা স্যামসাং, ওয়ানপ্লাস বা আইফোনের রিয়েলটাইম কান্ট্রি কোড রিলিজ এবং অফিসিয়াল ও আনঅফিসিয়াল কান্ট্রি আনলক আমরা সফলভাবে করে দিতে পারি।",
    category: "সফটওয়্যার"
  },
  {
    id: "faq-5",
    question: "মেরামত করা পার্টস বা ডিসপ্লেতে কি কোনো ওয়ারেন্টি আছে?",
    answer: "অরিজিনাল ব্যাটারি পরিবর্তন এবং নির্দিষ্ট কিছু মাদারবোর্ড সেবার ক্ষেত্রে আমরা ৩ মাস থেকে ১ বছর পর্যন্ত গ্যারান্টি বা ওয়ারেন্টি প্রদান করি। কপি বা চায়না ডিসপ্লের ক্ষেত্রে সাধারণত টেস্টিং গ্যারান্টি বা শর্তাধীন ওয়্যারেন্টি থাকে।",
    category: "ওয়ারেন্টি"
  },
  {
    id: "faq-6",
    question: "আপনার সাথে সরাসরি যোগাযোগ করার সেরা মাধ্যম কোনটা?",
    answer: "আপনি সরাসরি মোবাইলে কল করতে পারেন (+880 1720-302901) অথবা আপনার ফোনের সমস্যাটির সমাধান পেতে নিচের বাটন চেপে সরাসরি আমাদের লাইভ হোয়াটসঅ্যাপে (WhatsApp) মেসেজ ও ছবি পাঠাতে পারেন।",
    category: "সাধারণ"
  }
];

export const COUNTERS = [
  { id: "count-1", value: "১২,৫০০", label: "সফলভাবে মেরামত", suffix: "+" },
  { id: "count-2", value: "১০,০০০", label: "সন্তোষ্ট গ্রাহক", suffix: "+" },
  { id: "count-3", value: "৮", label: "বছরের অভিজ্ঞতা", suffix: "+" },
  { id: "count-4", value: "৯৮", label: "সাফল্যের হার", suffix: "%" }
];

export const BRANDS: PhoneBrand[] = [
  { id: "samsung", name: "Samsung", models: ["Galaxy S Series", "Galaxy A Series", "Galaxy M Series", "Galaxy Note"] },
  { id: "apple", name: "Apple iPhone", models: ["iPhone 15 Pro Max/15", "iPhone 14/13/12/11", "iPhone X/XS/XR", "iPhone 7/8/SE"] },
  { id: "xiaomi", name: "Xiaomi / Redmi", models: ["Redmi Note Series", "Poco Series", "Xiaomi Mi Ultra", "Redmi C Series"] },
  { id: "realme", name: "Realme", models: ["Realme C Series", "Realme Number Series", "Realme GT Series", "Realme Narzo"] },
  { id: "vivo", name: "Vivo", models: ["Vivo Y Series", "Vivo V Series", "Vivo X Series", "Vivo T Series"] },
  { id: "oppo", name: "Oppo", models: ["Oppo Reno Series", "Oppo A Series", "Oppo F Series"] },
  { id: "oneplus", name: "OnePlus", models: ["OnePlus Nord", "OnePlus R/Pro Series", "OnePlus Ace"] },
  { id: "infinix-techno", name: "Infinix / Tecno", models: ["Infinix Hot/Note", "Tecno Spark/Camon", "Infinix Zero"] },
  { id: "keypad", name: "কিপ্যাড ফোন (Nokia/Symphony)", models: ["Symphony BL", "Nokia 105/110/3310", "Walton Olavio"] }
];

export const SERVICE_OPTIONS: ServiceEstimateOption[] = [
  { id: "opt-display", name: "টাচ ও মূল ডিসপ্লে পরিবর্তন (Display Repair)", basePrice: 1500, timeEstimate: "১-২ ঘণ্টা" },
  { id: "opt-battery", name: "অরিজিনাল ব্যাটারি পরিবর্তন (Battery Replacement)", basePrice: 800, timeEstimate: "৩০-৪৫ মিনিট" },
  { id: "opt-charging", name: "চার্জিং পোর্ট/আইসি মেরামত (Charging Port/IC)", basePrice: 300, timeEstimate: "৩০ মিনিট" },
  { id: "opt-mic", name: "স্পিকার, মাইক বা এয়ারপিস ফিক্স (Speaker/Mic)", basePrice: 250, timeEstimate: "৩০ মিনিট" },
  { id: "opt-power", name: "ডেড ফোন মাদারবোর্ড সর্ট বা আইসি রি-বলিং (Motherboard/IC)", basePrice: 800, timeEstimate: "২-৪ ঘণ্টা" },
  { id: "opt-flash", name: "সফটওয়্যার ফ্ল্যাশিং ও লোগো হ্যাং ফিক্স (Flashing/OS Update)", basePrice: 300, timeEstimate: "১ ঘণ্টা" },
  { id: "opt-frp", name: "গুগল একাউন্ট বাইপাস/FRP লক খোলা (FRP Bypass)", basePrice: 300, timeEstimate: "২০-৪০ মিনিট" },
  { id: "opt-country", name: "কান্ট্রি বা নেটওয়ার্ক সিম লক রিলিজ (Sim Lock Release)", basePrice: 500, timeEstimate: "১-২ ঘণ্টা" },
  { id: "opt-camera", name: "ক্যামেরা মডিউল বা গ্লাস মেরামত (Camera Repair)", basePrice: 500, timeEstimate: "১ ঘণ্টা" },
  { id: "opt-water", name: "পানিতে ভেজা সার্ভিসিং + কেমিক্যাল ওয়াশ (Water Wash)", basePrice: 500, timeEstimate: "১-২ ঘণ্টা" }
];
