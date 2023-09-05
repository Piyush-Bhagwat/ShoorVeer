
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element=
          {<News key=" general"  pageSize={5} county="in" category="general" />}>
          </Route>
          <Route exact path="/business"  element=
          {<News key="business " pageSiz={5} county="in" category="business" />}>
          </Route>
          <Route exact path="/entertainment"  element=
          {<News key="entertainment " pageSiz={5} county="in" category="entertainment" />}>
          </Route>
          <Route exact path="/general"  element=
          {<News key="general " pageSiz={5} county="in" category="general" />}>
          </Route>
          <Route exact path="/health"  element=
          {<News key="health " pageSiz={5} county="in" category="health" />}>
          </Route>
          <Route exact path="/science"  element=
          {<News key="science " pageSiz={5} county="in" category="science" />}>
          </Route>
          <Route exact path="/sports"  element=
          {<News key=" sports" pageSiz={5} county="in" category="sports" />}>
          </Route>
          <Route exact path="/technology"  element=
          {<News key="technology " pageSiz={5} county="in" category="technology" />}>
          </Route>
        </Routes>
        </Router>
        {/* <NewsItem></NewsItem> */}
      </div>
    )
  }
}


