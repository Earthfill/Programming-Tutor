import { FaQuoteLeft } from "react-icons/fa";
import { useShowContent } from "../customHooks/useShowContent";

const Recommendations = ({ text, name, avatar, job }) => {
  const show = useShowContent();

  return (
    <section className={`grid place-items-center text-center p-5 rounded-lg bg-base-100 ${show && '2xl:mx-[21vw]'} mx-3 my-5`}>
      <FaQuoteLeft size={50} className="text-base-300" />
      <div className="font-medium text-lg py-4 md:m-5 md:mx-16">{text}</div>
      <img width={100} src={avatar} alt="" className="rounded-full" />
      <div className="text-primary font-bold pt-2">{name}</div>
      <div className="text-sm">{job}</div>
    </section>
  )
}

export default Recommendations