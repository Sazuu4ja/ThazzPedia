import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function History() {
  const { history } = useContext(TransactionContext);

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 pb-20 px-4 font-montserrat">
      <h2 className="text-center text-[24px] font-bold mb-8 border-b border-gray-800 pb-4 text-white">Riwayat Transaksi</h2>
      {history.length === 0 ? (
        <p className="text-center text-white-500 italic mt-10">Belum ada transaksi top-up. Ayo beli sekarang!</p>
      ) : (
        <div className="space-y-4">
          {history.map(trx => (
            <div key={trx.id} className="bg-gray-900 p-5 rounded-lg border border-gray-700 flex justify-between items-center shadow-lg">
              <div>
                <p className="font-bold text-green-400 text-lg">{trx.game}</p>
                <p className="text-sm mt-2 text-gray-300">User ID: <span className="font-bold text-white">{trx.userId}</span></p>
                <p className="text-sm text-blue-400 font-bold mt-1">{trx.nominal}</p>
              </div>
              <div className="text-right">
                <span className="text-blue-400 text-xs px-3 py-1 rounded-full font-bold">Berhasil</span>
                <p className="text-xs text-gray-500 mt-3">{trx.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}