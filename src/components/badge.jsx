// components/hero/badge.tsx
export default function Badge({text}) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-500">
        ● {text}
      </div>
    )
  }
  