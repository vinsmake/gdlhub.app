import Button from "./components/Button/Button"

export const App = () => {
    return (
    <>
        <div>
      <Button>Botón por defecto</Button>
      <Button variant="destructive">Eliminar</Button>
      <Button variant="outline">Botón de borde</Button>
      <Button variant="secondary" size="lg">Botón grande</Button>
      <Button variant="ghost">Botón ghost</Button>
      <Button variant="link">Botón link</Button>

      {/* Botón como enlace usando asChild */}
      <Button asChild>
        <a href="/dashboard">Ir al Dashboard</a>
      </Button>
    </div>

    </>
    )
}