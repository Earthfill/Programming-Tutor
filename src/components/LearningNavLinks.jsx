import { learningLinks } from "../data";

const LearningNavLinks = () => {
  return (
    <div>
      <ul className="flex gap-3">
        {learningLinks.map((link) => {
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

export default LearningNavLinks