import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Accordion from '../components/ui/Accordion'
import faqData from '../data/faq.json'

const categories = ['All', 'General', 'Platform', 'Billing', 'Security']

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const accordionItems = filtered.map(({ id, question, answer }) => ({
    id,
    title: question,
    content: answer,
  }))

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions</title>
      </Helmet>

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'FAQ' },
          ]}
        />
      </div>

      <section className="section-padding text-center">
        <div className="container">
          <h1 className="fw-bold">Frequently Asked Questions</h1>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {accordionItems.length > 0 ? (
                <Accordion items={accordionItems} flush />
              ) : (
                <p className="text-muted text-center">
                  No questions match your search.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-center py-4">
        <div className="container">
          <h3 className="fw-bold mb-2">Still have questions?</h3>
          <p className="text-muted mb-3">Contact us and we will get back to you.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
