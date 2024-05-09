import { links } from "../data";

const SmallNavLinks = () => {
  return (
    <div className="align-element -mt-4 bg-base-100">
      <ul className="grid gap-5">
        {links.map((link) => {
          const { id, text, icon } = link;
          return (
            <li 
              key={id} 
              className={`${text === 'SIGN IN' ? 'text-red-500' : ''} flex items-center gap-3 font-bold border-b cursor-pointer pb-4`}
            >
              {icon} {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SmallNavLinks