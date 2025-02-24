const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-primary-green text-white text-center">
      <h1 className="text-6x1 font-bold mb-4">German Almonte</h1>
      <p className="text-x1 mb-8">A Software Engineer.</p>
      <a href="#projects" className="px-6 py-3 bg-accent-green text-white rounded-lg hover :bg-opacity:90 transition">View Projects</a>
    </section>
  );
};

export default Hero;