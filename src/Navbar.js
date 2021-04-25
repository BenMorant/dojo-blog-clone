import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar">
    <h1>Le Blog de Ben</h1>
    <div className="links">
      <Link to="/">Accueil</Link>
      <Link to="/create" style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>
        Nouvel article
      </Link>
    </div>
  </nav>
)

export default Navbar
