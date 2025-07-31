import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../index.css'; // make sure your CSS file imports this animation if needed
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Header />
      <section className="relative h-screen bg-[url('https://c1.wallpaperflare.com/preview/79/806/473/book-business-drawing-education.jpg')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 fade-in">
          Revise smarter with Knowvia
        </h1>
          <p className="text-2xl font-bold text-white fade-in-delay">
            Empowering smarter revision through AI-enhanced learning
          </p>
           <p className="text-2xl font-bold text-white fade-in-delay">
             Save time, Readless, Perform well
        </p>
        <Link to="/syllabus">
         <button className="px-7 py-4 bg-gray-900 font-bold text-white rounded-lg hover:bg-white hover:text-black transition fade-in-delay text-lg">
             Learn with AI
           </button>
        </Link>
           

        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
