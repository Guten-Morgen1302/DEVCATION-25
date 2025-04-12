import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { TracksSection } from '@/components/TracksSection';
import { JudgesMentorsSection } from '@/components/JudgesMentorsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { PrizesSection } from '@/components/PrizesSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <TracksSection />
      <JudgesMentorsSection />
      <TimelineSection />
      <PrizesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
