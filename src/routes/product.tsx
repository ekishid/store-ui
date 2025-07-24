import { createFileRoute } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export const Route = createFileRoute('/product')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-6">Product page in progress..</h1>
      <FontAwesomeIcon icon={faCircleInfo} className="animate-pulse text-6xl" />
    </main>
  )
}
