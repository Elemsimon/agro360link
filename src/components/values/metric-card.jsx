// components/values/metric-card.jsx

export default function MetricCard({ value, label, image }) {
    return (
      <div className="relative h-[360px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
  
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-2xl font-bold">{value}</p>
          <p className="mt-2 text-sm text-white/80">{label}</p>
        </div>
      </div>
    )
  }
  