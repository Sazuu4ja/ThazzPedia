import { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GameCard from "./components/GameCard";
import TopUpPage from "./pages/TopUpPage";
import AdminPage from "./pages/AdminPage";
import History from "./pages/History";
import { TransactionContext } from "./context/TransactionContext";

import logotpcircle from "./assets/images/logotpcircle.png";
import logoml from "./assets/images/logoml.png";
import logopubg from "./assets/images/logopubg.png";
import logoff from "./assets/images/logoff.png";
import logogenshin from "./assets/images/logogenshin.png";
import logohonkai from "./assets/images/logohonkai.png";
import logococ from "./assets/images/logococ.png";
import logofifa from "./assets/images/logofifa.png";
import logocandy from "./assets/images/logocandy.png";
import logo8ball from "./assets/images/logo8ball.png";
import logocookma from "./assets/images/logocookma.png";
import logosakura from "./assets/images/logosakura.png";
import logostumble from "./assets/images/logostumble.png";
import logovalo from "./assets/images/logovalo.png";
import logodota2 from "./assets/images/logodota2.png";
import logocsgo from "./assets/images/logocsgo.png";
import logofortnite from "./assets/images/logofortnite.png";
import logoapex from "./assets/images/logoapex.png";
import logoroblox from "./assets/images/logoroblox.png";

// Data Mobile Games
const mobileGames = [
  { id: "mobile-legends", name: "Mobile Legends", img: logoml },
  { id: "pubg-mobile", name: "PUBG Mobile", img: logopubg },
  { id: "free-fire", name: "Free Fire", img: logoff },
  { id: "genshin-impact", name: "Genshin Impact", img: logogenshin },
  { id: "honkai-impact", name: "Honkai Impact", img: logohonkai },
  { id: "clash-of-clans", name: "Clash of Clans", img: logococ },
  { id: "ea-sports-fc", name: "EA Sports FC", img: logofifa },
  { id: "candy-crush-slot", name: "Candy Crush Slot", img: logocandy },
  { id: "8-ball-pool", name: "8 Ball Pool", img: logo8ball },
  { id: "cooking-mama", name: "Cooking Mama", img: logocookma },
  { id: "sakura-simulator", name: "Sakura Simulator", img: logosakura },
  { id: "stumble-guys", name: "Stumble Guys", img: logostumble }
];

// Data PC Games
const pcGames = [
  { id: "valorant", name: "Valorant", img: logovalo },
  { id: "dota-2", name: "Dota 2", img: logodota2 },
  { id: "cs-go", name: "CS:GO", img: logocsgo },
  { id: "fortnite", name: "Fortnite", img: logofortnite },
  { id: "apex-legends", name: "Apex Legends", img: logoapex },
  { id: "roblox", name: "Roblox", img: logoroblox }
];

function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        <img src={logotpcircle} alt="Logo Besar" className="w-full max-w-100 md:max-w-125" />
        <div className="text-center">
          <h1 className="text-[65px] font-bold text-white font-poppins">ThazzPedia</h1>
          <h4 className="mt-2 max-w-md mx-auto text-white font-montserrat">Petualangan Tanpa Batas, Pengalaman Tak Terlupakan, Lampaui Ekspektasi Gaming-mu!</h4>
        </div>
      </div>

      <h4 className="text-center text-2xl mb-8 font-bold text-white font-montserrat">
        Permainan Favorit
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
        {mobileGames.slice(0, 6).map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="text-center pb-20 mt-8">
        <Link to="/games" className="text-white hover:text-gray-300 text-xl font-bold transition-colors font-montserrat">Lihat Lainnya!</Link>
      </div>
    </div>
  );
}

function Games() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 pb-20 px-4">
      <h2 className="text-left text-[24px] mb-8 border-b border-gray-800 pb-4 text-white font-poppins">Android Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        {mobileGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <h2 className="text-left text-[24px] mb-8 border-b border-gray-800 pb-4 text-white font-poppins">PC Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {pcGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="topup/:gameId" element={<TopUpPage />} />
        <Route path="history" element={<History />} />
        <Route path="admin" element={<AdminPage />} /> 
      </Route>
    </Routes>
  );
}