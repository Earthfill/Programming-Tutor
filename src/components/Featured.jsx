import css from '/logo-css-tricks.svg';
import stackOverflow from '/logo-stack-overflow.svg';
import productHunt from '/logo-product-hunt.svg';

const Featured = () => {
  return (
    <div className='grid justify-items-center md:mx-16 2xl:mx-[21.9vw] md:justify-items-stretch md:gap-12 gap-3 p-5 rounded-lg bg-base-100 my-5 md:py-10'>
      <div className='text-sm font-bold tracking-wider md:text-center'>AS FEATURED ON...</div>
      <div className="grid gap-3 md:grid-cols-3 md:mx-10">
        <div className='border p-3 rounded-lg shadow-sm md:px-10'>
          <img src={productHunt} alt="product-hunt" />
        </div>
        <div className='border p-3 rounded-lg shadow-sm md:px-10'>
          <img src={css} alt="css-tricks" />
        </div>
        <div className='border p-3 rounded-lg shadow-sm md:px-10'>
          <img src={stackOverflow} alt="stack-overflow" />
        </div>
      </div>
    </div>
  )
}

export default Featured