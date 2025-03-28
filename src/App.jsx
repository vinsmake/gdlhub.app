import { Screen } from "@ui/Screen"
import { Dashboard } from "@ui/Dashboard"
import Button from "@common/Button"

export const App = () => {
  return (
    <>
      <Screen>
        <Dashboard>
          <Button>Botón por defecto</Button>
          <Button variant="primaryActive">Eliminar</Button>
          <Button variant="primaryInactive">Botón de Link</Button>
          <Button variant="secondary" size="lg">Botón grande</Button>
          <Button variant="ghost">Botón ghost</Button>
          <Button variant="link">Botón link</Button>

          {/* Botón como enlace usando asChild */}
          <Button asChild>
            <a href="/dashboard">Ir al Dashboard</a>
          </Button>
        </Dashboard>
      </Screen>

    </>
  )
}