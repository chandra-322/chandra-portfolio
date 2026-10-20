
import { useRef, useState } from "react";

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
    video: "/projects/videos/project-01.mp4",
    thumbnail: "/projects/thumbnails/project-01.png",
  },
  {
    number: "02",
    title: "Mirchi × Hangova",
    category: "VISUAL CROSSOVER · SONG EDIT",
    source: "Mirchi",
    music: "Hangova - Anirudh",
    description:
      "A music-led visual crossover pairing Prabhas and Anushka Shetty montage footage from the Telugu film Mirchi with Hangova, a song from the Tamil film D.C composed by Anirudh Ravichander. The edit brings the performances and soundtrack together to create a cohesive visual and musical experience.",
    approach:
      "Musical phrasing, shot selection and visual continuity guide the montage, connecting romantic moments with the rhythm and mood of the soundtrack.",
    techniques: [
      "Music-Video Editing",
      "Beat Synchronization",
      "Visual Continuity",
      "Mood Building",
    ],
    video: "/projects/videos/project-02.mp4",
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
    video: "/projects/videos/project-03.mp4",
    thumbnail: "/projects/thumbnails/project-03.png",
  },
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function VideoProject({ project }) {
  const videoRef = useRef(null);
  const mediaRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  async function toggleFullscreen() {
    const media = mediaRef.current;
    const video = videoRef.current;

    if (!media || !video) return;

    try {
      if (document.fullscreenElement === media) {
        await document.exitFullscreen();
      } else if (media.requestFullscreen) {
        await media.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen could not be opened:", error);
    }
  }

  function seekVideo(event) {
    const video = videoRef.current;
    if (!video || !Number.isFinite(duration)) return;

    const time = Number(event.target.value);
    video.currentTime = time;
    setCurrentTime(time);
  }

  function handleLoadedMetadata() {
    const video = videoRef.current;
    if (!video) return;

    setDuration(
      Number.isFinite(video.duration) ? video.duration : 0
    );
  }

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(video.currentTime || 0);
  }

  return (
    <article className={`editing-card editing-card-${project.number}`}>
      <div className="editing-media" ref={mediaRef}>
        <video
          ref={videoRef}
          src={project.video}
          poster={project.thumbnail}
          preload="metadata"
          playsInline
          muted
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <button
            className="editing-play-button"
            type="button"
            onClick={togglePlayback}
            aria-label={`Play ${project.title}`}
          >
            <span aria-hidden="true">▶</span>
          </button>
        )}

        <span className="editing-number">{project.number}</span>

        {isPlaying && (
          <div className="editing-video-controls">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label="Pause video"
              title="Pause"
            >
              Ⅱ
            </button>

            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>

            <span className="editing-video-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <input
              className="editing-video-progress"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={seekVideo}
              aria-label="Video progress"
            />

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
              title="Fullscreen"
            >
              ⛶
            </button>
          </div>
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
