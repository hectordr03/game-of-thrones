// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends Component {
//   return(){
//     return (
//       <div className="App">
        
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react'
import './App.css'
// import axios from 'axios';
import FirstQuestion from './Components/FirstQuestion';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h3>Hello</h3>
        <FirstQuestion />
      </div>
    )
  }
}
