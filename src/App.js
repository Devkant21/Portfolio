import React from 'react';

import { Body, Header } from './components';
import { Blog, Footer } from './containers';
import './App.css'; 



const App = () => {
  return (
  <div className="App">
    <div className="gradient_bg">
      <Header />
      <Body />
    </div>
    <Blog />
    <Footer />
  </div>
  )
};

export default App;


// import header from './components/Header';

// function App(){
//     let headerDate = new Date(2021, 3, 28);
//     let headerTitle = "School";
//     let headerAmount = 300;



//     return (
//         <div>
//             <h3>Devkant Swargiary</h3>
//             <Header>
//                 date = {headerDate}
//                 title = {headerTitle}
//                 amount = {headerAmount}
//             </Header>
//         </div>
//     );
// } 
// export default App;