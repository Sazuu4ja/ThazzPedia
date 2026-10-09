import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navbar />
      <main className="pb-10">
        <Outlet />
      </main>
    </div>
  );
}