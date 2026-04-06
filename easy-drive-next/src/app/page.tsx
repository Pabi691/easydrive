import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import ReferAFriend from "@/components/ReferAFriend";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import RoadDivider from "@/components/RoadDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Driving School | Easy-Drive.UK",
  description: "Learn to drive with DVSA-approved instructors and pass your test faster with Easy-Drive.UK intensive courses.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBanner />
      <Courses />
      {/* <RoadDivider /> */}
      <WhyChooseUs />
      <Stats />
      <HowItWorks />
      {/* <RoadDivider /> */}
      <Locations />
      {/* <RoadDivider /> */}
      <Reviews />
      <ReferAFriend />
      <Gallery />
      <FAQ />
      <CTA />
    </div>
  );
}
