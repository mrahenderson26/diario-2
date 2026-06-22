import { Helmet } from 'react-helmet-async'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Card from '../components/ui/Card'
import team from '../data/team.json'

const values = [
  {
    icon: 'bi-lightbulb',
    title: 'Innovation',
    desc: 'We push the boundaries of what AI can do for the legal profession, constantly refining our models and expanding our capabilities.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Integrity',
    desc: 'We hold ourselves to the highest ethical standards. Transparency, fairness, and data privacy are non-negotiable.',
  },
  {
    icon: 'bi-universal-access',
    title: 'Accessibility',
    desc: 'We believe cutting-edge legal tools should be available to every business, not just those with deep pockets.',
  },
  {
    icon: 'bi-star',
    title: 'Excellence',
    desc: 'We obsess over quality — from the accuracy of our AI to the responsiveness of our customer support.',
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | CriterIA</title>
      </Helmet>

      <div className="container section-padding pb-0">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
      </div>

      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold text-brand-purple mb-4">Our Mission</h2>
          <p className="lead mb-4" style={{ maxWidth: 800 }}>
            At CriterIA, we believe that every business — regardless of size or budget — deserves access to world-class legal intelligence. 
            Our mission is to democratize legal AI by delivering enterprise-grade tools that empower SMEs and startups to navigate 
            complex legal landscapes with confidence, speed, and affordability.
          </p>
          <div className="row g-3 mt-2">
            <div className="col-sm-6 col-lg-3 d-flex align-items-start gap-2">
              <i className="bi bi-check-circle-fill text-brand-blue fs-5 mt-1" />
              <span>Democratize legal intelligence</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex align-items-start gap-2">
              <i className="bi bi-check-circle-fill text-brand-blue fs-5 mt-1" />
              <span>Reduce legal costs by up to 80%</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex align-items-start gap-2">
              <i className="bi bi-check-circle-fill text-brand-blue fs-5 mt-1" />
              <span>Empower non-lawyer decision-makers</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex align-items-start gap-2">
              <i className="bi bi-check-circle-fill text-brand-blue fs-5 mt-1" />
              <span>Maintain the highest security standards</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="fw-bold text-brand-purple mb-4">Our Story</h2>
          <p className="mb-3" style={{ maxWidth: 800 }}>
            CriterIA was born in 2023 out of a simple observation: small and medium-sized businesses were being left behind by 
            the legal tech revolution. While large corporations deployed AI-powered contract review, compliance monitoring, 
            and litigation analytics, SMEs were still stuck with manual processes, expensive outside counsel, and patchwork solutions.
          </p>
          <p className="mb-3" style={{ maxWidth: 800 }}>
            Our founders — Elena Vasquez, a former Big Law partner, and David Koren, an AI researcher from DeepMind — joined forces 
            to bridge this gap. They assembled a team of legal experts, engineers, and product designers with one guiding principle: 
            build legal tools so intuitive and affordable that no business would ever have to choose between thorough legal work 
            and staying within budget.
          </p>
          <p style={{ maxWidth: 800 }}>
            Today, CriterIA serves over 500 companies across 30 countries, processing millions of documents every month. 
            But we're just getting started. Our roadmap includes real-time regulatory monitoring across 50+ jurisdictions, 
            multilingual contract analysis, and predictive litigation modeling that levels the playing field for every business.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold text-brand-purple mb-5 text-center">Meet Our Team</h2>
          <div className="row g-4">
            {team.map((m) => (
              <div key={m.id} className="col-md-6 col-lg-3">
                <Card hover className="h-100 p-4 text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-brand-purple text-white fw-bold mb-3"
                    style={{ width: 72, height: 72, fontSize: '1.5rem' }}
                  >
                    {getInitials(m.name)}
                  </div>
                  <h5 className="fw-bold mb-1">{m.name}</h5>
                  <p className="text-brand-blue fw-semibold small mb-2">{m.role}</p>
                  <p className="text-muted small mb-0">{m.bio}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="fw-bold text-brand-purple mb-5 text-center">Our Core Values</h2>
          <div className="row g-4">
            {values.map((v) => (
              <div key={v.title} className="col-md-6 col-lg-3">
                <Card hover className="h-100 p-4 text-center">
                  <i className={`bi ${v.icon} fs-1 text-brand-blue mb-3 d-block`} />
                  <h5 className="fw-bold mb-2">{v.title}</h5>
                  <p className="text-muted small mb-0">{v.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
