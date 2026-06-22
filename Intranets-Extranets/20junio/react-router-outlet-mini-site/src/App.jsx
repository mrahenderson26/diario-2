import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ServicesLayout from './pages/services/ServicesLayout.jsx'
import ServicesIndex from './pages/services/ServicesIndex.jsx'
import WebDev from './pages/services/WebDev.jsx'
import Translation from './pages/services/Translation.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    // Routes is the routing table for your app.
    // React Router looks at the current URL and chooses the matching Route.
    <Routes>
      {/*
        This parent route uses Layout.
        Layout contains the navbar, footer and an <Outlet />.
        The child route that matches the URL will appear inside Layout's <Outlet />.
      */}
      <Route path="/" element={<Layout />}>
        {/*
          index means: show this component at the exact parent path.
          So this renders at: /
        */}
        <Route index element={<Home />} />

        {/* These child routes render inside Layout's <Outlet /> too. */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/*
          This is a nested section inside the main layout.
          /services will first render Layout.
          Then inside Layout's <Outlet />, it renders ServicesLayout.
          ServicesLayout has its own second <Outlet /> for its own children.
        */}
        <Route path="services" element={<ServicesLayout />}>
          <Route index element={<ServicesIndex />} />
          <Route path="web-development" element={<WebDev />} />
          <Route path="translation" element={<Translation />} />
        </Route>

        {/* Catch-all route for unknown URLs like /banana */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
