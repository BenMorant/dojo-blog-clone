import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import ArticleDetails from './ArticleDetails'
import Create from './Create'
import Home from './Home'
import Navbar from './Navbar'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/articles/:id">
              <ArticleDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
export default App
