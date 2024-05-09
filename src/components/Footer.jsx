import { TbCopyright } from "react-icons/tb"
import logo from '/logo.svg';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-100">
      <div className="md:align-element grid md:py-5 py-10">
        <div className="grid md:grid-cols-4 md:gap-20 justify-items-center py-5">
          <div className='w-64 -mt-10 md:ml-12'>
            <img src={logo} alt="logo" />
          </div>
          <div className="py-4 md:py-10 md:gap-3 grid justify-items-center md:justify-items-start -mt-5">
            <div className="font-semibold">PROGRAMMING TUTOR HIRING</div>
            <div>Pricing</div>
            <div>FAQs</div>
            <div>Contact us</div>
          </div>
          <div className="py-4 grid justify-items-center md:gap-3 md:flex md:flex-col">
            <div className="font-semibold">FOR DEVELOPERS</div>
            <div>Take challenges</div>
          </div>
          <div className="flex gap-2 md:gap-4 md:py-4 text-primary">
            <FaTwitter size={25} />
            <FaLinkedin size={25} />
            <FaFacebook size={25} />
          </div>
        </div>
        <hr className="md:mx-12" />
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

export default Footer