
const skills = [
  "Filmmaking",
  "Video Editing",
  "Screenwriting",
  "Visual Storytelling",
  "Creative Direction",
  "Content Creation",
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <header className="about-topline">
          <span>ABOUT THE FILMMAKER</span>
          <span>01 / THE CREATIVE</span>
        </header>

        <div className="about-main">
          {/* Portrait */}
          <div className="about-portrait-column">
            <div className="about-portrait">
              <img
                src="/images/chandra-portrait.jpg"
                alt="Chandra, filmmaker and video editor"
              />

              <span className="about-portrait-label">
                CHANDRA — BEHIND THE FRAME
              </span>
            </div>

            <div className="about-portrait-caption">
              <span>OBSERVING THE WORLD.</span>
              <span>FINDING THE STORY.</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="about-copy">
            <p className="about-eyebrow">
              <span className="about-dot" />
              FILMMAKER / EDITOR / STORYTELLER
            </p>

            <h2 className="about-heading">
              Every frame
              <br />
              has a <span>feeling.</span>
            </h2>

            <p className="about-lead">
              I'm Chandra, a filmmaker and video editor
              fascinated by the way images, sound and stories
              can make us feel something real.
            </p>

            <div className="about-description">
              <p>
                For me, filmmaking is more than capturing
                what happens in front of a camera. It's about
                finding meaning in the details, building an
                atmosphere and making every moment count.
              </p>

              <p>
                From developing ideas on paper to shaping
                the final cut, I enjoy exploring the many
                layers of storytelling. I'm constantly
                learning, experimenting and discovering my
                own visual language.
              </p>
            </div>

            <blockquote className="about-manifesto">
              <span className="about-manifesto-line" />
              <p>
                Not just what you see.
                <br />
                <span>What you feel.</span>
              </p>
            </blockquote>

            <a className="about-contact-link" href="#films">
              EXPLORE MY WORK
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Creative practice */}
        <div className="about-skills">
          <div className="about-skills-heading">
            <span>MY CREATIVE PRACTICE</span>
            <span>IDEAS INTO EXPERIENCES</span>
          </div>

          <div className="about-skill-list">
            {skills.map((skill, index) => (
              <div className="about-skill" key={skill}>
                <span className="about-skill-number">
                  0{index + 1}
                </span>
                <span className="about-skill-name">{skill}</span>
                <span className="about-skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>

        <footer className="about-footer">
          <span>CHANDRA / CREATIVE PRACTICE</span>
          <span>THE STORY IS ALWAYS EVOLVING.</span>
        </footer>
      </div>
    </section>
  );
}

export default About;
