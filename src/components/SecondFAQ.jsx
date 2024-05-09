const SecondFAQ = () => {
  return (
    <div className='pb-10 grid gap-2'>
      <div className="text-primary font-semibold text-3xl">Platform</div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How does the free trial work?
        </div>
        <div className="collapse-content text-sm">
          <p>
            You can join the Programming Tutor Hiring platform for free without the need to add any credit card details. This 
            starts your 14-day free trial, where you can send 10 introductory messages to candidates. You can choose to upgrade if you
            feel it's a good fit for you.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How do I upgrade/downgrade my plan?
        </div>
        <div className="collapse-content text-sm">
          <p>
            If you would like to upgrade or downgrade your plan, please email us at <span className="underline">hi@programmingtutor.io</span>
            Upgrades can be processed either immediately or scheduled for when your subscription is due for renewal. Downgrade can be scheduled
            for when your subscription is due for renewal.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Does the subscription auto-renew?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Our subscriptions auto-renew at the end of their term. You can easily manage your subscription by going to Settings &gt; Billing. We
            send you an email reminder a few days before your subscription to ensure you don't get caught out.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Do you offer refunds?
        </div>
        <div className="collapse-content text-sm">
          <p>
            We offer a 14-day money back guarantee the first time you subscribe. If you're unhappy with your purchase for any reason, please 
            contact us at <span className="underline">hi@programmingtutor.io</span>.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How do I cancel my subscription?
        </div>
        <div className="collapse-content text-sm">
          <p>
            You can manage your subscription by going to Settings &gt; Billing. From there, you can schedule your subscription for cancellation to
            ensure it doesn't renew.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          What happens when my subscription expires?
        </div>
        <div className="collapse-content text-sm">
          <p>
            When your subscription expires, your message credits reset to zero. So please be sure to use any remaining message credits before
            the cancellation date. Without an active subscription, you also won't be able to do any new searches.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          What happens if my payment fails?
        </div>
        <div className="collapse-content text-sm">
          <p>
            If an attempt to renew your subscription fails, we'll notify you by email and attempt to take payment three more times over the
            following nine days. We'll send emails after every failed attempt. If all attempts fail, we will cancel your subscription at the
            end of the 9-day retry period.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondFAQ