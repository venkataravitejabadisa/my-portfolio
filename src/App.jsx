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
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
>

<button className="btn btn-outline">
View Resume
</button>

</a>

<a href="/resume.pdf" download>

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
    self-motivated Frontend Developer currently pursuing a Bachelor's
    degree in Computer Science and Engineering.
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
          href="https://github.com/your-github-link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>

        <a
          href="https://your-live-link.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Live Demo
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

    <a
      href="#"
      className="btn btn-outline"
    >
      Live Demo
    </a>
  </div>
</div>
      </section>
      <section className="certificates" id="certificates" data-aos="fade-left">
  <h2>My Certifications</h2>

  <div className="certificate-grid">

    <div className="certificate-card">
      <img src="/certificates/acn.jpeg" alt="Advanced Computer Networks" />
      <h3>Advanced Computer Networks</h3>
      <p>NPTEL (IIT Madras / SWAYAM)</p>
      <a href="/certificates/acn.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/ai.jpeg" alt="Fundamentals of AI" />
      <h3>Fundamentals of Artificial Intelligence</h3>
      <p>Wadhwani Foundation</p>
      <a href="/certificates/ai.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/dl&ai.jpeg" alt="Deep Learning Foundations for AI" />
      <h3>Deep Learning Foundations for AI</h3>
      <p>Udemy</p>
      <a href="/certificates/dl&ai.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/wdci.jpeg" alt="Generative AI" />
      <h3>web Development & Cloud Integration I</h3>
      <p>Skilldzire</p>
      <a href="/certificates/wdci.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/cs.jpeg" alt="Cybersecurity" />
      <h3>Cybersecurity</h3>
      <p>Tech Mahindra Foundation (Skill India)</p>
      <a href="/certificates/cs.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/wd.jpeg" alt="Web Design & Development" />
      <h3>Web Design & Development</h3>
      <p>Skill India Digital Hub (NSDC)</p>
      <a href="/certificates/wd.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/html.jpeg" alt="HTML Essentials" />
      <h3>HTML Essentials</h3>
      <p>Cisco Networking Academy</p>
      <a href="/certificates/html.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/css.jpeg" alt="CSS Essentials" />
      <h3>CSS Essentials</h3>
      <p>Cisco Networking Academy</p>
      <a href="/certificates/css.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/pe-2.jpeg" alt="Python Essentials 2" />
      <h3>Python Essentials 2</h3>
      <p>Cisco Networking Academy</p>
      <a href="/certificates/pe-2.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/iot.jpeg" alt="Industry 4.0 and IIoT" />
      <h3>Introduction to Industry 4.0 and IIoT</h3>
      <p>Industrial Internet of Things</p>
      <a href="/certificates/iot.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/ibm.jpeg" alt="IBM SkillsBuild" />
      <h3>Create a Great Professional Resume</h3>
      <p>IBM SkillsBuild</p>
      <a href="/certificates/ibm.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

    <div className="certificate-card">
      <img src="/certificates/isyep.jpeg" alt="MY Bharat" />
      <h3>Inter State Youth Exchange Programme</h3>
      <p>MY Bharat</p>
      <a href="/certificates/isyep.jpeg" target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>

  </div>
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
  <h2>Education</h2>

  <div className="education-card">
    <h3>Bachelor of Technology (B.Tech)</h3>
    <p><strong>Branch:</strong> Computer Science and Engineering</p>
    <p><strong>College:</strong> SREE VAHINI INSTITUTE OF SCIENCE & TECHNOLOGY</p>
    <p><strong>University:</strong> JNTU KAKINADA</p>
    <p><strong>Year:</strong> 2024 – 2027</p>
    <p><strong>CGPA:</strong> 8.52 (Update with your actual CGPA)</p>
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
<section className="github" id="github" data-aos="zoom-in">
  <h2>GitHub Statistics</h2>

  <div className="github-stats">
    <img
      src="https://github-readme-stats.vercel.app/api?username=venkataravitejabadisa&show_icons=true&theme=tokyonight"
      alt="GitHub Stats"
    />

    <img
      src="https://github-readme-streak-stats.herokuapp.com/?user=venkataravitejabadisa&theme=tokyonight"
      alt="GitHub Streak"
    />
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
