import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TagTicker from '@/components/TagTicker';
import Work from '@/components/Work';
import About from '@/components/About';
import StageDoorPortal from '@/components/StageDoorPortal';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FolioReveal from '@/components/FolioReveal';
import ExperienceSpace from '@/components/ExperienceSpace';
import { CurtainProvider } from '@/components/CurtainTransition';

export default function Home() {
  return (
    <CurtainProvider>
      <FolioReveal />
      <CustomCursor />
      <ExperienceSpace />
      <div className="relative min-h-screen bg-[#070709] text-[#e8e8ed] selection:bg-[#d4ff32] selection:text-[#070709]">
        <Navbar />
        <main>
          <Hero />
          <TagTicker />
          <Work />
          <About />
          <StageDoorPortal />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </CurtainProvider>
  );
}
