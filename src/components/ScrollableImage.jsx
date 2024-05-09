import { FaMouse } from 'react-icons/fa';
import preview from '/home-talent-preview.jpeg';

const ScrollableImage = () => {
  return (
    <div>
      <div className='rounded-xl overflow-y-scroll max-w-screen-lg mx-auto active:border active:border-dashed active:border-black absolute w-4/5 h-72 2xl:left-[550px] 2xl:top-[4850px] lg:h-96 lg:top-[4550px] lg:left-36 md:top-auto -mt-16 md:left-24 top-auto left-[10vw]'>
        <img src={preview} alt="talent preview" />
      </div>
      <div className='absolute mt-36 top-auto left-[45vw] lg:left-[50vw] lg:mt-48 text-black bg-base-200 rounded-full p-2'><FaMouse size={35} /></div>
    </div>
  )
}

export default ScrollableImage