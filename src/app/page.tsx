import Image from "next/image";
import Navbar from "./features/components/Navbar"
import HeroSection from "./features/components/HeroSection"
import WhyUs from "./features/components/WhyUs"
import { Footer } from "./features/components/Footer"
import ContactUs from "./features/components/ContactUs";
import ProductSection from "./features/components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <WhyUs />
      <ContactUs />
      <Footer />

    </>
  );
}
