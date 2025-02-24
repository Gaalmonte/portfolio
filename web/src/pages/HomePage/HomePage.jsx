import Navigation from 'src/components/Navigation'
import Hero from 'src/components/Hero';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;