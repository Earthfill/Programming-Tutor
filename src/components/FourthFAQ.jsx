const FourthFAQ = () => {
  return (
    <div className='pb-10 grid gap-2'>
      <div className="text-primary font-semibold text-3xl">Message credits</div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How do message credits work?
        </div>
        <div className="collapse-content text-sm">
          <p>
            You use up a message credit whenever you send an initial message to a developer through the app. For now, the initial message sends an 
            email to the developer, who can then reply to you if the opportunity interests them. All communication after the initial introduction 
            will be via email. We have plans to add in-app direct messaging in the future.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          What happens when I run out of credits?
        </div>
        <div className="collapse-content text-sm">
          <p>
            If you use up all of your credits, you can either upgrade to a higher tier or wait for them to refresh the following month. Credits 
            refresh each month; they don't accrue. So it's best to use up your monthly allowance whenever you can.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FourthFAQ