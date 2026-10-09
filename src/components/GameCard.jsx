import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const slug = game.name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div 
      className="text-center cursor-pointer hover:scale-105 transition-transform" 
      onClick={() => navigate(`/topup/${slug}`)}
    >
      <img src={game.img} alt={game.name} className="w-43 mx-auto pt-5 px-2.5" />
      <p className="font-bold font-['Montserrat'] text-[10px] text-white mt-2 uppercase">
        {game.name}
      </p>
    </div>
  );
}