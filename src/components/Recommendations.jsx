import { FaQuoteLeft } from "react-icons/fa";

const Recommendations = ({ text, name, avatar, job }) => {
  return (
    <section className="grid place-items-center text-center p-5 rounded-lg bg-base-100 mx-3 mt-5">
      <FaQuoteLeft size={50} className="text-base-300" />
      <div className="font-medium text-lg py-4 md:m-5">{text}</div>
      <img width={100} src={avatar} alt="" className="rounded-full" />
      <div className="text-primary font-bold pt-2">{name}</div>
      <div className="text-sm">{job}</div>
    </section>
  )
}

export default Recommendations