import { FaCode } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const routeContent = {
    '/': {
      question: "Looking to improve your coding skills?",
      toDo: "Visit Our Learning Platform",
      route: "/learning"
    },
    '/learning': {
      question: "Looking to hire developers?",
      toDo: "Visit Our Hiring Platform",
      route: "/"
    },
  };

  const currentRouteContent = routeContent[pathname] || routeContent['/'];

  const { question, toDo, route } = currentRouteContent;

  return (
    <div className="bg-neutral text-white p-1 absolute w-full">
      <div className="align-element flex items-start md:items-center gap-3 justify-center">
        <span className="pt-1 md:pt-0"><FaCode /></span>
        <span>
          {question}
          <Link to={`${route}`} className="underline ml-1">{toDo}</Link>
        </span>
      </div>
    </div>
  )
}

export default Header