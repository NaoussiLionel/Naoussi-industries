import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Quote } from 'lucide-react'; // Added Quote icon

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
            <li><button onClick={() => navigateTo('a-propos')} className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2">Services</button></li>
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
            <a href="https://wa.me/237658120586" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              {/* Using a standard inline SVG for WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.145 1.24 8.413 3.509 2.268 2.269 3.506 5.235 3.508 8.413 0 6.557-5.336 11.892-11.893 11.892-.073 0-.146 0-.219-.001zm10.602-2.327c-.307 0-1.047-.135-1.747-.463l-.065-.031-1.144.304 3.356-1.104-.04-.023c-1.21-.745-1.92-1.92-1.92-3.143 0-2.613 2.13-4.743 4.746-4.743 1.214 0 2.302.465 3.143 1.292.842.827 1.293 1.914 1.293 3.125 0 2.613-2.13 4.743-4.746 4.743zm-1.8-7.974c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384z" />
              </svg>
            </a>
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
            <li><button onClick={() => navigateTo('blog')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Blog</button></li>
            <li><button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white transition duration-300 text-sm">Contact</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contactez-nous</h3>
          <p className="flex items-center text-gray-400 text-sm mb-2">
            <MapPin size={16} className="mr-2 text-blue-400" /> Douala, Cameroun
          </p>
          <p className="flex items-center text-gray-400 text-sm mb-2">
            <Phone size={16} className="mr-2 text-blue-400" /> (+237) 658 120 586
          </p>
          <p className="flex items-center text-gray-400 text-sm">
            <Mail size={16} className="mr-2 text-blue-400" /> contact@naoussiindustries.com
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-8 pt-6 border-t border-gray-700">
        © {new Date().getFullYear()} Naoussi Industries. Tous droits réservés.
      </div>
    </footer>
  );
}


// HomePage Component
function HomePage({ navigateTo }) {
  const testimonials = [
    {
      quote: "Naoussi Industries a transformé notre vision en réalité avec un professionnalisme exceptionnel. Leurs solutions en génie civil sont de première classe !",
      author: "Jean-Pierre Dupont",
      role: "Directeur Général, BTP Plus"
    },
    {
      quote: "Le site web qu'ils ont développé pour nous est moderne, intuitif et a considérablement amélioré notre présence en ligne. Un travail remarquable !",
      author: "Sophie Martin",
      role: "Fondatrice, Digital Connect"
    },
    {
      quote: "Leur équipe de design graphique a su capturer l'essence de notre marque. Nous sommes ravis du nouveau logo et de la charte graphique !",
      author: "Marc Olivier",
      role: "PDG, Café du Monde"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Bâtir l'Avenir, Digitaliser le Présent
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Naoussi Industries est votre partenaire de confiance pour des solutions innovantes en génie civil et une création digitale percutante.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigateTo('services')}
            className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Nos Services
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactez-nous
          </button>
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="container mx-auto mt-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Nos Domaines d'Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800 transform hover:scale-105 transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-hat"><path d="M2 18v-1c0-.7.3-1.4.8-2s1.2-.9 2-.8h14.4c.8-.1 1.6.2 2.1.8s.8 1.3.8 2v1"/><path d="M10 10V5c0-1.1.9-2 2-2s2 .9 2 2v5"/><path d="M4 18h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"/></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Génie Civil & BTP</h3>
            <p className="text-gray-600">
              De la conception à la réalisation, nous construisons des infrastructures solides et durables.
            </p>
            <button onClick={() => navigateTo('services')} className="mt-6 text-blue-600 hover:text-blue-800 flex items-center text-sm font-semibold">
              En savoir plus <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800 transform hover:scale-105 transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Développement Web & Mobile</h3>
            <p className="text-gray-600">
              Création de sites web, applications mobiles et solutions logicielles sur mesure.
            </p>
            <button onClick={() => navigateTo('services')} className="mt-6 text-blue-600 hover:text-blue-800 flex items-center text-sm font-semibold">
              En savoir plus <ChevronRight size={16} className="ml-1" />
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800 transform hover:scale-105 transition duration-300">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="12" cy="12" r="10"/><path d="M17.5 6.5l-9 9"/><path d="M13.5 6.5l-7 7"/><path d="M10 10l-4 4"/></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Design Graphique & Branding</h3>
            <p className="text-gray-600">
              Identité visuelle forte, logos, chartes graphiques et supports de communication.
            </p>
            <button onClick={() => navigateTo('services')} className="mt-6 text-blue-600 hover:text-blue-800 flex items-center text-sm font-semibold">
              En savoir plus <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto mt-20 py-12 bg-white rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Quote size={40} className="text-blue-600 mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto bg-white rounded-xl shadow-xl p-10 mt-20 text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
        <p className="text-lg mb-8">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis gratuit.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Demander un Devis
        </button>
      </section>
    </div>
  );
}

// AboutPage Component
function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">À Propos de Naoussi Industries</h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placehold.co/600x400/e0f2f7/007bff?text=Notre+Histoire"
            alt="Notre Histoire"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Notre Histoire</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fondée sur les principes d'excellence et d'innovation, Naoussi Industries a débuté avec une vision claire : transformer les paysages urbains et numériques. Depuis nos humbles débuts, nous avons grandi pour devenir un acteur reconnu dans le génie civil et la création digitale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Notre parcours est marqué par une succession de projets réussis, de partenariats solides et d'une volonté inébranlable de dépasser les attentes de nos clients. Nous sommes fiers de notre héritage et enthousiastes à l'idée de bâtir l'avenir.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12 mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placehold.co/600x400/e0f2f7/007bff?text=Notre+Mission"
            alt="Notre Mission"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Notre Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Notre mission est de fournir des solutions de pointe qui allient innovation, qualité et durabilité. Que ce soit dans la construction d'infrastructures robustes ou le développement de plateformes numériques intuitives, nous nous engageons à offrir une valeur exceptionnelle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nous visons à être le catalyseur de la réussite de nos clients, en les aidant à concrétiser leurs visions grâce à notre expertise technique et notre approche créative.
          </p>
        </div>
      </div>

      <div className="text-center bg-blue-50 rounded-xl p-10 shadow-inner">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nos Valeurs Fondamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600 text-sm">Nous embrassons les nouvelles technologies et les approches créatives pour offrir des solutions avant-gardistes.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Qualité</h3>
            <p className="text-gray-600 text-sm">Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos projets et services.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Intégrité</h3>
            <p className="text-gray-600 text-sm">Nous agissons avec honnêteté, transparence et éthique dans toutes nos interactions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ServicesPage Component
function ServicesPage() {
  const services = [
    {
      title: "Génie Civil & BTP",
      description: "Conception, construction et réhabilitation d'infrastructures (bâtiments, routes, ponts, etc.). Nous gérons l'ensemble du cycle de vie de vos projets.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-hat"><path d="M2 18v-1c0-.7.3-1.4.8-2s1.2-.9 2-.8h14.4c.8-.1 1.6.2 2.1.8s.8 1.3.8 2v1"/><path d="M10 10V5c0-1.1.9-2 2-2s2 .9 2 2v5"/><path d="M4 18h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Génie+Civil"
    },
    {
      title: "Développement Web & Mobile",
      description: "Création de sites web professionnels, applications mobiles (iOS/Android) et solutions logicielles sur mesure pour répondre à vos besoins spécifiques.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Développement+Web"
    },
    {
      title: "Design Graphique & Branding",
      description: "Conception d'identités visuelles percutantes, logos mémorables, chartes graphiques complètes et tous vos supports de communication visuelle.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="12" cy="12" r="10"/><path d="M17.5 6.5l-9 9"/><path d="M13.5 6.5l-7 7"/><path d="M10 10l-4 4"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Design+Graphique"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies de marketing digital complètes : SEO, SEM, gestion des réseaux sociaux, marketing de contenu et campagnes publicitaires ciblées.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-2v8l-18 2v-8z"/><path d="M7 11v8"/><path d="M22 9v8"/><path d="M11 11v8"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Marketing+Digital"
    },
    {
      title: "Conseil & Expertise",
      description: "Accompagnement stratégique et expertise technique pour optimiser vos projets et prendre les meilleures décisions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 14v8"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Conseil"
    },
    {
      title: "Maintenance & Support",
      description: "Services de maintenance préventive et corrective, ainsi qu'un support technique réactif pour assurer la pérennité de vos installations et plateformes.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench"><path d="M14.7 12.7L12 15.4 9.3 12.7 12 10l2.7 2.7z"/><path d="M2 18v-1c0-.7.3-1.4.8-2s1.2-.9 2-.8h14.4c.8-.1 1.6.2 2.1.8s.8 1.3.8 2v1"/><path d="M10 10V5c0-1.1.9-2 2-2s2 .9 2 2v5"/><path d="M4 18h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"/></svg>,
      image: "https://placehold.co/600x400/a7d9f7/007bff?text=Maintenance"
    }
  ];

  const handleWhatsAppQuote = (serviceTitle) => {
    const message = encodeURIComponent(`Bonjour, je suis intéressé par le service : ${serviceTitle}. J'aimerais obtenir un devis.`);
    window.open(`https://wa.me/237658120586?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Nos Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-blue-600 mb-3">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
              <button
                onClick={() => handleWhatsAppQuote(service.title)}
                className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.145 1.24 8.413 3.509 2.268 2.269 3.506 5.235 3.508 8.413 0 6.557-5.336 11.892-11.893 11.892-.073 0-.146 0-.219-.001zm10.602-2.327c-.307 0-1.047-.135-1.747-.463l-.065-.031-1.144.304 3.356-1.104-.04-.023c-1.21-.745-1.92-1.92-1.92-3.143 0-2.613 2.13-4.743 4.746-4.743 1.214 0 2.302.465 3.143 1.292.842.827 1.293 1.914 1.293 3.125 0 2.613-2.13 4.743-4.746 4.743zm-1.8-7.974c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384z"/>
                </svg>
                Demander un devis
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 bg-blue-50 rounded-xl p-10 shadow-inner text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Pourquoi Choisir Naoussi Industries ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise Polyvalente</h3>
            <p className="text-gray-600 text-sm">Une équipe expérimentée dans le génie civil et le digital.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Approche Personnalisée</h3>
            <p className="text-gray-600 text-sm">Des solutions sur mesure adaptées à vos besoins uniques.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Qualité et Durabilité</h3>
            <p className="text-gray-600 text-sm">Engagement envers l'excellence et des résultats durables.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Support Dévoué</h3>
            <p className="text-gray-600 text-sm">Un accompagnement continu et un support technique réactif.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ProjectsPage Component
function ProjectsPage() {
  const projects = [
    {
      title: "Construction du Complexe Résidentiel 'Harmonie'",
      description: "Un projet résidentiel moderne intégrant des appartements de luxe et des espaces verts, conçu pour le confort et la durabilité.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Projet+Résidentiel+Harmonie",
    },
    {
      title: "Développement de l'Application Mobile 'Connect Santé'",
      description: "Une application mobile innovante facilitant la prise de rendez-vous médicaux et la gestion des dossiers de santé pour les patients.",
      category: "Développement Mobile",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=App+Connect+Santé",
    },
    {
      title: "Refonte du Site Web 'Artisanat Local'",
      description: "Modernisation complète et optimisation SEO d'une plateforme e-commerce pour promouvoir les produits artisanaux locaux.",
      category: "Développement Web",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Site+Artisanat+Local",
    },
    {
      title: "Conception de la Charte Graphique 'Café Gourmand'",
      description: "Création d'une identité visuelle complète incluant logo, typographie et palette de couleurs pour une nouvelle chaîne de cafés.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Charte+Graphique+Café",
    },
    {
      title: "Construction de la Route Nationale 3 - Section Urbaine",
      description: "Amélioration et extension d'une section critique de la route nationale, incluant des infrastructures de drainage et d'éclairage.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Route+Nationale+3",
    },
    {
      title: "Campagne de Marketing Digital pour 'Eco Solutions'",
      description: "Lancement d'une campagne intégrée (SEO, réseaux sociaux, email marketing) pour une entreprise de solutions écologiques.",
      category: "Marketing Digital",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Campagne+Eco+Solutions",
    },
    {
      title: "Aménagement Paysager du Parc Central",
      description: "Conception et réalisation d'un espace vert urbain avec des zones de loisirs, des sentiers pédestres et une flore diversifiée.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Parc+Central",
    },
    {
      title: "Développement d'une Plateforme E-learning",
      description: "Création d'une plateforme d'apprentissage en ligne interactive avec des cours vidéo, des quiz et un suivi de progression.",
      category: "Développement Web",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=E-learning+Platform",
    },
    {
      title: "Création d'une Campagne Publicitaire pour 'Fresh Juice'",
      description: "Développement d'une stratégie publicitaire complète incluant des visuels percutants et des messages ciblés pour une marque de jus de fruits frais.",
      category: "Marketing Digital",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Fresh+Juice+Ad",
    },
  ];

  const [filter, setFilter] = useState('Tous');

  const filteredProjects = projects.filter(project =>
    filter === 'Tous' ? true : project.category === filter
  );

  const categories = ['Tous', ...new Set(projects.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Nos Réalisations</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              filter === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-blue-600 text-sm font-medium mb-4">{project.category}</p>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-600 text-lg mt-8">Aucun projet trouvé pour cette catégorie.</p>
      )}
    </div>
  );
}

// ContactPage Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Envoi en cours...');
    setIsSuccess(false);

    // Simulate API call
    try {
      // In a real application, you would send this data to a backend server.
      // For demonstration, we'll just log it and simulate a delay.
      console.log('Form Data Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      setStatusMessage('Votre message a été envoyé avec succès !');
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Contactez-nous</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h2>
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
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Votre Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg w-full"
            >
              Envoyer le Message
            </button>
            {statusMessage && (
              <p className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nos Coordonnées</h2>
          <div className="space-y-6">
            <div className="flex items-center text-gray-800">
              <MapPin size={24} className="mr-4 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Adresse</h3>
                <p>Douala, Cameroun</p>
              </div>
            </div>
            <div className="flex items-center text-gray-800">
              <Phone size={24} className="mr-4 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Téléphone</h3>
                <p><a href="tel:+237658120586" className="hover:underline">(+237) 658 120 586</a></p>
              </div>
            </div>
            <div className="flex items-center text-gray-800">
              <Mail size={24} className="mr-4 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p><a href="mailto:contact@naoussiindustries.com" className="hover:underline">contact@naoussiindustries.com</a></p>
              </div>
            </div>
            <div className="flex items-center text-gray-800">
              {/* WhatsApp Icon with link */}
              <a href="https://wa.me/237658120586" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-green-600 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-4 text-green-500">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.145 1.24 8.413 3.509 2.268 2.269 3.506 5.235 3.508 8.413 0 6.557-5.336 11.892-11.893 11.892-.073 0-.146 0-.219-.001zm10.602-2.327c-.307 0-1.047-.135-1.747-.463l-.065-.031-1.144.304 3.356-1.104-.04-.023c-1.21-.745-1.92-1.92-1.92-3.143 0-2.613 2.13-4.743 4.746-4.743 1.214 0 2.302.465 3.143 1.292.842.827 1.293 1.914 1.293 3.125 0 2.613-2.13 4.743-4.746 4.743zm-1.8-7.974c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384z"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p>(+237) 658 120 586</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BlogPage Component
function BlogPage({ navigateTo }) {
  const articles = [
    {
      id: 1,
      title: "L'impact de l'IA sur l'industrie du BTP",
      excerpt: "Découvrez comment l'intelligence artificielle révolutionne la construction, de la planification à l'exécution des projets.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=IA+BTP",
      date: "15 Mai 2025",
      author: "Naoussi Industries",
      content: `
        <p class="mb-4">L'intelligence artificielle (IA) est en train de transformer radicalement de nombreux secteurs, et l'industrie du Bâtiment et des Travaux Publics (BTP) ne fait pas exception. L'intégration de l'IA promet d'améliorer l'efficacité, la sécurité et la durabilité des projets de construction.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Optimisation de la planification et de la conception</h3>
        <p class="mb-4">Les algorithmes d'IA peuvent analyser d'énormes quantités de données pour optimiser la conception des bâtiments, identifier les risques potentiels et prédire les coûts avec une précision accrue. Cela permet de réduire les erreurs et les retards, et d'améliorer la prise de décision dès les premières phases du projet.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Amélioration de la sécurité sur les chantiers</h3>
        <p class="mb-4">L'IA peut être utilisée pour surveiller les chantiers en temps réel, détecter les comportements à risque et anticiper les accidents. Des systèmes de vision par ordinateur peuvent identifier les travailleurs sans équipement de protection individuelle (EPI) ou les zones dangereuses, alertant ainsi les responsables pour une intervention rapide.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Gestion de projet et maintenance prédictive</h3>
        <p class="mb-4">Les outils basés sur l'IA peuvent suivre l'avancement des projets, gérer les ressources et optimiser les calendriers. En outre, l'IA permet la maintenance prédictive des équipements et des infrastructures, en analysant les données des capteurs pour anticiper les pannes et planifier les interventions avant qu'elles ne surviennent, prolongeant ainsi la durée de vie des actifs et réduisant les coûts de réparation.</p>
        <p class="mb-4">En conclusion, l'IA n'est plus une technologie futuriste pour le BTP, mais une réalité qui offre des opportunités immenses pour innover et améliorer les pratiques actuelles. Les entreprises qui sauront l'adopter tireront un avantage concurrentiel significatif.</p>
      `
    },
    {
      id: 2,
      title: "Les tendances du développement web en 2025",
      excerpt: "Explorez les technologies et les approches qui façonneront le paysage du développement web cette année.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Web+Tendances",
      date: "10 Mai 2025",
      author: "Naoussi Industries",
      content: `
        <p class="mb-4">L'année 2025 marque une nouvelle ère dans le développement web, avec l'émergence de technologies et de pratiques qui redéfinissent la manière dont nous construisons et interagissons avec le web.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'essor des WebAssembly (Wasm)</h3>
        <p class="mb-4">WebAssembly continue de gagner du terrain, permettant aux développeurs d'exécuter du code à haute performance (écrit en C++, Rust, Go, etc.) directement dans le navigateur. Cela ouvre la porte à des applications web plus complexes et gourmandes en ressources, avec des performances quasi-natives.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'omniprésence de l'IA et du Machine Learning</h3>
        <p class="mb-4">L'intégration de l'IA et du Machine Learning dans les applications web devient la norme. Des chatbots intelligents aux systèmes de recommandation personnalisés, l'IA améliore l'expérience utilisateur et automatise des tâches complexes, rendant les applications plus intuitives et réactives.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Le Serverless et les Edge Functions</h3>
        <p class="mb-4">L'architecture serverless, combinée aux fonctions "Edge" exécutées au plus près de l'utilisateur, réduit la latence et simplifie le déploiement. Cette approche permet aux développeurs de se concentrer sur le code sans se soucier de la gestion des serveurs, offrant une scalabilité et une résilience accrues.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'importance croissante de la cybersécurité</h3>
        <p class="mb-4">Avec l'augmentation des menaces en ligne, la cybersécurité est plus que jamais une priorité. Les développeurs adoptent des pratiques de sécurité "shift-left", intégrant la sécurité dès les premières étapes du développement, et utilisent des outils avancés pour protéger les données et les applications.</p>
        <p class="mb-4">Ces tendances ne sont que quelques exemples de l'évolution rapide du web. Rester informé et s'adapter à ces changements est crucial pour tout développeur souhaitant rester pertinent en 2025 et au-delà.</p>
      `
    },
    {
      id: 3,
      title: "Stratégies de branding pour les PME",
      excerpt: "Construisez une marque forte et mémorable pour votre petite ou moyenne entreprise grâce à ces conseils pratiques.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Branding+PME",
      date: "01 Mai 2025",
      author: "Naoussi Industries",
      content: `
        <p class="mb-4">Pour les petites et moyennes entreprises (PME), un branding efficace est essentiel pour se démarquer dans un marché concurrentiel. Une marque forte ne se limite pas à un logo ; elle englobe l'ensemble de l'expérience client et la perception de votre entreprise.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Définissez votre identité de marque</h3>
        <p class="mb-4">Avant de créer des éléments visuels, il est crucial de définir qui vous êtes en tant qu'entreprise. Quelles sont vos valeurs ? Quelle est votre mission ? Quelle est votre proposition de valeur unique ? Comprendre votre identité vous aidera à créer une marque authentique et cohérente.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Connaissez votre public cible</h3>
        <p class="mb-4">Un branding réussi résonne avec votre audience. Qui sont vos clients idéaux ? Quels sont leurs besoins, leurs désirs et leurs points faibles ? Adaptez votre message et votre esthétique pour qu'ils parlent directement à ce public.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Créez une identité visuelle cohérente</h3>
        <p class="mb-4">Votre logo, vos couleurs, vos typographies et vos images doivent être cohérents sur tous les points de contact : site web, réseaux sociaux, cartes de visite, emballages, etc. Cette cohérence renforce la reconnaissance de votre marque et la rend plus mémorable.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Racontez votre histoire</h3>
        <p class="mb-4">Les gens se connectent aux histoires. Partagez l'histoire de votre entreprise, ce qui vous motive, et comment vous aidez vos clients. Une narration authentique crée un lien émotionnel et fidélise votre audience.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Soyez constant et adaptable</h3>
        <p class="mb-4">Une fois votre stratégie de branding établie, la constance est clé. Cependant, le marché évolue, et votre marque doit être capable de s'adapter. Évaluez régulièrement l'efficacité de votre branding et n'hésitez pas à l'ajuster si nécessaire.</p>
        <p class="mb-4">En investissant dans un branding solide, les PME peuvent non seulement attirer de nouveaux clients, mais aussi bâtir une réputation durable et une base de clients fidèles.</p>
      `
    },
    {
      id: 4,
      title: "L'importance de l'UX/UI dans les applications mobiles",
      excerpt: "Découvrez pourquoi une bonne expérience utilisateur et une interface intuitive sont cruciales pour le succès de votre application.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=UX/UI+Mobile",
      date: "20 Avril 2025",
      author: "Naoussi Industries",
      content: `
        <p class="mb-4">Dans le monde saturé des applications mobiles, l'expérience utilisateur (UX) et l'interface utilisateur (UI) ne sont plus de simples options, mais des piliers fondamentaux du succès. Une application peut offrir des fonctionnalités révolutionnaires, mais si elle est difficile à utiliser ou peu attrayante, les utilisateurs ne resteront pas.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'UX : Au-delà de la simple utilisation</h3>
        <p class="mb-4">L'UX, ou User Experience, englobe l'ensemble des interactions d'un utilisateur avec une application. Il s'agit de s'assurer que l'application est non seulement fonctionnelle, mais aussi agréable, efficace et pertinente pour l'utilisateur. Une bonne UX réduit la frustration, augmente la satisfaction et favorise la rétention.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'UI : La première impression compte</h3>
        <p class="mb-4">L'UI, ou User Interface, est l'aspect visuel et interactif de l'application. C'est ce que l'utilisateur voit et avec quoi il interagit : les boutons, les icônes, les couleurs, les typographies. Une UI bien conçue est esthétiquement plaisante, facile à naviguer et en ligne avec l'identité de la marque. Elle crée la première impression et influence directement la perception de l'utilisateur.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Synergie UX/UI pour le succès</h3>
        <p class="mb-4">L'UX et l'UI sont intrinsèquement liées et doivent travailler en synergie. Une belle interface sans une bonne expérience utilisateur est comme une voiture de sport sans moteur. Inversement, une application très fonctionnelle mais visuellement repoussante aura du mal à attirer et retenir les utilisateurs.</p>
        <p class="mb-4">Investir dans un design UX/UI de qualité, c'est investir dans la satisfaction de vos utilisateurs, la fidélisation de votre clientèle et, in fine, le succès de votre application mobile.</p>
      `
    },
    {
      id: 5,
      title: "La cybersécurité : un enjeu majeur pour les entreprises en 2025",
      excerpt: "Face à l'augmentation des menaces, la cybersécurité est devenue une priorité absolue pour protéger les données et les systèmes.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Cybersecurity",
      date: "05 Avril 2025",
      author: "Naoussi Industries",
      content: `
        <p class="mb-4">En 2025, la cybersécurité n'est plus une simple préoccupation technique, mais un enjeu stratégique et économique majeur pour toutes les entreprises, quelle que soit leur taille. Les cyberattaques sont de plus en plus sophistiquées et fréquentes, menaçant la confidentialité des données, l'intégrité des systèmes et la continuité des activités.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">L'évolution des menaces</h3>
        <p class="mb-4">Les ransomwares, les attaques de phishing, les malwares avancés et les menaces persistantes avancées (APT) sont en constante évolution. Les cybercriminels exploitent les vulnérabilités logicielles, les erreurs humaines et les configurations systèmes faibles pour infiltrer les réseaux et dérober des informations sensibles.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Les conséquences d'une cyberattaque</h3>
        <p class="mb-4">Les conséquences d'une cyberattaque réussie peuvent être dévastatrices : pertes financières importantes, atteinte à la réputation, interruption des opérations, fuite de données confidentielles et sanctions réglementaires. Pour les entreprises, il est crucial de comprendre que la question n'est plus de savoir *si* elles seront attaquées, mais *quand*.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Stratégies de défense robustes</h3>
        <p class="mb-4">Pour faire face à ces menaces, les entreprises doivent adopter une approche proactive de la cybersécurité. Cela inclut la mise en œuvre de solutions de sécurité avancées (pare-feu, antivirus, détection d'intrusion), la formation régulière des employés aux bonnes pratiques, la mise à jour des systèmes et des logiciels, et la mise en place de plans de reprise après sinistre.</p>
        <p class="mb-4">La cybersécurité est un investissement essentiel pour la résilience et la pérennité de toute entreprise à l'ère numérique. Protéger vos actifs numériques, c'est protéger votre avenir.</p>
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Notre Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-3">
                Par <span className="font-medium text-blue-600">{article.author}</span> le {article.date}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
              <button
                onClick={() => navigateTo('article', article)}
                className="text-blue-600 hover:text-blue-800 flex items-center font-semibold"
              >
                Lire l'article <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ArticlePage Component
function ArticlePage({ article, navigateTo }) {
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-red-600">Article non trouvé.</p>
        <button
          onClick={() => navigateTo('blog')}
          className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Retour au Blog
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <button
        onClick={() => navigateTo('blog')}
        className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <ChevronRight size={20} className="transform rotate-180 mr-2" /> Retour au Blog
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
          Par <span className="font-medium text-blue-600">{article.author}</span> le {article.date}
        </p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </div>
  );
}

export default App;
