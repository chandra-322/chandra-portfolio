
import { Link, useParams } from "react-router-dom";

const filmDetails = {
  "the-block": {
    title: "THE BLOCK",
    subtitle: "An original short film by Chandra",
    category: "SHORT FILM",
    year: "2026",
    runtime: "1 minute 35 seconds",
    genre: "Experimental drama",
    language: "No dialogue",

    logline:
      "A writer loses his creative flow while working on a script, changes the music and finds his way back to the page, eventually bringing his story to an end.",

    synopsis:
      "THE BLOCK is a short film about the interruption of creativity and the process of finding one's rhythm again. The film opens with Self Control by Laura Branigan playing in the background as a writer works on a script at his laptop. As he continues writing, he suddenly experiences writer's block. Unable to maintain his creative flow, he changes the music to Taralirada, sung by S. P. Balasubrahmanyam from the film Rudra Veena. With the new song playing, he takes a cigarette from a cigarette box, returns to his laptop and begins writing again. Gradually, he completes his script. The words THE END appear on the screen, and he stops the music. As the sound ends, the title THE BLOCK is revealed. Set entirely inside a bedroom at night, the film uses music, a confined environment and a simple creative routine to portray a writer's struggle to overcome a moment of creative stagnation.",

    vision:
      "The intention behind THE BLOCK was to portray writer's block through a simple, everyday situation rather than an elaborate narrative or dialogue. The film follows a writer working on a script, losing his creative momentum and eventually returning to the process. Music is central to this progression. The transition from Self Control to Taralirada marks a change in the character's working atmosphere and accompanies his return to writing. I chose to keep the entire film within a bedroom at night, using a limited number of light sources to create a controlled visual environment. The laptop screen, moon lamp and background light provide the illumination for the scene, allowing the workspace and the character's actions to remain the focus. The ending connects the completion of the script with the completion of the film itself. When the character finishes writing, the words THE END appear before the music stops and the title is revealed. Through this simple structure, THE BLOCK presents a recognisable creative struggle: the difficulty of continuing when inspiration disappears.",

    approach:
      "THE BLOCK uses a confined bedroom setting and a night atmosphere to keep the audience focused on the writer and his creative process. The film is lit using three sources: a moon lamp, the laptop screen and a background light. The moon lamp contributes to the room's atmosphere, the laptop illuminates the character while he writes, and the background light adds separation within the dark setting. Music guides the narrative. Self Control establishes the opening writing sequence, while the change to Taralirada accompanies the character's return to writing after his creative interruption. The editing follows the sequence of actions, from writing and experiencing writer's block to changing the song, returning to the laptop and completing the script. The final words THE END appear on the laptop screen, the music stops and the film title is revealed. This ending connects the character's completed work with the short film the audience has just watched.",

    roles: [
      ["Direction", "Chandra"],
      ["Writing", "Chandra"],
      ["Editing", "Chandra"],
      ["Cinematography", "Hemanth"],
      ["Lighting", "Moon lamp, laptop screen and background light"],
      ["Music", "Self Control and Taralirada"],
    ],

    poster: "/films/the-block_1.png",
    video:
      "https://drive.google.com/file/d/1o5MJpWVeLMUePfC1JQCIFuGuP9_pMLAN/preview",
  },

  zero: {
    title: "ZERO",
    subtitle: "An original mini film by Chandra",
    category: "MINI FILM",
    year: "2026",
    runtime: "38 seconds",
    genre: "Experimental",
    language: "No dialogue",

    logline:
      "When nature loses its balance, existence approaches zero, but within the silence lies the possibility of a new beginning.",

    synopsis:
      "ZERO is a visual exploration of nature, destruction, stillness and renewal, inspired by Pancha Bhoothaalu, the five elements that form the foundation of existence. The film unfolds through three stages: The Fall, The Zero and The Rise. As the natural balance begins to collapse, the world moves towards a state of absence and stillness. Life appears suspended, leaving behind an unsettling silence. Yet within that emptiness lies the possibility of renewal. The emergence of new life becomes a symbol of restoration, reminding us that an ending can also become the beginning of something new. Through restrained imagery, atmospheric lighting, evolving music and deliberate editing, ZERO communicates its central idea primarily through visuals rather than dialogue.",

    vision:
      "The intention behind ZERO was to translate an abstract philosophical concept into a cinematic experience through images, sound and atmosphere. Inspired by the five elements of nature, I wanted to explore the loss of balance between existence and nothingness before moving towards the possibility of renewal. The three stages, The Fall, The Zero and The Rise, give the film its narrative progression and allow the audience to experience that journey emotionally. Rather than relying on elaborate camera movement or rapid editing, I chose stillness as a deliberate creative decision. Static shots allow each composition to hold its meaning, while artificial lighting, a green and orange colour palette and a gradually intensifying samurai inspired score shape the film's atmosphere. For me, ZERO explores how minimal visual elements can communicate a larger idea: when everything seems to disappear, the possibility of a new beginning still remains.",

    approach:
      "ZERO uses static shots to preserve compositional control and create a feeling of stillness. Night shooting with artificial lighting gives the images a controlled atmosphere, while green and orange establish a consistent visual identity. Slow cuts allow each image to register without rushing the audience. As the samurai inspired music gradually intensifies, the sound provides an emotional progression even when the camera remains still. The combination of framing, lighting, colour, music and editing supports the movement from The Fall through The Zero towards The Rise. The film is inspired by Pancha Bhoothaalu and uses the emergence of new life as a visual expression of restoration and renewal.",

    roles: [
      ["Direction", "Chandra"],
      ["Writing", "Chandra"],
      ["Editing", "Chandra"],
      ["Cinematography", "Chandra"],
      ["Lighting", "Artificial lighting"],
      ["Sound", "Samurai inspired score"],
    ],

    poster: "/films/zero_1.png",
    video:
      "https://drive.google.com/file/d/1TtD4wiP8sKCR5JULLbcMxrQ21B6-WuOe/preview",
  },
};

function FilmDetails() {
  const { slug } = useParams();
  const film = filmDetails[slug];

  if (!film) {
    return (
      <main className="film-details-page">
        <div className="film-not-found">
          <p className="film-details-eyebrow">CHANDRA / FILMS</p>
          <h1>Film not found.</h1>
          <p>
            This story could not be found. Return to the films collection
            to discover another project.
          </p>
          <Link to="/#films" className="film-back-link">
            BACK TO FILMS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="film-details-page">
      <div className="film-details-container">
        <Link to="/#films" className="film-back-link">
          BACK TO ALL FILMS
        </Link>

        <header className="film-details-hero">
          <div className="film-details-heading">
            <p className="film-details-eyebrow">
              CHANDRA / {film.category} / {film.year}
            </p>

            <h1>{film.title}</h1>
            <p className="film-details-subtitle">{film.subtitle}</p>

            <p className="film-details-logline">{film.logline}</p>

            <a href="#watch" className="film-watch-cta">
              WATCH THE FILM <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="film-details-poster">
            <img
              src={film.poster}
              alt={`${film.title} film poster`}
              loading="eager"
            />
          </div>
        </header>

        <section className="film-watch-section" id="watch">
          <div className="film-section-heading">
            <p className="film-details-eyebrow">THE FILM</p>
            <h2>Watch the story.</h2>
            <p>
              Experience the film through its images, atmosphere and sound.
            </p>
          </div>

          <div className="film-player film-drive-player">
            <iframe
              src={film.video}
              title={`Watch ${film.title}`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <p className="film-player-caption">
            {film.title} | An original film by Chandra
          </p>
        </section>

        <section className="film-overview-section">
          <div className="film-overview-copy">
            <p className="film-details-eyebrow">01 / THE STORY</p>
            <h2>About the film.</h2>
            <p>{film.synopsis}</p>
          </div>

          <div className="film-facts">
            <div>
              <span>FORMAT</span>
              <strong>{film.category}</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>{film.year}</strong>
            </div>

            <div>
              <span>RUNTIME</span>
              <strong>{film.runtime}</strong>
            </div>

            <div>
              <span>GENRE</span>
              <strong>{film.genre}</strong>
            </div>

            <div>
              <span>LANGUAGE</span>
              <strong>{film.language}</strong>
            </div>
          </div>
        </section>

        <section className="film-statement-section">
          <p className="film-details-eyebrow">02 / THE INTENTION</p>
          <h2>The filmmaker's vision.</h2>
          <p>{film.vision}</p>
        </section>

        <section className="film-statement-section film-craft-section">
          <p className="film-details-eyebrow">03 / THE CRAFT</p>
          <h2>Behind the film.</h2>
          <p>{film.approach}</p>
        </section>

        <section className="film-credits-section">
          <p className="film-details-eyebrow">
            04 / THE PEOPLE AND PROCESS
          </p>
          <h2>Credits.</h2>

          <div className="film-credits-list">
            {film.roles.map(([role, name]) => (
              <div className="film-credit-row" key={role}>
                <span>{role}</span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </section>

        <nav className="film-next-navigation" aria-label="Film navigation">
          <Link to="/#films">ALL FILMS</Link>

          <Link
            to={slug === "the-block" ? "/films/zero" : "/films/the-block"}
          >
            EXPLORE {slug === "the-block" ? "ZERO" : "THE BLOCK"}
            <span aria-hidden="true"> ↗</span>
          </Link>
        </nav>

        <footer className="film-details-footer">
          <span>CHANDRA</span>
          <span>ORIGINAL FILMS | INDEPENDENT STORYTELLING</span>
        </footer>
      </div>
    </main>
  );
}

export default FilmDetails;
