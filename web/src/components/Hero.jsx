const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-primary-green text-white text-center">
      <h1 className="text-6x1 font-bold mb-4">About Me</h1>
      <p className="text-x1">I'm a Software Engineer in Test with experience using Karate and Cucumber to build reliable automated testing solutions. </p>
      <p className="text-x1 mb-10">I enjoy making sure software runs smoothly while also working on my own projects.</p>
      <a href="#projects" className="px-6 py-3 bg-accent-green text-white rounded-lg hover :bg-opacity:90 transition">View Projects</a>
    </section>
  );
};

export default Hero;
