import React from 'react';

import WidgetList from './WidgetList';
import AddButton from './AddButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Widgets App</h1>
      <AddButton />
      <WidgetList />
    </div>
  );
}

export default App;
