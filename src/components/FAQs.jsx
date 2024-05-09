import { useShowContent } from "../customHooks/useShowContent"
import FirstFAQ from "./FirstFAQ"
import FourthFAQ from "./FourthFAQ"
import LearningFAQ from "./LearningFAQ"
import SecondFAQ from "./SecondFAQ"
import ThirdFAQ from "./ThirdFAQ"

const FAQs = () => {
  const show = useShowContent();

  return (
    <section className="py-10 bg-base-100">
      <div className='align-element grid md:w-4/5 lg:w-3/5 2xl:w-1/3'>
        <div className='text-3xl text-center font-bold'>FAQs</div>
        {show && (
          <>
            <FirstFAQ />
            <SecondFAQ />
            <ThirdFAQ />
            <FourthFAQ />
          </>
        )}
        {!show && <LearningFAQ />}
      </div>
    </section>
  )
}

export default FAQs