function Header() {
  return (
    <main className="fixed top-0 left-0 w-full z-50">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between items-center px-4 md:px-6 py-4 bg-gray-900 text-white shadow-md space-y-4 md:space-y-0 text-center">
        <img
          src="/knowvia-logo.png"
          alt="Knowvia Logo"
          className="h-10 w-auto"
        />
     <section>
       <input
          type="text"
          placeholder="Search for articles, topics, or authors..."
          className="w-100 px-4 py-2 font-bold text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-center"
        />
        <button className="px-4 ml-3 font-bold py-2 w-full md:w-auto rounded-lg border border-white hover:bg-white hover:text-gray-900 transition">Search</button>

     </section>
       
        <section className="flex flex-row md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
          <button className="px-4 font-bold py-2 w-full md:w-auto rounded-lg border border-white hover:bg-white hover:text-gray-900 transition">Log In</button>
          <button className="px-4 font-bold py-2 w-full md:w-auto rounded-lg border border-white hover:bg-white hover:text-gray-900 transition">Sign In</button>
        </section>
      </nav>
    </main>
  );
}

export default Header;
