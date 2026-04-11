import './App.css'

function App() {
  const asciiArt1 = `
 ██████╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗     ██╗██╗   ██╗███████╗
██╔════╝██╔═══██╗██╔══██╗████╗  ██║██╔════╝██║     ██║██║   ██║██╔════╝
██║     ██║   ██║██████╔╝██╔██╗ ██║█████╗  ██║     ██║██║   ██║███████╗
██║     ██║   ██║██╔══██╗██║╚██╗██║██╔══╝  ██║     ██║██║   ██║╚════██║
╚██████╗╚██████╔╝██║  ██║██║ ╚████║███████╗███████╗██║╚██████╔╝███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚══════╝`;

 const asciiArt2 = `
████████╗ █████╗ ███╗   ██╗████████╗██╗██╗   ██╗███████╗
╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝██║██║   ██║██╔════╝
   ██║   ███████║██╔██╗ ██║   ██║   ██║██║   ██║███████╗
   ██║   ██╔══██║██║╚██╗██║   ██║   ██║██║   ██║╚════██║
   ██║   ██║  ██║██║ ╚████║   ██║   ██║╚██████╔╝███████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚══════╝`;
 const heroContent = {
    name: "Tantius Cornelius",
    title: "Full Stack Developer",
    bio: "Software Engineer experienced in building backend services and production systems across education, consulting, fintech, and travel sectors. Skilled in backend development, API integration, system reliability, and well versed developing with AI bsed tools.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Docker"]
  }

  const workExperience = [
    {
      company: "SingaPay",
      role: "Senior Full Stack Engineer (SDE-3)",
      period: "2026 - Present",
      description: [
        "Implemented major Virtual Account Core generation algorithm enhancement to reduce VA generation process time, latency and database load (2-3 minutes) to less than 1s generation time.",
        "Implemented pending transaction handling to reduce manual operational contact rate up to ~90%.",
        "Created end to end gift checkout web and integrate with payment link gateway."
      ]
    },
    {
      company: "Traveloka",
      role: "Software Engineer (SDE-2)",
      period: "2024 - 2026",
      description: [
        "Built and maintain scalable backend services across Ground Transport (airport transfers, car rentals), Travel Activities (attractions, tours, experiences), and Cruise Booking domains all using Java Spring, Terraform & AWS.",
        "Drove technical excellence and cost efficiency by refactoring legacy systems and optimizing existing workflows, allowing less development complexity on 2 major product project and several subprojects (~30% on discoverability and ~20% on buyability).",
        "Designed and developed provider API integration module that allow seamless provider integration (reducing 95% development effort during integration).",
        "Improved information clarity that increase purchase conversion rate to ~10% and reduce customer contact rate ~40%.",
        "Actively maintain project vulnerability issues, manage product domain IAC using terraform."
      ]
    },
    {
      company: "Kamoro Maxima Integra",
      role: "Junior Developer",
      period: "2023 - 2024",
      description: [
        "Developed backend system for PT Freeport Indonesia to assist mining operational audit, monitor, and safety protocol to reduce casualty and audit time for mining tools and machines.",
        "Increased operational tracking system capability up to 60%+ at the time allowing operational staff and managers to do less manual audit and increase workload efficiency on mining site.",
        "Ensured scalability, reliability and maintainability of one of most used internal program to allow site-worker to easily access transportation on mining site, allowing site-worker to able to book, schedule and manage their own transport plan."
      ]
    },
    {
      company: "IT Division - Bina Nusantara University",
      role: "Software Engineer (SDE-2)",
      period: "2020 - 2023",
      description: [
        "Started off from Associate Member and wave through Junior Software Engineer then Software Engineer throughout college years, internship and after graduate.",
        "Developed backend systems and automation for Zoom API integration during covid, allowing attendance system to shift 100% by system during class, and later scale up the system to enable wifi-attendance checking in campus.",
        "Developed and maintained newbinusmaya project allowing student to access all class resources, class schedule, submitting assignment, scoring, and discussion forum seamlessly from web or mobile app.",
        "Developed internal project DevBees as a platform for internal documentation including API contract, Master & Transaction Database relational, and also general knowledge docs. Allowing internal documentation to have 0 cost"
      ]
    }
  ]

  const awards = [
    {
      title: "Top 7% from 964 Teams",
      year: "2021",
      description: "Shopee Code League - Multi-Channel Contacts"
    },
    {
      title: "Top 12% from 823 Teams",
      year: "2020",
      description: "Shopee Code League - Product Detection 2020"
    },
    {
      title: "Participant",
      year: "2017",
      description: "Province Computer Olympiad - Programming Competition"
    }
  ]

  const languages = [
    { name: "English", level: "Native" },
    { name: "Indonesian", level: "Native" },
    { name: "Korean", level: "Basic"},
    { name: "Mandarin", level: "Basic" }
  ]

  const education = [
    {
      institution: "Bina Nusantara University",
      degree: "Bachelor of Computer Science",
      period: "2019-2023",
      description: "Best Graduate with GPA 3.94/4.0"
    }
  ]

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <span className="terminal-title">tantius@cornelius: ~</span>
      </div>
      <div className="terminal-body">
        <section className="hero-section">
          <div className="ascii-container">
            <pre className="ascii-art ascii-art-1">{asciiArt1}</pre>
            <pre className="ascii-art ascii-art-2">{asciiArt2}</pre>
          </div>
          <div className="hero-info">
            <p className="hero-title">{heroContent.title}</p>
            <p className="hero-bio">{heroContent.bio}</p>
          </div>
        </section>
        <hr className="section-divider" />
        <section className="experience-section">
          <h3 className="section-title">~/work-experience</h3>
          <div className="experience-list">
            {workExperience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <span className="company">{job.company}</span>
                  <span className="period">{job.period}</span>
                </div>
                <p className="role">{job.role}</p>
                <ul className="description-list">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="description">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        <section className="experience-section">
          <h3 className="section-title">~/awards-honors</h3>
          <div className="award-list">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-header">
                  <span className="award-title">{award.title}</span>
                  <span className="award-year">{award.year}</span>
                </div>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        <section className="language-section">
          <h3 className="section-title">~/languages</h3>
          <div className="language-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        <section className="education-section">
          <h3 className="section-title">~/education</h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <span className="institution">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="degree">{edu.degree}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="section-divider" />
        <section className="skills-section">
          <h3 className="section-title">~/skills</h3>
          <div className="hero-skills">
            {heroContent.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>
        <div className="terminal-prompt">
          <span className="prompt-user">tantius@cornelius</span>:<span className="prompt-path">~</span>$ <span className="cursor">_</span>
        </div>
      </div>
    </div>
  )
}

export default App
