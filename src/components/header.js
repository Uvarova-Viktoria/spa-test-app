import {useState, useEffect} from "react";

export default function Header() {
  const DATA_API = `https://api.coincap.io/v2/assets?limit=3`;

  let bagSize = 0;
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(DATA_API)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data);
      })
  })

  return(
    <header>
      
      <div>
      {
        coins.map(({ priceUsd }) => (
        <span className="coinCost">{priceUsd}</span>
        ))
      }
      </div>

      <div className="bag">
        <button className="btn-bag">Bag</button>
         {bagSize}
      </div>

    </header>
  );
}