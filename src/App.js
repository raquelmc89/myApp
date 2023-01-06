import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/About/home';
import contactMe from "./components/Contact.me/contact.me"
import education from './components/Education/education';
import reviews from './components/Reviews/reviews';



function App() {
  return (
   <div>
    
    <BrowserRouter>
   <Routes>
    
    <Route exact path="/" element= {<Home/>}/>
    <Route path="/contact.me" component={contactMe}/>
    <Route path="education" component={education}/>
    <Route path="/reviews" component={reviews}/>
   
     </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
