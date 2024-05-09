const ThirdFAQ = () => {
  return (
    <div className='pb-10 grid gap-2'>
      <div className="text-primary font-semibold text-3xl">Team</div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can I invite the rest f my hiring team to collaborate with me?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Yes! Our Scaleup and Business tiers allow for multiple team members who can all conduct searches and message prospective candidates.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can I transfer ownership of the team to another member?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Yes, you can transfer ownership by going to Settings &gt; Team. Any team can only have a single Owner. If you're the Owner and want to 
            remove yourself from your team, you must transfer ownership before leaving.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          What are the roles within a team, and what do they do?
        </div>
        <div className="collapse-content text-sm">
          <div>
            <span>We have two roles: Owner and Member.</span>
            <span>Each team can only have one owner. The Owner can:</span>
            <ul className="list-disc ml-5">
              <li>Search for developers</li>
              <li>Message prospective candidates</li>
              <li>Invite/Remove team members</li>
              <li>Manage the subscription</li>
              <li>View billing history</li>
            </ul>
            <span>
              Members can search for developers and message prospective candidates but can't manage the team or subscription or view the billing history.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdFAQ