import React, { useState } from "react";
import {
  ArrowRight, Menu, X, PenTool, Monitor, Building2,
  CheckCircle2, MessageCircle, Mail, MapPin, Instagram, Linkedin
} from "lucide-react";
import "./index.css";

const divisions = [
  {
    number:"01",
    title:"Design graphique & identité visuelle",
    label:"Identité visuelle • Branding • Communication",
    text:"Nous créons des identités visuelles, supports de communication et contenus qui renforcent la présence des entreprises au Cameroun et à l’international.",
    icon:PenTool
  },
  {
    number:"02",
    title:"Création de sites web & digital",
    label:"Sites web • Applications • Solutions digitales",
    text:"Nous concevons des sites web et solutions digitales rapides, clairs et orientés conversion pour les entreprises, marques et projets.",
    icon:Monitor
  },
  {
    number:"03",
    title:"Architecture & ingénierie",
    label:"Conception • Études • Technique",
    text:"Des prestations de conception, études et ingénierie pour accompagner les projets de construction et d’architecture avec une approche technique structurée.",
    icon:Building2
  }
];

const offers = [
  {division:"Design", title:"Identité & communication", text:"Construire une image professionnelle et cohérente.", items:["Identité visuelle","Supports de communication","Contenus graphiques"]},
  {division:"Design", title:"Branding & développement", text:"Développer une marque au-delà du simple logo.", items:["Direction artistique","Système visuel","Déclinaisons de marque"]},
  {division:"Design", title:"Design sur mesure", text:"Une intervention adaptée à la complexité du projet.", items:["Projet personnalisé","Direction créative","Livrables adaptés"]},
  {division:"Digital", title:"Site vitrine", text:"Une présence web professionnelle, claire et pensée pour convertir.", items:["Architecture du contenu","Design responsive","Mise en ligne"]},
  {division:"Digital", title:"Expérience digitale", text:"Une solution digitale plus complète pour structurer votre activité.", items:["UX / UI","Fonctionnalités métier","Optimisation"]},
  {division:"Digital", title:"Solution sur mesure", text:"Pour les projets qui nécessitent une approche technique spécifique.", items:["Cadrage technique","Développement","Évolution du produit"]},
  {division:"Architecture & ingénierie", title:"Conception", text:"Transformer une intention en projet réalisable.", items:["Conception","Plans & documentation","Coordination"]},
  {division:"Architecture & ingénierie", title:"Études techniques", text:"Sécuriser les décisions techniques du projet.", items:["Analyse technique","Calculs & vérifications","Documentation"]},
  {division:"Architecture & ingénierie", title:"Projet sur mesure", text:"Un accompagnement adapté aux contraintes du projet.", items:["Cadrage","Études spécifiques","Accompagnement technique"]}
];

const portfolio = [
  {number:"01", type:"IDENTITÉ • COMMUNICATION", title:"Brothers Farming & Industry", text:"Identité visuelle et supports de communication pour une entreprise agro-pastorale basée à Bafoussam.", status:"Étude de cas"},
  {number:"02", type:"DIGITAL • WEB", title:"Naoussi Industries", text:"Conception de l'écosystème web de Naoussi Industries : positionnement, expérience, contenu et présence digitale.", status:"Projet interne"},
  {number:"03", type:"ARCHITECTURE • INGÉNIERIE", title:"Projets techniques", text:"Une sélection de travaux de conception et d'ingénierie présentés progressivement, avec un niveau de détail adapté à chaque projet.", status:"Sélection en cours"}
];

const process = [
  ["01","Comprendre","Nous clarifions votre besoin, votre objectif et le résultat attendu."],
  ["02","Structurer","Nous transformons l'idée en une solution claire, chiffrée et réalisable."],
  ["03","Produire","Notre équipe exécute le projet avec méthode et contrôle qualité."],
  ["04","Livrer","Vous recevez un résultat exploitable, propre et prêt à évoluer."]
];

const highlights = [
  "Une équipe multidisciplinaire",
  "Une approche orientée résultat",
  "Des livrables professionnels",
  "Un interlocuteur unique"
];

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Accueil");

  const go = (id) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase().replace(" ","-"))?.scrollIntoView({behavior:"smooth"});
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => go("Accueil")} aria-label="Naoussi Industries">
            <img className="brand-logo" src="/ni black logo.svg" alt="Naoussi Industries" />
            <span>NAOUSSI <b>INDUSTRIES</b></span>
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {["Accueil","Identité","Offres","Portfolio","À propos"].map(item => (
              <button key={item} className={active===item ? "active":""} onClick={() => go(item)}>{item}</button>
            ))}
            <button className="nav-cta" onClick={() => go("Contact")}>Démarrer un projet <ArrowRight size={16}/></button>
          </nav>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-grid"></div>
          <div className="container hero-content">
            <div className="eyebrow"><span></span> DESIGN • DIGITAL • ARCHITECTURE • INGÉNIERIE</div>
            <h1>Nous transformons<br/><em>les idées</em> en solutions.</h1>
            <p className="hero-copy">
              Naoussi Industries est une entreprise multidisciplinaire basée à Douala, au Cameroun. Nous réunissons design graphique, identité visuelle, création de sites web, digital, architecture et ingénierie pour transformer les projets en solutions concrètes.
            </p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={() => go("Contact")}>Parler de votre projet <ArrowRight size={18}/></button>
              <button className="text-link" onClick={() => go("Offres")}>Voir nos offres <ArrowRight size={17}/></button>
            </div>
            <div className="hero-note"><span className="dot"></span> Douala, Cameroun • projets locaux et internationaux</div>
          </div>
          <div className="hero-orbit orbit-1"></div>
          <div className="hero-orbit orbit-2"></div>
        </section>

        <section id="identité" className="section expertise">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">NOTRE IDENTITÉ</p>
                <h2>Trois expertises.<br/><span>Une seule vision.</span></h2>
              </div>
              <p className="section-intro">Nous réunissons plusieurs métiers pour éviter les silos et construire des solutions qui fonctionnent ensemble.</p>
            </div>

            <div className="division-grid">
              {divisions.map(({number,title,label,text,icon:Icon}) => (
                <article className="division-card" key={title}>
                  <div className="card-top"><span>{number}</span><Icon size={24}/></div>
                  <div className="card-line"></div>
                  <p className="card-label">{label}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={() => go("Offres")}>Voir les offres <ArrowRight size={16}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        
        <section id="offres" className="section offers">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">NOS OFFRES</p><h2>Des packs clairs.<br/><span>Des solutions adaptées.</span></h2></div>
              <p className="section-intro">Chaque division s'organise autour de trois niveaux d'intervention. Le troisième niveau est adapté à la complexité réelle du projet.</p>
            </div>
            <div className="offer-groups">
              {["Design","Digital","Architecture & ingénierie"].map(group => (
                <div className="offer-group" key={group}>
                  <div className="offer-group-title"><span>{group}</span><i></i></div>
                  <div className="offer-grid">
                    {offers.filter(o => o.division===group).map((offer,index) => (
                      <article className="offer-card" key={offer.title}>
                        <div className="offer-top"><span>PACK {String(index+1).padStart(2,"0")}</span><span>{group}</span></div>
                        <h3>{offer.title}</h3><p>{offer.text}</p>
                        <ul>{offer.items.map(item => <li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul>
                        <button onClick={() => go("Contact")}>Demander ce pack <ArrowRight size={15}/></button>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">PORTFOLIO</p><h2>Ce que nous<br/><span>construisons.</span></h2></div>
              <p className="section-intro">Le portfolio présente progressivement nos projets sous forme de cas concrets : contexte, approche, livrables et résultat.</p>
            </div>
            <div className="portfolio-grid">
              {portfolio.map(project => (
                <article className="portfolio-card" key={project.number}>
                  <div className="portfolio-visual"><span>{project.number}</span><div className="portfolio-cross"></div></div>
                  <div className="portfolio-info">
                    <p className="card-label">{project.type}</p><h3>{project.title}</h3><p>{project.text}</p>
                    <div className="portfolio-meta"><span>{project.status}</span><ArrowRight size={16}/></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="méthode" className="section method">
          <div className="container">
            <div className="method-layout">
              <div>
                <p className="kicker">NOTRE MÉTHODE</p>
                <h2>Pas seulement<br/><span>faire. Comprendre.</span></h2>
                <p className="method-copy">Chaque projet commence par une question simple : quel résultat doit réellement produire ce que nous allons créer ?</p>
                <div className="check-list">
                  {highlights.map(x => <div key={x}><CheckCircle2 size={18}/>{x}</div>)}
                </div>
              </div>
              <div className="process-list">
                {process.map(([n,t,d]) => (
                  <div className="process-row" key={n}>
                    <span className="process-number">{n}</span>
                    <div><h3>{t}</h3><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="à-propos" className="section about">
          <div className="container about-box">
            <div className="about-tag">NI / 2026</div>
            <div className="about-content">
              <p className="kicker">À PROPOS</p>
              <h2>Une entreprise pensée pour connecter <span>les disciplines.</span></h2>
              <p>Naoussi Industries développe un modèle hybride à la croisée du design, du digital et de l'ingénierie. Notre objectif : rendre les projets plus lisibles, plus professionnels et plus efficaces.</p>
              <p>Nous travaillons avec des entreprises, entrepreneurs, institutions et porteurs de projets qui veulent passer d'une idée à une réalisation concrète.</p>
            </div>
            <div className="about-stamp"><span>CREATE</span><strong>BUILD</strong><span>EVOLVE</span></div>
          </div>
        </section>

        <section id="questions" className="section faq">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">QUESTIONS FRÉQUENTES</p>
                <h2>Ce que vous devez<br/><span>savoir sur Naoussi Industries.</span></h2>
              </div>
              <p className="section-intro">Des réponses simples pour comprendre nos services et savoir comment démarrer un projet.</p>
            </div>
            <div className="faq-grid">
              <article><h3>Quels services propose Naoussi Industries au Cameroun ?</h3><p>Nous proposons du design graphique et de l’identité visuelle, la création de sites web et de solutions digitales, ainsi que des prestations d’architecture et d’ingénierie.</p></article>
              <article><h3>Où intervient Naoussi Industries ?</h3><p>Nous sommes basés à Douala, au Cameroun, et pouvons accompagner des projets locaux ou internationaux à distance selon leur nature.</p></article>
              <article><h3>Comment démarrer un projet ?</h3><p>Contactez-nous avec votre besoin, votre objectif et, si possible, votre délai. Nous clarifions ensuite le périmètre, les livrables et la prochaine étape.</p></article>
              <article><h3>Naoussi Industries travaille-t-elle uniquement avec des entreprises ?</h3><p>Nous accompagnons les entreprises, entrepreneurs, institutions et porteurs de projets qui recherchent une solution professionnelle en design, digital, architecture ou ingénierie.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div>
              <p className="kicker light">UN PROJET EN TÊTE ?</p>
              <h2>Construisons quelque chose<br/><em>de solide.</em></h2>
              <p>Expliquez-nous simplement ce que vous souhaitez réaliser. Nous reviendrons vers vous avec la prochaine étape.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-btn primary" href="https://wa.me/237658120586" target="_blank" rel="noreferrer"><MessageCircle size={20}/> WhatsApp</a>
              <a className="contact-btn" href="mailto:contact@naoussiindustries.com"><Mail size={20}/> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand"><img className="brand-logo" src="/ni black logo.svg" alt="Naoussi Industries" /><span>NAOUSSI <b>INDUSTRIES</b></span></div>
            <p>Design, digital, architecture & ingénierie.<br/>Des idées transformées en solutions.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <button onClick={() => go("Accueil")}>Accueil</button>
            <button onClick={() => go("Identité")}>Identité</button>
            <button onClick={() => go("Offres")}>Offres</button>
            <button onClick={() => go("Portfolio")}>Portfolio</button>
            <button onClick={() => go("Méthode")}>Méthode</button>
            <button onClick={() => go("À propos")}>À propos</button>
            <button onClick={() => go("Questions")}>FAQ</button>
          </div>
          <div>
            <h4>Contact</h4>
            <p><MapPin size={15}/> Douala, Cameroun</p>
            <p><MessageCircle size={15}/> +237 658 120 586</p>
            <p><Mail size={15}/> contact@naoussiindustries.com</p>
          </div>
          <div>
            <h4>Réseaux</h4>
            <div className="socials">
              <a href="https://www.instagram.com/t.n.a.l/" target="_blank" rel="noreferrer"><Instagram size={18}/></a>
              <a href="https://www.linkedin.com/in/lionel-naoussi-29a52232b/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            </div>
          </div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} Naoussi Industries. Tous droits réservés.</div>
      </footer>
    </div>
  );
}

export default App;
