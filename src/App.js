import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import React, {Component} from 'react';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
      <NavBar />
      <div id='page-body'>
      <Route path="/" component={HomePage} exact />
      <Route path="/article" component={ArticlePage}  />
      <Route path="/about" component={AboutPage}  />
      <Route path="/articles-list" component={ArticlesListPage}  />
      </div>
      </div>
    </Router>
    
  );
  }
}

export default App;
