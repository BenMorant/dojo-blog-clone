/* eslint-disable no-console */
const Home = () => {
  const handleClick = () => {
    console.log('Salut à toi ')
  }

  const handleClickAgain = name => {
    console.log('Salut ' + name)
  }

  return (
    <div className="home">
      <h2>Page d'accueil</h2>
      <button onClick={handleClick}>Appuie moi !</button>
      <button onClick={() => handleClickAgain('Ben')}>Appuie moi encore !</button>
    </div>
  )
}
export default Home
