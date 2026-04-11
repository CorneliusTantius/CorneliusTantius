import './App.css'

function App() {
  const asciiArt = `
 ██████╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗     ██╗██╗   ██╗███████╗    ████████╗ █████╗ ███╗   ██╗████████╗██╗██╗   ██╗███████╗
██╔════╝██╔═══██╗██╔══██╗████╗  ██║██╔════╝██║     ██║██║   ██║██╔════╝    ╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝██║██║   ██║██╔════╝
██║     ██║   ██║██████╔╝██╔██╗ ██║█████╗  ██║     ██║██║   ██║███████╗       ██║   ███████║██╔██╗ ██║   ██║   ██║██║   ██║███████╗
██║     ██║   ██║██╔══██╗██║╚██╗██║██╔══╝  ██║     ██║██║   ██║╚════██║       ██║   ██╔══██║██║╚██╗██║   ██║   ██║██║   ██║╚════██║
╚██████╗╚██████╔╝██║  ██║██║ ╚████║███████╗███████╗██║╚██████╔╝███████║       ██║   ██║  ██║██║ ╚████║   ██║   ██║╚██████╔╝███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚══════╝
                                                                                                                                   `

  const heroContent = {
    name: "Tantius Cornelius",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in building modern web applications. I love turning ideas into reality through code.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Docker"]
  }

  const workExperience = [
    {
      company: "Tech Corp",
      role: "Senior Developer",
      period: "2023 - Present",
      description: "Leading frontend architecture and mentoring junior developers."
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2021 - 2023",
      description: "Built and maintained full-stack applications using React and Node.js."
    },
    {
      company: "WebAgency",
      role: "Junior Developer",
      period: "2019 - 2021",
      description: "Developed responsive websites and collaborated with design teams."
    }
  ]

  const awards = [
    {
      title: "Best Developer Award",
      year: "2024",
      description: "Recognized for outstanding contribution to open source projects."
    },
    {
      title: "Hackathon Winner",
      year: "2023",
      description: "First place in national coding competition."
    }
  ]

  const languages = [
    { name: "English", level: "Native" },
    { name: "Indonesian", level: "Native" },
    { name: "Japanese", level: "Basic" }
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
          <pre className="ascii-art">{asciiArt}</pre>
          <div className="hero-info">
            <p className="hero-title">{heroContent.title}</p>
            <p className="hero-bio">{heroContent.bio}</p>
          </div>
        </section>
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
                <p className="description">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
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
        <section className="skills-section">
          <h3 className="section-title">~/programming-languages</h3>
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