import BlogList from 'BlogList'
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Home = () => {
  const [articles, setArticles] = useState([
    { title: 'Mon nouvel article', body: 'lorem ipsum...', author: 'ben', id: 1 },
    { title: 'Pendaison de Crémaillière', body: 'lorem ipsum...', author: 'aida', id: 2 },
    { title: 'Ma patée', body: 'lorem ipsum...', author: 'ira', id: 3 },
  ])

  return (
    <div className="home">
      <BlogList articles={articles} title="Tous les articles" />
      <BlogList articles={articles.filter(article => article.author === 'ben')} title="Articles de Ben" />
    </div>
  )
}
export default Home
