import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link to="/nuqs" search={{ tab: 2 }}>
        <Button size="lg" variant="outline" className="cursor-pointer">
          Go to tabs <ArrowRight />
        </Button>
      </Link>
    </div>
  )
}
