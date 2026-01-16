// components/footer/footer-column.jsx

export default function FooterColumn({ title, links }) {
    return (
      <div className="space-y-4">
        <p className="font-semibold text-white">{title}</p>
        <ul className="space-y-2 text-gray-400">
          {links.map((link) => (
            <li key={link} className="hover:text-white cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  