import { learningLinks } from "../data";

const LearningSmallNavLinks = () => {
  return (
    <div className="align-element -mt-4 bg-base-100">
      <ul className="grid gap-5">
        {learningLinks.map((link) => {
          const { id, text, icon } = link;
          return (
            <li 
              key={id} 
              className='flex items-center gap-3 font-bold border-b cursor-pointer pb-4'
            >
              {icon} {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LearningSmallNavLinks