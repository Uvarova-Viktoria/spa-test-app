import {useState, useEffect} from "react";
import './App.css';

import Header from "./components/header";
import Table from "./components/table";

function App() {
  
  const DATA_API = `https://api.coincap.io/v2/assets?limit=20`;

  const [coins, setCoins] = useState([])

  return (
    <div className="App">
      <Header></Header>
      <Table></Table>
    </div>
  );
}

export default App;
