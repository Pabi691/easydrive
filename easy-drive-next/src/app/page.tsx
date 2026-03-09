import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Driving School | Easy-Drive.UK",
  description: "Learn to drive with DVSA-approved instructors and pass your test faster.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fffaf5] via-white to-[#f7fbff]">
      <Hero />
      <Courses />
      <HowItWorks />
      <Locations />
      <Reviews />
      <Gallery />
      <CTA />
    </div>
  );
}
