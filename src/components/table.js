import {useState, useEffect} from "react";

export default function Table() {
  const DATA_API = `https://api.coincap.io/v2/assets?limit=10`;

  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch(DATA_API)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data);
      })
  })

  return(
    <div>
    
    <h1>Table Coins</h1>
    
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          coins.map(({ id, rank, name, priceUsd}) => (
            <tr key={id}>
              <th>{rank}</th>
              <th>{name}</th>
              <th>{priceUsd}</th>
              <th><button className="btn">Add</button></th>
            </tr>
          ))
        }
      </tbody>
    </table>

    </div>
  );

}