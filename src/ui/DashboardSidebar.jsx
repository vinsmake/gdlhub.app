export const DashboardSidebar = ({ children }) => {
    return (
        <>
            <aside className="w-1/4 bg-neutral-800 rounded-xl p-4 text-white">
                <nav className="flex flex-col gap-2">
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Inicio
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Restaurantes
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Categorías
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Ofertas
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Mapa
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Favoritos
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Ajustes
                    </a>
                    <a href="#" className="hover:bg-neutral-600 rounded px-3 py-2 transition">
                        Cerrar sesión
                    </a>
                </nav>
            </aside>
        </>
    )
}