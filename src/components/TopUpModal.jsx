import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function TopUpModal({ game, onClose }) {
  const [userId, setUserId] = useState("");
  const [nominal, setNominal] = useState("");
  const [message, setMessage] = useState("");
  
  const { addTransaction } = useContext(TransactionContext);

  const handleBuy = (e) => {
    e.preventDefault();
    if (!userId.trim()) {
      setMessage("Error: User ID tidak boleh kosong!");
      return;
    }
    if (!nominal) {
      setMessage("Error: Pilih nominal top up!");
      return;
    }

    addTransaction({
      id: Date.now(),
      game: game.name,
      userId: userId,
      nominal: nominal,
      date: new Date().toLocaleString()
    });
    
    setMessage("Sukses! Top Up sedang diproses.");
    setTimeout(() => onClose(), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold font-poppins mb-6 text-center text-white">Top Up {game.name}</h2>
        
        {message && (
          <div className={`p-3 mb-4 text-center font-bold text-sm rounded font-montserrat ${message.includes("Error") ? "bg-red-500/20 text-red-400 border border-red-500" : "bg-green-500/20 text-green-400 border border-green-500"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleBuy} className="flex flex-col gap-4 font-montserrat">
          <div>
            <label className="text-sm text-gray-300">User ID / Nickname</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className="w-full mt-1 p-3 bg-black border border-gray-700 rounded text-white outline-none focus:border-yellow-500" placeholder="Masukkan ID Game" />
          </div>
          <div>
            <label className="text-sm text-gray-300">Pilih Nominal</label>
            <select value={nominal} onChange={(e) => setNominal(e.target.value)} className="w-full mt-1 p-3 bg-black border border-gray-700 rounded text-white outline-none focus:border-yellow-500">
              <option value="">-- Pilih --</option>
              <option value="100 Diamonds (Rp 15.000)">100 Diamonds (Rp 15.000)</option>
              <option value="300 Diamonds (Rp 45.000)">300 Diamonds (Rp 45.000)</option>
              <option value="1000 Diamonds (Rp 150.000)">1000 Diamonds (Rp 150.000)</option>
            </select>
          </div>
          <div className="flex gap-4 mt-6">
            <button type="button" onClick={onClose} className="w-full bg-gray-800 p-3 rounded hover:bg-gray-700 font-bold transition-colors text-white">Batal</button>
            <button type="submit" className="w-full bg-yellow-600 p-3 rounded hover:bg-yellow-700 font-bold transition-colors text-black">Beli Sekarang</button>
          </div>
        </form>
      </div>
    </div>
  );
}