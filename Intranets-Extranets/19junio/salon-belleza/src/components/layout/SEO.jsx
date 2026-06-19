import { Helmet } from 'react-helmet-async'

const DEFAULT_TITLE = 'AI-Powered Legal Intelligence'

export default function SEO({ title, description }) {
  const pageTitle = title ? `${title} | CriterIA` : `CriterIA | ${DEFAULT_TITLE}`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}
