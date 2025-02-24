const projects = [
  {
    title: "Youtube Music Player",
    description: "A simple, no-fuss YouTube music player. Utilized Python, PyQt6, ytmusicapi, and VLC.",
    githubLink: "https://github.com/Gaalmonte/youtube_player_linux",
    liveLink: "https://github.com/Gaalmonte/youtube_player_linux",
  },
  {
    title: "IBDN",
    description: "IBDN is a fast-paced spaceship game. Utilized PhaserJS and Object Oriented Programming.",
    githubLink: "https://github.com/Gaalmonte/IBDN",
    liveLink: "https://ibdn.netlify.app/",
  },
  {
    title: "2D Breakout Game",
    description: "A classic 2D breakout game, Utilized Javascript Object Oriented Programming.",
    githubLink: "https://github.com/Gaalmonte/2D-Breakout-Game",
    liveLink: "https://gaalmonte.github.io/2D-Breakout-Game/",
  },
  {
    title: "2D Breakout Game",
    description: "A classic 2D breakout game, Utilized Javascript Object Oriented Programming.",
    githubLink: "https://github.com/Gaalmonte/2D-Breakout-Game",
    liveLink: "https://gaalmonte.github.io/2D-Breakout-Game/",
  },
  {
    title: "2D Breakout Game",
    description: "A classic 2D breakout game, Utilized Javascript Object Oriented Programming.",
    githubLink: "https://github.com/Gaalmonte/2D-Breakout-Game",
    liveLink: "https://gaalmonte.github.io/2D-Breakout-Game/",
  },
  {
    title: "2D Breakout Game",
    description: "A classic 2D breakout game, Utilized Javascript Object Oriented Programming.",
    githubLink: "https://github.com/Gaalmonte/2D-Breakout-Game",
    liveLink: "https://gaalmonte.github.io/2D-Breakout-Game/",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white text-primary-green">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-6">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 border border-primary-green text-primary-green rounded-lg hover:bg-primary-green hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
