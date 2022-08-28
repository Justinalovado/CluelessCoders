import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import Dota from "./Dota 2 Logo.png";
import Apex from "./Apex Legends Logo.png";
import LOL from "./LOL Logo.png";

function App() {

  const [games, setGames] = useState([
    {
      _id: 1,
      name: "DOTA 2",
      onlinePlayers: 500,
      playersInLast30Days: "1,000,000",
      logo: <img src={Dota} alt="DOTA Logo" height={100} width={150}/>,
    },
    {
      _id: 2,
      name: "League of Legends",
      onlinePlayers: 600,
      playersInLast30Days: "2,000,000",
      logo: <img src={LOL} alt="LOL Logo" height={100} width={150}/>,
    },
    {
      _id: 3,
      name: "Apex Legends",
      onlinePlayers: 700,
      playersInLast30Days: "3,000,000",
      logo: <img src={Apex} alt="Apex Logo" height={100} width={150}/>,
    },
  ]);

  // runs upon rendering page
  useEffect(() => {
    const getGames = async () => {
      const gamesFromApi = await fetchGames();
      setGames(gamesFromApi);
    }

    getGames();
  }, []);

// fetch games from backend
const fetchGames = async () => {
  const res = await fetch("/getAll");
  const data = await res.json();
  console.log(data);

  return data;
}

  return (
    <div style={{backgroundColor: '#0b0909', minHeight: '1000px', paddingTop: '20px',}}>
      <div className='container'>
        <Header/>
        <GameList games={games} />
      </div>
    </div>)
}

export default App;

// Modified code from https://github.com/stella0304/CatalystWebappDemp/blob/main/react-web-app/src/App.js