import { useShowContent } from "../customHooks/useShowContent"

const Section = ({ title, icon, sub, image, isEven }) => {
  const show = useShowContent();

  return (
    <section className={`rounded-lg lg:px-20 bg-base-100 md:py-10 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="grid md:grid-cols-2 gap-16 md:align-element text-center p-5">
        {!show && <img src={image} alt="section images" className="md:w-11/12" />}
        <div className={`md:text-left md:self-center md:block flex flex-col items-center ${isEven ? 'md:order-last' : 'md:order-first'}`}>
          <div className='w-fit rounded-full bg-gray-50 p-4'>{icon}</div>
          <div className='text-3xl font-medium py-5'>{title}</div>
          <div>{sub}</div>
        </div>
        {show && <img src={image} alt="section images" className="md:w-11/12" />}
      </div>
    </section>
  )
}

export default Section