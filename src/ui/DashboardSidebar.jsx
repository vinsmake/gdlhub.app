import {
    Home,
    Utensils,
    List,
    Percent,
    MapPin,
    Heart,
    Eye,
    Settings,
  } from "lucide-react";
  
  export const DashboardSidebar = () => {
    return (
      <aside className="w-1/5 bg-neutral-900 rounded-xl p-4 text-white text-lg">
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Home size={24} /> Inicio
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Utensils size={24} /> Restaurantes
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <List size={24} /> Categorías
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Percent size={24} /> Ofertas
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <MapPin size={24} /> Mapa
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Heart size={24} /> Favoritos
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Eye size={24} /> Visitados
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-neutral-600 rounded-xl px-3 py-2 transition">
            <Settings size={24} /> Configuración
          </a>
        </nav>
      </aside>
    );
  };
  