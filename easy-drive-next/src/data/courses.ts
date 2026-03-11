export type Course = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    badges: string[];
    highlights: string[];
    includes: string[];
    idealFor: string[];
    duration: string;
    image: string;
    gradient: string;
    metaTitle: string;
    metaDescription: string;
};

export const courses: Course[] = [
    {
        slug: "automatic",
        title: "Automatic Driving Lessons",
        summary: "Learn to drive with ease in dual-controlled automatic cars. Perfect for quick progress without gear changes.",
        description:
            "Automatic lessons remove clutch and gears so you can focus fully on observation, planning, and safe decision-making. Ideal for beginners who want a smoother learning curve and confidence on busy roads.",
        badges: ["Automatic", "Beginner Friendly", "City Driving"],
        highlights: [
            "Smooth pull-aways, braking, and safe stopping distances",
            "Junctions, roundabouts, and lane discipline with confidence",
            "Defensive driving and hazard awareness practice",
            "Mock test preparation and local route familiarity",
        ],
        includes: [
            "DVSA-approved instructor",
            "Modern dual-controlled automatic vehicle",
            "Personal progress tracker and lesson feedback",
            "Test-day warm-up session (if booked)",
        ],
        idealFor: [
            "First-time learners and nervous drivers",
            "City-based learners who want a simpler start",
            "Learners who want flexible weekly or intensive options",
        ],
        duration: "Flexible: weekly lessons or intensive blocks",
        image: "/images/hero.png",
        gradient: "from-orange-500 to-red-500",
        metaTitle: "Automatic Driving Lessons | Easy-Drive.UK",
        metaDescription: "Learn to drive fast with automatic lessons, dual-controlled cars, and DVSA-approved instructors.",
    },
    {
        slug: "manual",
        title: "Manual Driving Lessons",
        summary: "Master clutch control and gear changes with expert coaching for a full manual licence.",
        description:
            "Manual lessons give you full control of the vehicle and a broader licence. Learn smooth clutch control, precise gear changes, and confident handling in every road condition.",
        badges: ["Manual", "Full Licence", "All Vehicle Types"],
        highlights: [
            "Clutch control, hill starts, and smooth gear transitions",
            "Eco-driving, engine braking, and speed management",
            "Parking and manoeuvres with full vehicle control",
            "Mock tests with detailed fault analysis",
        ],
        includes: [
            "DVSA-approved instructor",
            "Dual-controlled manual vehicle",
            "Step-by-step skill progression plan",
            "Targeted weak-area training",
        ],
        idealFor: [
            "Learners who want a full manual licence",
            "Drivers aiming for maximum vehicle choice",
            "Those switching from automatic to manual",
        ],
        duration: "Flexible: tailored to your confidence and pace",
        image: "/images/hero_driving.png",
        gradient: "from-blue-600 to-indigo-600",
        metaTitle: "Manual Driving Lessons | Easy-Drive.UK",
        metaDescription: "Get full control with manual lessons focused on clutch, gears, and test success.",
    },
    {
        slug: "intensive",
        title: "Intensive Driving Lessons",
        summary: "Condense months of learning into 1-2 weeks with fast-track booking support and daily training.",
        description:
            "Our intensive course is designed for learners who need to pass quickly. You'll follow a focused schedule with daily sessions and mock tests, supported by fast-track test booking where available.",
        badges: ["Fast-Track", "Daily Lessons", "Test Booking Help"],
        highlights: [
            "Daily 2-4 hour sessions tailored to your progress",
            "Mock tests and examiner-style feedback",
            "Focused practice on local test routes",
            "Fast-track DVSA booking support",
        ],
        includes: [
            "Dedicated intensive instructor",
            "Structured daily schedule",
            "Progress checkpoints and revision plan",
            "Test-day readiness briefing",
        ],
        idealFor: [
            "Learners with a deadline or job start date",
            "Retest candidates who want quick success",
            "Confident drivers who want to pass fast",
        ],
        duration: "1-2 weeks (custom plans available)",
        image: "/images/success.png",
        gradient: "from-green-500 to-emerald-600",
        metaTitle: "Intensive Driving Lessons | Easy-Drive.UK",
        metaDescription: "Pass fast with intensive daily lessons and fast-track test booking support.",
    },
    {
        slug: "pass-plus",
        title: "Pass Plus",
        summary: "Build advanced confidence after passing with motorway, night, and all-weather driving modules.",
        description:
            "Pass Plus is perfect for newly qualified drivers who want extra confidence and experience. Cover motorway driving, night driving, and risk management beyond the standard test.",
        badges: ["Post-Pass", "Motorway", "Advanced Confidence"],
        highlights: [
            "Motorway joining, lane discipline, and overtaking",
            "Night driving and reduced-visibility techniques",
            "All-weather handling and safe speed planning",
            "Advanced hazard perception and risk management",
        ],
        includes: [
            "DVSA Pass Plus syllabus (typically 6 hours)",
            "Certificate on completion",
            "Insurance discount guidance",
            "Flexible lesson scheduling",
        ],
        idealFor: [
            "Newly qualified drivers",
            "Drivers wanting motorway confidence",
            "Parents looking to reduce insurance costs",
        ],
        duration: "Typically 6 hours, split across 2-3 sessions",
        image: "/images/isometric_3d.png",
        gradient: "from-purple-500 to-pink-500",
        metaTitle: "Pass Plus Course | Easy-Drive.UK",
        metaDescription: "Boost confidence after your test with Pass Plus motorway and night driving modules.",
    },
];

export const normalizeSlug = (slug?: string | string[]) => {
    const raw = Array.isArray(slug) ? slug[0] : slug ?? "";
    return decodeURIComponent(raw).trim().toLowerCase();
};

export const getCourseBySlug = (slug?: string | string[]) => {
    const normalized = normalizeSlug(slug);
    return courses.find((course) => course.slug.toLowerCase() === normalized);
};
