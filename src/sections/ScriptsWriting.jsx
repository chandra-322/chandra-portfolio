
const scripts = [
  {
    number: "01",
    title: "THE BRIDGE",
    format: "SHORT FILM SCREENPLAY",
    genre: "Drama · Social Awareness",
    language: "Telugu",
    description:
      "Arjun's first days at medical college turn into an experience of fear and humiliation when he encounters a group of seniors who believe ragging is tradition. After a nightmare reveals the devastating consequences of that culture, he returns to college to discover a different possibility: seniors who welcome, support and guide their juniors.",
    statement:
      "A story about empathy, campus culture and the choice to build relationships instead of barriers.",
    focus: ["Screenwriting", "Character Development", "Social Drama"],
    pdf: "/scripts/the-bridge.pdf",
  },
  {
    number: "02",
    title: "APP MATES",
    format: "EPISODIC SCREENPLAY",
    genre: "Comedy · Romance",
    language: "Telugu",
    description:
      "Avinash's everyday phone apps become lively characters who comment on his habits, tease him about his crush and react to every emotional twist. Across ten episodes, his digital companions witness the nervous anticipation of a confession, an uncertain response and the awkward, hopeful moments that follow.",
    statement:
      "A light-hearted concept that turns familiar digital experiences into characters, using humour and personification to explore modern relationships.",
    focus: ["Concept Development", "Dialogue", "Comedy Writing"],
    pdf: "/scripts/app-mates.pdf",
  },
];

function ScriptsWriting() {
  return (
    <section className="scripts-section" id="scripts">
      <div className="scripts-container">
        <header className="scripts-heading">
          <p className="scripts-eyebrow">
            <span /> ORIGINAL WRITING / 003
          </p>

          <h2>
            Stories begin
            <br />
            <span>on the page.</span>
          </h2>

          <p className="scripts-intro">
            Original concepts, characters and screenplays.
            Before a story reaches the screen, it begins
            with an idea worth exploring.
          </p>
        </header>

        <div className="scripts-list">
          {scripts.map((script) => (
            <article className="script-project" key={script.number}>
              <div className="script-index">
                <span>{script.number}</span>
                <span>{script.format}</span>
              </div>

              <div className="script-content">
                <div className="script-meta">
                  <span>{script.genre}</span>
                  <span>{script.language}</span>
                </div>

                <h3>{script.title}</h3>

                <p className="script-description">
                  {script.description}
                </p>

                <p className="script-statement">
                  {script.statement}
                </p>

                <div className="script-tags">
                  {script.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  className="script-read-link"
                  href={script.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>READ FULL SCRIPT</span>
                  <span className="script-link-icon">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <footer className="scripts-footer">
          <span>CHANDRA / ORIGINAL SCREENPLAYS</span>
          <span>IDEAS INTO STORIES.</span>
        </footer>
      </div>
    </section>
  );
}

export default ScriptsWriting;
