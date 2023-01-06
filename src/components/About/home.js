import React from 'react'
import Header from '../Wrapper/header';
import Footer from '../Wrapper/footer';
import Menu from '../Wrapper/menu';

function Home(){
return (
  <div>
    <Header/>
    <Menu/>
    <div>I'm in home component</div>
    <Footer/>
  </div>
 )
}

export default Home