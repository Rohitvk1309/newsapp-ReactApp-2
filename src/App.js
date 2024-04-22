import './App.css';
import React,{ Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes } from "react-router";
// import React,{ useState } from 'react';
// import React, { useState } from 'react';
// import { Router } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
  
} from "react-router-dom";
const pageSize=9;
export default class App extends Component {
  render() {


  return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
          <Route path="/" element={<News pageSize={pageSize} country="in" category="health" />} />
          <Route path="/business" element={<News pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
  
        </div>
      )
    }
  }















