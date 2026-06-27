import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import Lenis from 'lenis';
import { FaArrowDown, FaDownload, FaEnvelope, FaGithub, FaLocationDot, FaRegPaperPlane, FaShieldHalved } from 'react-icons/fa6';
import { iconMap } from './components/Icons';
import {
  aboutPoints,
  buildItems,
  education,
  featuredProject,
  heroHighlights,
  heroFocusImage,
  highlights,
  navItems,
  otherProjects,
  professionalExperience,
  quickFacts,
  skillGroups,
  socialLinks,
} from './data/portfolioV2';

const WorkspaceCanvas = lazy(() => import('./components/WorkspaceCanvas'));

function useTyping(words, speed = 90, pause = 1400) {
  const [state, setState] = useState({ wordIndex: 0, text: '', deleting: false });

  useEffect(() => {
    const currentWord = words[state.wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        setState((prev) => {
          const word = words[prev.wordIndex % words.length];
          if (!prev.deleting && prev.text === word) {
            return { ...prev, deleting: true };
          }
          if (prev.deleting && prev.text === '') {
            return {
              wordIndex: (prev.wordIndex + 1) % words.length,
              text: '',
              deleting: false,
            };
          }
          return {
            ...prev,
            text: prev.deleting ? word.slice(0, prev.text.length - 1) : word.slice(0, prev.text.length + 1),
          };
        });
      },
      state.deleting && state.text === '' ? 250 : state.deleting ? Math.max(35, speed / 2) : state.text === currentWord ? pause : speed,
    );
    return () => clearTimeout(timeout);
  }, [pause, speed, state, words]);

  return state.text;
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

function GlassButton({ href, children, variant = 'primary', icon: Icon, onClick }) {
  const classes = ['glass-button', `glass-button--${variant}`].join(' ');
  const content = (
    <>
      {Icon ? <Icon /> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={classes} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={classes} onClick={onClick} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      {content}
    </motion.button>
  );
}

function ProjectScreenshotRail({ screenshots, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const trackRef = React.useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 761px)');
    const sync = () => setShowAll(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const visibleShots = showAll ? screenshots : screenshots.slice(0, 3);

  useEffect(() => {
    setActiveIndex(0);
  }, [showAll, screenshots]);

  return (
    <div className="project-rail">
      <div
        className="project-rail__track"
        ref={trackRef}
        data-rail={title}
        onScroll={(event) => {
          const node = event.currentTarget;
          const itemWidth = node.clientWidth;
          const index = Math.round(node.scrollLeft / Math.max(itemWidth, 1));
          if (!Number.isNaN(index)) setActiveIndex(index);
        }}
      >
        {visibleShots.map((shot, index) => (
          <motion.figure
            key={`${title}-${shot}`}
            className="phone-mockup phone-mockup--rail"
            whileHover={{ rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4, y: -4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <div className="phone-mockup__frame">
              <img src={shot} alt={`${title} screenshot ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          </motion.figure>
        ))}
      </div>
      <div className="project-rail__meta">
        <div className="project-dots" aria-hidden="true">
          {visibleShots.map((shot, index) => (
            <button
              key={shot}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => {
                const track = trackRef.current;
                if (track) {
                  track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>
        {!showAll && screenshots.length > 3 ? (
          <button type="button" className="rail-link" onClick={() => setShowAll(true)}>
            View all screens
          </button>
        ) : null}
      </div>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function PageLoader({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div className="page-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
          <motion.div
            className="page-loader__ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading portfolio</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const typed = useTyping(heroHighlights);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState({ x: 50, y: 25 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: !shouldReduceMotion,
      duration: shouldReduceMotion ? 0.01 : 1.1,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    const move = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.1 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' });
      gsap.from('.hero-actions > *', { y: 18, opacity: 0, duration: 0.75, stagger: 0.12, delay: 0.15, ease: 'power2.out' });
      gsap.from('.hero-facts > *', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.2, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  const cursorGlow = useMemo(
    () => ({
      background: `radial-gradient(420px circle at ${mouse.x}% ${mouse.y}%, rgba(124,58,237,0.16), transparent 40%), radial-gradient(300px circle at ${100 - mouse.x}% ${100 - mouse.y}%, rgba(59,130,246,0.12), transparent 35%)`,
    }),
    [mouse],
  );

  return (
    <div className="app-shell">
      <PageLoader visible={loading} />
      <ScrollProgress />
      <div className="ambient-glow" style={cursorGlow} />
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand__mark">DS</span>
          <span className="brand__text">Deepak Sahu</span>
        </a>
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={activeSection === item.href.slice(1) ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="topbar__actions">
          <GlassButton href="/resume.pdf" variant="secondary" icon={FaDownload}>
            Resume
          </GlassButton>
          <button type="button" className="mobile-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>
        <section id="home" className="hero">
          <div className="hero-particles" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <span className="hero-badge">
              <FaShieldHalved />
              Real production work
            </span>
            <h1>
              Hi, I&apos;m <span>Deepak Sahu</span>
            </h1>
            <p className="hero-subtitle">Full Stack MERN Developer</p>
            <p className="hero-subtitle">React Native Developer</p>
            <p className="hero-typing">
              {typed}
              <span className="cursor" />
            </p>
            <p className="hero-description">
              I build web and mobile products with React, Node.js, Express, MongoDB, MySQL, REST APIs, authentication, and deployment.
              My work includes live company applications and my personal React Native app, Split Your Trip.
            </p>
            <div className="hero-actions">
              <GlassButton href="#projects" icon={FaArrowDown}>
                View Projects
              </GlassButton>
              <GlassButton href="/resume.pdf" variant="secondary" icon={FaDownload}>
                Download Resume
              </GlassButton>
              <GlassButton href="#contact" variant="ghost" icon={FaRegPaperPlane}>
                Contact Me
              </GlassButton>
            </div>
            <div className="hero-meta">
              <div>
                <FaLocationDot />
                <span>India, open to remote opportunities</span>
              </div>
              <div>
                <FaGithub />
                <span>Live work across MERN, MongoDB, and MySQL</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__canvas">
              <Suspense
                fallback={
                  <div className="canvas-fallback">
                    <div className="skeleton" />
                    <div className="skeleton" />
                    <div className="skeleton skeleton--wide" />
                  </div>
                }
              >
                <WorkspaceCanvas />
              </Suspense>
            </div>

            <div className="hero-focus-card glass-panel">
              <div className="hero-focus-card__header">
                <div>
                  <span className="hero-focus-card__eyebrow">Production engineering focus</span>
                  <strong>React, Node, MongoDB, MySQL, React Native</strong>
                </div>
                <div className="hero-focus-card__tags">
                  <span>Real work</span>
                  <span>Live apps</span>
                  <span>Mobile</span>
                </div>
              </div>
              <div className="hero-focus-card__image">
                <img src={heroFocusImage} alt="Production engineering focus artwork" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        <section className="facts-grid hero-facts" aria-label="Highlights">
          {quickFacts.map((fact) => (
            <motion.article key={fact} className="fact-card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
              <span>{fact}</span>
            </motion.article>
          ))}
        </section>

        <section id="about" className="section">
          <SectionHeading
            eyebrow="About"
            title="1+ year of MERN work across React, Node, Express, MongoDB, MySQL, APIs, authentication, admin dashboards, and deployment."
            description="I also built Split Your Trip as my personal React Native project."
          />
          <div className="about-layout">
            <div className="glass-panel">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
            <div className="glass-panel glass-panel--accent">
              <h3>Core stack</h3>
              <ul className="checklist">
                <li>React and React Native</li>
                <li>Node.js, Express.js, REST APIs</li>
                <li>MongoDB and MySQL</li>
                <li>Authentication and role based access</li>
                <li>Deployment and server migration</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading
            eyebrow="Technical Skills"
            title="Categorized skills built for real product teams."
            description="The portfolio emphasizes engineering capabilities rather than isolated icons."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article key={group.title} className="skill-card" whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <div className="skill-card__header">
                  <span>{group.title}</span>
                  <span className={`skill-dot skill-dot--${group.icon}`} />
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading
            eyebrow="Professional Experience"
            title="Real work, real responsibilities, and a personal product that I can explain in detail."
            description="This timeline only includes work that matches the current role I am applying for."
          />
          <div className="timeline">
            {professionalExperience.map((item, index) => (
              <motion.article key={item.title} className="timeline-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08 }}>
                <div className="timeline-item__dot" />
                <div className="timeline-item__content">
                  <div className="timeline-item__meta">
                    <span>{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.bullets ? (
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading
            eyebrow="Projects"
            title="Three real project areas I have worked on."
            description="The cards stay generic on purpose, but every description reflects actual project types I can discuss."
          />
          <div className="feature-project">
            <div className="feature-project__copy glass-panel">
              <span className="project-kicker">Personal project</span>
              <h3>{featuredProject.name}</h3>
              <p className="project-tagline">{featuredProject.tagline}</p>
              <div className="project-block">
                <strong>Problem</strong>
                <p>{featuredProject.problem}</p>
              </div>
              <div className="project-block">
                <strong>Solution</strong>
                <p>{featuredProject.solution}</p>
              </div>
              <div className="project-block">
                <strong>Architecture</strong>
                <p>{featuredProject.architecture}</p>
              </div>
              <div className="project-meta-grid">
                <div>
                  <span>Tech Stack</span>
                  <p>{featuredProject.tech.join(' | ')}</p>
                </div>
                <div>
                  <span>Responsibilities</span>
                  <ul>
                    {featuredProject.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Challenges</span>
                  <ul>
                    {featuredProject.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Future Improvements</span>
                  <ul>
                    {featuredProject.future.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="feature-project__showcase">
              <motion.div className="showcase-banner glass-panel" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
                <img src={featuredProject.banner} alt="Split Your Trip full showcase" loading="lazy" />
              </motion.div>
              <ProjectScreenshotRail screenshots={featuredProject.screenshots} title={featuredProject.name} />
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Additional Projects"
            title="Ride, booking, delivery, and reservation work."
            description="Each card keeps the summary tight and factual."
          />
          <div className="project-grid">
            {otherProjects.map((project) => (
              <motion.article key={project.name} className="project-card" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
                <h3>{project.name}</h3>
                <div className="project-card__block">
                  <strong>Problem</strong>
                  <p>{project.problem}</p>
                </div>
                <div className="project-card__block">
                  <strong>Solution</strong>
                  <p>{project.solution}</p>
                </div>
                <div className="project-card__block">
                  <strong>Tech Stack</strong>
                  <p>{project.techStack}</p>
                </div>
                <div className="project-card__block">
                  <strong>My Contribution</strong>
                  <p>{project.contribution}</p>
                </div>
                <div className="project-card__block">
                  <strong>Screenshots</strong>
                  <p>{project.screenshots.length ? 'Included in the gallery above.' : 'Not attached in this build.'}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="What I Can Build"
            title="Clear contribution areas for hiring managers."
            description="These are the kinds of features I can contribute to right away."
          />
          <div className="pill-grid">
            {buildItems.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Engineering Highlights"
            title="Technical strengths presented like capabilities."
            description="These are the kinds of features I have worked with in production."
          />
          <div className="highlights-grid">
            {highlights.map((item) => (
              <motion.div key={item} className="highlight-chip" whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 320, damping: 20 }}>
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeading
            eyebrow="Education"
            title="Bachelor of Technology (Computer Science)"
            description="Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, 2019-2023, CGPA: 7.5."
          />
          <div className="education-summary">
            <article className="education-card glass-panel">
              <h3>{education.degree}</h3>
              <p>{education.university}</p>
              <p>{education.city}</p>
              <p>{education.years}</p>
              <p>CGPA: {education.cgpa}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionHeading
            eyebrow="Contact"
            title="Interested in working together?"
            description="I'm currently open to MERN Stack Developer opportunities and freelance work."
          />
          <div className="contact-layout">
            <div className="glass-panel contact-panel">
              <h3>Connect through GitHub, LinkedIn or email.</h3>
              <p>Open to product work, backend APIs, admin dashboards, React Native projects, and deployment support.</p>
              <div className="contact-links">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {Icon ? <Icon /> : null}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <form className="glass-panel contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="field-row">
                <label>
                  Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
              </div>
              <label>
                Message
                <textarea rows="6" placeholder="Tell me what you need built or fixed." />
              </label>
              <GlassButton icon={FaEnvelope}>Send Message</GlassButton>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Deepak Sahu. Built for recruiters, clients, and real production work.</p>
      </footer>
    </div>
  );
}

export default App;
