import { FaRegCheckCircle } from "react-icons/fa"

const Perks = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 lg:flex-row md:gap-3 items-center md:justify-center lg:items-center gap-2 pt-1'>
      <div className='flex items-center gap-2'><FaRegCheckCircle className='text-primary' /> Cancel any time</div>
      <div className='flex items-center gap-2'><FaRegCheckCircle className='text-primary' /> 14-day free trial</div>
      <div className='flex md:col-span-2 lg:col-auto items-center gap-2'><FaRegCheckCircle className='text-primary' /> No credit card required</div>
    </div>
  )
}

export default Perks