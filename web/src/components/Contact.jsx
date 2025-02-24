const Contact = () => {
  return (
    <section id="contact" className="flex h-screen flex-col items-center justify-center py-16 bg-white text-primary-green">
      <h1 className="text-6x1 mb-4 font-bold">Contact Me</h1>
      <div class="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
  <a href="https://www.linkedin.com/in/germanaalmonte/" target="_blank" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.32-.03-3.03-1.85-3.03s-2.14 1.45-2.14 2.94v5.59h-3v-10h2.86v1.37h.04c.4-.76 1.38-1.55 2.85-1.55 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
    </svg>
    <span>German Almonte</span>
  </a>

  <a href="mailto:german.a.almonte@gmail.com" class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 13.42l-11-6.42v11h22v-11l-11 6.42zm0-2.84l11-6.58h-22l11 6.58z"/>
    </svg>
    <span>german.a.almonte@gmail.com</span>
  </a>
</div>
    </section>
  )
}

export default Contact
