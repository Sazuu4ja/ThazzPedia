import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function AdminPage() {
  const { history, deleteTransaction, clearAllHistory } = useContext(TransactionContext);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 pb-20 px-4 font-montserrat">
      <h2 className="text-center text-[28px] font-bold mb-8 border-b border-gray-800 pb-4 text-white font-poppins">
        Dashboard Admin
      </h2>
      
      <div className="bg-black-900 p-6 rounded-xl shadow-2xl overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">Semua Data Transaksi Masuk</h3>
          {history.length > 0 && (
            <button 
              onClick={() => {
                if(window.confirm("Peringatan: Yakin ingin menghapus SEMUA riwayat transaksi?")) {
                  clearAllHistory();
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-bold text-sm transition-colors"
            >
              Hapus Semua
            </button>
          )}
        </div>
        
        {history.length === 0 ? (
          <p className="text-center text-white-500 italic py-10">Belum ada data transaksi masuk dari user.</p>
        ) : (
          <table className="w-full text-left border-collapse min-w-37.5">
            <thead>
              <tr className="border-b border-gray-700 text-slate-400 bg-black">
                <th className="p-4 font-bold rounded-tl-lg">Waktu</th>
                <th className="p-4 font-bold">Game</th>
                <th className="p-4 font-bold">User ID</th>
                <th className="p-4 font-bold">Nominal</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold rounded-tr-lg text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {history.map((trx) => (
                <tr key={trx.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-sm text-gray-300">{trx.date}</td>
                  <td className="p-4 font-bold text-green-400">{trx.game}</td>
                  <td className="p-4 text-white font-mono">{trx.userId}</td>
                  <td className="p-4 text-blue-400 font-bold">{trx.nominal}</td>
                  <td className="p-4 text-blue-400 font-bold">Sukses</td>
                  
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => {
                        if(window.confirm(`Yakin ingin menghapus transaksi dari User ID ${trx.userId}?`)) {
                          deleteTransaction(trx.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-400 underline text-xs font-bold transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}