const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-primary-green p-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-x1 font-bold">
          German Almonte
        </a>
        <ul className="flex space-x-8">
          <li>
            <a href="#projects" className="transition hover:text-accent-green">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-accent-green">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
