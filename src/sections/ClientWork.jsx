
const projects = [
  {
    number: "01",
    type: "CREATOR COLLABORATION",
    title: "Fitness & Medical Lifestyle",
    subtitle: "Short-form content for a personal creator brand.",
    description:
      "Edited multiple Instagram Reels for a creator sharing gym training, fitness progress and experiences from his MBBS internship. The work focused on shaping everyday footage into engaging short-form content suited to social media.",
    roles: [
      "Reels Editing",
      "Short-form Storytelling",
      "Content Pacing",
    ],
    links: [
      {
        label: "Reel - 1",
        url: "https://www.instagram.com/reel/DT5ItSqibSF/?srtk=MW4wcmJybHVtbzMwMQ==",
      },
      {
        label: "Reel - 2",
        url: "https://www.instagram.com/reel/DUgNZAWidc8/?exln=MTllM2ltdW11bWt1ag==",
      },
      {
        label: "Reel - 3",
        url: "https://www.instagram.com/reel/DckPzIBuryc/?vrfl=MXR1MnFidXZhM3FybQ==",
      },
      {
        label: "Reel - 4",
        url: "https://www.instagram.com/reel/DVXci9diY0T/?xtok=Y3lqd3J6Y2h2eXNu",
      },
      {
        label: "Reel - 5",
        url: "https://www.instagram.com/reel/Deg9qDCDOiR/?xtok=MWt0bjB1dXU5c2k1Zg==",
      },
    ],
  },
  {
    number: "02",
    type: "PROFESSIONAL EXPERIENCE",
    title: "Creative & Digital Internship",
    subtitle: "Creative production across design, content and web.",
    description:
      "During my internship at a previous company, I contributed across multiple creative and technical responsibilities. My work included graphic design, content creation, Reels editing and web development, giving me experience in both visual communication and digital production.",
    roles: [
      "Graphic Design",
      "Content Creation",
      "Reels Editing",
      "Web Development",
    ],
    links: [
      {
        label: "Company Website",
        url: "https://www.unitedcloudoverseas.com",
      },
      {
        label: "Instagram Profile",
        url: "https://www.instagram.com/unitedcloudoverseaseducation?psln=NHZxdHd3dG85aGty",
      },
    ],
  },
];

function ClientWork() {
  return (
    <section className="client-work-section" id="client-work">
      <div className="client-work-container">
        <header className="client-work-heading">
          <p className="client-work-eyebrow">
            <span /> SELECTED COLLABORATIONS / 002
          </p>

          <h2>
            Work beyond
            <br />
            <span>my own frame.</span>
          </h2>

          <p className="client-work-intro">
            Creative work shaped by collaboration, real
            audiences and the needs of different brands.
            From short-form content to digital experiences.
          </p>
        </header>

        <div className="client-work-list">
          {projects.map((project) => (
            <article
              className="client-work-project"
              key={project.number}
            >
              <div className="client-work-index">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <div className="client-work-main">
                <p className="client-work-subtitle">
                  {project.subtitle}
                </p>

                <h3>{project.title}</h3>

                <p className="client-work-description">
                  {project.description}
                </p>

                <div className="client-work-roles">
                  {project.roles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="client-work-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} <span>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer className="client-work-footer">
          <span>CREATIVE COLLABORATIONS</span>
          <span>DESIGN / CONTENT / DIGITAL</span>
        </footer>
      </div>
    </section>
  );
}

export default ClientWork;
