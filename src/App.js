import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter, Edit, Save, Lightbulb } from 'lucide-react';

// Tailwind CSS is assumed to be available in the environment.

// --- Données Statiques (Utilisées si pas de données locales) ---
// Ces données seraient éditées en Mode Admin et sauvegardées localement.
// Pour un site "live", ces données devraient venir d'un CMS/Backend ou être mises à jour dans le code source.
const initialContent = {
  home: {
    hero_title: "Naoussi Industries : Bâtir l'Avenir, Numériquement.",
    hero_subtitle: "Solutions innovantes en génie civil et création de contenu digital pour concrétiser vos projets.",
    civil_intro: "De la conception à la réalisation, nous bâtissons des infrastructures solides et durables, alliant innovation et respect des normes.",
    digital_intro: "Nous donnons vie à vos idées avec des designs percutants et des stratégies digitales qui captivent votre audience.",
    why_choose_us_title: "Pourquoi Nous Choisir ?",
    testimonial_1: "Naoussi Industries a transformé notre vision architecturale en une réalité impressionnante. Leur expertise en génie civil est inégalée.",
    testimonial_1_author: "- Jean Dupont, Promoteur Immobilier",
    testimonial_2: "Leur équipe digitale a créé une campagne de marketing qui a dépassé toutes nos attentes. Des résultats concrets et un design époustouflant.",
    testimonial_2_author: "- Marie Claire, Directrice Marketing",
    testimonial_3: "Professionnalisme, innovation et un souci du détail remarquable. Nous recommandons vivement Naoussi Industries pour tout projet.",
    testimonial_3_author: "- David Ngono, Entrepreneur",
    cta_text: "Prêt à concrétiser votre prochain projet ?",
    cta_subtitle: "Que ce soit pour une construction ambitieuse ou une stratégie digitale percutante, notre équipe est prête à vous accompagner.",
  },
  about: {
    story_intro: "Naoussi Industries a été fondée avec une vision audacieuse : fusionner l'ingénierie de pointe avec la créativité digitale pour offrir des solutions complètes et innovantes. Ce qui a commencé comme une entreprise de génie civil s'est rapidement étendu à la création de contenu digital, reconnaissant l'importance cruciale d'une présence en ligne forte et d'une communication percutante dans le monde moderne. Aujourd'hui, nous sommes fiers de bâtir des structures physiques solides tout en construisant des marques digitales mémorables.",
    mission_text: "Notre mission est de fournir des solutions d'excellence en génie civil et en création digitale, en dépassant les attentes de nos clients grâce à l'innovation, la qualité et une approche centrée sur leurs besoins. Nous nous engageons à transformer les idées en réalités tangibles et numériques.",
    vision_text: "Devenir le leader reconnu dans la synergie du génie civil et de la création digitale, en étant le partenaire de choix pour des projets qui façonnent l'avenir, tant dans le monde physique que numérique.",
    testimonial_civil_detailed: "Travailler avec Naoussi Industries sur notre projet de complexe résidentiel a été une expérience exceptionnelle. Leur équipe de génie civil a fait preuve d'un professionnalisme, d'une expertise technique et d'une capacité à résoudre les problèmes qui ont dépassé nos attentes. Le projet a été livré dans les délais et le budget, avec une qualité de construction irréprochable. Nous sommes extrêmement satisfaits et les recommandons sans hésitation.",
    testimonial_digital_detailed: "Naoussi Industries a révolutionné notre présence en ligne. Leur approche stratégique de la création de contenu digital et leur design innovant ont permis d'augmenter significativement notre engagement sur les réseaux sociaux et notre trafic web. L'équipe est à l'écoute, créative et toujours à la pointe des dernières tendances. C'est un véritable plaisir de collaborer avec eux.",
    teamMembers: [
      // Seul l'ingénieur Naoussi Lionel est mentionné comme demandé
      { name: "Ing Naoussi Lionel", title: "Fondateur & Chef de Projet", bio: "Avec une expertise approfondie en génie civil et une vision stratégique, Ing Naoussi Lionel est le moteur de Naoussi Industries, guidant chaque projet vers l'excellence et l'innovation.", image: "https://placehold.co/150x150/007bff/ffffff?text=NL" },
    ],
  },
  services: {
    intro_text: "Naoussi Industries offre une gamme étendue de services, alliant l'ingénierie de précision à la créativité digitale, pour répondre à tous vos besoins.",
    civilServices: [
      { title: "Conception Architecturale", description: "Création de plans innovants et fonctionnels pour tous types de bâtiments, en respectant les normes et vos aspirations.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Arch" },
      { title: "Réalisation d'Ouvrages", description: "Construction et supervision de projets de génie civil, garantissant qualité, sécurité et respect des délais.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Ouv" },
      { title: "Architecture Académie", description: "Programmes de formation et ateliers pour les professionnels et étudiants en architecture et génie civil.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Acad" },
      { title: "Calcul de Structure", description: "Analyse et dimensionnement des structures pour assurer la stabilité et la durabilité de vos constructions.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Calc" },
      { title: "Études Géotechniques", description: "Évaluation des propriétés du sol pour des fondations sûres et adaptées à chaque projet.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Geo" },
      { title: "Analyse Hydraulique", description: "Conception et optimisation des systèmes de gestion de l'eau pour les infrastructures.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Hyd" },
      { title: "Planification d'Infrastructures", description: "Développement de plans stratégiques pour les routes, ponts, réseaux et autres infrastructures.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Plan" },
      { title: "Assistance en Matière de Permis", description: "Accompagnement dans l'obtention des permis de construire et autres autorisations nécessaires.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Permis" },
      { title: "Gestion de la Construction", description: "Coordination complète des projets de construction, de la planification à la livraison finale.", icon: "https://placehold.co/50x50/007bff/ffffff?text=Gest" },
    ],
    digitalServices: [
      { title: "Conception Graphique", description: "Création de logos, identités visuelles, brochures et tous supports de communication percutants.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Graph" },
      { title: "Création de Contenu pour les Réseaux Sociaux", description: "Production de visuels et textes optimisés pour engager votre audience sur toutes les plateformes.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Social" },
      { title: "Conception d'Interfaces Utilisateurs (UI Design)", description: "Design d'interfaces intuitives et esthétiques pour applications web et mobiles.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=UI" },
      { title: "Conception d'Expériences Utilisateurs (UX Design)", description: "Optimisation du parcours utilisateur pour une navigation fluide et satisfaisante.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=UX" },
      { title: "Rédaction de Contenu SEO", description: "Création de textes optimisés pour les moteurs de recherche, augmentant votre visibilité en ligne.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=SEO" },
      { title: "Production Vidéo", description: "Réalisation de vidéos promotionnelles, institutionnelles et de contenu pour le web.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Video" },
      { title: "Contenu de Marketing par E-mail", description: "Conception de campagnes d'e-mailing engageantes et efficaces pour vos objectifs marketing.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Email" },
      { title: "Rédaction de Contenu de Site Web", description: "Création de textes clairs, concis et persuasifs pour les pages de votre site internet.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Web" },
      { title: "Stratégie et Conseil en Marketing Digital", description: "Développement de stratégies digitales complètes pour maximiser votre impact en ligne.", icon: "https://placehold.co/50x50/8b5cf6/ffffff?text=Strat" },
    ],
  },
  projects: [
    { title: "Construction du Complexe Résidentiel 'Harmonie'", category: "Génie Civil", description: "Conception et réalisation d'un complexe résidentiel moderne de 50 appartements, intégrant des solutions écologiques.", image: "https://placehold.co/600x400/007bff/ffffff?text=Projet+Résidentiel", details: "Défis: Optimisation de l'espace urbain, intégration de panneaux solaires. Solutions: Design compact, matériaux durables, gestion de projet agile. Résultats: Livraison dans les délais, satisfaction client élevée, certification environnementale."},
    { title: "Refonte de l'Identité Visuelle pour 'Café Urbain'", category: "Création Digitale", description: "Création d'un nouveau logo, charte graphique et supports de communication pour une chaîne de cafés.", image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Logo+Café", details: "Défis: Moderniser l'image sans perdre l'essence. Solutions: Palette de couleurs chaleureuse, typographie moderne, illustration personnalisée. Résultats: Augmentation de la reconnaissance de la marque, feedback positif des clients."},
    { title: "Pont de la Rivière 'Sérénité'", category: "Génie Civil", description: "Conception et construction d'un pont suspendu pour améliorer la connectivité régionale.", image: "https://placehold.co/600x400/007bff/ffffff?text=Projet+Pont", details: "Défis: Conditions géologiques complexes, contraintes environnementales. Solutions: Études géotechniques approfondies, techniques de construction innovantes, minimisation de l'impact écologique. Résultats: Infrastructure clé, circulation améliorée."},
    { title: "Campagne Marketing Digital pour 'Fitness Boost'", category: "Création Digitale", description: "Développement d'une stratégie de contenu et de campagnes publicitaires pour une application de fitness.", image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Campagne+Fitness", details: "Défis: Marché concurrentiel, ciblage précis. Solutions: Contenu vidéo engageant, publicités ciblées sur les réseaux sociaux, optimisation SEO. Résultats: Augmentation de 30% des téléchargements de l'application en 3 mois."},
    { title: "Rénovation du Bâtiment Historique 'Le Grand Théâtre'", category: "Génie Civil", description: "Restauration et modernisation d'un théâtre historique, préservant son patrimoine architectural.", image: "https://placehold.co/600x400/007bff/ffffff?text=Théâtre+Rénovation", details: "Défis: Respect des éléments historiques, intégration de technologies modernes. Solutions: Collaboration avec des experts en patrimoine, utilisation de matériaux traditionnels et techniques de pointe. Résultats: Patrimoine préservé, fonctionnalité améliorée."},
    { title: "Création d'un Site Web E-commerce pour 'Artisanat Local'", category: "Création Digitale", description: "Conception et développement d'une plateforme de vente en ligne pour des produits artisanaux.", image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Site+E-commerce", details: "Défis: Mettre en valeur l'unicité des produits, expérience utilisateur fluide. Solutions: Design épuré, photographies de haute qualité, processus de commande simplifié. Résultats: Augmentation des ventes en ligne, portée nationale."},
  ],
  blogPosts: [
    { id: 'genie-civil-durable', title: "Les Tendances Actuelles en Génie Civil Durable", date: "15 Mai 2025", excerpt: "Découvrez comment les nouvelles technologies et approches écologiques transforment le secteur de la construction...", image: "https://placehold.co/400x250/007bff/ffffff?text=Blog+Génie+Civil", fullContent: "Le génie civil durable est au cœur des préoccupations actuelles. Les innovations telles que l'utilisation de matériaux recyclés, les techniques de construction à faible émission de carbone, et l'intégration de systèmes d'énergie renouvelable transforment radicalement le secteur. Naoussi Industries s'engage à intégrer ces pratiques pour des infrastructures respectueuses de l'environnement et économiquement viables. Nous explorons les dernières avancées en matière de béton bas carbone, de bois lamellé-collé, et de conception bioclimatique pour créer des bâtiments et des infrastructures qui minimisent leur empreinte écologique tout au long de leur cycle de vie. L'avenir de la construction est vert, et nous sommes à l'avant-garde de cette révolution." },
    { id: 'storytelling-visuel', title: "L'Importance du Storytelling Visuel en Marketing Digital", date: "10 Mai 2025", excerpt: "Dans un monde saturé d'informations, le storytelling visuel est devenu un outil indispensable pour captiver votre audience...", image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Blog+Digital", fullContent: "Le storytelling visuel n'est plus un luxe, mais une nécessité dans le paysage digital actuel. Les images et les vidéos ont un pouvoir inégalé pour transmettre des émotions, des messages complexes et des valeurs de marque en un instant. Chez Naoussi Industries, nous aidons nos clients à créer des récits visuels percutants qui résonnent avec leur public cible, augmentant ainsi l'engagement et la mémorisation de la marque. Que ce soit à travers des infographies, des animations ou des campagnes vidéo, nous transformons vos idées en expériences visuelles inoubliables qui racontent votre histoire de manière authentique et captivante." },
    { id: 'architecture-moderne', title: "5 Innovations qui Redéfinissent l'Architecture Moderne", date: "01 Mai 2025", excerpt: "De l'impression 3D à la conception paramétrique, l'architecture d'aujourd'hui est en pleine révolution...", image: "https://placehold.co/400x250/007bff/ffffff?text=Blog+Arch", fullContent: "L'architecture moderne est en constante évolution, portée par des innovations technologiques qui repoussent les limites du possible. Parmi les plus marquantes, on retrouve l'impression 3D pour la construction de structures complexes, la conception paramétrique qui permet de créer des formes organiques et optimisées, l'intégration de matériaux intelligents réagissant à l'environnement, les systèmes de bâtiment intelligents pour une gestion énergétique optimale, et l'utilisation de la réalité augmentée pour la visualisation et la planification. Naoussi Industries est à la pointe de ces avancées, intégrant ces technologies pour concevoir et réaliser des bâtiments à la fois esthétiques, fonctionnels et futuristes." },
    { id: 'seo-visibilite', title: "Comment le SEO peut Booster Votre Visibilité en Ligne", date: "25 Avril 2025", excerpt: "Comprendre les bases du référencement naturel est crucial pour attirer plus de trafic qualifié vers votre site web...", image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Blog+SEO", fullContent: "Le Search Engine Optimization (SEO) est la clé de voûte de toute stratégie de marketing digital réussie. Il s'agit d'optimiser votre site web pour qu'il apparaisse en bonne position dans les résultats des moteurs de recherche, attirant ainsi un trafic organique et qualifié. Nous vous guidons à travers les meilleures pratiques SEO, de la recherche de mots-clés pertinents à l'optimisation technique de votre site, en passant par la création de contenu de haute qualité et la construction de liens. Un bon SEO ne se limite pas à la visibilité ; il renforce votre crédibilité, votre autorité et, ultimement, votre chiffre d'affaires. Laissez-nous vous aider à dominer les classements de recherche." },
  ]
};

// --- Composant Principal de l'Application ---
function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // État pour le mode admin
  const [isAdminMode, setIsAdminMode] = useState(false);
  // État pour les données de contenu, chargées depuis LocalStorage ou initiales
  const [content, setContent] = useState(() => {
    try {
      const savedContent = localStorage.getItem('naoussi_content');
      return savedContent ? JSON.parse(savedContent) : initialContent;
    } catch (error) {
      console.error("Erreur de chargement LocalStorage:", error);
      return initialContent;
    }
  });
  // État pour l'article de blog actuellement sélectionné
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  // Fonction pour sauvegarder le contenu dans LocalStorage
  const saveContent = (newContent) => {
    setContent(newContent);
    try {
      localStorage.setItem('naoussi_content', JSON.stringify(newContent));
    } catch (error) {
      console.error("Erreur de sauvegarde LocalStorage:", error);
    }
  };

  // Fonction pour naviguer
  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    if (page === 'blogPost' && data) {
      setSelectedBlogPost(data);
    } else {
      setSelectedBlogPost(null);
    }
    window.scrollTo(0, 0);
  };

  // Fonction pour activer/désactiver le mode admin (très basique pour démo)
  const toggleAdminMode = () => {
    const password = prompt("Entrez le mot de passe admin (démo: admin123)");
    if (password === "admin123") { // Mot de passe basique pour la démo
      setIsAdminMode(!isAdminMode);
      alert(isAdminMode ? "Mode Admin Désactivé" : "Mode Admin Activé");
    } else if (password !== null) { // Si l'utilisateur n'a pas annulé
      alert("Mot de passe incorrect.");
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Bouton Mode Admin (visible uniquement si pas déjà en mode admin) */}
      {!isAdminMode && (
        <button
          onClick={toggleAdminMode}
          className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg z-50 transition duration-300"
          title="Activer le Mode Admin"
        >
          Mode Admin
        </button>
      )}
       {isAdminMode && (
        <button
          onClick={toggleAdminMode}
          className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg z-50 transition duration-300"
          title="Désactiver le Mode Admin"
        >
          Sortir Admin
        </button>
      )}


      {/* Header */}
      <Header navigateTo={navigateTo} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content */}
      <main className="min-h-screen">
        {currentPage === 'accueil' && <HomePage navigateTo={navigateTo} isAdminMode={isAdminMode} content={content} saveContent={saveContent} />}
        {currentPage === 'a-propos' && <AboutPage isAdminMode={isAdminMode} content={content} saveContent={saveContent} />}
        {currentPage === 'services' && <ServicesPage isAdminMode={isAdminMode} content={content} saveContent={saveContent} />}
        {currentPage === 'projets' && <ProjectsPage isAdminMode={isAdminMode} content={content} saveContent={saveContent} />}
        {currentPage === 'contact' && <ContactPage />} {/* La page contact reste statique pour cette démo */}
        {currentPage === 'blog' && <BlogPage navigateTo={navigateTo} isAdminMode={isAdminMode} content={content} saveContent={saveContent} />}
        {currentPage === 'blogPost' && selectedBlogPost && <BlogPostPage post={selectedBlogPost} isAdminMode={isAdminMode} content={content} saveContent={saveContent} navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

// --- Composant Éditables (pour texte et images) ---
// Ce composant rend un élément éditable en mode admin
const Editable = ({ children, tagName: Tag = 'div', contentKey, contentType = 'text', isAdminMode, onSave, imgWidth = 'w-full', imgHeight = 'h-48', className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(children);
  const [isGenerating, setIsGenerating] = useState(false); // Nouveau: état de chargement pour l'IA

  useEffect(() => {
    setEditedContent(children); // Mettre à jour si le contenu prop change
  }, [children]);

  const handleSave = () => {
    onSave(contentKey, editedContent);
    setIsEditing(false);
  };

  const handleAI = async () => {
    // WARNING: In a real production application, exposing your API key directly in client-side code is INSECURE.
    // For production, you should use a serverless function (e.g., Netlify Function) to proxy the API call
    // and keep your API key secure on the server. This direct call is for demonstration purposes only.

    setIsGenerating(true); // Set loading state

    const prompt = `Améliore et optimise ce texte pour le web (plus percutant, clair, et potentiellement SEO-friendly) : "${editedContent}"`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };
    const apiKey = ""; // Canvas will automatically provide this in runtime. DO NOT ADD any API key validation.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            setEditedContent(text); // Update content with AI generated text
        } else {
            alert("L'IA n'a pas pu générer de suggestion. Veuillez réessayer.");
            console.error("AI response structure unexpected:", result);
        }
    } catch (error) {
        alert("Erreur lors de l'appel à l'IA. Veuillez vérifier votre connexion ou réessayer.");
        console.error("Error calling Gemini API:", error);
    } finally {
        setIsGenerating(false); // Reset loading state
    }
};

  if (!isAdminMode) {
    return contentType === 'image' ? (
      <img src={children} alt={contentKey} className={`${imgWidth} ${imgHeight} object-cover`} />
    ) : (
      <Tag className={className}>{children}</Tag>
    );
  }

  // Admin Mode
  return (
    <div className="relative group p-2 rounded-md hover:bg-yellow-100 transition-colors duration-200">
      {isEditing ? (
        <div className="flex flex-col space-y-2">
          {contentType === 'text' && (
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="border p-2 rounded w-full"
            />
          )}
          {contentType === 'longText' && (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="border p-2 rounded w-full h-32"
            />
          )}
          {contentType === 'image' && (
            <>
              <input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="URL de l'image"
                className="border p-2 rounded w-full"
              />
              <img src={editedContent} alt="Aperçu" className="mt-2 max-h-40 object-contain mx-auto" />
            </>
          )}
          <div className="flex space-x-2">
            <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center text-sm" disabled={isGenerating}>
              <Save size={16} /> <span className="ml-1">Sauvegarder</span>
            </button>
            <button onClick={handleAI} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center text-sm" disabled={isGenerating}>
              {isGenerating ? 'Génération en cours...' : <> <Lightbulb size={16} /> <span className="ml-1">IA</span></>}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          {contentType === 'image' ? (
            <img src={children} alt={contentKey} className={`${imgWidth} ${imgHeight} object-cover`} />
          ) : (
            <Tag className={className}>{children}</Tag>
          )}
          <button onClick={() => setIsEditing(true)} className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" title="Éditer">
            <Edit size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

// --- Composants de Page (Adaptés pour l'édition) ---

function Header({ navigateTo, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40/007bff/ffffff?text=NI" alt="Naoussi Industries Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-2xl font-bold text-blue-700">Naoussi Industries</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><button onClick={() => navigateTo('accueil')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Accueil</button></li>
          <li><button onClick={() => navigateTo('a-propos')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">À Propos</button></li>
          <li><button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Services</button></li>
          <li><button onClick={() => navigateTo('projets')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Projets</button></li>
          <li><button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Blog</button></li>
          <li><button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</button></li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
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

function Footer({ navigateTo }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Naoussi Industries</h3>
          <p className="text-gray-400 text-sm">Votre partenaire pour des solutions innovantes en génie civil et une création digitale percutante.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61568848127921" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Facebook size={20} /></a>
            <a href="https://www.linkedin.com/in/lionel-naoussi-29a52232b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/t.n.a.l/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300"><Instagram size={20} /></a>
            {/* Twitter link removed */}
          </div>
        </div>
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
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contactez-Nous</h3>
          <a href="https://wa.me/237658120586" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-300 text-sm mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="w-4 h-4 mr-2" /> Envoyer un message WhatsApp
          </a>
          <a href="tel:+237658120586" className="flex items-center text-gray-400 hover:text-white transition duration-300 text-sm mb-2">
            <Phone size={16} className="mr-2" /> +237 658120586
          </a>
          <a href="mailto:naoussilionel8@gmail.com" className="flex items-center text-gray-400 hover:text-white transition duration-300 text-sm mb-2">
            <Mail size={16} className="mr-2" /> naoussilionel8@gmail.com
          </a>
          <p className="flex items-center text-gray-400 text-sm"><MapPin size={16} className="mr-2" /> Douala, Ndogbong</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Naoussi Industries. Tous droits réservés.
      </div>
    </footer>
  );
}

function HomePage({ navigateTo, isAdminMode, content, saveContent }) {
  const updateContent = (key, value) => {
    saveContent({ ...content, home: { ...content.home, [key]: value } });
  };
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Editable
            tagName="img"
            contentKey="home_background_img"
            contentType="image"
            isAdminMode={isAdminMode}
            onSave={updateContent}
            imgWidth="w-full"
            imgHeight="h-full"
          >
            https://placehold.co/1920x1080/0056b3/ffffff?text=Bâtir+l'Avenir
          </Editable>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Editable
            tagName="h1"
            contentKey="hero_title"
            isAdminMode={isAdminMode}
            onSave={updateContent}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white"
          >
            {content.home.hero_title}
          </Editable>
          <Editable
            tagName="p"
            contentKey="hero_subtitle"
            isAdminMode={isAdminMode}
            onSave={updateContent}
            className="text-lg md:text-xl mb-8 text-white opacity-90"
          >
            {content.home.hero_subtitle}
          </Editable>
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Notre Double Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
              <Editable tagName="img" contentKey="civil_icon" contentType="image" isAdminMode={isAdminMode} onSave={updateContent} imgWidth="w-24" imgHeight="h-24">
                https://placehold.co/100x100/3b82f6/ffffff?text=Génie+Civil
              </Editable>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Génie Civil</h3>
              <Editable tagName="p" contentKey="civil_intro" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.home.civil_intro}
              </Editable>
              <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                <li>Conception Architecturale</li>
                <li>Calcul de Structure</li>
                <li>Gestion de la Construction</li>
              </ul>
              <button
                onClick={() => window.open('https://wa.me/237658120586', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center"
              >
                En savoir plus <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
            <div className="bg-purple-50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
              <Editable tagName="img" contentKey="digital_icon" contentType="image" isAdminMode={isAdminMode} onSave={updateContent} imgWidth="w-24" imgHeight="h-24">
                https://placehold.co/100x100/8b5cf6/ffffff?text=Digital
              </Editable>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Création de Contenu Digital</h3>
              <Editable tagName="p" contentKey="digital_intro" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.home.digital_intro}
              </Editable>
              <ul className="text-gray-700 text-left list-disc list-inside mb-6">
                <li>Conception Graphique</li>
                <li>UI/UX Design</li>
                <li>Production Vidéo</li>
              </ul>
              <button
                onClick={() => window.open('https://wa.me/237658120586', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center"
              >
                En savoir plus <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <Editable tagName="h2" contentKey="why_choose_us_title" isAdminMode={isAdminMode} onSave={updateContent}>
            {content.home.why_choose_us_title}
          </Editable>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Les points "Pourquoi Nous Choisir" pourraient être gérés comme un tableau dans `content.home` si vous voulez les éditer */}
            {['Expertise Double et Synergique', 'Solutions Innovantes et Personnalisées', 'Engagement envers la Qualité', 'Créativité et Impact Digital', 'Équipe Passionnée et Expérimentée', 'Approche Centrée sur le Client'].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:translate-y-2 transition duration-300">
                <img src={`https://placehold.co/60x60/f97316/ffffff?text=${item.split(' ')[0]}`} alt={item} className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item}</h3>
                <p className="text-gray-600 text-sm">Description concise à éditer via code ou un système plus avancé.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <Editable tagName="p" contentKey="testimonial_1" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.home.testimonial_1}
              </Editable>
              <Editable tagName="p" contentKey="testimonial_1_author" isAdminMode={isAdminMode} onSave={updateContent} className="font-semibold">
                {content.home.testimonial_1_author}
              </Editable>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <Editable tagName="p" contentKey="testimonial_2" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.home.testimonial_2}
              </Editable>
              <Editable tagName="p" contentKey="testimonial_2_author" isAdminMode={isAdminMode} onSave={updateContent} className="font-semibold">
                {content.home.testimonial_2_author}
              </Editable>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <Editable tagName="p" contentKey="testimonial_3" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.home.testimonial_3}
              </Editable>
              <Editable tagName="p" contentKey="testimonial_3_author" isAdminMode={isAdminMode} onSave={updateContent} className="font-semibold">
                {content.home.testimonial_3_author}
              </Editable>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <Editable tagName="h2" contentKey="cta_text" isAdminMode={isAdminMode} onSave={updateContent}>
            {content.home.cta_text}
          </Editable>
          <Editable tagName="p" contentKey="cta_subtitle" isAdminMode={isAdminMode} onSave={updateContent}>
            {content.home.cta_subtitle}
          </Editable>
          <button
            onClick={() => window.open('https://wa.me/237658120586', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contactez-Nous Aujourd'hui
          </button>
        </div>
      </section>
    </>
  );
}

function AboutPage({ isAdminMode, content, saveContent }) {
  const updateContent = (key, value) => {
    saveContent({ ...content, about: { ...content.about, [key]: value } });
  };
  // Les membres de l'équipe sont statiques pour cette démo.
  // Pour les rendre éditables, il faudrait une structure de données plus complexe avec des fonctions d'ajout/suppression.
  const teamMembers = content.about.teamMembers;

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">À Propos de Naoussi Industries</h1>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Notre Histoire</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <Editable tagName="img" contentKey="about_history_img" contentType="image" isAdminMode={isAdminMode} onSave={updateContent} imgWidth="w-full md:w-1/2" imgHeight="h-64">
              https://placehold.co/400x250/cccccc/333333?text=Notre+Histoire
            </Editable>
            <Editable tagName="p" contentKey="story_intro" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText" className="text-lg text-gray-700 leading-relaxed">
              {content.about.story_intro}
            </Editable>
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center"><img src="https://placehold.co/30x30/007bff/ffffff?text=M" alt="Mission Icon" className="mr-3 rounded-full" />Notre Mission</h2>
              <Editable tagName="p" contentKey="mission_text" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.about.mission_text}
              </Editable>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center"><img src="https://placehold.co/30x30/8b5cf6/ffffff?text=V" alt="Vision Icon" className="mr-3 rounded-full" />Notre Vision</h2>
              <Editable tagName="p" contentKey="vision_text" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                {content.about.vision_text}
              </Editable>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Innovation', 'Qualité', 'Collaboration', 'Intégrité'].map((item, index) => (
              <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
                <img src={`https://placehold.co/50x50/007bff/ffffff?text=${item.charAt(0)}`} alt={`${item} Icon`} className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">Description concise à éditer via code.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Notre Équipe d'Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition duration-300">
                <Editable tagName="img" contentKey={`team_member_${index}_image`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => { /* Complex state update for arrays */ }} imgWidth="w-32" imgHeight="h-32">
                    {member.image}
                </Editable>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    <Editable tagName="span" contentKey={`team_member_${index}_name`} isAdminMode={isAdminMode} onSave={(k,v) => { /* Complex state update for arrays */ }}>
                        {member.name}
                    </Editable>
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                    <Editable tagName="span" contentKey={`team_member_${index}_title`} isAdminMode={isAdminMode} onSave={(k,v) => { /* Complex state update for arrays */ }}>
                        {member.title}
                    </Editable>
                </p>
                <p className="text-gray-600 text-sm">
                    <Editable tagName="span" contentKey={`team_member_${index}_bio`} isAdminMode={isAdminMode} onSave={(k,v) => { /* Complex state update for arrays */ }} contentType="longText">
                        {member.bio}
                    </Editable>
                </p>
              </div>
            ))}
            {/* L'ajout/suppression de membres d'équipe nécessiterait une logique de gestion de tableau complexe en mode admin local */}
          </div>
        </section>

        <section className="py-16 bg-blue-700 text-white rounded-lg shadow-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Témoignages Détaillés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <Editable tagName="p" contentKey="testimonial_civil_detailed" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                  {content.about.testimonial_civil_detailed}
                </Editable>
                <p className="font-semibold text-blue-700">- Société Immobilière Alpha, Directeur de Projet</p>
              </div>
              <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <Editable tagName="p" contentKey="testimonial_digital_detailed" isAdminMode={isAdminMode} onSave={updateContent} contentType="longText">
                  {content.about.testimonial_digital_detailed}
                </Editable>
                <p className="font-semibold text-purple-700">- Boutique en Ligne 'Éclat Créatif', Fondatrice</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Discutons de votre projet !</h2>
          <p className="text-lg text-gray-700 mb-8">
            Nous sommes impatients de découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <button
            onClick={() => window.open('https://wa.me/237658120586', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contactez Notre Équipe
          </button>
        </section>
      </div>
    </div>
  );
}

function ServicesPage({ isAdminMode, content, saveContent }) {
  // Pour l'édition des services, la structure est un tableau d'objets.
  // Gérer l'ajout/suppression/édition d'éléments dans un tableau via l'admin local est complexe
  // et dépasserait la portée d'un exemple intégré.
  // Nous affichons donc les services comme des éléments éditables individuellement.
  const civilServices = content.services.civilServices;
  const digitalServices = content.services.digitalServices;

  const updateServiceContent = (serviceType, index, field, value) => {
    const updatedContent = { ...content };
    updatedContent.services[serviceType][index] = {
      ...updatedContent.services[serviceType][index],
      [field]: value,
    };
    saveContent(updatedContent);
  };


  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Nos Services Complets</h1>
        <Editable tagName="p" contentKey="services_intro" isAdminMode={isAdminMode} onSave={(k,v) => saveContent({...content, services: {...content.services, intro_text: v}})} contentType="longText" className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          {content.services.intro_text}
        </Editable>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Solutions en Génie Civil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {civilServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                <Editable tagName="img" contentKey={`civil_service_${index}_icon`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('civilServices', index, 'icon', v)} imgWidth="w-16" imgHeight="h-16">
                  {service.icon}
                </Editable>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  <Editable tagName="span" contentKey={`civil_service_${index}_title`} isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('civilServices', index, 'title', v)}>
                    {service.title}
                  </Editable>
                </h3>
                <Editable tagName="p" contentKey={`civil_service_${index}_description`} isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('civilServices', index, 'description', v)} contentType="longText">
                  {service.description}
                </Editable>
                <button
                  onClick={() => window.open('https://wa.me/237658120586', '_blank')}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
                >
                  Demander un devis
                </button>
              </div>
            ))}
             {/* Ajouter/Supprimer des services nécessiterait des boutons spécifiques et une logique complexe pour manipuler les tableaux dans LocalStorage */}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Solutions en Création de Contenu Digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                <Editable tagName="img" contentKey={`digital_service_${index}_icon`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('digitalServices', index, 'icon', v)} imgWidth="w-16" imgHeight="h-16">
                  {service.icon}
                </Editable>
                <h3 className="text-xl font-semibold text-purple-700 mb-3">
                  <Editable tagName="span" contentKey={`digital_service_${index}_title`} isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('digitalServices', index, 'title', v)}>
                    {service.title}
                  </Editable>
                </h3>
                <Editable tagName="p" contentKey={`digital_service_${index}_description`} isAdminMode={isAdminMode} onSave={(k,v) => updateServiceContent('digitalServices', index, 'description', v)} contentType="longText">
                  {service.description}
                </Editable>
                <button
                  onClick={() => window.open('https://wa.me/237658120586', '_blank')}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
                >
                  Demander un devis
                </button>
              </div>
            ))}
             {/* Ajouter/Supprimer des services nécessiterait des boutons spécifiques et une logique complexe pour manipuler les tableaux dans LocalStorage */}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectsPage({ isAdminMode, content, saveContent }) {
  const [filter, setFilter] = useState('all');
  const projects = content.projects; // Utilisez les projets du state global

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Fonction pour mettre à jour un champ d'un projet spécifique
  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    saveContent({ ...content, projects: updatedProjects });
  };
  
  // Fonctions d'ajout/suppression sont plus complexes pour un système local
  // Elles nécessiteraient une interface dédiée et des interactions utilisateur
  // plus élaborées pour créer/supprimer des objets complets.
  // Pour cette démo, nous nous concentrons sur l'édition d'éléments existants.

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">Notre Portfolio de Projets</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Découvrez nos réalisations en génie civil et en création digitale qui témoignent de notre expertise et de notre passion.
        </p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Editable tagName="img" contentKey={`project_${index}_image`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => updateProject(index, 'image', v)} imgWidth="w-full" imgHeight="h-48">
                {project.image}
              </Editable>
              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${project.category === 'Génie Civil' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                  {project.category}
                </span>
                <Editable tagName="h3" contentKey={`project_${index}_title`} isAdminMode={isAdminMode} onSave={(k,v) => updateProject(index, 'title', v)} className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </Editable>
                <Editable tagName="p" contentKey={`project_${index}_description`} isAdminMode={isAdminMode} onSave={(k,v) => updateProject(index, 'description', v)} contentType="longText" className="text-gray-600 text-sm mb-4">
                  {project.description}
                </Editable>
                <details className="text-gray-700 text-sm cursor-pointer">
                  <summary className="font-medium text-blue-600 hover:text-blue-800">Voir les détails</summary>
                  <Editable tagName="p" contentKey={`project_${index}_details`} isAdminMode={isAdminMode} onSave={(k,v) => updateProject(index, 'details', v)} contentType="longText" className="mt-2">
                    {project.details}
                  </Editable>
                </details>
                <button
                  onClick={() => window.open('https://wa.me/237658120586', '_blank')}
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300"
                >
                  Discuter d'un projet similaire
                </button>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-600 text-lg mt-8 col-span-full">Aucun projet trouvé pour cette catégorie.</p>
          )}
           {/* Ajouter/Supprimer des projets nécessiterait des boutons spécifiques et une logique complexe pour manipuler les tableaux dans LocalStorage */}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      if (formData.name && formData.email && formData.subject && formData.message) {
        console.log('Formulaire soumis:', formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom Complet</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Numéro de Téléphone (Optionnel)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Sujet</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Génie Civil">Demande Génie Civil</option>
                  <option value="Création Digitale">Demande Création Digitale</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Votre Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 w-full" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
              {formStatus === 'success' && (<p className="text-green-600 text-center mt-4">Votre message a été envoyé avec succès ! Nous vous répondrons sous 24-48 heures.</p>)}
              {formStatus === 'error' && (<p className="text-red-600 text-center mt-4">Une erreur est survenue. Veuillez remplir tous les champs requis et réessayer.</p>)}
            </form>
          </div>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="w-6 h-6 mr-3" /> Envoyer un message WhatsApp
              </a>
              <p className="flex items-center text-lg"><MapPin size={24} className="mr-3 text-blue-600" /> Douala, Ndogbong</p>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Suivez-nous sur les réseaux sociaux</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61568848127921" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Facebook size={30} /></a>
              <a href="https://www.linkedin.com/in/lionel-naoussi-29a52232b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Linkedin size={30} /></a>
              <a href="https://www.instagram.com/t.n.a.l/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition duration-300"><Instagram size={30} /></a>
              {/* Twitter link removed */}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Notre Localisation</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-center">
              Carte interactive ici
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPage({ navigateTo, isAdminMode, content, saveContent }) {
  const blogPosts = content.blogPosts;

  const updateBlogPost = (index, field, value) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[index] = {
      ...updatedPosts[index],
      [field]: value,
    };
    saveContent({ ...content, blogPosts: updatedPosts });
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
              <Editable tagName="img" contentKey={`blog_post_${index}_image`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => updateBlogPost(index, 'image', v)} imgWidth="w-full" imgHeight="h-48">
                {post.image}
              </Editable>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                    <Editable tagName="span" contentKey={`blog_post_${index}_date`} isAdminMode={isAdminMode} onSave={(k,v) => updateBlogPost(index, 'date', v)}>
                        {post.date}
                    </Editable>
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <Editable tagName="span" contentKey={`blog_post_${index}_title`} isAdminMode={isAdminMode} onSave={(k,v) => updateBlogPost(index, 'title', v)}>
                        {post.title}
                    </Editable>
                </h3>
                <Editable tagName="p" contentKey={`blog_post_${index}_excerpt`} isAdminMode={isAdminMode} onSave={(k,v) => updateBlogPost(index, 'excerpt', v)} contentType="longText" className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </Editable>
                <button onClick={() => navigateTo('blogPost', post)} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                  Lire la suite <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
           {/* Ajouter/Supprimer des articles nécessiterait des boutons spécifiques et une logique complexe pour manipuler les tableaux dans LocalStorage */}
        </div>

        <section className="text-center mt-16 bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Abonnez-vous à notre Newsletter</h2>
          <p className="text-gray-700 mb-6">Recevez les dernières actualités et insights directement dans votre boîte de réception.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input type="email" placeholder="Votre adresse e-mail" className="w-full sm:w-1/2 md:w-1/3 py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
              S'abonner
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

// --- Nouveau Composant: Page d'Article de Blog ---
function BlogPostPage({ post, isAdminMode, content, saveContent, navigateTo }) {
    // Trouver l'index de l'article dans le tableau global pour pouvoir le sauvegarder
    const postIndex = content.blogPosts.findIndex(p => p.id === post.id);

    const updatePostContent = (key, value) => {
        const updatedBlogPosts = [...content.blogPosts];
        updatedBlogPosts[postIndex] = {
            ...updatedBlogPosts[postIndex],
            [key]: value
        };
        saveContent({ ...content, blogPosts: updatedBlogPosts });
    };

    if (!post) {
        return (
            <div className="py-16 md:py-24 text-center text-gray-600">
                Article de blog non trouvé.
                <button onClick={() => navigateTo('blog')} className="ml-4 text-blue-600 hover:underline">Retour au blog</button>
            </div>
        );
    }

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <button onClick={() => navigateTo('blog')} className="mb-8 flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
                    <ChevronRight size={20} className="transform rotate-180 mr-2" /> Retour au Blog
                </button>

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                    <Editable tagName="img" contentKey={`blog_post_${post.id}_image`} contentType="image" isAdminMode={isAdminMode} onSave={(k,v) => updatePostContent('image', v)} imgWidth="w-full" imgHeight="h-80">
                        {post.image}
                    </Editable>
                    <p className="text-gray-500 text-sm mt-6 mb-2">
                        <Editable tagName="span" contentKey={`blog_post_${post.id}_date`} isAdminMode={isAdminMode} onSave={(k,v) => updatePostContent('date', v)}>
                            {post.date}
                        </Editable>
                    </p>
                    <Editable tagName="h1" contentKey={`blog_post_${post.id}_title`} isAdminMode={isAdminMode} onSave={(k,v) => updatePostContent('title', v)} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        {post.title}
                    </Editable>
                    <Editable tagName="div" contentKey={`blog_post_${post.id}_fullContent`} isAdminMode={isAdminMode} onSave={(k,v) => updatePostContent('fullContent', v)} contentType="longText" className="text-gray-700 leading-relaxed text-lg prose max-w-none">
                        {post.fullContent}
                    </Editable>
                </div>
            </div>
        </div>
    );
}

export default App;
