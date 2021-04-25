import BlogList from 'BlogList'
import useFetch from './useFetch'

const Home = () => {
  const { data: articles, isPending, error } = useFetch('http://localhost:8000/articles')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>En cours de chargement...</div>}
      {articles && <BlogList articles={articles} title="Tous les articles" />}
    </div>
  )
}
export default Home
