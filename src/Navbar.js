const Navbar = () => (
  <nav className="navbar">
    <h1>Le Blog de Ben</h1>
    <div className="links">
      <a href="/">Accueil</a>
      <a href="/create" style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>
        Nouvel article
      </a>
    </div>
  </nav>
)

export default Navbar
