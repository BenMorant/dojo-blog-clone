import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="not-found">
    <h2>Désolé...</h2>
    <p>Cette page n'existe pas</p>
    <Link to="/">Retour à la page d'accueil...</Link>
  </div>
)

export default NotFound
