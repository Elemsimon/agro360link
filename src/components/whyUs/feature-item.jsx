// components/why-choose/feature-item.jsx
import { BarChart3, Zap, Grid } from "lucide-react"

const icons = {
  "We Work Directly With Farmers": BarChart3,
  "Export-Grade Processing & Standards": Zap,
  "Clear, Traceable Supply Chains": Grid,
}

export default function FeatureItem({ title, text }) {
  const Icon = icons[title]

  return (
    <div className="space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <Icon className="h-5 w-5 text-green-600" />
      </div>

      <h3 className="text-lg font-semibold text-black">
        {title}
      </h3>

      <p className="text-gray-600">
        {text}
      </p>
    </div>
  )
}
