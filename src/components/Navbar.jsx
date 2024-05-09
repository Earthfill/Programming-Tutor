import { VscThreeBars } from 'react-icons/vsc'
import NavLinks from './NavLinks';
import logo from '/logo.svg';
import { useState } from 'react';
import SmallNavLinks from './SmallNavLinks';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { useShowContent } from '../customHooks/useShowContent';
import LearningNavLinks from './LearningNavLinks';
import LearningSmallNavLinks from './LearningSmallNavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = useShowContent();

  return (
    <div className='bg-base-100 pt-2 md:pt-0'>
      {/* Desktop */}
      <div className='align-element'>
        <div className="hidden lg:block -ml-7">
          <div className='flex items-center justify-between'>
            <div className='w-64'>
              <img src={logo} alt="logo" />
            </div>
            {show ? (
              <div className='flex items-center gap-5 font-semibold'>
                <NavLinks /> 
                <div className='bg-primary button-style text-base-100 font-bold hover:bg-green-600 cursor-pointer'>
                  START FREE TRIAL
                </div>
              </div>
            ) : (
              <div className='flex items-center gap-5 font-semibold'>
                <LearningNavLinks /> 
                <div className='bg-black button-style flex items-center gap-2 text-base-100 font-bold hover:bg-gray-800 cursor-pointer'>
                  LOGIN WITH GITHUB <FaGithub />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='lg:hidden'>
        <div className='flex items-center justify-between -ml-3'>
          <div className='w-full'><img width={250} src={logo} alt="logo" /></div>
          <span className='pr-5' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={30} /> : <VscThreeBars size={30} />}
          </span>
        </div>
        {isOpen && (
          <div className='absolute -mt-5 border-b shadow bg-base-100 w-full'>
            {show ? <SmallNavLinks /> : <LearningSmallNavLinks />}
            {show 
              ? <div className='bg-primary button-style text-base-100 font-bold text-center mx-5 my-5'>START FREE TRIAL</div>
              : <div className='bg-black button-style text-base-100 flex items-center gap-2 font-bold justify-center mx-5 my-5'>LOGIN WITH GITHUB <FaGithub /></div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar