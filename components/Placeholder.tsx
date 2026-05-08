import { CSSProperties } from 'react'

interface Props {
  label: string
  className?: string
  style?: CSSProperties
}

export default function Placeholder({ label, className = '', style }: Props) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}
