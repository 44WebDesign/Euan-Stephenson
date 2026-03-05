import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import RaceWeek from './components/RaceWeek';
import SocialFeed from './components/SocialFeed';
import Partners from './components/Partners';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <RaceWeek />
        <SocialFeed />
        <Partners />
        <Timeline />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
