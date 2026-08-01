import Image from "next/image";
import HeroSection from "../features/components/HeroSection"
import WhyUs from "../features/components/WhyUs"
import ContactUs from "../features/components/ContactUs";
import Products from "../features/components/products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Products />
      <WhyUs />
      <ContactUs />

    </>
  );
}
