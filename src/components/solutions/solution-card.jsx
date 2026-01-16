// components/solutions/solution-card.jsx
import Button from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function SolutionCard({
  title,
  description,
  image,
  size,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${
        size === "large" ? "md:col-span-2 h-[420px]" : "h-[360px]"
      }`}
    >
      {/* Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="m-6 max-w-md rounded-xl bg-black/20 p-6 backdrop-blur-md">
          <h3 className="mb-2 text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mb-4 text-sm text-white/80">
            {description}
          </p>

        <Button className="rounded-full bg-white text-black hover:bg-white/90">
            Learn more
            <ArrowUpRight className="h-9 w-9 text-white bg-black rounded-full p-1" />
        </Button>
        </div>
      </div>
    </div>
  )
}
