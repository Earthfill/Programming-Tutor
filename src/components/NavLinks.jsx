import { links } from "../data";

const NavLinks = () => {
  return (
    <div>
      <ul className="flex gap-3">
        {links.map((link) => {
          const { id, text } = link;
          return (
            <li 
              key={id} 
              className="cursor-pointer hover:border-b-4 hover:border-b-red-600"  
            >
              {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavLinks