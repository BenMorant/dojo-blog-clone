import ArticleList from 'ArticleList'
import useFetch from './useFetch'

const Home = () => {
  const { data: articles, isPending, error } = useFetch('http://localhost:8000/articles')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>En cours de chargement...</div>}
      {articles && <ArticleList articles={articles} title="Tous les articles" />}
    </div>
  )
}
export default Home
