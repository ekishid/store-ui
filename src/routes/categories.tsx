import { createFileRoute } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export const Route = createFileRoute('/categories')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col min-h-lvh justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-6">Categories page in progress..</h1>
      <FontAwesomeIcon icon={faCircleInfo} className="animate-pulse text-6xl" />
    </main>
  )
}
