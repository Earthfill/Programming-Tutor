import { FaMouse } from 'react-icons/fa';
import preview from '/home-talent-preview.jpeg';

const ScrollableImage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='rounded-xl overflow-y-scroll max-w-screen-lg mx-auto active:border active:border-dashed active:border-black w-4/5 h-72 lg:h-96 2xl:-mt-56'>
        <img src={preview} alt="talent preview" />
      </div>
      <div className='absolute left-[45vw] md:left-[50vw] mt-36 lg:mt-48 2xl:mt-16 text-black bg-base-200 rounded-full p-2'><FaMouse size={35} /></div>
    </div>
  )
}

export default ScrollableImage