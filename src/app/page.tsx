'use client';

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurTeam from "@/components/OurTeam";
import QuoteQuanton from "@/components/quantum-quote";
import { useRef } from "react";
import LoadingBar from 'react-top-loading-bar'


export default function Home() {
  const ref = useRef(null)
  return (
    <>
      <LoadingBar color='#ffffff' ref={ref} />
      <main className="min-h-screen bg-black/[0.94] antialiased bg-grid-white/[0.05]">
        <title>Zenqor:Shaping Furure</title>
        <HeroSection />
        <OurTeam />
        <QuoteQuanton />
        <Footer />
      </main>
    </>
  );
}
