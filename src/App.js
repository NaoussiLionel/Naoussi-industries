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
            <img className="brand-logo" src="/ni white logo.svg" alt="Naoussi Industries" />
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {["Accueil","Expertise","Méthode","À propos"].map(item => (
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
              <button className="text-link" onClick={() => go("Expertise")}>Découvrir notre expertise <ArrowRight size={17}/></button>
            </div>
            <div className="hero-note"><span className="dot"></span> Douala, Cameroun • projets locaux et internationaux</div>
          </div>
          <div className="hero-orbit orbit-1"></div>
          <div className="hero-orbit orbit-2"></div>
        </section>

        <section id="expertise" className="section expertise">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">NOS DIVISIONS</p>
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
                  <button onClick={() => go("Contact")}>Parlons-en <ArrowRight size={16}/></button>
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
            <div className="footer-brand"><img className="brand-logo" src="/ni white logo.svg" alt="Naoussi Industries" /></div>
            <p>Design, digital, architecture & ingénierie.<br/>Des idées transformées en solutions.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <button onClick={() => go("Accueil")}>Accueil</button>
            <button onClick={() => go("Expertise")}>Expertise</button>
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
