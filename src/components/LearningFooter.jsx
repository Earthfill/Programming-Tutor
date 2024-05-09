import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '/logo.svg';
import { TbCopyright } from 'react-icons/tb';

const LearningFooter = () => {
  return (
    <div className="bg-base-100">
      <div className="md:align-element grid md:py-5 py-10">
        <div className="grid md:flex md:justify-between gap-5 justify-items-center py-5">
          <div className='w-64 -mt-10 md:-ml-8'>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex gap-2 md:gap-4 md:py-4 md:mt-1 -mt-5 text-primary">
            <FaDiscord size={25} />
            <FaTwitter size={25} />
            <FaLinkedin size={25} />
            <FaFacebook size={25} />
          </div>
        </div>
        <div className='md:grid lg:grid-cols-3 md:gap-16 md:pb-5'>
          <div className='grid gap-2 md:flex md:flex-col md:items-start'>
            <div className='text-xl text-primary text-center'>Stay up to date</div>
            <div className='text-center mx-10 md:mx-0 md:mr-10 md:text-left text-sm'>with new challenges, featured solutions, selected articles and our latest news</div>
            <div className='grid mx-10 md:mx-0 gap-2 justify-center md:flex md:items-center'>
              <input type="text" placeholder="email@example.com" className="md:flex-1 md:w-64 input input-bordered border-dashed input-md w-60 max-w-xs" />
              <div className='md:w-fit bg-red-600 hover:bg-red-700 md:py-4 text-base-100 button-style text-center font-semibold'>SUBSCRIBE</div>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:col-span-2 md:grid-cols-4 lg:justify-items-end gap-5 ml-14 pt-5 md:pt-0 pb-5 md:mx-0 md:-mr-24 lg:mr-0 text-sm'>
            <div className='justify-self-start md:flex md:flex-col md:gap-2'>
              <div className='font-bold'>PROGRAMMING TUTOR</div>
              <div className='cursor-pointer'>Unlock Pro</div>
              <div className='cursor-pointer'>Contact us</div>
              <div className='cursor-pointer'>FAQs</div>
            </div>
            <div className='md:flex md:flex-col md:gap-2'>
              <div className='font-bold'>EXPLORE</div>
              <div className='cursor-pointer'>Learning paths</div>
              <div className='cursor-pointer'>Challenges</div>
              <div className='cursor-pointer'>Solutions</div>
              <div className='cursor-pointer'>Articles</div>
              <div className='cursor-pointer'>Resources</div>
            </div>
            <div className='justify-self-start md:flex md:flex-col md:gap-2'>
              <div className='font-bold'>COMMUNITY</div>
              <div className='cursor-pointer'>Discord</div>
              <div className='cursor-pointer'>Guidelines</div>
              <div className='cursor-pointer'>Write for us</div>
            </div>
            <div className='md:flex md:flex-col md:gap-2'>
              <div className='font-bold'>FOR COMPANIES</div>
              <div className='cursor-pointer'>Hire developers</div>
            </div>
          </div>
        </div>
        <hr className="md:w-full" />
        <div className="md:mx-12 grid justify-items-center gap-2 md:flex md:justify-between md:pt-5">
          <div className="flex justify-center items-center gap-2 pt-5 md:pt-0">
            <TbCopyright /> Programming Tutor 2019 - 2022
          </div>
          <div className="flex gap-2 md:gap-5">
            <div>Terms</div>
            <div>Cookie policy</div>
            <div>Privacy policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningFooter