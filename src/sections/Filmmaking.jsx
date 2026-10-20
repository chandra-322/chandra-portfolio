
import { Link } from "react-router-dom";

const films = [
  {
    slug: "the-block",
    number: "01",
    title: "THE BLOCK",
    type: "SHORT FILM",
    tagline: "A writer. A blank page. A search for the flow.",
    description:
      "A writer working on a script suddenly experiences writer's block. As Self Control by Laura Branigan gives way to Taralirada, sung by S. P. Balasubrahmanyam from Rudra Veena, he returns to his laptop and completes his work. Set entirely in a bedroom at night, the film uses music, controlled lighting and a simple creative routine to explore the struggle of finding inspiration again.",
    image: "/films/the-block.png",
    year: "2026",
    runtime: "1 minute 35 seconds",
    genre: "Experimental drama",
    
  },
  {
    slug: "zero",
    number: "02",
    title: "ZERO",
    type: "MINI FILM",
    tagline: "The Fall. The Silence. And Then, The Rise.",
    description:
      "Inspired by Pancha Bhoothaalu, the five elements of nature, ZERO explores the loss of natural balance and the possibility of renewal. Structured around The Fall, The Zero and The Rise, the film uses static shots, artificial night lighting, a green and orange colour palette, slow cuts and a gradually intensifying samurai inspired score to tell its story through images and sound.",
    image: "/films/zero.png",
    year: "2026",
    runtime: "38 seconds",
    genre: "Experimental",
    
  },
];

function Filmmaking() {
  return (
    <section className="films-section" id="films">
      <div className="films-container">
        <header className="films-heading">
          <p className="films-eyebrow">
            <span /> ORIGINAL FILMS / CHANDRA
          </p>

          <h2>
            Stories beyond
            <br />
            <span>the frame.</span>
          </h2>

          <p className="films-intro">
            Original films exploring creative struggle, nature and
            renewal through visual composition, music, lighting and
            the language of cinema.
          </p>
        </header>

        <div className="films-list">
          {films.map((film) => (
            <article className="film-project" key={film.slug}>
              <Link
                to={`/films/${film.slug}`}
                className="film-project-image"
                aria-label={`Explore ${film.title}`}
              >
                <img
                  src={film.image}
                  alt={`${film.title} film poster`}
                  loading="lazy"
                />

                <span className="film-number">{film.number}</span>
                <span className="film-type">{film.type}</span>

                <span className="film-image-action">
                  EXPLORE FILM ↗
                </span>
              </Link>

              <div className="film-project-info">
                <div className="film-project-topline">
                  <span>{film.type}</span>
                  <span>{film.year}</span>
                </div>

                <h3>{film.title}</h3>

                <p className="film-tagline">{film.tagline}</p>

                <p className="film-description">
                  {film.description}
                </p>

                <div className="film-card-details">
                  <div className="film-card-meta">
                    <span>RUNTIME</span>
                    <strong>{film.runtime}</strong>
                  </div>

                  <div className="film-card-meta">
                    <span>GENRE</span>
                    <strong>{film.genre}</strong>
                  </div>
                </div>

                <Link
                  className="film-details-link"
                  to={`/films/${film.slug}`}
                >
                  EXPLORE FILM <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <footer className="films-footer">
          <span>CHANDRA / ORIGINAL FILMS</span>
          <span>MADE WITH INTENTION.</span>
        </footer>
      </div>
    </section>
  );
}

export default Filmmaking;
