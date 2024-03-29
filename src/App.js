import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create';
import TodoDetails from './TodoDetails';


function App() {

  return (
    <Router>
          <div className="App">
            <Navbar/>
           <div className="content">
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/blogs/:id">
                  <TodoDetails/>
                </Route>
              </Switch>
           </div>
          </div>
    </Router>
  );
}

export default App;
