const FirstFAQ = () => {
  return (
    <div className='py-10 grid gap-2'>
      <div className="text-primary font-semibold text-3xl">Platform</div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Have you vetted each candidate?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Developers in our community need to reach a certain point threshold on our platform before they can 
            set themselves as available to work. This ensures they have enough information on their profile to help 
            you decide on making initial contact. If you want help vetting candidates, try our flat-fee guided-hire service.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How experienced are the developers?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Roughly 80% of our community has 0-3 years of professional web development experience. So, if you're looking for an
            early-career developer, you'll find plenty of talented developers in our community. We have people with 3+ years of 
            professional experience, but this makes up a smaller portion of our community.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How do your coding challenges work?
        </div>
        <div className="collapse-content text-sm">
          <p>
            We offer realistic coding challenges on our developer platform to help our community gain real-world experience building
            professionally designed interfaces. We provide the designs, assets, project brief, and style guide. The rest is up to the
            developers. We aim to emulate the designer-to-developer handoff as closely as possible so our community is well-practiced
            in the workflow they would use in a professional environment.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can we use your coding challenges in our hiring process?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Please feel free to use our coding challenges as a technical test during your hiring process. Although, we recommend 
            removing the technical test step altogether and having the candidate talk through one of their Programming Tutor 
            projects with a member of your hiring team. This can save a lot of time during the hiring process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstFAQ