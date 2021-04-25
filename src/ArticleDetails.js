import { useHistory, useParams } from 'react-router-dom'

import useFetch from './useFetch'

const ArticleDetails = () => {
  const { id } = useParams()

  const { data: article, isPending, error } = useFetch('http://localhost:8000/articles/' + id)

  const history = useHistory()

  const handleClick = () => {
    fetch('http://localhost:8000/articles/' + article.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="article-details">
      {isPending && <div>Chargement en cours...</div>}
      {error && <div>{error}</div>}
      {article && (
        <article>
          <h2>{article.title}</h2>
          <p>Écrit par {article.author}</p>
          <div>{article.body}</div>
          <button onClick={handleClick}>supprimer</button>
        </article>
      )}
    </div>
  )
}

export default ArticleDetails
