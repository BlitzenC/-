// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         < img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p >
//         <a
//           className="App-link"
//           href=" "
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </ a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App">
      <header className="App-header">
         < img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
        </p >
         <a
          className="App-link"
          href=" "
          target="_blank"
          rel="noopener noreferrer"
         >
           Learn React
         </ a>
       </header>
     </div>
   );
 }

export default App;