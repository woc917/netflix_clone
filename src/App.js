// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//       <h1>Hello world!</h1>
    
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import './App.css';
import Router from './Components/Router';
import GlobalStyle from './Components/GlobalStyle';

export default class App extends Component {

  // 상태값
  // 함수
  // 라이프 사이클

  render() {

    // 리턴에서 사용될 상태값, 함수에 대한 상수 선언

    return (
      
      <>
        <Router />
        <GlobalStyle />
      </>

    )

  }
}
