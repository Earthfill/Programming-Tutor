import Perks from "./Perks";
import PlansItems from "./PlansItems";
import visa from '/visa.png';
import mastercard from '/mastercard.png';
import amex from '/amex.webp';
import maestro from '/maestro.webp';
import paypal from '/paypal.webp';
import { CiCircleInfo } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";

const Plans = ({ toggle }) => {
  return (
    <div>
      {/* MOBILE */}
      <div className="lg:hidden">
        <PlansItems
          plans='Startup'
          payment={`${toggle ? 'US$119/mo' : 'US$199/mo' }`}
          number='20'
          members='1'
          time={`${toggle ? 'yearly' : 'monthly'}`}
          modalSub=''
          modalTitle=''
        />
        <PlansItems 
          plans='Scaleup'
          payment={`${toggle ? 'US$219/mo' : 'US$349/mo'}`}
          number='50'
          members='5'
          time={`${toggle ? 'yearly' : 'monthly'}`}
          modalSub=''
          modalTitle=''
        />
        <PlansItems
          plans='Business'
          payment={`${toggle ? 'US$359/mo' : 'US$599/mo'}`}
          number='100'
          members='10'
          time={`${toggle ? 'yearly' : 'monthly'}`}
          modalSub=''
          modalTitle=''
        />
        <div className="md:mx-6 lg:mx-64 2xl:mx-96 p-5 rounded-lg bg-base-100 mx-3 mt-5">
          <Perks />
          <div className="flex md:justify-center pt-9 pb-5 w-[16.5vw] md:w-fit">
            <img width={70} src={visa} alt="visa" />
            <img width={70} src={mastercard} alt="mastercard" />
            <img width={70} src={amex} alt="american express" />
            <img width={70} src={maestro} alt="maestro" />
            <img width={70} src={paypal} alt="paypal" />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="align-element p-5">
        <div className="hidden lg:block rounded-lg w-fit mx-auto overflow-x-auto">
          <table className="grid gap-2">
            <thead>
              <tr className="text-center grid grid-cols-4 gap-y-2 bg-base-100">
                <th className="border-b p-5"></th>
                <th className="border-b p-5">
                  <div>Startup</div>
                  <div>US$199/mo</div>
                  <div>Billed monthly</div>
                </th>
                <th className="border-b p-5">
                  <div>Scaleup</div>
                  <div>US$349/mo</div>
                  <div>Billed monthly</div>
                </th>
                <th className="border-b p-5">
                  <div>Business</div>
                  <div>US$599/mo</div>
                  <div>Billed monthly</div>
                </th>
              </tr>
            </thead>
            <tbody className="grid gap-y-2">
              <tr className="text-center grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Team members <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5">1 member</td>
                <td className="border-b p-5">5 members</td>
                <td className="border-b p-5">10 members</td>
              </tr>
              <tr className="text-center grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Message candidates <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5">20 per month</td>
                <td className="border-b p-5">50 per month</td>
                <td className="border-b p-5">100 per month</td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Access a high-intent talent pool <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Unlimited searches <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Reviewed featured projects <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Transparent salary expectations <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th className='border-b p-5 flex items-center justify-start gap-2'>Unlimited hires <CiCircleInfo className="cursor-pointer" /></th>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
                <td className="border-b p-5"><span className="flex justify-center text-primary"><FaRegCheckCircle /></span></td>
              </tr>
              <tr className="grid grid-cols-4 bg-base-100">
                <th></th>
                <td className="text-center p-5"><span className="button-style bg-red-600 w-fit text-base-100 cursor-pointer">START FREE TRIAL</span></td>
                <td className="text-center p-5"><span className="button-style bg-red-600 w-fit text-base-100 cursor-pointer">START FREE TRIAL</span></td>
                <td className="text-center p-5"><span className="button-style bg-red-600 w-fit text-base-100 cursor-pointer">START FREE TRIAL</span></td>
              </tr>
            </tbody>
          </table >
          <div className="grid place-items-center p-5 rounded-lg bg-base-100 mt-5">
            <Perks />
            <div className="flex pt-9 pb-5">
              <img width={70} src={visa} alt="visa" />
              <img width={70} src={mastercard} alt="mastercard" />
              <img width={70} src={amex} alt="american express" />
              <img width={70} src={maestro} alt="maestro" />
              <img width={70} src={paypal} alt="paypal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans