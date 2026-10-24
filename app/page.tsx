import GrainOverlay from "@/components/ui/GrainOverlay";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDrinks from "@/components/sections/SignatureDrinks";
import DessertExperience from "@/components/sections/DessertExperience";
import InteriorExperience from "@/components/sections/InteriorExperience";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Reservation from "@/components/sections/Reservation";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Persistent UI */}
      <GrainOverlay />
      <LoadingScreen />
      <Navigation />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <SignatureDrinks />
        <DessertExperience />
        <InteriorExperience />
        <ExperienceTimeline />
        <Testimonials />
        <InstagramFeed />
        <Reservation />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
