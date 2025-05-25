<script src="https://cdn.tailwindcss.com"></script>
import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Quote } from 'lucide-react';

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
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.145 1.24 8.413 3.509 2.268 2.269 3.506 5.235 3.508 8.413 0 6.557-5.336 11.892-11.893 11.892-.073 0-.146 0-.219-.001zm10.602-2.327c-.307 0-1.047-.135-1.747-.463l-.065-.031-1.144.304 3.356-1.104-.04-.023c-1.21-.745-1.92-1.92-1.92-3.143 0-2.613 2.13-4.743 4.746-4.743 1.214 0 2.302.465 3.143 1.292.842.827 1.293 1.914 1.293 3.125 0 2.613-2.13 4.743-4.746 4.743zm-1.8-7.974c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384zm3.333 0c-.09-.09-.237-.135-.384-.135-.147 0-.294.045-.384.135-.09.09-.135.237-.135.384 0 .147.045.294.135.384.09.09.237.135.384.135.147 0 .294-.045.384-.135.09-.09.135-.237.135-.384 0-.147-.045-.294-.135-.384z"/>
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
      quote: "Collaborer avec Naoussi Industries, c'est découvrir la synergie parfaite entre l'architecture et l'innovation. Sur de nombreux projets, leur vitesse et leur précision ont été sans égales. Mais au-delà de la performance, ce partenariat m'a ouvert les portes des nouvelles technologies, un enrichissement inestimable pour ma pratique. Naoussi Industries ne construit pas seulement des structures, ils bâtissent l'avenir de nos compétences !",
      author: "Prof. Kégne Jean Bosco",
      role: "PLET et Architecte"
    },
    {
      quote: "Quand j'ai lancé VeriTrust, ma vision était floue, un simple rêve. Dès mon premier contact avec Naoussi Industries, tout est devenu clair. Ils n'ont pas seulement éclairé ma vision ; ils l'ont sublimée, l'ont optimisée, lui ont donné vie. Aujourd'hui, ma marque n'est plus un rêve lointain, elle est une réalité vibrante qui respire et prospère grâce à leur génie. Si vous avez une idée, laissez Naoussi Industries la transformer en succès !",
      author: "Kévin",
      role: "Créateur de VeriTrust"
    },
    {
      quote: "Depuis plus de vingt ans, COMING est un acteur majeur dans le froid et la climatisation. Mais l'évolution est constante, et notre image commençait à souffrir du poids des ans. C'était un défi, une question de crédibilité. Naoussi Industries a relevé le gant avec brio ! Ils ont insufflé une nouvelle vie à notre marque, la remettant d'aplomb avec une modernité éclatante. Grâce à eux, nous sommes comme neufs, prêts à conquérir de nouveaux horizons. Un renouveau spectaculaire !",
      author: "M. Engelbert Ngantsop",
      role: "CEO de COMING – Complexe des Ingénieurs"
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
            Fondée en 2023 par **Tedjouong Naoussi Ange Lionel**, Naoussi Industries est une entreprise pionnière qui fusionne l'excellence en **génie civil** avec des **solutions digitales** de pointe. Notre mission est de transformer le paysage urbain et numérique du Cameroun.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Avec notre siège social à **Douala Ndogbong Citadelle** et une antenne à **Bafoussam Kamkop**, nous sommes stratégiquement positionnés pour servir nos clients à travers le pays. Nous offrons des services en partenariat direct et en sous-traitance, garantissant flexibilité et adaptabilité à chaque projet.
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
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Notre Fondateur : Ing. Naoussi Lionel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            À la tête de Naoussi Industries se trouve **Ing. Naoussi Lionel**, un ingénieur en génie civil diplômé, doté d'une vaste expérience en **architecture fonctionnelle** et en **gestion de projet**. Avec plus de 5 ans d'expérience sur le terrain, il maîtrise parfaitement les rouages et les défis du génie civil.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Passionné par les technologies de l'information depuis son plus jeune âge, Ing. Naoussi Lionel a su transformer cette passion en une ressource génératrice de valeur. Son parcours unique, alliant une expertise solide en construction et une vision aiguisée du digital, est le moteur de l'approche innovante de Naoussi Industries. Il est le garant de notre engagement à offrir des solutions qui non seulement construisent l'avenir, mais le digitalisent avec succès.
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
    
    // New projects added below
    {
      title: "Branding GFE Institute - German for Everybody",
      description: "Branding complet pour GFE Institute, une startup proposant des cours d'allemand et des services de visa pour la Russie, la Belgique et l'Allemagne. Inclut logo, flyers, site web et copywriting.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=GFE+Institute",
    },
    {
      title: "Mise à niveau du branding COMING - Complexe des Ingénieurs",
      description: "Refonte de l'image de marque pour COMING, une entreprise spécialisée dans le froid et la climatisation depuis plus de 20 ans. Nouveau logo, pack de flyers, vidéo de présentation et copywriting.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=COMING+Upgrade",
    },
    {
      title: "Branding Yamo'o Spice",
      description: "Création de l'identité de marque pour Yamo'o Spice : logo, design produit, stratégie marketing, pack de flyers et vidéo de présentation.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Yamo'o+Spice",
    },
    {
      title: "Branding VeriTrust",
      description: "Branding pour VeriTrust, une startup de vérification de produits et vendeurs pour les achats en ligne au Cameroun. Inclut idéation, logo, vidéo de présentation, pack de flyers et copywriting.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=VeriTrust",
    },
    {
      title: "Branding Youm's BTP",
      description: "Branding pour Youm's BTP, une entreprise de génie civil. Inclut logo, vidéo de présentation et site web.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Youm's+BTP",
    },
    {
      title: "Application de gestion de stock et flyers pour Intersports Cargo",
      description: "Développement d'une application de gestion de stock et création de flyers pour Intersports Cargo, une entreprise de logistique Chine-Cameroun.",
      category: "Développement Web",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Intersports+Cargo",
    },
    {
      title: "Création de l'application web Eduflux",
      description: "Développement d'Eduflux, une application web à trois niveaux : Educraft (création de plans de cours avec IA), Examfoge (génération de sujets d'examen avec IA) et Quizlab (jeu interactif de 10-20 questions).",
      category: "Développement Web",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Eduflux+App",
    },
    {
      title: "Création du marché en ligne MyAwesomeShop",
      description: "Développement de MyAwesomeShop, une plateforme de marché en ligne où les utilisateurs peuvent créer des comptes, publier des produits et recevoir des commandes via un lien WhatsApp direct.",
      category: "Développement Web",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=MyAwesomeShop",
    },
    {
      title: "Branding WabAlu",
      description: "Branding pour WabAlu, une startup de construction en aluminium. Inclut logo, flyers et cartes de visite.",
      category: "Design Graphique",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=WabAlu",
    },
    {
      title: "Conception et supervision d'un immeuble résidentiel R+3 à Cité Shirak, Douala",
      description: "Conception architecturale et supervision de la construction d'un immeuble résidentiel de quatre étages (R+3) situé à Cité Shirak, Douala.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Immeuble+Shirak",
    },
    {
      title: "Conception d'un immeuble résidentiel locatif R+3 à Bafoussam, Tankou",
      description: "Conception architecturale d'un immeuble résidentiel de quatre étages (R+3) destiné à la location, situé à Tankou, Bafoussam.",
      category: "Génie Civil",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Immeuble+Bafoussam",
    },
    {
      title: "Architecture Académie : Mise à niveau des compétences",
      description: "Programme de perfectionnement pour un architecte expérimenté, axé sur les nouveaux logiciels de conception et les flux de travail modernes.",
      category: "Conseil & Expertise",
      image: "https://placehold.co/600x400/b3e0ff/0056b3?text=Architecture+Academie",
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
                <p><a href="mailto:naoussilionel8@gmail.com" className="hover:underline">naoussilionel8@gmail.com</a></p>
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
      title: "Pourquoi faire appel à une entreprise locale pour vos projets de construction à Douala ?",
      excerpt: "Découvrez les avantages indéniables de choisir une entreprise de BTP locale à Douala pour garantir le succès et la pertinence de vos projets de construction. L'expertise locale, la connaissance du terrain et l'engagement communautaire sont des atouts majeurs.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Construction+Locale",
      date: "24 Mai 2025",
      author: "Naoussi Industries",
      keywords: "entreprise BTP Douala, construction locale, ingénierie camerounaise",
      cta: { text: "Contactez-nous pour un devis personnalisé.", page: "contact" },
      content: `
        <p class="mb-4">Lorsque vous envisagez un projet de construction à Douala, le choix de votre partenaire est crucial. Opter pour une entreprise de BTP locale ne relève pas seulement du patriotisme économique, mais d'une stratégie intelligente qui offre une multitude d'avantages concrets et durables.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Connaissance Approfondie du Contexte Local</h3>
        <p class="mb-4">Une entreprise locale, ancrée à Douala, possède une connaissance intime des spécificités géotechniques, climatiques et réglementaires de la région. Cela inclut la maîtrise des types de sols, des conditions météorologiques (saison des pluies, humidité), et des normes de construction camerounaises. Cette expertise permet d'anticiper les défis potentiels, de proposer des solutions adaptées et d'éviter des retards coûteux liés à des imprévus.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Réseau Local et Réactivité Accrue</h3>
        <p class="mb-4">Les entreprises locales ont établi des relations solides avec les fournisseurs de matériaux, les sous-traitants et les autorités administratives. Ce réseau facilite l'approvisionnement en matériaux de qualité à des prix compétitifs et accélère l'obtention des permis et autorisations nécessaires. En cas de problème ou de besoin urgent, la réactivité est incomparable, minimisant ainsi les interruptions de chantier.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Soutien à l'Économie Locale et Création d'Emplois</h3>
        <p class="mb-4">Choisir une entreprise BTP Douala, c'est investir directement dans l'économie de votre communauté. Cela soutient les emplois locaux, favorise le développement des compétences et contribue à la croissance des petites et moyennes entreprises de la région. C'est un cercle vertueux qui renforce le tissu économique local et crée de la valeur pour tous.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Communication et Suivi Personnalisé</h3>
        <p class="mb-4">La proximité géographique facilite une communication fluide et régulière entre le client et l'équipe de projet. Les réunions en personne sont plus faciles à organiser, les visites de chantier plus fréquentes, et les ajustements peuvent être discutés et mis en œuvre rapidement. Cette interaction directe garantit que votre vision est comprise et respectée à chaque étape du projet.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Engagement envers la Qualité et la Durabilité</h3>
        <p class="mb-4">Une entreprise locale a une réputation à maintenir au sein de sa communauté. Cet enjeu local se traduit souvent par un engagement plus fort envers la qualité du travail et la durabilité des constructions. Les projets sont réalisés avec un soin particulier, sachant qu'ils feront partie du paysage local pour les décennies à venir.</p>
        <p class="mb-4">En résumé, faire appel à une entreprise locale pour vos projets de construction à Douala, c'est choisir l'efficacité, la fiabilité et un partenariat solide. C'est s'assurer que votre investissement contribue non seulement à la réalisation de votre projet, mais aussi au développement harmonieux de votre environnement.</p>
      `
    },
    {
      id: 2,
      title: "Les 5 erreurs à éviter lors de la création de votre site web professionnel",
      excerpt: "La création d'un site web professionnel est un investissement majeur. Évitez ces erreurs courantes pour garantir un site performant et une présence en ligne réussie au Cameroun.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Website+Errors",
      date: "20 Mai 2025",
      author: "Naoussi Industries",
      keywords: "création site web Cameroun, erreurs à éviter, site performant",
      cta: { text: "Notre équipe peut concevoir un site moderne, sans ces erreurs.", page: "services" },
      content: `
        <p class="mb-4">Un site web est aujourd'hui la vitrine numérique de votre entreprise. Pour qu'il soit un atout et non un fardeau, il est essentiel d'éviter certaines erreurs fondamentales lors de sa conception. Voici les 5 pièges les plus courants à contourner pour un site web professionnel performant, particulièrement dans le contexte camerounais.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">1. Ignorer le Responsive Design</h3>
        <p class="mb-4">Avec l'explosion de l'utilisation des smartphones au Cameroun, un site non optimisé pour les mobiles est une erreur fatale. Les utilisateurs accèdent majoritairement à internet via leur téléphone. Si votre site ne s'affiche pas correctement sur tous les écrans, vous perdrez une part considérable de votre audience et votre référencement en souffrira.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">2. Négliger le SEO (Référencement Naturel)</h3>
        <p class="mb-4">Un beau site sans visibilité est un site inutile. Beaucoup d'entreprises investissent dans le design sans penser au SEO. Sans une bonne stratégie de mots-clés, d'optimisation technique et de contenu, votre site ne sera pas trouvé par les moteurs de recherche, et donc par vos futurs clients. Le référencement est la clé pour attirer du trafic qualifié.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">3. Contenu de Mauvaise Qualité ou Inexistant</h3>
        <p class="mb-4">Le contenu est roi. Des textes mal écrits, des images de basse résolution ou un manque d'informations pertinentes découragent les visiteurs. Votre contenu doit être clair, concis, informatif et engageant. Il doit répondre aux questions de vos prospects et les inciter à passer à l'action.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">4. Manque d'Appels à l'Action (CTA) Clairs</h3>
        <p class="mb-4">Votre site doit guider le visiteur vers un objectif : acheter un produit, demander un devis, s'inscrire à une newsletter, etc. Si vos appels à l'action ne sont pas visibles, clairs et incitatifs, vos visiteurs ne sauront pas quoi faire ensuite, et vous manquerez des opportunités de conversion.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">5. Ne Pas Mesurer les Performances</h3>
        <p class="mb-4">Lancer un site web n'est que la première étape. Sans outils d'analyse (comme Google Analytics), vous ne saurez jamais comment les utilisateurs interagissent avec votre site, d'où ils viennent, ou ce qui fonctionne (ou non). La mesure des performances est essentielle pour identifier les axes d'amélioration et optimiser continuellement votre présence en ligne.</p>
        <p class="mb-4">Éviter ces erreurs fondamentales vous mettra sur la voie d'un site web professionnel qui non seulement attire les visiteurs, mais les convertit en clients fidèles. Pour une création site web Cameroun sans faille, faites appel à des experts.</p>
      `
    },
    {
      id: 3,
      title: "Comment le design graphique influence la perception de votre marque",
      excerpt: "Le design graphique est bien plus qu'une simple esthétique ; il est le langage silencieux de votre marque. Découvrez son pouvoir sur la perception et la reconnaissance de votre entreprise.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Graphic+Design",
      date: "18 Mai 2025",
      author: "Naoussi Industries",
      keywords: "branding Cameroun, logo professionnel, identité visuelle",
      cta: { text: "Découvrez notre service de design graphique sur mesure.", page: "services" },
      content: `
        <p class="mb-4">Dans un marché de plus en plus saturé, la première impression est souvent la seule qui compte. Le design graphique est cet élément clé qui façonne la perception de votre marque avant même que le premier mot ne soit lu ou le premier service expérimenté. C'est un investissement stratégique, surtout pour le branding Cameroun, où la différenciation visuelle est cruciale.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">La Première Impression est Visuelle</h3>
        <p class="mb-4">Le cerveau humain traite les images 60 000 fois plus vite que le texte. Votre logo, la palette de couleurs de votre site web, le style de vos publications sur les réseaux sociaux – tous ces éléments visuels créent une impression instantanée. Un design professionnel et cohérent inspire confiance, tandis qu'un design amateur peut nuire à votre crédibilité, peu importe la qualité de vos produits ou services.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Transmettre les Valeurs de Votre Marque</h3>
        <p class="mb-4">Chaque couleur, chaque typographie, chaque forme utilisée dans votre identité visuelle communique un message. Un logo professionnel ne se contente pas d'être joli ; il incarne les valeurs, la mission et la personnalité de votre entreprise. Par exemple, des couleurs vives peuvent suggérer l'innovation et l'énergie, tandis que des tons plus sobres peuvent évoquer la fiabilité et la tradition.</p>
        <h3 class="2xl font-semibold text-gray-800 mb-3">Différenciation et Mémorisation</h3>
        <p class="mb-4">Un design graphique unique et bien pensé vous permet de vous démarquer de la concurrence. Dans un environnement où les consommateurs sont bombardés d'informations, une identité visuelle forte et mémorable aide votre marque à rester gravée dans l'esprit de vos clients. C'est ce qui rend Coca-Cola reconnaissable instantanément même sans son nom.</p>
        <h3 class="2xl font-semibold text-gray-800 mb-3">Cohérence à Travers Tous les Canaux</h3>
        <p class="mb-4">La cohérence visuelle sur tous vos supports (site web, réseaux sociaux, cartes de visite, emballages, publicités) renforce la reconnaissance de votre marque. Cette uniformité crée une expérience client harmonieuse et professionnelle, consolidant ainsi la confiance et la fidélité.</p>
        <h3 class="2xl font-semibold text-gray-800 mb-3">Impact sur la Décision d'Achat</h3>
        <p class="mb-4">Un design attrayant et bien structuré rend vos produits ou services plus désirables. Que ce soit l'emballage d'un produit, la mise en page d'une brochure ou l'interface d'une application, le design influence directement la perception de la qualité et, par conséquent, la décision d'achat du consommateur.</p>
        <p class="mb-4">Investir dans un design graphique de qualité, c'est investir dans l'avenir de votre marque. C'est s'assurer que votre entreprise communique efficacement, se démarque et laisse une impression durable et positive. Pour un logo professionnel et une identité visuelle percutante, faites confiance à des experts du branding.</p>
      `
    },
    {
      id: 4,
      title: "Développement mobile au Cameroun : opportunité ou nécessité ?",
      excerpt: "Le marché mobile est en pleine expansion au Cameroun. Découvrez pourquoi le développement d'applications mobiles n'est plus un luxe mais une nécessité pour les entreprises qui veulent innover et atteindre de nouveaux clients.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Mobile+Dev+Cameroon",
      date: "15 Mai 2025",
      author: "Naoussi Industries",
      keywords: "application mobile Cameroun, développement Android/iOS",
      cta: { text: "Nous transformons vos idées en applications puissantes.", page: "services" },
      content: `
        <p class="mb-4">Le Cameroun, à l'instar de nombreux pays africains, connaît une croissance exponentielle de l'utilisation des smartphones. Ce phénomène n'est pas qu'une statistique ; il représente une transformation profonde des habitudes de consommation et d'accès à l'information. Dans ce contexte, le développement d'applications mobiles n'est plus une simple opportunité, mais une nécessité stratégique pour toute entreprise désireuse de prospérer.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Atteindre une Audience Ciblée et Engagée</h3>
        <p class="mb-4">Les applications mobiles offrent un canal de communication direct et personnalisé avec vos clients. Elles permettent d'envoyer des notifications push, de proposer des offres exclusives et de recueillir des données précieuses sur les comportements des utilisateurs. Au Cameroun, où l'accès à internet se fait majoritairement via mobile, une application vous positionne au cœur de l'écosystème numérique de vos clients.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Améliorer l'Expérience Client</h3>
        <p class="mb-4">Une application bien conçue offre une expérience utilisateur fluide et intuitive, souvent supérieure à celle d'un site web mobile. La rapidité d'accès, la personnalisation et la possibilité d'utiliser certaines fonctionnalités hors ligne contribuent à fidéliser les clients et à renforcer leur engagement envers votre marque. Que ce soit pour des services bancaires, du e-commerce ou des informations pratiques, l'application mobile simplifie la vie de l'utilisateur.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Innover et Se Différencier de la Concurrence</h3>
        <p class="mb-4">Alors que de nombreuses entreprises camerounaises se concentrent encore sur les canaux traditionnels, investir dans le développement Android/iOS vous donne un avantage concurrentiel significatif. Une application mobile peut intégrer des fonctionnalités innovantes (géolocalisation, réalité augmentée, paiement mobile) qui vous distinguent et créent de nouvelles sources de revenus.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Collecte de Données et Prise de Décision Éclairée</h3>
        <p class="mb-4">Les applications mobiles sont de véritables mines d'or en termes de données. Elles vous permettent de comprendre les préférences de vos utilisateurs, leurs habitudes d'achat, et les fonctionnalités les plus utilisées. Cette intelligence client est inestimable pour affiner vos stratégies marketing, améliorer vos produits et services, et prendre des décisions commerciales éclairées.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Accroître la Visibilité et la Notoriété</h3>
        <p class="mb-4">Être présent sur les stores d'applications (Google Play Store, Apple App Store) augmente votre visibilité et votre crédibilité. C'est une marque de professionnalisme qui renforce la confiance des consommateurs. Le bouche-à-oreille et les partages sociaux via l'application peuvent également amplifier votre portée de manière organique.</p>
        <p class="mb-4">En conclusion, le développement mobile au Cameroun n'est plus une question de "si", mais de "quand". Pour les entreprises qui veulent rester pertinentes, innover et capter une part croissante du marché numérique, l'application mobile est une voie incontournable. Transformez dès aujourd'hui vos idées en applications puissantes avec l'expertise de Naoussi Industries.</p>
      `
    },
    {
      id: 5,
      title: "Génie civil et durabilité : notre approche écologique pour vos chantiers",
      excerpt: "La construction durable n'est plus une option, mais une nécessité. Découvrez comment Naoussi Industries intègre les principes écologiques dans chaque projet de génie civil au Cameroun, pour un avenir plus vert et plus résilient.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Sustainable+Civil+Eng",
      date: "10 Mai 2025",
      author: "Naoussi Industries",
      keywords: "génie civil durable, BTP écologique Cameroun, construction responsable",
      cta: { text: "Faites confiance à notre expertise pour un avenir durable.", page: "services" },
      content: `
        <p class="mb-4">Le secteur du Bâtiment et des Travaux Publics (BTP) est un acteur majeur de l'économie, mais il est également confronté à des défis environnementaux significatifs. Chez Naoussi Industries, nous sommes convaincus que le génie civil durable n'est pas seulement une tendance, mais la seule voie viable pour l'avenir. Notre approche écologique vise à minimiser l'impact environnemental de nos chantiers tout en maximisant la performance et la durabilité de nos constructions au Cameroun.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Conception Bioclimatique et Efficacité Énergétique</h3>
        <p class="mb-4">Dès la phase de conception, nous privilégions les principes de la conception bioclimatique. Cela signifie optimiser l'orientation des bâtiments pour profiter au maximum de la lumière naturelle et de la ventilation transversale, réduisant ainsi le besoin en éclairage artificiel et en climatisation. Nous intégrons des solutions d'isolation performantes et des systèmes énergétiques renouvelables (panneaux solaires, chauffe-eau solaires) pour minimiser la consommation d'énergie des futurs occupants.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Choix de Matériaux Écologiques et Locaux</h3>
        <p class="mb-4">La sélection des matériaux est une étape cruciale. Nous favorisons l'utilisation de matériaux locaux et à faible empreinte carbone, tels que la terre stabilisée, le bois certifié, ou des agrégats recyclés. Cela réduit non seulement les coûts de transport, mais aussi l'énergie grise (énergie nécessaire à la production et au transport des matériaux) des constructions. Nous privilégions également les matériaux non toxiques et sains pour les occupants.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Gestion Responsable des Déchets de Chantier</h3>
        <p class="mb-4">Sur nos chantiers, une gestion rigoureuse des déchets est mise en place. Nous mettons l'accent sur la réduction à la source, le tri sélectif et le recyclage des matériaux (béton, bois, métaux). L'objectif est de minimiser la quantité de déchets envoyée en décharge et de valoriser au maximum les ressources. Cela contribue à un BTP écologique Cameroun.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Optimisation de l'Eau et de l'Énergie sur Site</h3>
        <p class="mb-4">Nous mettons en œuvre des pratiques pour réduire la consommation d'eau sur les chantiers, comme la récupération des eaux de pluie pour certains usages. L'utilisation d'équipements économes en énergie et la planification logistique pour minimiser les déplacements des engins sont également des priorités pour réduire notre empreinte opérationnelle.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Intégration Paysagère et Biodiversité</h3>
        <p class="mb-4">Au-delà de la construction, nous portons une attention particulière à l'intégration des projets dans leur environnement naturel. Cela inclut la préservation des espaces verts existants, la plantation d'espèces locales et la création de zones favorisant la biodiversité. Une construction responsable s'inscrit harmonieusement dans son écosystème.</p>
        <p class="mb-4">Chez Naoussi Industries, nous sommes déterminés à construire non seulement des infrastructures solides, mais aussi un avenir plus respectueux de l'environnement. Notre expertise en génie civil durable est à votre disposition pour vos projets de construction responsable. Faites confiance à notre expertise pour un avenir durable.</p>
      `
    },
    {
      id: 6,
      title: "Pourquoi le marketing digital est essentiel pour les PME en 2025",
      excerpt: "En 2025, la visibilité en ligne n'est plus un luxe mais une nécessité vitale pour les PME. Découvrez comment le marketing digital peut transformer la croissance de votre entreprise au Cameroun.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Digital+Marketing+SME",
      date: "05 Mai 2025",
      author: "Naoussi Industries",
      keywords: "marketing digital PME, visibilité en ligne Cameroun",
      cta: { text: "Boostez votre entreprise avec notre accompagnement marketing.", page: "services" },
      content: `
        <p class="mb-4">Pour les Petites et Moyennes Entreprises (PME) au Cameroun, le paysage commercial a radicalement changé. Ce n'est plus suffisant d'avoir un bon produit ou service ; il faut être visible là où se trouvent vos clients : en ligne. En 2025, le marketing digital n'est pas une option, c'est le moteur indispensable de votre croissance.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Atteindre une Audience Plus Vaste et Ciblée</h3>
        <p class="mb-4">Contrairement aux méthodes traditionnelles, le marketing digital PME vous permet de toucher des millions de personnes, non seulement au Cameroun mais aussi à l'international. Plus important encore, il offre des outils de ciblage précis pour atteindre exactement les personnes intéressées par vos offres, maximisant ainsi le retour sur investissement de vos campagnes.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Coût-Efficacité et Mesurabilité</h3>
        <p class="mb-4">Les stratégies de marketing digital sont souvent plus abordables pour les PME que les publicités traditionnelles (TV, radio, affichage). De plus, chaque action est mesurable : nombre de clics, de vues, de conversions. Cette transparence permet d'ajuster rapidement vos campagnes pour optimiser leurs performances et votre budget.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Renforcer votre Crédibilité et Notoriété</h3>
        <p class="mb-4">Une forte présence en ligne, via un site web professionnel, des réseaux sociaux actifs et des avis clients positifs, renforce la crédibilité de votre entreprise. Les consommateurs d'aujourd'hui recherchent des informations en ligne avant de prendre une décision d'achat. Être visible et avoir une image soignée est essentiel pour gagner leur confiance.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Interagir Directement avec Vos Clients</h3>
        <p class="mb-4">Le marketing digital offre des opportunités uniques d'interaction directe avec votre clientèle. Les réseaux sociaux, les commentaires de blog et les emails permettent de créer une communauté, de répondre aux questions, de recueillir des feedbacks et de bâtir des relations solides. Cette proximité est un atout précieux pour comprendre les besoins de vos clients et adapter vos offres.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Rester Compétitif sur le Marché Camerounais</h3>
        <p class="mb-4">Vos concurrents sont déjà en ligne, ou le seront bientôt. Pour ne pas être laissé pour compte, il est impératif d'adopter des stratégies de marketing digital. Cela vous permet non seulement de maintenir votre position sur le marché, mais aussi de conquérir de nouvelles parts de marché en exploitant les opportunités offertes par le numérique.</p>
        <p class="mb-4">En conclusion, le marketing digital est le levier de croissance le plus puissant pour les PME en 2025. C'est la clé de votre visibilité en ligne Cameroun, de votre crédibilité et de votre capacité à générer des ventes. Ne laissez pas votre entreprise à la traîne. Boostez votre entreprise avec notre accompagnement marketing.</p>
      `
    },
    {
      id: 7,
      title: "5 raisons de confier votre projet à Naoussi Industries",
      excerpt: "Découvrez pourquoi Naoussi Industries est le partenaire idéal pour vos projets de génie civil et de solutions digitales. Notre expertise et notre engagement font la différence.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Why+Naoussi",
      date: "01 Mai 2025",
      author: "Naoussi Industries",
      keywords: "meilleure entreprise BTP Cameroun, services digitaux",
      cta: { text: "Découvrez pourquoi des dizaines d’entreprises nous font déjà confiance.", page: "contact" },
      content: `
        <p class="mb-4">Dans le paysage dynamique du génie civil et des solutions digitales au Cameroun, choisir le bon partenaire est essentiel pour la réussite de vos projets. Naoussi Industries se positionne comme un acteur de confiance, alliant expertise technique, innovation et engagement client. Voici 5 raisons fondamentales de nous confier vos ambitions.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">1. Expertise Polyvalente et Intégrée</h3>
        <p class="mb-4">Nous ne sommes pas seulement une entreprise de BTP ou une agence digitale ; nous sommes les deux. Cette double expertise nous permet d'offrir des solutions complètes et intégrées, du design architectural à la construction physique, en passant par le développement web et le branding. Cette synergie garantit une cohérence et une efficacité maximales pour vos projets les plus complexes.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">2. Engagement envers l'Innovation et la Qualité</h3>
        <p class="mb-4">Chez Naoussi Industries, l'innovation est au cœur de notre démarche. Nous adoptons les dernières technologies et méthodologies, que ce soit en génie civil (construction durable, matériaux innovants) ou en digital (IA, développement mobile avancé). Cet engagement, combiné à une recherche constante de la qualité, assure des résultats à la fois modernes, robustes et performants.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">3. Connaissance Approfondie du Marché Local</h3>
        <p class="mb-4">Notre ancrage au Cameroun nous confère une compréhension unique des spécificités du marché local. Nous maîtrisons les réglementations, les dynamiques culturelles et les attentes des consommateurs camerounais. Cette connaissance est un atout majeur pour concevoir des projets pertinents et des stratégies digitales efficaces qui résonnent avec votre public cible.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">4. Approche Client Centrée et Transparence</h3>
        <p class="mb-4">Votre satisfaction est notre priorité absolue. Nous adoptons une approche collaborative, en vous impliquant à chaque étape du projet. La transparence est notre maître-mot : nous communiquons clairement sur les délais, les coûts et les avancées, garantissant une relation de confiance et sans surprise. Nous sommes à l'écoute de vos besoins et adaptons nos solutions en conséquence.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">5. Impact Durable et Responsabilité Sociale</h3>
        <p class="mb-4">Nous sommes conscients de notre rôle dans le développement du Cameroun. Nous nous engageons à des pratiques de construction responsable et à la promotion de solutions digitales qui contribuent positivement à la société. Choisir Naoussi Industries, c'est aussi soutenir une entreprise qui se soucie de son impact environnemental et social.</p>
        <p class="mb-4">En somme, confier votre projet à Naoussi Industries, c'est opter pour un partenaire fiable, innovant et profondément engagé pour votre succès. Nous sommes la meilleure entreprise BTP Cameroun et votre allié pour des services digitaux de pointe. Découvrez pourquoi des dizaines d’entreprises nous font déjà confiance.</p>
      `
    },
    {
      id: 8,
      title: "Comment générer des clients grâce à un site web bien conçu ?",
      excerpt: "Un site web n'est qu'une simple vitrine, c'est un puissant outil de conversion. Découvrez les stratégies clés pour transformer vos visiteurs en clients fidèles grâce à un design web optimisé.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Website+Conversion",
      date: "28 Avril 2025",
      author: "Naoussi Industries",
      keywords: "site web commercial, conversion en ligne, UX/UI design",
      cta: { text: "Notre agence peut concevoir votre prochain outil de conversion.", page: "services" },
      content: `
        <p class="mb-4">Votre site web est bien plus qu'une simple présence en ligne ; c'est un commercial disponible 24h/24, 7j/7. Pour qu'il génère activement des clients, il doit être conçu stratégiquement, en mettant l'accent sur l'expérience utilisateur (UX) et l'interface utilisateur (UI) pour maximiser la conversion en ligne. Voici comment transformer votre site en un véritable outil de croissance.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">1. Une Navigation Intuitive et Fluide</h3>
        <p class="mb-4">Les visiteurs doivent pouvoir trouver ce qu'ils cherchent rapidement et sans effort. Une structure de navigation claire, des menus bien organisés et une recherche efficace sont essentiels. Si l'utilisateur se perd ou est frustré, il quittera votre site. L'UX design est fondamental pour guider le parcours client.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">2. Contenu Pertinent et de Qualité</h3>
        <p class="mb-4">Le contenu de votre site doit répondre aux questions de vos prospects, résoudre leurs problèmes et mettre en valeur vos offres. Utilisez des titres accrocheurs, des paragraphes concis et des images ou vidéos de haute qualité. Un contenu optimisé pour le SEO attirera également du trafic qualifié.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">3. Des Appels à l'Action (CTA) Clairs et Visibles</h3>
        <p class="mb-4">Chaque page de votre site doit avoir un objectif clair et un appel à l'action (CTA) qui incite le visiteur à passer à l'étape suivante. Qu'il s'agisse de "Demander un devis", "Acheter maintenant", "S'inscrire à la newsletter", ou "Télécharger un guide", les CTA doivent être bien visibles, persuasifs et faciles à cliquer.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">4. Optimisation pour la Vitesse et le Mobile (Responsive Design)</h3>
        <p class="mb-4">Un site lent ou non adapté aux mobiles est un repoussoir. Les utilisateurs sont impatients et la majorité d'entre eux naviguent sur smartphone. Assurez-vous que votre site se charge rapidement et s'affiche parfaitement sur tous les appareils pour offrir une expérience utilisateur optimale et éviter les abandons.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">5. Preuve Sociale et Témoignages Clients</h3>
        <p class="mb-4">La confiance est un facteur clé de conversion. Intégrez des témoignages de clients satisfaits, des études de cas, des logos de partenaires ou des certifications. La preuve sociale rassure les nouveaux visiteurs et les encourage à faire affaire avec vous.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">6. Formulaires Simplifiés et Faciles à Remplir</h3>
        <p class="mb-4">Si votre objectif est de collecter des leads, vos formulaires de contact ou d'inscription doivent être aussi simples que possible. Demandez uniquement les informations essentielles et assurez-vous que le processus est rapide et sans friction.</p>
        <p class="mb-4">En intégrant ces éléments, votre site web commercial deviendra un puissant moteur de croissance pour votre entreprise, transformant les simples visiteurs en clients fidèles. Pour un site web qui convertit, faites confiance à notre expertise en UX/UI design.</p>
      `
    },
    {
      id: 9,
      title: "Ce que vous devez savoir avant de lancer un chantier au Cameroun",
      excerpt: "Lancer un projet de construction au Cameroun implique de naviguer dans un cadre réglementaire spécifique. Découvrez les étapes clés et les considérations essentielles pour assurer le succès de votre chantier.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Construction+Cameroon",
      date: "25 Avril 2025",
      author: "Naoussi Industries",
      keywords: "réglementation BTP Cameroun, préparation chantier",
      cta: { text: "Nos experts vous accompagnent de l’étude au permis de construire.", page: "services" },
      content: `
        <p class="mb-4">Le secteur du Bâtiment et des Travaux Publics (BTP) au Cameroun est en pleine effervescence, offrant de nombreuses opportunités. Cependant, lancer un chantier nécessite une préparation minutieuse et une connaissance approfondie des spécificités locales. Ignorer ces aspects peut entraîner des retards, des coûts supplémentaires et des problèmes juridiques. Voici les points essentiels à considérer avant de démarrer votre projet.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">1. La Réglementation et les Permis de Construire</h3>
        <p class="mb-4">Avant toute chose, il est impératif de se conformer à la réglementation BTP Cameroun. Cela inclus l'obtention du permis de construire, délivré par les autorités municipales après examen de votre dossier architectural et technique. Les délais peuvent varier, il est donc crucial d'anticiper cette étape. Des études de sol, des plans architecturaux détaillés et des plans d'ingénierie (structure, fluides) sont généralement requis.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">2. L'Étude de Faisabilité et le Budget Prévisionnel</h3>
        <p class="mb-4">Une étude de faisabilité approfondie est la première pierre angulaire de votre projet. Elle doit inclure une analyse technique (géotechnique, topographie), économique (estimation des coûts, rentabilité) et juridique. Un budget prévisionnel réaliste, incluant toutes les dépenses (matériaux, main-d'œuvre, permis, imprévus), est indispensable pour éviter les mauvaises surprises.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">3. Le Choix des Professionnels Qualifiés</h3>
        <p class="mb-4">La qualité de votre chantier dépendra grandement des professionnels que vous engagez. Architectes, ingénieurs, chefs de chantier, et ouvriers qualifiés sont essentiels. Vérifiez leurs références, leurs expériences sur des projets similaires au Cameroun, et assurez-vous qu'ils sont inscrits aux ordres professionnels compétents. Une bonne préparation chantier passe par une équipe solide.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">4. La Gestion des Matériaux et de la Logistique</h3>
        <p class="mb-4">L'approvisionnement en matériaux peut être un défi au Cameroun. Planifiez à l'avance vos besoins, identifiez des fournisseurs fiables et anticipez les délais de livraison. La logistique sur site (stockage, sécurité des matériaux) est également cruciale pour éviter les pertes et les retards.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">5. La Sécurité sur le Chantier</h3>
        <p class="mb-4">La sécurité des travailleurs est une priorité absolue. Mettez en place des protocoles de sécurité stricts, fournissez les équipements de protection individuelle (EPI) nécessaires et assurez-vous que les normes de sécurité sont respectées en permanence. Un chantier sécurisé est un chantier efficace.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">6. La Gestion des Imprévus et des Risques</h3>
        <p class="mb-4">Malgré la meilleure planification, des imprévus peuvent survenir (conditions météorologiques, problèmes de main-d'œuvre, fluctuations des prix des matériaux). Prévoyez une marge de manœuvre dans votre budget et votre calendrier, et établissez un plan de gestion des risques pour réagir efficacement.</p>
        <p class="mb-4">Lancer un chantier au Cameroun est un projet ambitieux mais gratifiant. En vous préparant adéquatement et en vous entourant des bons partenaires, vous maximiserez vos chances de succès. Nos experts vous accompagnent de l’étude au permis de construire pour une réalisation sereine et conforme.</p>
      `
    },
    {
      id: 10,
      title: "L'impact des réseaux sociaux sur la croissance des entreprises camerounaises",
      excerpt: "Les réseaux sociaux sont devenus un levier incontournable pour la croissance des entreprises au Cameroun. Découvrez comment une stratégie social media bien pensée peut transformer votre visibilité et vos ventes.",
      image: "https://placehold.co/600x400/cce5ff/007bff?text=Social+Media+Cameroon",
      date: "22 Avril 2025",
      author: "Naoussi Industries",
      keywords: "réseaux sociaux entreprises, stratégie social media",
      cta: { text: "Confiez-nous votre stratégie digitale complète.", page: "services" },
      content: `
        <p class="mb-4">Au Cameroun, comme partout ailleurs, les réseaux sociaux ont transcendé leur rôle initial de plateformes de communication personnelle pour devenir des outils stratégiques essentiels au développement des entreprises. Ignorer leur potentiel, c'est se priver d'une opportunité majeure de croissance et de connexion avec une audience toujours plus vaste et engagée.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Accroître la Visibilité et la Notoriété de la Marque</h3>
        <p class="mb-4">Avec des millions d'utilisateurs actifs sur Facebook, Instagram, LinkedIn, et TikTok au Cameroun, les réseaux sociaux offrent une visibilité inégalée. Une présence bien gérée permet aux entreprises de toucher un public que les canaux traditionnels ne peuvent plus atteindre, augmentant ainsi la notoriété de la marque de manière organique et payante.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Engager Directement avec les Clients</h3>
        <p class="mb-4">Les réseaux sociaux entreprises ne sont pas à sens unique. Ils facilitent l'interaction directe avec les clients : répondre aux questions, gérer les commentaires, recueillir des avis. Cette communication bidirectionnelle crée un sentiment de proximité, renforce la confiance et permet de bâtir une communauté fidèle autour de votre marque.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Générer des Leads et des Ventes</h3>
        <p class="mb-4">Au-delà de la simple visibilité, les plateformes sociales sont de puissants générateurs de leads. Grâce à des campagnes publicitaires ciblées, des liens directs vers des boutiques en ligne ou des formulaires de contact intégrés, les entreprises peuvent transformer leurs abonnés en prospects qualifiés et, in fine, en clients. Le social commerce est en plein essor au Cameroun.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Comprendre le Marché et la Concurrence</h3>
        <p class="mb-4">Les réseaux sociaux sont une mine d'informations sur les tendances du marché, les attentes des consommateurs et les stratégies de vos concurrents. En analysant les conversations et les données démographiques, les entreprises peuvent affiner leurs offres, identifier de nouvelles opportunités et rester compétitives.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-3">Construire une Image de Marque Forte et Authentique</h3>
        <p class="mb-4">Les réseaux sociaux permettent aux entreprises de raconter leur histoire, de montrer les coulisses de leur activité et de mettre en avant leurs valeurs. Une stratégie social media authentique et transparente humanise la marque, la rend plus accessible et crée un lien émotionnel avec son audience.</p>
        <p class="mb-4">En conclusion, le marketing digital est le levier de croissance le plus puissant pour les PME en 2025. C'est la clé de votre visibilité en ligne Cameroun, de votre crédibilité et de votre capacité à générer des ventes. Ne laissez pas votre entreprise à la traîne. Boostez votre entreprise avec notre accompagnement marketing.</p>
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Notre Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-3">
                Par <span className="font-medium text-blue-600">{article.author}</span> le {article.date}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
              <button
                onClick={() => navigateTo('article', article)} // Pass the specific article object
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-semibold"
              >
                Lire la suite <ChevronRight size={16} className="ml-1" />
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
        <p className="text-xl text-gray-600">Article non trouvé.</p>
        <button
          onClick={() => navigateTo('blog')}
          className="mt-8 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
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
        {article.cta && (
          <div className="mt-8 text-center">
            <button
              onClick={() => navigateTo(article.cta.page)}
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
            >
              {article.cta.text}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
