export default function TestimonialCarousel({ testimonials = [] }) {
  if (!testimonials.length) return null;

  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-indicators">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`carousel-item${i === 0 ? " active" : ""}`}
          >
            <div className="d-flex justify-content-center py-5 px-3">
              <div className="text-center" style={{ maxWidth: "600px" }}>
                <blockquote className="blockquote mb-4">
                  <p className="fs-5 fst-italic">&ldquo;{t.text}&rdquo;</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  <strong className="text-brand-purple">{t.name}</strong>
                  {t.role && (
                    <>
                      , <span>{t.role}</span>
                    </>
                  )}
                  {t.company && (
                    <>
                      <br />
                      <span className="text-brand-blue">{t.company}</span>
                    </>
                  )}
                </figcaption>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
