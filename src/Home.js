import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('Ben')
  const [age, setAge] = useState(33)

  const handleClick = () => {
    setName('Aïda')
    setAge(29)
  }

  return (
    <div className="home">
      <h2>Page d'accueil</h2>
      <p>
        {name} a {age} ans
      </p>
      <button onClick={handleClick}>Appuie moi !</button>
    </div>
  )
}
export default Home
