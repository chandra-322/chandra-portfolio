
const contactDetails = {
  email: "chandra.yatham3101@gmail.com",
  instagram: "https://www.instagram.com/sinapse.me?utm_source=qr&vrfl=end3czZoaGVlYm9x",
  linkedin: "https://www.linkedin.com/in/chandra-prakash-16a411250?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  youtube: "https://youtube.com/@sinapse_me?si=aEgjFXm6ONLWvaz9",
};

function Contact() {
  const socialLinks = [
    {
      label: "INSTAGRAM",
      url: contactDetails.instagram,
    },
    {
      label: "LINKEDIN",
      url: contactDetails.linkedin,
    },
    {
      label: "YOUTUBE",
      url: contactDetails.youtube,
    },
  ].filter((item) => item.url.trim() !== "");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Top label */}
        <div className="contact-topline">
          <span>THE NEXT FRAME STARTS HERE</span>
          <span>CONTACT / 006</span>
        </div>

        {/* Main contact message */}
        <div className="contact-main">
          <p className="contact-eyebrow">
            <span className="contact-dot" />
            OPEN TO CREATIVE CONVERSATIONS
          </p>

          <h2 className="contact-heading">
            Have a story
            <br />
            <span>in mind?</span>
          </h2>

          <div className="contact-bottom">
            <p className="contact-description">
              Have a project, an idea, or something worth
              bringing to the screen? Let's start a
              conversation and see where the story goes.
            </p>

            {contactDetails.email.trim() !== "" ? (
              <a
                className="contact-email-link"
                href={`mailto:${contactDetails.email}`}
              >
                <span>GET IN TOUCH</span>
                <span className="contact-arrow">↗</span>
              </a>
            ) : (
              <p className="contact-email-note">
                EMAIL DETAILS COMING SOON
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="contact-divider" />

        {/* Contact details and socials */}
        <div className="contact-details">
          <div className="contact-signature">
            <span className="contact-monogram">C.</span>
            <div>
              <p className="contact-name">CHANDRA</p>
              <p className="contact-role">
                FILMMAKER / VIDEO EDITOR
              </p>
            </div>
          </div>

          {socialLinks.length > 0 && (
            <nav
              className="contact-socials"
              aria-label="Social media links"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <span>↗</span>
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Closing line */}
        <footer className="contact-footer">
          <span>INDEPENDENTLY CURIOUS. ALWAYS CREATING.</span>
          <a href="#home">BACK TO THE BEGINNING ↑</a>
        </footer>

      </div>
    </section>
  );
}

export default Contact;
