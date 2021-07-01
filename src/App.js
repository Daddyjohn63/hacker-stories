// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';

function getTitle(title) {
  return title
}

function App() {
  return (
    <div>
      <h1>
      Hello {getTitle('React')}
      </h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
