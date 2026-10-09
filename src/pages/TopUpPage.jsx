import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

// Import semua logo game supaya bisa dicocokkan berdasarkan URL parameter
import logoml from "../assets/images/logoml.png";
import logopubg from "../assets/images/logopubg.png";
import logoff from "../assets/images/logoff.png";
import logogenshin from "../assets/images/logogenshin.png";
import logohonkai from "../assets/images/logohonkai.png";
import logococ from "../assets/images/logococ.png";
import logofifa from "../assets/images/logofifa.png";
import logocandy from "../assets/images/logocandy.png";
import logo8ball from "../assets/images/logo8ball.png";
import logocookma from "../assets/images/logocookma.png";
import logosakura from "../assets/images/logosakura.png";
import logostumble from "../assets/images/logostumble.png";
import logovalo from "../assets/images/logovalo.png";
import logodota2 from "../assets/images/logodota2.png";
import logocsgo from "../assets/images/logocsgo.png";
import logofortnite from "../assets/images/logofortnite.png";
import logoapex from "../assets/images/logoapex.png";
import logoroblox from "../assets/images/logoroblox.png";

// Daftar database seluruh game
const allGames = [
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
  { id: "stumble-guys", name: "Stumble Guys", img: logostumble },
  { id: "valorant", name: "Valorant", img: logovalo },
  { id: "dota-2", name: "Dota 2", img: logodota2 },
  { id: "cs-go", name: "CS:GO", img: logocsgo },
  { id: "fortnite", name: "Fortnite", img: logofortnite },
  { id: "apex-legends", name: "Apex Legends", img: logoapex },
  { id: "roblox", name: "Roblox", img: logoroblox }
];

export default function TopUpPage() {
  const { gameId } = useParams(); // Mengambil parameter game dari URL
  const navigate = useNavigate();
  const { addTransaction } = useContext(TransactionContext);

  // Cari data game berdasarkan ID dari URL
  const game = allGames.find((g) => g.id === gameId) || allGames[0];

  const [userId, setUserId] = useState("");
  const [nominal, setNominal] = useState("");
  const [message, setMessage] = useState("");

  const handleBuy = (e) => {
    e.preventDefault();
    if (!userId.trim()) {
      setMessage("Error: User ID / Nickname tidak boleh kosong!");
      return;
    }
    if (!nominal) {
      setMessage("Error: Silakan pilih nominal top up terlebih dahulu!");
      return;
    }

    addTransaction({
      id: Date.now(),
      game: game.name,
      userId: userId,
      nominal: nominal,
      date: new Date().toLocaleString()
    });

    setMessage("Sukses! Top Up berhasil diproses. Mengarahkan ke Riwayat...");
    setTimeout(() => {
      navigate("/history"); // Otomatis pindah ke halaman riwayat setelah sukses
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4 pb-20 font-montserrat">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl">
        
        {/* Header Game Terpilih */}
        <div className="flex items-center gap-6 mb-8 border-b border-gray-800 pb-6">
          <img src={game.img} alt={game.name} className="w-20 h-20 object-cover rounded-lg border border-gray-700 shadow-md" />
          <div>
            <h1 className="text-3xl font-bold font-poppins text-white">Top Up {game.name}</h1>
            <p className="text-sm text-slate-400 mt-1">Masukkan User ID dan pilih nominal diamond/item yang diinginkan.</p>
          </div>
        </div>

        {/* Notifikasi Pesan */}
        {message && (
          <div className={`p-4 mb-6 text-center font-bold text-sm rounded border ${message.includes("Error") ? "bg-red-500/20 text-red-400 border-red-500" : "bg-green-500/20 text-green-400 border-green-500"}`}>
            {message}
          </div>
        )}

        {/* Form Transaksi */}
        <form onSubmit={handleBuy} className="flex flex-col gap-6">
          <div>
            <label className="text-sm text-slate-300 font-bold block mb-2">1. Masukkan User ID / Nickname</label>
            <input 
              type="text" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white outline-none focus:border-yellow-500 text-sm" 
              placeholder="Contoh: 12345678 (9876)" 
            />
          </div>

          <div>
            <label className="text-sm text-slate-300 font-bold block mb-2">2. Pilih Nominal Top Up</label>
            <select 
              value={nominal} 
              onChange={(e) => setNominal(e.target.value)} 
              className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white outline-none focus:border-yellow-500 text-sm"
            >
              <option value="">-- Pilih Nominal Top Up --</option>
              <option value="100 Diamonds (Rp 15.000)">100 Diamonds - Rp 15.000</option>
              <option value="300 Diamonds (Rp 45.000)">300 Diamonds - Rp 45.000</option>
              <option value="500 Diamonds (Rp 75.000)">500 Diamonds - Rp 75.000</option>
              <option value="1000 Diamonds (Rp 150.000)">1000 Diamonds - Rp 150.000</option>
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="w-full bg-gray-800 p-4 rounded-lg hover:bg-gray-700 font-bold transition-colors text-white text-sm"
            >
              Kembali
            </button>
            <button 
              type="submit" 
              className="w-full bg-yellow-600 p-4 rounded-lg hover:bg-yellow-700 font-bold transition-colors text-black text-sm"
            >
              Beli Sekarang
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}