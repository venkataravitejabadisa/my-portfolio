import "./App.css";
import Navbar from "./components/Navbar";
import profile from "./assets/profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Loader from "./components/Loader"; 
import CustomCursor from "./components/CustomCursor";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll } from "framer-motion";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
 useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
if (loading) {
  return <Loader />;
}
return (
  <>
  <CustomCursor />

  <div className={darkMode ? "app dark" : "app light"}>
    <motion.div
  className="progress-bar"
  style={{ scaleX: scrollYProgress }}
/>
    <Navbar />

    {/* Hero */}
    <div className="container" id="home">
      <div className="hero">
        <img src={profile} alt="Profile" className="profile-image" />

        <h3>👋 Hello, I'm</h3>
        <h2>BADISA VENKATA RAVITEJA</h2>
 <h2>
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "Java Developer",
      2000,
      "Web Designer",
      2000,
      "Open Source Learner",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>
<p className="availability">
🟢 Available for Internships & Frontend Developer Roles
</p>
        <p>
          Passionate about building modern, responsive, and user-friendly web
          applications using React, JavaScript, HTML, and CSS.
        </p>

        <div className="buttons">

<button className="btn">
Hire Me
</button>

<a
href="badisavenkataraviteja.pdf"
target="_blank"
rel="noopener noreferrer"
>

<button className="btn btn-outline">
View Resume
</button>

</a>

<a href="/badisavenkataraviteja.pdf" download>

<button className="btn download-btn">
Download Resume
</button>

</a>

</div>

        <div className="social-links">
          <a
            href="https://github.com/venkataravitejabadisa"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/venkata-raviteja-badisa-658739282"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:venkataravitejabadisa@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </div>

    {/* About */}
      {/* About */}
      <section className="about" id="about" data-aos="fade-up">
  <h2>About Me</h2>

  <p>
    I am <strong>BADISA VENKATA RAVITEJA</strong>, a passionate and
     Frontend Developer  pursuing a Bachelor's degree in Computer Science and Engineering.
  </p>
  <p>
    I am actively looking for Internship and Frontend Developer
    opportunities where I can contribute, learn, and grow as a software
    engineer.
  </p>
</section>
      <section className="tech-stack" id="tech-stack" data-aos="zoom-in">
  <h2>Tech Stack</h2>

  <div className="tech-grid">

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
      />
      <p>HTML5</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
      />
      <p>CSS3</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <p>JavaScript</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
      <p>React</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
      />
      <p>Git</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
      />
      <p>GitHub</p>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
      />
      <p>Python</p>
    </div>

  </div>
</section><section className="projects" id="projects" data-aos="fade-right">
  <h2>My Projects</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>Personal Portfolio</h3>

      <p>
        A modern responsive portfolio built using React, JavaScript and CSS with
        animations, certificates, contact form and dark theme.
      </p>

      <div className="project-buttons">
        <a
          href="https://github.com/venkataravitejabadisa/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
  <div className="project-grid">

    <div className="project-card">
      <h3>ATM Machine</h3>
      
      <p>
      Console-based ATM Machine application using Python to simulate basic banking operations. The project includes PIN authentication, account selection, balance enquiry, cash deposit, cash withdrawal, PIN change, and mini statement functionality.
 
      </p>

      <div className="project-buttons">
        <a
          href="https://github.com/venkataravitejabadisa/ATM-Machine"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
<div className="project-card">
  <h3>Event Management System</h3>
  <p>
    React-based event management website with responsive UI, event listings and
    user-friendly navigation.
  </p>

  <div className="project-buttons">
    <a
      href="https://github.com/your-github-link"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      GitHub
    </a>
  </div>
</div>
      </section>
     <section className="certificates" id="certificates" data-aos="fade-left">
  <h2>My Certifications</h2>
  <div className="certificate-grid"></div>

  {[
    {
      img: "acn.jpeg",
      title: "Advanced Computer Networks",
      org: "NPTEL (IIT Madras / SWAYAM)",
    },
    {
      img: "ai.jpeg",
      title: "Fundamentals of Artificial Intelligence",
      org: "Wadhwani Foundation",
    },
    {
      img: "dl&ai.jpeg",
      title: "Deep Learning Foundations for AI",
      org: "Udemy",
    },
    {
      img: "wdci.jpeg",
      title: "Web Development & Cloud Integration I",
      org: "SkillDzire",
    },
    {
      img: "cs.jpeg",
      title: "Cybersecurity",
      org: "Tech Mahindra Foundation",
    },
    {
      img: "wd.jpeg",
      title: "Web Design & Development",
      org: "Skill India Digital Hub",
    },
    {
      img: "html.jpeg",
      title: "HTML Essentials",
      org: "Cisco Networking Academy",
    },
    {
      img: "css.jpeg",
      title: "CSS Essentials",
      org: "Cisco Networking Academy",
    },
    {
      img: "pe-2.jpeg",
      title: "Python Essentials 2",
      org: "Cisco Networking Academy",
    },
    {
      img: "iot.jpeg",
      title: "Introduction to Industry 4.0 and IIoT",
      org: "Industrial Internet of Things",
    },
    {
      img: "ibm.jpeg",
      title: "Create a Great Professional Resume",
      org: "IBM SkillsBuild",
    },
    {
      img: "isyep.jpeg",
      title: "Inter State Youth Exchange Programme",
      org: "MY Bharat",
    },
  ].map((cert, index) => (
    <div className="certificate-card" key={index}>
      <img
        src={`${import.meta.env.BASE_URL}certificates/${cert.img}`}
        alt={cert.title}
      />

      <h3>{cert.title}</h3>

      <p>{cert.org}</p>

      <a
        href={`${import.meta.env.BASE_URL}certificates/${cert.img}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
      </a>
    </div>
  ))}

</section>
{/* Achievements */}
<section className="achievements" id="achievements" data-aos="zoom-in">
  <h2>Achievements</h2>

  <div className="achievement-grid">

    <div className="achievement-card">
      <span className="achievement-icon">🏆</span>
      <h3>12+ Professional Certifications</h3>
      <p>
        Successfully completed certifications from NPTEL, Cisco Networking
        Academy, IBM SkillsBuild, Udemy, Skill India, Tech Mahindra Foundation,
        and Wadhwani Foundation.
      </p>
    </div>

    <div className="achievement-card">
      <span className="achievement-icon">💻</span>
      <h3>React Portfolio Website</h3>
      <p>
        Designed and developed a modern, responsive portfolio website using
        React.js, HTML5, CSS3, and JavaScript with animations and interactive
        UI components.
      </p>
    </div>

    <div className="achievement-card">
      <span className="achievement-icon">📚</span>
      <h3>Continuous Learning</h3>
      <p>
        Continuously improving my skills in React, JavaScript, AI, Cloud,
        Cybersecurity, and Full Stack Web Development through online learning.
      </p>
    </div>

    <div className="achievement-card">
      <span className="achievement-icon">🚀</span>
      <h3>Academic Excellence</h3>
      <p>
        Maintaining a strong academic record while completing multiple technical
        certifications and personal development projects.
      </p>
    </div>

  </div>
</section>
<section className="education" id="education" data-aos="flip-up">
 <div className="education-card">
  <h3>B.TECH (CSE)</h3>
  <p><strong>College:</strong> SREE VAHINI INSTITUTE OF SCIENCE & TECHNOLOGY</p>
  <p><strong>Year:</strong> pursuing</p>
  <p><strong>CGPA:</strong> 8.68</p>
</div>

<div className="education-card">
  <h3>DIPLOMA (CSE)</h3>
  <p><strong>College:</strong> SREE VAHINI INSTITUTE OF SCIENCE & TECHNOLOGY</p>
  <p><strong>Year:</strong> 2021 – 2024</p>
  <p><strong>Percentage:</strong> 83.75</p>
</div>

<div className="education-card">
  <h3>SSC (10th Class)</h3>
  <p><strong>School:</strong> ST.ANN's EM HIGH SCHOOL</p>
  <p><strong>Year:</strong> 2021</p>
  <p><strong>Percentage:</strong> 10</p>
</div>
</section>
<section className="contact" id="contact" data-aos="fade-up">
  <h2>Contact Me</h2>

  <form className="contact-form">
    <input
      type="text"
      placeholder="Enter Your Name"
      required
    />

    <input
      type="email"
      placeholder="Enter Your Email"
      required
    />

    <input
      type="text"
      placeholder="Subject"
      required
    />

    <textarea
      rows="6"
      placeholder="Write Your Message"
      required
    ></textarea>

    <button type="submit" className="btn">
      Send Message
    </button>
  </form>
</section>
<footer className="footer">
  <h3>BADISA VENKATA RAVITEJA</h3>

  <p>Frontend Developer | React Developer</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#certificates">Certificates</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-social">
    <a
      href="https://github.com/venkataravitejabadisa"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/venkata-raviteja-badisa-658739282"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>

    <a href="mailto:venkataravitejabadisa@gmail.com">
      <FaEnvelope />
    </a>
  </div>

  <p className="copyright">
    © 2026 BADISA VENKATA RAVITEJA. All Rights Reserved.
  </p>
</footer>
<button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

</div>
</>
);
}

export default App;
