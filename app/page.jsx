import Image from 'next/image'
import Sandbox from './components/Sandbox'
import Navbar from './components/Navbar'
import StatsSection from './components/StatsSection';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import EventsSection from './components/EventsSection';
import WhoAreWeSection from './components/WhoAreWeSection';

function App() {
  return (
    <>
      <Hero />
      <WhoAreWeSection/>
      <StatsSection/>
      <EventsSection/>
    </>
  )
}

export default App;
