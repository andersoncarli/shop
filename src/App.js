import './App.css';

import * as react from 'react';
Object.entries(react).forEach(([name, exported]) => global[name] = exported);

import RouterPage from './pages/RouterPage';

function App() {
  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}

export default App;