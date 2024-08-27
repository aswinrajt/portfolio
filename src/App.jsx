import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Works from './components/Works';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './custom.css';
import './App.css';
import Education from './components/Education';


function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Education/>
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
