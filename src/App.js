import './App.css';

import Home from './pages/Home';
// import 'bootstrap/dist/css/bootstrap.css'
// import RouterPage from './pages/RouterPage';

import * as react from 'react';
// Object.assign(global, react)
Object.entries(react).forEach(([name, exported]) => global[name] = exported);

function App() {
  return (
    <div className="App">
      {/* <RouterPage /> */}
      <Home />
    </div>
  );
}

export default App;
