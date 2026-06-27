import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaDribbble, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdDesignServices, MdCode, MdCampaign } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';
import image from "../asset/image.jpg";

const projects = [
  { title: 'E-Commerce Platform', desc: 'Full-stack shopping app with cart, payments, and admin dashboard.', tags: ['React', 'Node.js', 'MongoDB'], github: '#', live: '#' },
  { title: 'Task Manager App', desc: 'Drag-and-drop task board with real-time updates using Socket.io.', tags: ['React', 'Express', 'Socket.io'], github: '#', live: '#' },
  { title: 'Blog CMS', desc: 'Content management system with rich-text editor and SEO tools.', tags: ['React', 'Node.js', 'MongoDB'], github: '#', live: '#' },
  { title: 'Weather Dashboard', desc: 'Real-time weather app using OpenWeather API with beautiful UI.', tags: ['React', 'API', 'Chart.js'], github: '#', live: '#' },
  { title: 'Chat Application', desc: 'Real-time messaging app with rooms, emojis, and file sharing.', tags: ['React', 'Socket.io', 'Node.js'], github: '#', live: '#' },
  { title: 'Portfolio Website', desc: 'This portfolio — built with MERN stack and JWT authentication.', tags: ['MERN', 'JWT', 'Vite'], github: '#', live: '#' },
];

const services = [
  { icon: <MdDesignServices />, title: 'UI/UX Design', desc: 'Crafting clean, intuitive interfaces that users love to interact with.' },
  { icon: <MdCode />, title: 'Web Development', desc: 'Building fast, scalable full-stack apps with modern technologies.' },
  { icon: <MdCampaign />, title: 'Digital Marketing', desc: 'Growing your brand online with data-driven marketing strategies.' },
];

const skills = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs', 'JWT Auth'];

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="home">
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-social">
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Dribbble"><FaDribbble /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
        </div>
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">Hello, I'm</p>
            <h1>I'm <span className="coral">Web Developer</span><br />Your Name Here</h1>
            <p className="hero-bio">
              A passionate full-stack developer who loves building beautiful, functional web experiences.
              I turn ideas into reality using modern technologies.
            </p>
            <div className="hero-btns">
              <Button onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-img-wrap">
              <div className="hero-img-bg"></div>
              <div className="hero-avatar">
                <span className='rowi'>
                 Robin {/* <img  src={image} alt="Profile" width={250} height={240} /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">Get to know me better</p>
          <div className="coral-line"></div>

          <div className="about-grid">
            <div className="about-text">
              <h3>Developing With a Passion<br /><span className="coral">While Exploring The World.</span></h3>
              <p>I'm a full-stack web developer with a passion for creating elegant solutions to complex problems. With expertise in the MERN stack, I build everything from simple landing pages to complex web applications.</p>
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.</p>
              <p>I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.</p>
              <div className="about-skills">
                {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
              <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
            <div className="about-image">
              <div className="about-img-card">
                <div className="about-img-inner">
                  <div className="about-img-placeholder">
                    <MdCode size={64} color="var(--coral)" />
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">What Services I'm Providing</h2>
          <p className="section-sub">Here's what I can do for you</p>
          <div className="coral-line"></div>
          <div className="services-grid">
            {services.map(s => (
              <Card key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-sub">Some things I've built recently</p>
          <div className="coral-line"></div>
          <div className="portfolio-grid">
            {projects.map(p => (
              <div key={p.title} className="project-card">
                <div className="project-thumb">
                  <MdCode size={40} color="white" />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.github}><FaGithub /> GitHub</a>
                    <a href={p.live}><FaExternalLinkAlt /> Live</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">I'd love to hear from you</p>
          <div className="coral-line"></div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p>Have a project in mind? Let's work together to bring it to life. I'm always open to discussing new opportunities.</p>
              <div className="contact-details">
                <div><FaEnvelope /> <span>your@email.com</span></div>
                <div><FaPhone /> <span>+91 00000 00000</span></div>
                <div><FaMapMarkerAlt /> <span>Your City, India</span></div>
              </div>
              <div className="contact-socials">
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              {sent && <div className="success-msg">✅ Message sent successfully!</div>}
              <div className="form-row">
                <input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 <span className="coral">Your Name</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
