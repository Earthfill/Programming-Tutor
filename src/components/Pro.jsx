import { FaFigma } from "react-icons/fa"
import { GiFallingStar } from "react-icons/gi"

const Pro = () => {
  return (
    <div className="align-element grid text-center place-items-center gap-3 md:gap-10 py-5">
      <div className="grid md:gap-5 md:mx-40 lg:mx-80 md:py-5">
        <div className="text-3xl font-semibold leading-normal">Take your skills to the next level with our <span className="bg-primary px-2 py-1 rounded-md">PRO</span> subscription</div>
        <div className="text-lg">
          Step into the shoes of a professional developer and build projects in the most realistic way possible. 
          Our Pro subscription will help you prepare for life as a professional developer.
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:mx-4 gap-5">
        <div className="grid justify-items-center gap-3 bg-base-100 rounded-md px-5 py-16">
          <div><FaFigma size={50} className="text-primary" /></div>
          <div className="font-semibold text-3xl">Access each challenge's design file</div>
          <div className="text-lg md:mx-5">
            Professional teams use tools like Figma. By using these tools when building projects, you'll save time, 
            create more accurate solutions, and gain hands-on experience working like a pro.
          </div>
        </div>
        <div className="grid justify-items-center gap-3 bg-base-100 rounded-md px-5 py-16">
          <div><GiFallingStar size={50} className="text-primary rotate-90" /></div>
          <div className="font-semibold text-3xl">Tackle our premium challenges</div>
          <div className="text-lg md:mx-5">
            Our premium challenges are the most realistic, comprehensive practice projects you'll find. They also 
            make incredible portfolio pieces to help you “wow!” recruiters and get hired.
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-base-100 w-fit button-style font-semibold hover:bg-red-700">LEARN ABOUT PRO</div>
    </div>
  )
}

export default Pro