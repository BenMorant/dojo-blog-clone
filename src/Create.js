import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('ben')
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const article = { title, body, author }

    fetch('http://localhost:8000/articles/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Ajoutez un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre de l'article :</label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
        <label>Corps de l'article :</label>
        <textarea required value={body} onChange={e => setBody(e.target.value)} />
        <label>Auteur/Autrice de l'article:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="ben">Ben</option>
          <option value="aida">Aïda</option>
        </select>
        <button>Ajouter article</button>
      </form>
    </div>
  )
}
export default Create
