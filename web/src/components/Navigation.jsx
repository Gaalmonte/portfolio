const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-primary-green text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-x1 font-bold">German Almonte</a>
        <ul className="flex space-x-8">
          <li><a href="#projects" className="hover:text-accent-green transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent-green transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;