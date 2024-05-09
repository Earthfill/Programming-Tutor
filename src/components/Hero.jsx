import hero from '/home-hero_.webp';
import hero_ from '/home-hero.webp';
import community from '/home-community-avatars.webp';
import Perks from './Perks';
import { useShowContent } from '../customHooks/useShowContent';
import { FaGithub } from 'react-icons/fa';

const Hero = ({ title, sub, action }) => {
  const show = useShowContent();

  return (
    <article className='bg-base-100 -mt-16 md:mt-0 px-1 py-5'>
      <div className='md:align-element grid md:grid-cols-2 md:text-left md:place-items-start place-items-center gap-5 text-center'>
        <div className='flex flex-col md:items-start items-center gap-5'> 
          <div className='text-5xl font-medium text-primary pt-8 md:pt-0'>{title}</div>
          <div>{sub}</div>
          <div className='flex items-center gap-2 bg-red-600 button-style text-base-100 font-medium w-fit'>
            {action} {!show && <FaGithub />}
          </div>
          {show ? <Perks /> 
            : (
            <div className='grid md:flex md:gap-5 place-items-center'>
              <img width={150} src={community} alt="community-profile-picture" />
              <div>Join <span className='text-primary font-bold'>820,650</span> developers building projects, reviewing code, and helping each other improve.</div>
            </div>
          )}
        </div>
        {show 
          ? <img src={hero} alt="hiring-hero" className='md:self-center' /> 
          : (
            <div className='flex flex-col items-center gap-2'>
              <img src={hero_} alt="learning-hero" className='md:self-center'/>
            </div>
        )}
      </div>
    </article>
  )
}

export default Hero