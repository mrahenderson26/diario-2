import useTheme from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import AppRoutes from './routes'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
