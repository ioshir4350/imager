
import Home from './pages/Home'
import Features from './pages/Features'
import NavBar from './components/NavBar'
import { Switch, BrowserRouter as Router,
Route }from 'react-router-dom'
import Gallery from './pages/Gallery';
import Search from './pages/Search'

function App() {




  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <Route path="/features" exact>
            <Features />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
