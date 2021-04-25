/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import BlogList from 'BlogList'

const Home = () => {
  const [articles, setArticles] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            // error coming back from server
            throw Error('could not fetch the data for that resource')
          }
          return res.json()
        })
        .then(data => {
          setIsPending(false)
          setArticles(data)
          setError(null)
        })
        .catch(err => {
          // auto catches network / connection error
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>En cours de chargement...</div>}
      {articles && <BlogList articles={articles} title="Tous les articles" />}
    </div>
  )
}
export default Home
