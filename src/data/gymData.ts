export interface GymDetail {
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  phone: string;
  phoneFormatted: string;
  address: {
    line1: string;
    line2: string;
    colony: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
}

export const GYM_DETAILS: GymDetail = {
  name: "Sai Hari Tej Gym",
  category: "Fitness Center / Gym",
  rating: 4.9,
  reviewsCount: 104,
  phone: "+919902311113",
  phoneFormatted: "+91 99023-11113",
  address: {
    line1: "SBI Complex",
    line2: "Anekal – Hosur Road",
    colony: "KSRTC Colony, Anekal",
    city: "Anekal",
    state: "Karnataka",
    pincode: "562106",
    country: "India",
  },
  coordinates: {
    lat: 12.7041581,
    lng: 77.7017537,
  },
  mapsUrl: "https://www.google.com/maps/place/Sai+Hari+Tej+Gym+-+Best+gym+in+Anekal/@12.7041581,77.7017537,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae7163cb14841d:0x39a1d120a16cbf84!8m2!3d12.7041581!4d77.7017537!16s%2Fg%2F11t7d995p5?entry=ttu",
};

export interface Program {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Build foundational power and lean muscle using premium free weights and dedicated platforms under structural guidance.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    description: "Targeted conditioning, high-intensity intervals, and customized dietary guidelines tailored to shed fat safely and sustainably.",
    iconName: "TrendingDown",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Hypertrophy-focused training regimes utilizing state-of-the-art resistance machinery and advanced loading parameters.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "general-fitness",
    title: "General Fitness",
    description: "Enhance daily mobility, cardiovascular endurance, flexibility, and operational longevity for a balanced, healthy life.",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  },
];

export interface ExperienceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    id: "workout-area",
    title: "Workout Area",
    description: "Spacious, rubber-floored zone designed for high-intensity movement, functional drills, and stretching.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "strength-equipment",
    title: "Strength Equipment",
    description: "Premium selection of heavy dumbbells, power racks, barbells, and plate-loaded heavy machinery.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    description: "High-grade treadmills, cross-trainers, and spin cycles to elevate your heart rate and endurance.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "training-sessions",
    title: "Training Sessions",
    description: "Structured individual programs led by expert coaches focusing on precise form, safety, and results.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
  initials: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Tejas Gowda",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Easily the best gym in Anekal! The trainers are highly knowledgeable, and the strength training setup is incredible. Everything is kept clean, and the equipment is top notch. Definitely recommend joining.",
    initials: "TG",
  },
  {
    id: "rev-2",
    author: "Ranjith Kumar",
    rating: 5,
    relativeTime: "2 months ago",
    text: "Amazing atmosphere! Very professional environment with helpful coaches. The membership fee is very reasonable considering the premium machines they have. Truly a complete transformation journey for me.",
    initials: "RK",
  },
  {
    id: "rev-3",
    author: "Shubha N.",
    rating: 5,
    relativeTime: "3 weeks ago",
    text: "Highly safe and comfortable space for women to work out. The trainers pay custom attention to posture and form. I joined for weight loss and I'm already seeing progress. Thank you Sai Hari Tej Gym!",
    initials: "SN",
  },
  {
    id: "rev-4",
    author: "Vikram Reddy",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Top class equipment and high-energy workout space. Located right in SBI Complex on Anekal-Hosur road, which is very convenient. The staff is polite and well-behaved. The annual plan is totally value for money.",
    initials: "VR",
  },
];

export interface Transformation {
  id: string;
  category: string;
  title: string;
  duration: string;
  stats: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    category: "Fat Loss",
    title: "Weight Loss Transformation",
    duration: "4 Months",
    stats: "-14 kg & 10% Body Fat reduction",
    // We will use stylized gym photos representing progress and workout consistency
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
    description: "Consistent high-intensity intervals coupled with a structured diet plan led to this incredible energy and fat-loss success.",
  },
  {
    id: "trans-2",
    category: "Muscle Gain",
    title: "Hypertrophy Progress",
    duration: "6 Months",
    stats: "+6 kg Lean Mass & strength gains",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop",
    description: "Dedicated progressive overload on compounds combined with calorie surplus and personalized coaching support.",
  },
];

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  pricePlaceholder: string;
  popular: boolean;
  features: string[];
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-monthly",
    name: "Standard Monthly",
    tagline: "Perfect for flexible training",
    duration: "1 Month Access",
    pricePlaceholder: "₹ XXXX / month",
    popular: false,
    features: [
      "Access to all strength and cardio areas",
      "Complimentary gym floor trainer guidance",
      "Modern locker access",
      "Flexible workout hours",
    ],
  },
  {
    id: "plan-quarterly",
    name: "Quarterly Starter",
    tagline: "Great for establishing consistency",
    duration: "3 Months Access",
    pricePlaceholder: "₹ XXXX / 3 months",
    popular: false,
    features: [
      "Access to all strength and cardio areas",
      "Complimentary gym floor trainer guidance",
      "Personalized initial fitness assessment",
      "Basic customized workout chart",
      "Locker & shower facilities",
    ],
  },
  {
    id: "plan-semi-annual",
    name: "Half-Yearly Builder",
    tagline: "Serious commitment, serious results",
    duration: "6 Months Access",
    pricePlaceholder: "₹ XXXX / 6 months",
    popular: false,
    features: [
      "Access to all strength and cardio areas",
      "Dedicated trainer floor assistance",
      "Advanced workout programming",
      "Nutrition and dietary advice session",
      "Free freezing option (up to 15 days)",
    ],
  },
  {
    id: "plan-annual",
    name: "Elite Annual",
    tagline: "Maximum value & complete transformation",
    duration: "12 Months Access",
    pricePlaceholder: "₹ XXXX / year",
    popular: true,
    features: [
      "All-year access to high-end facilities",
      "Comprehensive body composition analysis (monthly)",
      "Premium customized diet and workout charts",
      "1-on-1 goal review sessions with head trainer",
      "Free membership freezing option (up to 30 days)",
      "Complimentary gym t-shirt & welcome pack",
      "Special discounts on personal training add-ons",
    ],
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  certifications: string[];
  image: string;
}

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "Harish Kumar",
    role: "Head Coach & Strength Specialist",
    experience: "8+ Years",
    specialization: ["Powerlifting", "Hypertrophy Programing", "Postural Rehabilitation"],
    certifications: ["K11 Certified Fitness Coach", "Certified Strength Specialist"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "trainer-2",
    name: "Tejesh Gowda",
    role: "Senior Fitness & Conditioning Coach",
    experience: "6+ Years",
    specialization: ["HIIT & Weight Loss", "Functional Training", "Athletic Preparation"],
    certifications: ["ACE Certified Personal Trainer", "CPR & First Aid Specialist"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you offer trial sessions?",
    answer: "Yes! We offer a complimentary trial session for local residents to experience our premium equipment and gym environment before purchasing a membership.",
  },
  {
    question: "What membership options are available?",
    answer: "We offer flexible Monthly, Quarterly, Half-Yearly, and Annual membership plans. Our Annual package represents the highest value, offering comprehensive assessments, nutrition planning, and freezing options.",
  },
  {
    question: "Do trainers provide guidance?",
    answer: "Absolutely. Our certified floor trainers are always present to help you with machine setups, demonstrate proper form, and answer general questions. For focused attention, we also offer premium 1-on-1 Personal Training options.",
  },
  {
    question: "What are the gym timings?",
    answer: "We are open from Monday to Saturday, 5:30 AM to 10:30 AM in the morning, and 5:00 PM to 9:30 PM in the evening. Sunday is our weekly maintenance rest day.",
  },
  {
    question: "Do beginners join?",
    answer: "Yes, a huge portion of our members start as complete beginners. Our trainers provide special care and guidance, helping you build confidence, master core movements, and adapt to regular physical training safely.",
  },
];

export interface Facility {
  title: string;
  description: string;
  iconName: string;
}

export const FACILITIES: Facility[] = [
  {
    title: "Modern Equipment",
    description: "Biometrically engineered plate-loaded and pin-selectorized training machines.",
    iconName: "Cpu",
  },
  {
    title: "Cardio Area",
    description: "Dedicated treadmills, cross-trainers, and spin bikes for performance conditioning.",
    iconName: "Activity",
  },
  {
    title: "Strength Zone",
    description: "Heavy free-weight section with premium dumbbells up to 40kg, Olympic platforms, and power racks.",
    iconName: "Dumbbell",
  },
  {
    title: "Personal Training",
    description: "Tailored 1-on-1 sessions designed to bypass plateaus and accelerate physiological outcomes.",
    iconName: "UserCheck",
  },
  {
    title: "Locker Area",
    description: "Secure lockboxes and private change areas for your peace of mind and convenience.",
    iconName: "Shield",
  },
  {
    title: "Clean Environment",
    description: "Sanitized training floors and wiped equipment following strict hygiene standards.",
    iconName: "Sparkles",
  },
];
