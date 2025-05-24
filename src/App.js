import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

// Tailwind CSS is assumed to be available in the environment.

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null); // New state for selected article

  // Function to navigate to a new page or display an article
  const navigateTo = (page, articleData = null) => {
    setCurrentPage(page);
    setSelectedArticle(articleData); // Set selected article data if navigating to 'article' page
    setIsMobileMenuMenuOpen(false); // Close menu on navigation
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Header */}
      <Header navigateTo={navigateTo} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuMenuOpen={setIsMobileMenuMenuOpen} />

      {/* Main Content */}
      <main className="min-h-screen">
        {currentPage === 'accueil' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'a-propos' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'projets' && <ProjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'blog' && <BlogPage navigateTo={navigateTo} />} {/* Pass navigateTo to BlogPage */}
        {currentPage === 'article' && <ArticlePage article={selectedArticle} navigateTo={navigateTo} />} {/* New ArticlePage */}
      </main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
// Header Component
function Header({ navigateTo, isMobileMenuOpen, setIsMobileMenuMenuOpen }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://placehold.co/40x40/007bff/ffffff?text=NI" alt="Naoussi Industries Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-2xl font-bold text-blue-700">Naoussi Industries</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><button onClick={() => navigateTo('accueil')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Accueil</button></li>
          <li><button onClick={() => navigateTo('a-propos')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">À Propos</button></li>
          <li><button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Services</button></li>
          <li><button onClick={() => navigateTo('projets')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Projets</button></li>
          <li><button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Blog</button></li>
          <li><button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</button></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><button onClick={() => navigateTo('accueil')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Accueil</button></li>
            <li><button onClick={() => navigateTo('a-propos')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">À Propos</button></li>
            <li><button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Services</button></li>
            <li><button onClick={() => navigateTo('projets')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Projets</button></li>
            <li><button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Blog</button></li>
            <li><button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}

// Footer Component
function Footer({ navigateTo }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Naoussi Industries</h3>
          <p className="text-gray-400 text-sm">
            Votre partenaire pour des solutions innovantes en génie civil et une création digitale percutante.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61568848127921" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Facebook size={20} /></a>
            <a href="https://www.linkedin.com/in/lionel-naoussi-29a52232b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/t.n.a.l/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Instagram size={20} /></a>
            {/* Twitter link removed as per previous instruction */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li><button onClick={() => navigateTo('accueil')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Accueil</button></li>
            <li><button onClick={() => navigateTo('a-propos')} className="text-gray-400 hover:text-white transition duration-300 text-sm">À Propos</button></li>
            <li><button onClick={() => navigateTo('services')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Services</button></li>
            <li><button onClick={() => navigateTo('projets')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Projets</button></li>
            <li><button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Contact</button></li>
            <li><button onClick={() => navigateTo('blog')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Blog</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contactez-Nous</h3>
          <p className="flex items-center text-gray-400 text-sm mb-2"><MapPin size={16} className="mr-2" /> Douala, Ndogbong</p>
          <p className="flex items-center text-gray-400 text-sm mb-2"><Phone size={16} className="mr-2" /> +237 658120586</p>
          <p className="flex items-center text-gray-400 text-sm"><Mail size={16} className="mr-2" /> naoussilionel8@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Naoussi Industries. Tous droits réservés.
      </div>
    </footer>
  );
}

// Home Page Component
function HomePage({ navigateTo }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* [Image of Bâtiment en arrière-plan] */}
          <img src="https://placehold.co/1920x1080/0056b3/ffffff?text=Bâtir+l'Avenir" alt="Background Building" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/0056b3/ffffff?text=Bâtir+l'Avenir"; }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Naoussi Industries : Bâtir l'Avenir, Numériquement.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Solutions innovantes en génie civil et création de contenu digital pour concrétiser vos projets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
            <button
              onClick={() => navigateTo('services')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Découvrir Nos Services
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>

      {/* Double Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Notre Double Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Génie Civil */}
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Génie Civil] */}
              <img src="https://placehold.co/100x100/3b82f6/ffffff?text=Génie+Civil" alt="Génie Civil Icon" className="w-24 h-24 mb-6 rounded-full" />
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Génie Civil</h3>
              <p className="text-gray-600 mb-6">
                De la conception à la réalisation, nous bâtissons des infrastructures solides et durables, alliant innovation et respect des normes.
              </p>
              <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                <li>Conception Architecturale</li>
                <li>Calcul de Structure</li>
                <li>Gestion de la Construction</li>
              </ul>
              <button
                onClick={() => navigateTo('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center"
              >
                En savoir plus <ChevronRight size={18} className="ml-2" />
              </button>
            </div>

            {/* Création Digitale */}
            <div className="bg-purple-50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Digital] */}
              <img src="https://placehold.co/100x100/8b5cf6/ffffff?text=Digital" alt="Création Digitale Icon" className="w-24 h-24 mb-6 rounded-full" />
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Création de Contenu Digital</h3>
              <p className="text-gray-600 mb-6">
                Nous donnons vie à vos idées avec des designs percutants et des stratégies digitales qui captivent votre audience.
              </p>
              <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                <li>Conception Graphique</li>
                <li>UI/UX Design</li>
                <li>Production Vidéo</li>
              </ul>
              <button
                onClick={() => navigateTo('services')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center"
              >
                En savoir plus <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Pourquoi Nous Choisir ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Double Expertise] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Double" alt="Double Expertise Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expertise Double et Synergique</h3>
              <p className="text-gray-600 text-sm">
                Une combinaison unique de compétences pour une approche holistique de vos projets.
              </p>
            </div>
            {/* Point 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Innovation] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Innov" alt="Innovation Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions Innovantes et Personnalisées</h3>
              <p className="text-gray-600 text-sm">
                Des approches créatives et techniques pour répondre à vos besoins spécifiques.
              </p>
            </div>
            {/* Point 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Qualité] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Qual" alt="Quality Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Engagement envers la Qualité</h3>
              <p className="text-gray-600 text-sm">
                Des normes élevées dans tous nos projets, qu'ils soient physiques ou digitaux.
              </p>
            </div>
            {/* Point 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Impact] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Impact" alt="Impact Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Créativité et Impact Digital</h3>
              <p className="text-gray-600 text-sm">
                Contenu percutant qui valorise vos projets et renforce votre présence en ligne.
              </p>
            </div>
            {/* Point 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Équipe] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Team" alt="Team Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Équipe Passionnée et Expérimentée</h3>
              <p className="text-gray-600 text-sm">
                Des professionnels qualifiés et dédiés dans les deux domaines d'expertise.
              </p>
            </div>
            {/* Point 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
              {/* [Image of Icône Centré Client] */}
              <img src="https://placehold.co/60x60/f97316/ffffff?text=Client" alt="Client Centric Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Approche Centrée sur le Client</h3>
              <p className="text-gray-600 text-sm">
                Collaboration étroite et communication transparente pour dépasser vos attentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1: Prof Kegne Jean Bosco */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="italic mb-4">"Travailler avec Naoussi Industries, c'est l'assurance d'une synergie parfaite. Nos projets architecturaux ont pris vie avec une rapidité et une précision inégalées. Au-delà de l'efficacité, leur partenariat a été une véritable opportunité d'apprentissage, m'ouvrant aux dernières technologies. Une collaboration qui dépasse les attentes et construit l'avenir !"</p>
              <p className="font-semibold">- Prof. Kegne Jean Bosco, PLET et Architecte</p>
            </div>
            {/* Testimonial 2: Kevin, Veritrust */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="italic mb-4">"Avant Naoussi Industries, ma vision n'était qu'un brouillon. Dès notre première rencontre, ils ont su éclairer mes idées, les affiner et les transformer en une stratégie concrète. Ce qui n'était qu'un rêve hier est aujourd'hui une marque vibrante et pleine de vie. Un véritable catalyseur pour Veritrust !"</p>
              <p className="font-semibold">- Kevin, Créateur de la startup Veritrust</p>
            </div>
            {/* Testimonial 3: Mr Engelbert Ngantsop, Coming-Complexe des Ingénieurs */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="italic mb-4">"Notre entreprise, forte de plus de 20 ans dans le froid et la climatisation, avait une image vieillissante. Naoussi Industries a réalisé une métamorphose spectaculaire ! Ils ont su insuffler une nouvelle vie à notre marque, nous propulsant dans l'ère moderne. Aujourd'hui, nous sommes comme neufs, prêts à conquérir de nouveaux horizons. Un renouveau qui fait toute la différence !"</p>
              <p className="font-semibold">- Mr. Engelbert Ngantsop, CEO de Coming-Complexe des Ingénieurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre prochain projet ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Que ce soit pour une construction ambitieuse ou une stratégie digitale percutante, notre équipe est prête à vous accompagner.
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contactez-Nous Aujourd'hui
          </button>
        </div>
      </section>
    </>
  );
}

// About Page Component
function AboutPage() {
  // Removed teamMembers array

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">À Propos de Naoussi Industries</h1>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Notre Histoire</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* [Image of Notre Histoire] */}
            <img src="https://placehold.co/400x250/cccccc/333333?text=Notre+Histoire" alt="Our Story" className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Naoussi Industries a été fondée avec une vision audacieuse : fusionner l'ingénierie de pointe avec la créativité digitale pour offrir des solutions complètes et innovantes. Ce qui a commencé comme une entreprise de génie civil s'est rapidement étendu à la création de contenu digital, reconnaissant l'importance cruciale d'une présence en ligne forte et d'une communication percutante dans le monde moderne. Aujourd'hui, nous sommes fiers de bâtir des structures physiques solides tout en construisant des marques digitales mémorables.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">{/* [Image of Icône Mission] */}<img src="https://placehold.co/30x30/007bff/ffffff?text=M" alt="Mission Icon" className="mr-3 rounded-full" />Notre Mission</h2>
              <p className="text-lg text-gray-700">
                Notre mission est de fournir des solutions d'excellence en génie civil et en création digitale, en dépassant les attentes de nos clients grâce à l'innovation, la qualité et une approche centrée sur leurs besoins. Nous nous engageons à transformer les idées en réalités tangibles et numériques.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">{/* [Image of Icône Vision] */}<img src="https://placehold.co/30x30/8b5cf6/ffffff?text=V" alt="Vision Icon" className="mr-3 rounded-full" />Notre Vision</h2>
              <p className="text-lg text-gray-700">
                Devenir le leader reconnu dans la synergie du génie civil et de la création digitale, en étant le partenaire de choix pour des projets qui façonnent l'avenir, tant dans le monde physique que numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Innovation] */}
              <img src="https://placehold.co/50x50/007bff/ffffff?text=I" alt="Innovation Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Nous embrassons les nouvelles technologies et idées.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Qualité] */}
              <img src="https://placehold.co/50x50/007bff/ffffff?text=Q" alt="Quality Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Qualité</h3>
              <p className="text-gray-600 text-sm">L'excellence est au cœur de tout ce que nous faisons.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Collaboration] */}
              <img src="https://placehold.co/50x50/007bff/ffffff?text=C" alt="Collaboration Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">Travailler ensemble pour des résultats optimaux.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              {/* [Image of Icône Intégrité] */}
              <img src="https://placehold.co/50x50/007bff/ffffff?text=I" alt="Integrity Icon" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Intégrité</h3>
              <p className="text-gray-600 text-sm">Transparence et éthique dans toutes nos interactions.</p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Notre Fondateur</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            {/* [Image of Votre Photo] */}
            <img src="https://placehold.co/200x200/007bff/ffffff?text=Votre+Photo" alt="Photo du Fondateur" className="w-48 h-48 rounded-full mx-auto mb-6 md:mb-0 object-cover shadow-lg" />
            <div className="text-left max-w-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ing. Tedjouong Naoussi Ange Lionel</h3>
              <p className="text-blue-600 font-medium mb-3">Fondateur et Project Manager</p>
              <p className="text-gray-700 leading-relaxed">
                Titulaire d'une licence en génie civil et d'une maîtrise en gestion de projet, Ing. Tedjouong Naoussi Ange Lionel a mené à bien plusieurs projets emblématiques, dont Quizforge, Eduflux et Myawesomeshop. Sa passion pour le génie civil et le domaine digital, cultivée depuis l'enfance, le pousse à innover et à transformer les visions en réalités concrètes, alliant la robustesse de l'ingénierie à la créativité du numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section (more detailed) */}
        <section className="py-16 bg-blue-700 text-white rounded-lg shadow-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Témoignages Détaillés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1: Prof Kegne Jean Bosco */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <p className="italic mb-4 text-lg">"Travailler avec Naoussi Industries, c'est l'assurance d'une synergie parfaite. Nos projets architecturaux ont pris vie avec une rapidité et une précision inégalées. Au-delà de l'efficacité, leur partenariat a été une véritable opportunité d'apprentissage, m'ouvrant aux dernières technologies. Une collaboration qui dépasse les attentes et construit l'avenir !"</p>
                <p className="font-semibold text-blue-700">- Prof. Kegne Jean Bosco, PLET et Architecte</p>
              </div>
              {/* Testimonial 2: Kevin, Veritrust */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <p className="italic mb-4 text-lg">"Avant Naoussi Industries, ma vision n'était qu'un brouillon. Dès notre première rencontre, ils ont su éclairer mes idées, les affiner et les transformer en une stratégie concrète. Ce qui n'était qu'un rêve hier est aujourd'hui une marque vibrante et pleine de vie. Un véritable catalyseur pour Veritrust !"</p>
                <p className="font-semibold text-purple-700">- Kevin, Créateur de la startup Veritrust</p>
              </div>
              {/* Testimonial 3: Mr Engelbert Ngantsop, Coming-Complexe des Ingénieurs */}
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <p className="italic mb-4">"Notre entreprise, forte de plus de 20 ans dans le froid et la climatisation, avait une image vieillissante. Naoussi Industries a réalisé une métamorphose spectaculaire ! Ils ont su insuffler une nouvelle vie à notre marque, nous propulsant dans l'ère moderne. Aujourd'hui, nous sommes comme neufs, prêts à conquérir de nouveaux horizons. Un renouveau qui fait toute la différence !"</p>
                <p className="font-semibold text-blue-700">- Mr. Engelbert Ngantsop, CEO de Coming-Complexe des Ingénieurs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Discutons de votre projet !</h2>
          <p className="text-lg text-gray-700 mb-8">
            Nous sommes impatients de découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <button
            onClick={() => window.location.href = '#contact'} // Simple scroll to contact section
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contactez Notre Équipe
          </button>
        </section>
      </div>
    </div>
  );
}

// Services Page Component
function ServicesPage() {
  const civilServices = [
    {
      title: "Conception Architecturale",
      description: "Création de plans innovants et fonctionnels pour tous types de bâtiments, en respectant les normes et vos aspirations.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Arch"
    },
    {
      title: "Réalisation d'Ouvrages",
      description: "Construction et supervision de projets de génie civil, garantissant qualité, sécurité et respect des délais.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Ouv"
    },
    {
      title: "Architecture Académie",
      description: "Programmes de formation et ateliers pour les professionnels et étudiants en architecture et génie civil.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Acad"
    },
    {
      title: "Calcul de Structure",
      description: "Analyse et dimensionnement des structures pour assurer la stabilité et la durabilité de vos constructions.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Calc"
    },
    {
      title: "Études Géotechniques",
      description: "Évaluation des propriétés du sol pour des fondations sûres et adaptées à chaque projet.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Geo"
    },
    {
      title: "Analyse Hydraulique",
      description: "Conception et optimisation des systèmes de gestion de l'eau pour les infrastructures.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Hyd"
    },
    {
      title: "Planification d'Infrastructures",
      description: "Développement de plans stratégiques pour les routes, ponts, réseaux et autres infrastructures.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Plan"
    },
    {
      title: "Assistance en Matière de Permis",
      description: "Accompagnement dans l'obtention des permis de construire et autres autorisations nécessaires.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Permis"
    },
    {
      title: "Gestion de la Construction",
      description: "Coordination complète des projets de construction, de la planification à la livraison finale.",
      icon: "https://placehold.co/50x50/007bff/ffffff?text=Gest"
    },
  ];

  const digitalServices = [
    {
      title: "Conception Graphique",
      description: "Création de logos, identités visuelles, brochures et tous supports de communication percutants.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Graph"
    },
    {
      title: "Création de Contenu pour les Réseaux Sociaux",
      description: "Production de visuels et textes optimisés pour engager votre audience sur toutes les plateformes.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Social"
    },
    {
      title: "Conception d'Interfaces Utilisateurs (UI Design)",
      description: "Design d'interfaces intuitives et esthétiques pour applications web et mobiles.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=UI"
    },
    {
      title: "Conception d'Expériences Utilisateurs (UX Design)",
      description: "Optimisation du parcours utilisateur pour une navigation fluide et satisfaisante.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=UX"
    },
    {
      title: "Rédaction de Contenu SEO",
      description: "Création de textes optimisés pour les moteurs de recherche, augmentant votre visibilité en ligne.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=SEO"
    },
    {
      title: "Production Vidéo",
      description: "Réalisation de vidéos promotionnelles, institutionnelles et de contenu pour le web.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Video"
    },
    {
      title: "Contenu de Marketing par E-mail",
      description: "Conception de campagnes d'e-mailing engageantes et efficaces pour vos objectifs marketing.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Email"
    },
    {
      title: "Rédaction de Contenu de Site Web",
      description: "Création de textes clairs, concis et persuasifs pour les pages de votre site internet.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Web"
    },
    {
      title: "Stratégie et Conseil en Marketing Digital",
      description: "Développement de stratégies digitales complètes pour maximiser votre impact en ligne.",
      icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Strat"
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Nos Services Complets</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Naoussi Industries offre une gamme étendue de services, alliant l'ingénierie de précision à la créativité digitale, pour répondre à tous vos besoins.
        </p>

        {/* Génie Civil Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Solutions en Génie Civil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {civilServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                <img src={service.icon} alt={`${service.title} Icon`} className="w-16 h-16 mb-4 rounded-full" />
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Création de Contenu Digital Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Solutions en Création de Contenu Digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                <img src={service.icon} alt={`${service.title} Icon`} className="w-16 h-16 mb-4 rounded-full" />
                <h3 className="text-xl font-semibold text-purple-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  const projects = [
    {
      title: "Construction du Complexe Résidentiel 'Harmonie'",
      category: "Génie Civil",
      description: "Conception et réalisation d'un complexe résidentiel moderne de 50 appartements, intégrant des solutions écologiques.",
      image: "https://placehold.co/600x400/007bff/ffffff?text=Projet+Résidentiel",
      details: "Défis: Optimisation de l'espace urbain, intégration de panneaux solaires. Solutions: Design compact, matériaux durables, gestion de projet agile. Résultats: Livraison dans les délais, satisfaction client élevée, certification environnementale.",
    },
    {
      title: "Refonte de l'Identité Visuelle pour 'Café Urbain'",
      category: "Création Digitale",
      description: "Création d'un nouveau logo, charte graphique et supports de communication pour une chaîne de cafés.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Logo+Café",
      details: "Défis: Moderniser l'image sans perdre l'essence. Solutions: Palette de couleurs chaleureuse, typographie moderne, illustration personnalisée. Résultats: Augmentation de la reconnaissance de la marque, feedback positif des clients.",
    },
    {
      title: "Pont de la Rivière 'Sérénité'",
      category: "Génie Civil",
      description: "Conception et construction d'un pont suspendu pour améliorer la connectivité régionale.",
      image: "https://placehold.co/600x400/007bff/ffffff?text=Projet+Pont",
      details: "Défis: Conditions géologiques complexes, contraintes environnementales. Solutions: Études géotechniques approfondies, techniques de construction innovantes, minimisation de l'impact écologique. Résultats: Infrastructure clé, circulation améliorée.",
    },
    {
      title: "Campagne Marketing Digital pour 'Fitness Boost'",
      category: "Création Digitale",
      description: "Développement d'une stratégie de contenu et de campagnes publicitaires pour une application de fitness.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Campagne+Fitness",
      details: "Défis: Marché concurrentiel, ciblage précis. Solutions: Contenu vidéo engageant, publicités ciblées sur les réseaux sociaux, optimisation SEO. Résultats: Augmentation de 30% des téléchargements de l'application en 3 mois.",
    },
    {
      title: "Rénovation du Bâtiment Historique 'Le Grand Théâtre'",
      category: "Génie Civil",
      description: "Restauration et modernisation d'un théâtre historique, préservant son patrimoine architectural.",
      image: "https://placehold.co/600x400/007bff/ffffff?text=Théâtre+Rénovation",
      details: "Défis: Respect des éléments historiques, intégration de technologies modernes. Solutions: Collaboration avec des experts en patrimoine, utilisation de matériaux traditionnels et techniques de pointe. Résultats: Patrimoine préservé, fonctionnalité améliorée.",
    },
    {
      title: "Création d'un Site Web E-commerce pour 'Artisanat Local'",
      category: "Création Digitale",
      description: "Conception et développement d'une plateforme de vente en ligne pour des produits artisanaux.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Site+E-commerce",
      details: "Défis: Mettre en valeur l'unicité des produits, expérience utilisateur fluide. Solutions: Design épuré, photographies de haute qualité, processus de commande simplifié. Résultats: Augmentation des ventes en ligne, portée nationale.",
    },
    // Nouveaux projets basés sur les témoignages et les applications du fondateur
    {
      title: "Projet Architectural d'Envergure : L'Excellence Redéfinie",
      category: "Génie Civil",
      description: "Une collaboration fructueuse sur des projets architecturaux complexes, où notre expertise a permis une réalisation d'une rapidité et d'une précision inégalées, intégrant les technologies de pointe.",
      image: "https://placehold.co/600x400/007bff/ffffff?text=Projet+Architectural",
      details: "Défis: Intégration de designs audacieux, respect des délais serrés, application de technologies innovantes. Solutions: Méthodologies agiles, modélisation 3D avancée, formation continue de l'équipe. Résultats: Projets livrés avec une qualité exceptionnelle, dépassement des attentes client, transfert de savoir-faire technologique.",
    },
    {
      title: "Veritrust : Du Rêve à la Marque Vibrante",
      category: "Création Digitale",
      description: "Accompagnement stratégique pour une startup, transformant une vision initiale floue en une identité de marque percutante et une présence digitale captivante.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Veritrust+Brand",
      details: "Défis: Clarification de la proposition de valeur, création d'une identité visuelle unique, stratégie de lancement. Solutions: Ateliers d'idéation intensifs, branding complet, plan de communication digital sur mesure. Résultats: Lancement réussi, marque forte et reconnaissable, croissance rapide de l'engagement.",
    },
    {
      title: "Coming-Complexe des Ingénieurs : Un Renouveau d'Image Spectaculaire",
      category: "Création Digitale",
      description: "Revitalisation complète de l'image d'une entreprise établie, lui offrant une modernité et un dynamisme qui reflètent son expertise de plus de 20 ans.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Coming+Complexe",
      details: "Défis: Moderniser une image vieillissante sans perdre l'héritage, rajeunir la perception de la marque. Solutions: Refonte graphique complète, création de contenu vidéo, stratégie de communication digitale ciblée. Résultats: Image de marque rajeunie, augmentation de l'attractivité, positionnement renforcé sur le marché.",
    },
    {
      title: "Quizforge : L'Apprentissage Ludique Redéfini",
      category: "Création Digitale",
      description: "Développement d'une application interactive pour transformer l'apprentissage en une expérience engageante et amusante.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Quizforge+App",
      details: "Défis: Gamification de contenu éducatif, interface utilisateur intuitive, performance multiplateforme. Solutions: Conception UX/UI centrée sur l'utilisateur, développement agile, intégration de feedback en temps réel. Résultats: Engagement accru des utilisateurs, amélioration des performances d'apprentissage, retours positifs.",
    },
    {
      title: "Eduflux : Votre Plateforme d'Éducation Réinventée",
      category: "Création Digitale",
      description: "Conception et déploiement d'une plateforme éducative complète, rendant l'accès au savoir plus fluide et interactif que jamais.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Eduflux+Platform",
      details: "Défis: Gestion de contenu riche, parcours d'apprentissage personnalisés, scalabilité de la plateforme. Solutions: Architecture modulaire, intégration de modules interactifs, optimisation des performances. Résultats: Expérience utilisateur enrichie, augmentation de l'accès à l'éducation, flexibilité d'apprentissage.",
    },
    {
      title: "Myawesomeshop : L'E-commerce Simplifié et Performant",
      category: "Création Digitale",
      description: "Création d'une solution e-commerce robuste et intuitive, conçue pour maximiser les ventes et offrir une expérience d'achat inégalée.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Myawesomeshop",
      details: "Défis: Optimisation du tunnel de conversion, sécurité des transactions, gestion des stocks. Solutions: Design responsive, intégration de passerelles de paiement sécurisées, tableau de bord de gestion intuitif. Résultats: Augmentation significative des ventes, fidélisation des clients, gestion simplifiée du commerce en ligne.",
    },
  ];

  const [filter, setFilter] = useState('all'); // 'all', 'Génie Civil', 'Création Digitale'

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Notre Portfolio de Projets</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Découvrez nos réalisations en génie civil et en création digitale qui témoignent de notre expertise et de notre passion.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${filter === 'all' ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Tous les Projets
          </button>
          <button
            onClick={() => setFilter('Génie Civil')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${filter === 'Génie Civil' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Génie Civil
          </button>
          <button
            onClick={() => setFilter('Création Digitale')}
            className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${filter === 'Création Digitale' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Création Digitale
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Projet"; }} />
              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${project.category === 'Génie Civil' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <details className="text-gray-700 text-sm cursor-pointer">
                  <summary className="font-medium text-blue-600 hover:text-blue-800">Voir les détails</summary>
                  <p className="mt-2">{project.details}</p>
                </details>
                <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300">
                  Discuter d'un projet similaire
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-8">Aucun projet trouvé pour cette catégorie.</p>
        )}
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.subject && formData.message) {
        console.log('Formulaire soumis:', formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Contactez-Nous</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Nous serions ravis de discuter de votre prochain projet. Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Numéro de Téléphone (Optionnel)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Génie Civil">Demande Génie Civil</option>
                  <option value="Création Digitale">Demande Création Digitale</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 w-full"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">Votre message a été envoyé avec succès ! Nous vous répondrons sous 24-48 heures.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">Une erreur est survenue. Veuillez remplir tous les champs requis et réessayer.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Informations de Contact Directes</h2>
            <div className="space-y-6 text-gray-700">
              <a href="mailto:naoussilionel8@gmail.com" className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300">
                <Mail size={24} className="mr-3 text-blue-600" /> naoussilionel8@gmail.com
              </a>
              <a href="tel:+237658120586" className="flex items-center text-lg text-blue-600 hover:text-blue-800 transition duration-300">
                <Phone size={24} className="mr-3 text-blue-600" /> +237 658120586
              </a>
              <a href="https://wa.me/237658120586" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-green-600 hover:text-green-800 transition duration-300">
                {/* [Image of WhatsApp] */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="w-6 h-6 mr-3" /> Envoyer un message WhatsApp
              </a>
              <p className="flex items-center text-lg"><MapPin size={24} className="mr-3 text-blue-600" /> Douala, Ndogbong</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Suivez-nous sur les réseaux sociaux</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61568848127921" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Facebook size={30} /></a>
              <a href="https://www.linkedin.com/in/lionel-naoussi-29a52232b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Linkedin size={30} /></a>
              <a href="https://www.instagram.com/t.n.a.l/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Instagram size={30} /></a>
              {/* Twitter link removed as per previous instruction */}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Notre Localisation</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-center">
              {/* Placeholder for an interactive map (e.g., Google Maps iframe) */}
              Carte interactive ici
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Page Component
function BlogPage({ navigateTo }) {
  const blogPosts = [
    {
      title: "Construction Durable : Les Secrets d'un Bâtiment Écologique et Rentable",
      date: "24 Mai 2025",
      excerpt: "Révolutionnez vos projets ! Découvrez comment la construction durable ne se contente pas de protéger la planète, mais optimise aussi vos coûts et la valeur de vos infrastructures. Un guide essentiel pour les professionnels du BTP.",
      image: "https://placehold.co/400x250/007bff/ffffff?text=Bâtiment+Écologique",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Construction Durable : Les Secrets d'un Bâtiment Écologique et Rentable</h2>
        <p class="text-gray-700 mb-4">La construction durable n'est plus une option, mais une nécessité. Face aux défis climatiques et à la raréfaction des ressources, le secteur du BTP se tourne vers des pratiques plus respectueuses de l'environnement, sans pour autant sacrifier la rentabilité. Au contraire, investir dans le durable, c'est investir dans l'avenir et dans des économies à long terme.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Qu'est-ce que la Construction Durable ?</h3>
        <p class="text-gray-700 mb-4">La construction durable englobe un ensemble de pratiques visant à minimiser l'impact environnemental des bâtiments tout au long de leur cycle de vie, de la conception à la démolition. Cela inclut le choix des matériaux, les techniques de construction, l'efficacité énergétique, la gestion de l'eau et des déchets, et l'intégration dans l'environnement local.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Les Piliers de la Rentabilité Durable :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Efficacité Énergétique :</strong> Des bâtiments bien isolés, équipés de systèmes de chauffage, ventilation et climatisation (CVC) performants, réduisent drastiquement les factures d'énergie. L'intégration de sources d'énergie renouvelable (panneaux solaires, géothermie) peut même rendre le bâtiment autonome.</li>
          <li><strong>Choix des Matériaux :</strong> Privilégier les matériaux locaux, recyclés ou à faible empreinte carbone (bois, béton bas-carbone, matériaux biosourcés) réduit les coûts de transport et l'impact environnemental. Leur durabilité minimise également les besoins en maintenance et en remplacement.</li>
          <li><strong>Gestion de l'Eau :</strong> La récupération des eaux de pluie, les systèmes de plomberie à faible consommation et le traitement des eaux grises permettent de réduire la consommation d'eau potable, générant des économies significatives.</li>
          <li><strong>Optimisation des Déchets :</strong> Une bonne gestion des déchets de chantier, avec tri et recyclage, diminue les coûts d'élimination et favorise une économie circulaire.</li>
          <li><strong>Valeur Immobilière Accrue :</strong> Les bâtiments durables sont de plus en plus recherchés par les acheteurs et les locataires, ce qui augmente leur valeur sur le marché et assure un meilleur retour sur investissement.</li>
          <li><strong>Subventions et Incitations Fiscales :</strong> De nombreux gouvernements et organismes offrent des subventions, des crédits d'impôt ou des prêts à taux réduit pour les projets de construction durable, rendant ces investissements encore plus attractifs.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries et la Construction Durable :</h3>
        <p class="text-gray-700 mb-4">Chez Naoussi Industries, nous sommes à la pointe de la construction durable. Nos experts intègrent dès la phase de conception les principes de l'éco-conception, en utilisant des outils de modélisation avancés pour simuler les performances énergétiques et environnementales de vos futurs bâtiments. Nous collaborons avec des fournisseurs de matériaux certifiés et mettons en œuvre des techniques de construction innovantes pour garantir des ouvrages à la fois robustes, esthétiques et respectueux de la planète.</p>
        <p class="text-gray-700">Investir dans un bâtiment durable avec Naoussi Industries, c'est choisir une solution qui non seulement préserve notre environnement, mais qui génère également des bénéfices tangibles et durables pour votre entreprise ou votre patrimoine.</p>
      `,
    },
    {
      title: "Maîtriser le SEO en 2025 : Le Guide Ultime pour Booster Votre Visibilité Digitale",
      date: "24 Mai 2025",
      excerpt: "Votre site est invisible ? Apprenez les stratégies SEO les plus efficaces pour dominer les résultats de recherche Google et attirer un trafic qualifié vers votre entreprise. Le succès en ligne commence ici !",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=SEO+Marketing",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Maîtriser le SEO en 2025 : Le Guide Ultime pour Booster Votre Visibilité Digitale</h2>
        <p class="text-gray-700 mb-4">Dans le paysage numérique en constante évolution, le Search Engine Optimization (SEO) reste la pierre angulaire d'une stratégie de marketing digital réussie. En 2025, les algorithmes de Google sont plus intelligents que jamais, privilégiant l'expérience utilisateur, la pertinence du contenu et l'autorité du site. Maîtriser le SEO n'est plus une option, c'est une nécessité pour toute entreprise souhaitant dominer sa niche en ligne.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Les Fondamentaux du SEO en 2025 :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Recherche de Mots-clés Approfondie :</strong> Au-delà des mots-clés génériques, concentrez-vous sur les intentions de recherche (informationnelle, navigationnelle, transactionnelle) et les mots-clés de longue traîne. Utilisez des outils avancés pour identifier les opportunités inexploitées.</li>
          <li><strong>Contenu de Haute Qualité et Pertinent :</strong> Créez du contenu qui répond directement aux questions de votre audience, offre une valeur unique et est plus complet et plus précis que celui de vos concurrents. La qualité prime sur la quantité.</li>
          <li><strong>Optimisation Technique (Core Web Vitals) :</strong> Assurez-vous que votre site est rapide, mobile-friendly et offre une excellente expérience utilisateur. Les Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift) sont des facteurs de classement cruciaux.</li>
          <li><strong>Netlinking Stratégique (Backlinks) :</strong> Obtenez des liens de qualité provenant de sites faisant autorité dans votre secteur. La qualité des backlinks est bien plus importante que leur quantité.</li>
          <li><strong>SEO Local :</strong> Si vous avez une présence physique, optimisez votre fiche Google My Business et assurez-vous que vos informations de contact sont cohérentes sur toutes les plateformes.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Tendances SEO à Surveiller en 2025 :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Recherche Vocale :</strong> L'optimisation pour la recherche vocale nécessite une approche conversationnelle des mots-clés et des réponses directes aux questions.</li>
          <li><strong>Expérience Utilisateur (UX) :</strong> Google met de plus en plus l'accent sur l'UX. Un site facile à naviguer, esthétique et rapide sera mieux classé.</li>
          <li><strong>Contenu Vidéo :</strong> Les vidéos continuent de dominer. Optimisez vos vidéos pour le SEO en utilisant des titres, descriptions et tags pertinents sur YouTube et d'autres plateformes.</li>
          <li><strong>IA et Contenu Généré :</strong> L'IA peut aider à la génération de contenu, mais l'originalité, la profondeur et l'expertise humaine restent indispensables pour un classement élevé.</li>
          <li><strong>E-A-T (Expertise, Authoritativeness, Trustworthiness) :</strong> Google valorise les contenus créés par des experts reconnus. Mettez en avant votre expertise et votre crédibilité.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Comment Naoussi Industries peut Booster Votre SEO :</h3>
        <p class="text-gray-700 mb-4">Chez Naoussi Industries, notre équipe de spécialistes en marketing digital est constamment à jour sur les dernières évolutions du SEO. Nous réalisons des audits complets de votre site, développons des stratégies de mots-clés personnalisées, créons du contenu optimisé et mettons en place des campagnes de netlinking efficaces. Notre objectif est de vous propulser en tête des résultats de recherche, d'augmenter votre trafic qualifié et de maximiser votre retour sur investissement.</p>
        <p class="text-gray-700">Ne laissez pas vos concurrents prendre le dessus. Contactez Naoussi Industries dès aujourd'hui pour une stratégie SEO qui vous garantit une visibilité durable en 2025 et au-delà.</p>
      `,
    },
    {
      title: "L'Intelligence Artificielle au Service du Génie Civil : Révolution ou Évolution ?",
      date: "24 Mai 2025",
      excerpt: "L'IA transforme le BTP sous nos yeux ! Plongez dans les applications concrètes de l'intelligence artificielle qui optimisent la conception, la planification et la sécurité de vos chantiers. Le futur de la construction est déjà là.",
      image: "https://placehold.co/400x250/007bff/ffffff?text=IA+Génie+Civil",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">L'Intelligence Artificielle au Service du Génie Civil : Révolution ou Évolution ?</h2>
        <p class="text-gray-700 mb-4">L'Intelligence Artificielle (IA) est en train de redéfinir de nombreux secteurs, et le génie civil ne fait pas exception. Loin d'être une simple tendance, l'IA est en passe de devenir un outil indispensable, transformant les méthodes de conception, de construction et de gestion des infrastructures. Mais s'agit-il d'une révolution disruptive ou d'une évolution naturelle de nos pratiques ?</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">L'IA : Un Catalyseur d'Efficacité dans le BTP</h3>
        <p class="text-gray-700 mb-4">L'intégration de l'IA dans le génie civil se manifeste à plusieurs niveaux, apportant des gains significatifs en termes d'efficacité, de sécurité et de durabilité :</p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Optimisation de la Conception :</strong> Les algorithmes d'IA peuvent analyser d'énormes volumes de données (géotechniques, climatiques, urbaines) pour proposer des designs optimisés, plus résistants, plus écologiques et plus économiques. La conception générative permet d'explorer des milliers de variantes en un temps record.</li>
          <li><strong>Planification et Gestion de Projet :</strong> L'IA peut prédire les retards potentiels, optimiser l'allocation des ressources, et améliorer la planification des tâches en identifiant les goulots d'étranglement. Cela se traduit par des projets livrés dans les délais et les budgets.</li>
          <li><strong>Sécurité sur les Chantiers :</strong> Grâce à la vision par ordinateur et aux capteurs intelligents, l'IA peut détecter les situations dangereuses en temps réel, surveiller le respect des règles de sécurité et même anticiper les risques d'accidents.</li>
          <li><strong>Maintenance Prédictive :</strong> Les systèmes d'IA analysent les données des capteurs installés sur les infrastructures (ponts, routes, bâtiments) pour prédire les pannes et les besoins en maintenance avant qu'ils ne surviennent, prolongeant ainsi la durée de vie des ouvrages et réduisant les coûts.</li>
          <li><strong>Robotique et Automatisation :</strong> L'IA pilote des robots de construction capables d'effectuer des tâches répétitives ou dangereuses avec une précision inégalée, augmentant la productivité et la sécurité.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Révolution ou Évolution ?</h3>
        <p class="text-gray-700 mb-4">L'IA n'est pas là pour remplacer l'ingénieur, mais pour augmenter ses capacités. C'est une évolution majeure qui permet aux professionnels du génie civil de prendre des décisions plus éclairées, de concevoir des structures plus complexes et plus résilientes, et de gérer des projets avec une efficacité sans précédent. Elle automatise les tâches fastidieuses, libérant du temps pour la créativité et la résolution de problèmes complexes.</p>
        <p class="text-gray-700">Chez Naoussi Industries, nous embrassons cette évolution. Nos équipes sont formées aux dernières technologies d'IA et de modélisation, nous permettant d'offrir des solutions de génie civil à la pointe de l'innovation, garantissant la performance, la sécurité et la durabilité de vos infrastructures.</p>
      `,
    },
    {
      title: "Storytelling Visuel : Créez des Contenus Digitaux qui Captivent et Convertissent",
      date: "24 Mai 2025",
      excerpt: "Vos messages passent inaperçus ? Découvrez le pouvoir du storytelling visuel pour créer des campagnes mémorables, bâtir une connexion émotionnelle avec votre audience et transformer vos prospects en clients fidèles.",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Storytelling+Visuel",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Storytelling Visuel : Créez des Contenus Digitaux qui Captivent et Convertissent</h2>
        <p class="text-gray-700 mb-4">Dans un monde digital saturé d'informations, capter l'attention de votre audience est un défi constant. Le storytelling visuel n'est pas une simple tendance, c'est une stratégie puissante qui permet à votre marque de se démarquer, de créer un lien émotionnel fort et de transformer l'engagement en conversion. Oubliez les messages plats, il est temps de raconter votre histoire avec impact.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Pourquoi le Storytelling Visuel est Indispensable ?</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Mémoire et Rétention :</strong> Les humains sont des êtres visuels. Une histoire racontée avec des images, des vidéos ou des infographies est bien plus mémorable qu'un simple texte.</li>
          <li><strong>Connexion Émotionnelle :</strong> Les visuels ont le pouvoir de susciter des émotions, de l'empathie et de la confiance, des éléments clés pour bâtir une relation durable avec votre audience.</li>
          <li><strong>Simplification de Messages Complexes :</strong> Des concepts complexes peuvent être expliqués de manière claire et concise grâce à des visuels bien conçus.</li>
          <li><strong>Viralité et Partage :</strong> Un contenu visuel engageant est plus susceptible d'être partagé sur les réseaux sociaux, augmentant ainsi votre portée organique.</li>
          <li><strong>Différenciation de la Marque :</strong> Dans un marché concurrentiel, une histoire visuelle unique permet à votre marque de se distinguer et de laisser une impression durable.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Les Éléments Clés d'un Storytelling Visuel Réussi :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Identifiez Votre Message Central :</strong> Quelle est l'histoire que vous voulez raconter ? Quel problème résolvez-vous pour votre client ?</li>
          <li><strong>Connaissez Votre Audience :</strong> À qui vous adressez-vous ? Quels sont leurs besoins, leurs désirs, leurs points de douleur ?</li>
          <li><strong>Choisissez les Bons Médias :</strong> Photos de haute qualité, illustrations originales, vidéos dynamiques, infographies claires, animations... le choix dépend de votre histoire et de votre plateforme.</li>
          <li><strong>Structurez Votre Récit :</strong> Comme toute bonne histoire, elle doit avoir un début (le problème), un milieu (la solution, votre marque), et une fin (le bénéfice pour le client).</li>
          <li><strong>Appel à l'Action Clair :</strong> Que voulez-vous que votre audience fasse après avoir été captivée par votre histoire ?</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries : Votre Partenaire en Storytelling Visuel</h3>
        <p class="text-gray-700 mb-4">Chez Naoussi Industries, nous sommes des experts en création de contenu digital qui raconte votre histoire. De la conception graphique à la production vidéo, en passant par le UI/UX design, nous maîtrisons l'art de transformer vos idées en expériences visuelles percutantes. Nous vous aidons à définir votre message, à choisir les meilleurs supports et à créer des campagnes qui non seulement captivent, mais génèrent aussi des résultats concrets pour votre entreprise.</p>
        <p class="text-700">Prêt à donner vie à votre marque avec des histoires visuelles inoubliables ? Contactez Naoussi Industries dès aujourd'hui pour une consultation personnalisée.</p>
      `,
    },
    {
      title: "Gestion de Projet BTP : Les 7 Erreurs à Éviter pour une Livraison Réussie",
      date: "24 Mai 2025",
      excerpt: "Vos projets prennent du retard ? Évitez les pièges courants de la gestion de projet en BTP grâce à nos conseils d'experts. Assurez une livraison dans les délais et le budget, sans stress !",
      image: "https://placehold.co/400x250/007bff/ffffff?text=Gestion+Projet+BTP",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Gestion de Projet BTP : Les 7 Erreurs à Éviter pour une Livraison Réussie</h2>
        <p class="text-gray-700 mb-4">La gestion de projet dans le secteur du Bâtiment et des Travaux Publics (BTP) est une discipline complexe, où chaque détail compte. Un projet réussi est le fruit d'une planification rigoureuse, d'une exécution précise et d'une communication fluide. Cependant, de nombreuses erreurs peuvent survenir, entraînant des retards, des dépassements de coûts et une qualité compromise. Voici les 7 erreurs les plus courantes à éviter pour garantir le succès de vos projets.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">1. Manque de Planification Initiale Approfondie :</h3>
        <p class="text-gray-700 mb-4">Une planification hâtive est la recette du désastre. Ne pas définir clairement les objectifs, le périmètre, les ressources et les délais dès le départ mènera inévitablement à des ajustements coûteux en cours de route. Prenez le temps d'analyser les risques, d'établir un calendrier détaillé et de créer un budget réaliste.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2. Communication Inefficace :</h3>
        <p class="text-gray-700 mb-4">La communication est le ciment de tout projet. Un manque de transparence entre les parties prenantes (client, équipe, sous-traitants) peut entraîner des malentendus, des erreurs et des frustrations. Mettez en place des réunions régulières, utilisez des outils de collaboration et assurez-vous que les informations clés circulent efficacement.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3. Sous-estimation des Risques :</h3>
        <p class="text-gray-700 mb-4">Ignorer ou sous-estimer les risques potentiels (météo, pénurie de matériaux, problèmes techniques inattendus) est une erreur critique. Identifiez les risques dès le début du projet, évaluez leur impact et développez des plans d'atténuation. Un bon gestionnaire anticipe plutôt que de réagir.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">4. Mauvaise Gestion des Changements :</h3>
        <p class="text-gray-700 mb-4">Les changements sont inévitables dans le BTP. Cependant, une gestion informelle ou inexistante des demandes de changement peut déséquilibrer le projet. Mettez en place un processus clair pour évaluer, approuver et documenter chaque modification de périmètre, de coût ou de délai.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5. Négliger la Qualité :</h3>
        <p class="text-gray-700 mb-4">Sacrifier la qualité pour respecter les délais ou le budget est une erreur coûteuse à long terme. Des défauts de construction peuvent entraîner des réparations coûteuses, des litiges et nuire à votre réputation. Intégrez des contrôles qualité réguliers et assurez-vous que toutes les normes sont respectées.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">6. Surcharge des Ressources :</h3>
        <p class="text-gray-700 mb-4">Tenter de faire trop avec trop peu de ressources, ou au contraire, surcharger une équipe, conduit à l'épuisement, aux erreurs et à une baisse de productivité. Évaluez précisément les besoins en personnel, équipement et matériaux, et ajustez-les en fonction de l'avancement du projet.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">7. Manque de Suivi et d'Évaluation :</h3>
        <p class="text-gray-700 mb-4">Un projet ne s'arrête pas à sa livraison. Ne pas suivre les performances après coup, ne pas analyser les succès et les échecs, c'est se priver d'opportunités d'amélioration. Mettez en place des indicateurs de performance clés (KPIs) et effectuez des revues post-projet pour capitaliser sur l'expérience acquise.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries : Votre Expert en Gestion de Projet BTP</h3>
        <p class="text-gray-700">Chez Naoussi Industries, nous mettons à votre disposition notre expertise en gestion de projet pour éviter ces pièges. Notre approche méthodique, notre maîtrise des outils de planification et notre communication transparente garantissent la réussite de vos projets, du début à la fin. Contactez-nous pour une gestion de projet sans faille.</p>
      `,
    },
    {
      title: "UI/UX Design : La Clé d'une Expérience Utilisateur Inoubliable sur Votre Site Web",
      date: "24 Mai 2025",
      excerpt: "Votre site ne convertit pas ? Comprenez comment un design UI/UX intuitif et esthétique peut transformer la navigation de vos visiteurs en un parcours fluide, agréable et générateur de ventes. L'engagement client commence par le design.",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=UI+UX+Design",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">UI/UX Design : La Clé d'une Expérience Utilisateur Inoubliable sur Votre Site Web</h2>
        <p class="text-gray-700 mb-4">Dans le monde digital actuel, un beau site web ne suffit plus. Pour capter et retenir l'attention de vos visiteurs, et surtout les convertir en clients, vous avez besoin d'une expérience utilisateur (UX) irréprochable, soutenue par une interface utilisateur (UI) intuitive et esthétique. L'UI et l'UX sont les deux faces d'une même pièce, essentielles à la réussite de votre présence en ligne.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Qu'est-ce que l'UI et l'UX Design ?</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>UX (User Experience) Design :</strong> Il s'agit de l'ensemble du processus de conception visant à créer des produits qui offrent des expériences significatives et pertinentes aux utilisateurs. L'UX se concentre sur la compréhension des besoins des utilisateurs, leurs comportements, leurs motivations, et la manière dont ils interagissent avec votre produit. C'est le "pourquoi", le "quoi" et le "comment" de l'interaction.</li>
          <li><strong>UI (User Interface) Design :</strong> C'est la conception visuelle et interactive de l'interface d'un produit. L'UI se concentre sur l'apparence et l'interactivité du produit. Cela inclut les couleurs, la typographie, les icônes, les boutons, les images, et la manière dont l'utilisateur interagit avec ces éléments. C'est l'aspect "look and feel" du produit.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">L'Impact d'un Bon UI/UX sur Votre Business :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Augmentation des Conversions :</strong> Un parcours utilisateur fluide et un design engageant réduisent les frictions, incitant les visiteurs à accomplir les actions souhaitées (achat, inscription, contact).</li>
          <li><strong>Amélioration de la Satisfaction Client :</strong> Une expérience agréable fidélise les utilisateurs, qui sont plus enclins à revenir et à recommander votre site.</li>
          <li><strong>Réduction du Taux de Rebond :</strong> Un site intuitif et pertinent encourage les visiteurs à explorer davantage, diminuant le nombre de ceux qui quittent rapidement.</li>
          <li><strong>Renforcement de la Crédibilité :</strong> Un design professionnel et une navigation sans accroc inspirent confiance et positionnent votre marque comme fiable et experte.</li>
          <li><strong>Avantage Concurrentiel :</strong> Dans un marché saturé, une expérience utilisateur supérieure peut être votre principal différenciateur.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries : Votre Expert en UI/UX Design</h3>
        <p class="text-gray-700 mb-4">Chez Naoussi Industries, nous ne nous contentons pas de créer de beaux designs ; nous concevons des expériences. Notre équipe d'experts UI/UX analyse en profondeur vos objectifs business et les besoins de vos utilisateurs pour créer des interfaces qui sont non seulement visuellement attrayantes, mais aussi hautement fonctionnelles et intuitives. Du wireframing au prototypage, en passant par les tests utilisateurs, nous vous accompagnons à chaque étape pour garantir que votre site web ou application offre une expérience inoubliable.</p>
        <p class="text-gray-700">Transformez vos visiteurs en clients fidèles grâce à un design UI/UX qui fait la différence. Contactez Naoussi Industries pour une consultation sur mesure.</p>
      `,
    },
    {
      title: "5 Innovations qui Redéfinissent l'Architecture Moderne",
      date: "24 Mai 2025",
      excerpt: "De l'impression 3D à la conception paramétrique, l'architecture d'aujourd'hui est en pleine révolution...",
      image: "https://placehold.co/400x250/007bff/ffffff?text=Blog+Arch",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">5 Innovations qui Redéfinissent l'Architecture Moderne</h2>
        <p class="text-gray-700 mb-4">L'architecture, discipline millénaire, est en constante évolution. Aujourd'hui, grâce aux avancées technologiques et à une prise de conscience environnementale accrue, elle connaît une transformation sans précédent. Des matériaux révolutionnaires aux outils de conception intelligents, voici 5 innovations majeures qui redéfinissent la manière dont nous concevons, construisons et interagissons avec nos espaces.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">1. L'Impression 3D de Bâtiments :</h3>
        <p class="text-gray-700 mb-4">L'impression 3D, ou fabrication additive, est en train de révolutionner la construction. Elle permet de construire des murs, voire des maisons entières, couche par couche, avec une rapidité et une précision remarquables. Cette technologie réduit les délais de construction, les coûts de main-d'œuvre et la quantité de déchets, tout en offrant une liberté de forme inédite aux architectes. Elle ouvre la voie à des constructions plus abordables et plus personnalisées.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2. La Conception Paramétrique et Générative :</h3>
        <p class="text-gray-700 mb-4">Ces approches utilisent des algorithmes pour générer des formes complexes et optimisées en fonction de paramètres prédéfinis (ensoleillement, vent, flux de circulation, etc.). Les architectes ne dessinent plus une forme fixe, mais définissent des règles et des contraintes, laissant l'ordinateur explorer des milliers de solutions. Cela permet de créer des structures à la fois esthétiques, fonctionnelles et ultra-performantes, impossibles à concevoir manuellement.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3. Les Matériaux Intelligents et Auto-réparants :</h3>
        <p class="text-gray-700 mb-4">La recherche développe des matériaux capables de réagir à leur environnement. Le béton auto-cicatrisant, par exemple, contient des bactéries qui produisent du calcaire pour combler les fissures. Les vitrages dynamiques peuvent ajuster leur opacité pour réguler la lumière et la chaleur. Ces innovations promettent des bâtiments plus résilients, moins gourmands en énergie et nécessitant moins de maintenance.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">4. La Réalité Virtuelle (RV) et la Réalité Augmentée (RA) :</h3>
        <p class="text-gray-700 mb-4">La RV permet aux architectes et aux clients de "visiter" un bâtiment avant même sa construction, d'en évaluer les volumes, les lumières et l'ambiance. La RA, quant à elle, superpose des informations numériques au monde réel, aidant les ouvriers sur le chantier à visualiser les plans en 3D ou les inspecteurs à identifier les problèmes. Ces technologies améliorent la collaboration, réduisent les erreurs et facilitent la prise de décision.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5. Les Bâtiments à Énergie Positive (BEPOS) et Carbone Zéro :</h3>
        <p class="text-gray-700 mb-4">L'objectif est de construire des bâtiments qui produisent plus d'énergie qu'ils n'en consomment (BEPOS) ou dont l'empreinte carbone est neutre sur l'ensemble de leur cycle de vie. Cela passe par une conception bioclimatique, l'intégration massive d'énergies renouvelables, l'utilisation de matériaux bas-carbone et une gestion intelligente de l'énergie. Ces bâtiments sont l'avenir de l'architecture durable.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries : Pionnier de l'Architecture de Demain</h3>
        <p class="text-gray-700">Chez Naoussi Industries, nous intégrons ces innovations au cœur de nos projets. Notre engagement envers l'excellence et la durabilité nous pousse à explorer et à maîtriser ces technologies pour concevoir et construire des bâtiments qui ne sont pas seulement fonctionnels et esthétiques, mais aussi intelligents, résilients et respectueux de l'environnement. Contactez-nous pour bâtir ensemble l'architecture de demain.</p>
      `,
    },
    {
      title: "Comment le SEO peut Booster Votre Visibilité en Ligne",
      date: "24 Mai 2025",
      excerpt: "Comprendre les bases du référencement naturel est crucial pour attirer plus de trafic qualifié vers votre site web...",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Blog+SEO",
      fullContent: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Comment le SEO peut Booster Votre Visibilité en Ligne</h2>
        <p class="text-gray-700 mb-4">Dans le vaste océan d'Internet, avoir un site web est une première étape, mais être trouvé est le véritable défi. C'est là qu'intervient le SEO (Search Engine Optimization), ou référencement naturel. Il ne s'agit pas d'une formule magique, mais d'un ensemble de stratégies et de techniques visant à améliorer la position de votre site dans les résultats des moteurs de recherche comme Google. Un bon SEO signifie plus de visibilité, plus de trafic et, in fine, plus de clients.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Qu'est-ce que le SEO et pourquoi est-il Crucial ?</h3>
        <p class="text-gray-700 mb-4">Le SEO est l'art d'optimiser votre site web pour qu'il apparaisse en bonne position sur les pages de résultats des moteurs de recherche (SERP) pour des requêtes spécifiques. Contrairement à la publicité payante (SEA), le trafic généré par le SEO est "organique", c'est-à-dire gratuit et durable. Pourquoi est-ce si important ?</p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Crédibilité et Confiance :</strong> Les utilisateurs ont tendance à faire davantage confiance aux résultats organiques qu'aux annonces payantes. Une bonne position renforce votre autorité.</li>
          <li><strong>Trafic Qualifié :</strong> En ciblant les bons mots-clés, vous attirez des visiteurs qui sont activement à la recherche de vos produits ou services.</li>
          <li><strong>Coût-Efficacité :</strong> Bien que le SEO demande un investissement initial en temps et en ressources, il offre un excellent retour sur investissement à long terme par rapport aux campagnes publicitaires continues.</li>
          <li><strong>Expérience Utilisateur Améliorée :</strong> De nombreuses pratiques SEO (vitesse de chargement, adaptabilité mobile) contribuent directement à une meilleure expérience pour vos visiteurs.</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Les Piliers du SEO :</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>SEO On-Page :</strong> Concerne les optimisations directement sur votre site. Cela inclut le contenu (qualité, pertinence, mots-clés), les balises HTML (titres, meta descriptions, balises Hn), l'optimisation des images, la structure des URL, et le maillage interne.</li>
          <li><strong>SEO Off-Page :</strong> Regroupe les facteurs externes à votre site qui influencent votre classement. Le plus important est le netlinking (backlinks), c'est-à-dire les liens entrants provenant d'autres sites. La qualité et la pertinence de ces liens sont primordiales.</li>
          <li><strong>SEO Technique :</strong> Assure que votre site est techniquement "crawlable" et "indexable" par les moteurs de recherche. Cela comprend la vitesse de chargement, l'optimisation mobile, la structure du site, le fichier robots.txt, le sitemap XML, et la gestion des erreurs (404, redirections).</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Naoussi Industries et Votre Stratégie SEO :</h3>
        <p class="text-gray-700 mb-4">Chez Naoussi Industries, nous comprenons que chaque entreprise est unique. C'est pourquoi nous développons des stratégies SEO personnalisées, adaptées à vos objectifs et à votre secteur d'activité. Nos experts réalisent des audits approfondis, identifient les mots-clés les plus pertinents, optimisent votre contenu et votre structure technique, et mettent en place des campagnes de netlinking ciblées. Nous suivons de près les performances et ajustons nos stratégies pour vous assurer une visibilité maximale et un trafic qualifié.</p>
        <p class="text-gray-700">Ne laissez pas votre site se perdre dans les profondeurs de Google. Contactez Naoussi Industries pour une stratégie SEO qui vous propulsera au sommet des résultats de recherche et augmentera considérablement votre présence en ligne.</p>
      `,
    },
  ];

  const handleReadMore = (post) => {
    navigateTo('article', post); // Pass the entire post object
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Notre Blog</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Explorez nos articles, conseils et analyses sur les dernières tendances en génie civil et création digitale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/cccccc/333333?text=Image+Article"; }} />
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button
                  onClick={() => handleReadMore(post)}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  Lire la suite <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="text-center mt-16 bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Abonnez-vous à notre Newsletter</h2>
          <p className="text-gray-700 mb-6">Recevez les dernières actualités et insights directement dans votre boîte de réception.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full sm:w-1/2 md:w-1/3 py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              S'abonner
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

// New ArticlePage Component
function ArticlePage({ article, navigateTo }) {
  if (!article) {
    // Handle case where no article is selected (e.g., direct access or refresh)
    useEffect(() => {
      navigateTo('blog'); // Redirect to blog page if no article data
    }, [navigateTo]);
    return null; // Or a loading spinner
  }

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back to Blog button */}
        <button
          onClick={() => navigateTo('blog')}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition duration-300"
        >
          <ChevronRight size={18} className="rotate-180 mr-2" /> Retour au Blog
        </button>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-gray-500 text-sm mb-6">Publié le {article.date}</p>
          <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.fullContent }} />

          {/* Call to Action at the end of the article */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Prêt à transformer votre vision en réalité ?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Que ce soit pour un projet de construction ambitieux ou une stratégie digitale percutante, notre expertise est à votre service.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Discutons de votre projet !
            </button>
          </div>
        </article>

        {/* Optional: Related articles section */}
        {/* You can add a section here for related blog posts */}
      </div>
    </div>
  );
}

export default App;
