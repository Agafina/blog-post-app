import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Create from './Components/create';
import BlogDetails from './Components/BlogDetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
 
  return (     
      <div className='App'>
        <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path= '/'>
              <Home />
            </Route>
            <Route path= '/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
          </Switch>
      </div>
        </Router>
      </div>
  );
}

export default App;
