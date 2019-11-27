import React from 'react';
import "./stylesheets/global.scss";
import Dashboard from './containers/dashboard';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
