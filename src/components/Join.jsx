import { FaGithub } from "react-icons/fa"

const Join = () => {
  return (
    <div className="align-element 2xl:mb-10 md:mx-4 2xl:max-w-full 2xl:px-[22vw] my-4">
      <div className="bg-base-100 grid gap-4 md:gap-7 py-7 md:py-20 place-items-center rounded-md">
        <div className="text-4xl font-medium text-primary text-center md:mx-16 lg:mx-72 md:tracking-wide">
          Join 821,344 people building portfolio-worthy projetcs
        </div>
        <div className="text-center mx-7 md:mx-6 lg:mx-72 md:text-lg">
          Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. 
          We'd love to welcome you to our community!
        </div>
        <div className="flex items-center gap-2 button-style bg-red-600 hover:bg-red-700 text-base-100 font-medium">LOGIN WITH GITHUB <FaGithub /></div>
      </div>
    </div>
  )
}

export default Join