import * as React from "react";
import Cities from './components/Cities';
import MyCity from "./components/helpers/myCity";
import './App.css';

function App() {
  return (
    <main className="App">
      <MyCity/>
      <Cities/>
    </main>
  );
}

export default App;
