import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Placeholder components for other pages
const About = () => <div>About Page</div>
const Services = () => <div>Services Page</div>
const Works = () => <div>Works Page</div>
const Contact = () => <div>Contact Page</div>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
