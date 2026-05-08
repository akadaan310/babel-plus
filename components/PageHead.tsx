interface Props {
  num: string
  eyebrow: string
  title: string
  sub?: string
}

export default function PageHead({ num, eyebrow, title, sub }: Props) {
  return (
    <header className="page-head">
      <div className="container">
        <div className="page-head-meta">
          <span className="eyebrow">{num}</span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1
          className="page-head-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {sub && <p className="page-head-sub">{sub}</p>}
      </div>
    </header>
  )
}
