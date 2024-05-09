import bookings from '/home-guided-hire.webp';

const Bookings = () => {
  return (
    <div className="align-element lg:px-20 mt-5 lg:py-10">
      <div className='grid md:mx-20 lg:grid-cols-2 gap-4 justify-items-center'>
        <div className='self-center grid gap-4'>
          <div className='text-3xl md:text-4xl text-center lg:text-left font-semibold'>Want help finding and screening high-quality candidates?</div>
          <div className='text-center lg:text-left'>
            Nobody knows our community like us. If you'd ike help finding the perfect candidates, 
            we can work with you to discover 3 pre-screened developers who meet your needs. All you
            need to do is complete the final rounds of the interview process and make a hire!
          </div>
          <div className="grid gap-2 bg-base-100 justify-center px-5 py-8 rounded-md">
            <div className='md:grid md:grid-cols-2'>
              <div className='py-2'>
                <div className='text-3xl font-semibold'>US$3,000 flat fee</div>
                <div>exc. applicable taxes</div>
              </div>
              <div className="bg-red-600 hover:bg-red-800 cursor-pointer md:w-fit md:self-start md:place-self-end text-white button-style text-center my-2">BOOK A CALL</div>
            </div>
            <div>
              Terms: 50% deposit, 50% upon hire. Guaranteed for the initial 3 months in the role. Another
              3 candidates are presented at no extra cost if employment is terminated in the first 3 months.
            </div>
          </div>
        </div>
        <img src={bookings} alt="booking" className='w-96' />
      </div>
    </div>
  )
}

export default Bookings