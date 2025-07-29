function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold">Knowvia</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Empowering smarter revision through AI-enhanced learning.<br />
            Save time, Read less, Perform well.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Features</a>
            <a href="#" className="hover:text-blue-400 transition">FAQ</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 text-black rounded-md mb-2 focus:outline-none"
          />
          <button className="w-full px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition">
            Subscribe
          </button>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook-f hover:text-white"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
            <a href="#"><i className="fab fa-youtube hover:text-white"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Knowvia. Built with 🧠 + 💻 using React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
