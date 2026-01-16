// components/why-it-matters/feature-item.jsx

export default function FeatureItem({ title, text }) {
    return (
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          ●
        </div>
  
        <h3 className="font-semibold text-black">{title}</h3>
  
        <p className="text-sm text-gray-600">
          {text}
        </p>
      </div>
    )
  }
  