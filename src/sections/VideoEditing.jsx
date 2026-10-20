
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Mahesh Babu: The Warrior Edit",
    category: "CHARACTER REVEAL · NARRATIVE EDITING",
    source: "Kalki 2898 AD · Athadu · 1: Nenokkadine · Khaleja",
    music: "Khaleja - Mani Sharma",
    description:
      "A cinematic character-reveal edit built around a conversation between Ashwatthama and a child in Kalki 2898 AD about the most powerful warrior. The narrative setup leads into a series of Mahesh Babu character reveals using footage from Athadu, 1: Nenokkadine and Khaleja, building anticipation through escalating visuals and music from Khaleja.",
    approach:
      "Dialogue-led setup, timed character reveals and music-driven cuts connect performances from different films into one high-impact cinematic sequence.",
    techniques: [
      "Narrative Editing",
      "Character Reveals",
      "Music Synchronization",
      "Cinematic Pacing",
    ],
    video:
      "https://drive.google.com/file/d/1A8SVjzeX9sF8jABecskXzSTLCIGC9_S7/preview",
    thumbnail: "/projects/thumbnails/project-01.png",
  },
  {
    number: "02",
    title: "Mirchi × Hangova",
    category: "VISUAL CROSSOVER · SONG EDIT",
    source: "Mirchi",
    music: "Hangova - Anirudh",
    description:
      "A music-led visual crossover pairing Prabhas and Anushka Shetty montage footage from the Telugu film Mirchi with Hangova, a song from the Tamil film D.C composed by Anirudh Ravichander. The edit brings the performances and soundtrack together to create a cohesive visual and musical experience. The Clips are taken and combined from Movie Mirchi starring Prabhas and Anushka.",
    approach:
      "Musical phrasing, shot selection and visual continuity guide the montage, connecting romantic moments with the rhythm and mood of the soundtrack.",
    techniques: [
      "Music-Video Editing",
      "Beat Synchronization",
      "Visual Continuity",
      "Mood Building",
    ],
    video:
      "https://drive.google.com/file/d/1NJeXlXCH6ero_d-I2bIer3h32UWSW12Y/preview",
    thumbnail: "/projects/thumbnails/project-02.jpg",
  },
  {
    number: "03",
    title: "Arjun Reddy: The Loneliness Edit",
    category: "EMOTIONAL STORYTELLING · CHARACTER STUDY",
    source: "Arjun Reddy",
    music: "Rockstar soundtrack",
    description:
      "An emotional character edit featuring Vijay Deverakonda in Arjun Reddy, paired with music from Rockstar. The edit explores the character's loneliness and inner turmoil through selected film moments, expressive imagery and the emotional weight of the soundtrack.",
    approach:
      "Atmosphere, facial expressions, musical phrasing and deliberate pacing work together to communicate isolation, allowing the emotion of each moment to guide the edit.",
    techniques: [
      "Emotional Pacing",
      "Character Study",
      "Soundtrack Pairing",
      "Visual Rhythm",
    ],
    video:
      "https://drive.google.com/file/d/1oWWOqSbgalfO76N0dbXkhYSaMxwRKLtJ/preview",
    thumbnail: "/projects/thumbnails/project-03.png",
  },
];

function VideoProject({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`editing-card editing-card-${project.number}`}>
      <div className="editing-media editing-drive-media">
        {!isOpen ? (
          <button
            type="button"
            className="editing-thumbnail-button"
            onClick={() => setIsOpen(true)}
            aria-label={`Play ${project.title}`}
          >
            <img
              className="editing-thumbnail-image"
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              loading="lazy"
            />

            <span
              className="editing-thumbnail-shade"
              aria-hidden="true"
            />

            <span
              className="editing-thumbnail-play"
              aria-hidden="true"
            >
              <span>▶</span>
            </span>

            <span className="editing-number">
              {project.number}
            </span>

            <span className="editing-thumbnail-label">
              WATCH EDIT
            </span>
          </button>
        ) : (
          <iframe
            src={project.video}
            title={`Watch ${project.title}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>

      <div className="editing-card-content">
        <div className="editing-card-meta">
          <span>{project.category}</span>
          <span>CAPCUT</span>
        </div>

        <h3>{project.title}</h3>

        <p className="editing-description">
          {project.description}
        </p>

        <div className="editing-project-info">
          <div>
            <span className="editing-info-label">SOURCE FILM</span>
            <p>{project.source}</p>
          </div>

          <div>
            <span className="editing-info-label">MUSIC</span>
            <p>{project.music}</p>
          </div>
        </div>

        <div className="editing-process">
          <span>CREATIVE APPROACH</span>
          <p>{project.approach}</p>
        </div>

        <div className="editing-tags">
          {project.techniques.map((technique) => (
            <span key={technique}>{technique}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function VideoEditing() {
  return (
    <section className="editing-section" id="work">
      <div className="editing-container">
        <header className="editing-heading">
          <p className="editing-eyebrow">
            <span className="editing-dot" />
            CHANDRA / CINEMATIC EDITS
          </p>

          <h2>
            Reimagining
            <br />
            <span>Cinema.</span>
          </h2>

          <p className="editing-intro">
            Cinematic fan edits exploring character, music
            and emotion through the language of film.
            Each project experiments with narrative,
            visual rhythm and the relationship between
            image and sound.
          </p>

          <div className="editing-categories">
            <span className="editing-category-active">
              SELECTED PROJECTS / 03
            </span>
          </div>
        </header>

        <div className="editing-project-grid">
          {projects.map((project) => (
            <VideoProject
              key={project.number}
              project={project}
            />
          ))}
        </div>

        <footer className="editing-footer">
          <span>03 CINEMATIC FAN EDITS</span>
          <span>EVERY FRAME HAS A PURPOSE.</span>
        </footer>
      </div>
    </section>
  );
}

export default VideoEditing;
