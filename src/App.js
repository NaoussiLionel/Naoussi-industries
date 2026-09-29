import React, { useState } from "react";
import {
  ArrowRight, Menu, X, PenTool, Monitor, Building2, Layers3,
  CheckCircle2, MessageCircle, Mail, MapPin, Instagram, Linkedin
} from "lucide-react";
import "./index.css";

const divisions = [
  {
    number:"01",
    title:"Design & Branding",
    label:"Identité • Communication • Contenu",
    text:"Des identités visuelles cohérentes et des supports qui donnent à votre entreprise une présence claire, professionnelle et mémorable.",
    icon:PenTool
  },
  {
    number:"02",
    title:"Digital & Web",
    label:"Sites • Applications • Solutions",
    text:"Nous concevons des expériences digitales simples à utiliser, pensées pour présenter votre activité et transformer l’attention en opportunités.",
    icon:Monitor
  },
  {
    number:"03",
    title:"Architecture & Ingénierie",
    label:"Conception • Études • Technique",
    text:"Des solutions techniques structurées pour les projets de construction, d'architecture et d'ingénierie, avec une attention particulière aux détails.",
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
            <span className="brand-mark">N</span>
            <span>NAOUSSI <b>INDUSTRIES</b></span>
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
            <div className="eyebrow"><span></span> ARCHITECTURE • DESIGN • DIGITAL</div>
            <h1>Nous transformons<br/><em>les idées</em> en solutions.</h1>
            <p className="hero-copy">
              Naoussi Industries rassemble création, technologie et ingénierie pour aider les entreprises et les porteurs de projets à construire une présence solide et des solutions concrètes.
            </p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={() => go("Contact")}>Parler de votre projet <ArrowRight size={18}/></button>
              <button className="text-link" onClick={() => go("Expertise")}>Découvrir notre expertise <ArrowRight size={17}/></button>
            </div>
            <div className="hero-note"><span className="dot"></span> Basés au Cameroun • projets locaux et internationaux</div>
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
            <div className="footer-brand"><span className="brand-mark">N</span><span>NAOUSSI <b>INDUSTRIES</b></span></div>
            <p>Architecture, design & digital.<br/>Des idées transformées en solutions.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <button onClick={() => go("Accueil")}>Accueil</button>
            <button onClick={() => go("Expertise")}>Expertise</button>
            <button onClick={() => go("Méthode")}>Méthode</button>
            <button onClick={() => go("À propos")}>À propos</button>
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
