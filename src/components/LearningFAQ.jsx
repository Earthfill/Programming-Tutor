import { Link } from "react-router-dom"

const LearningFAQ = () => {
  return (
    <div className='py-10 grid gap-2'>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Is it free?
        </div>
        <div className="collapse-content text-sm">
          <p>
            The majority of our challenges are free, yes. We do have some that are premium and require a <Link to='/subscription' className="underline">Pro subscription</Link> to access. 
            It will say on each challenge whether they are free or premium, so it's easy to tell the difference.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can I use these projects in my portfolio?
        </div>
        <div className="collapse-content text-sm">
          <p>
            Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we 
            created this platform!
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can I take the challenges as a beginner?
        </div>
        <div className="collapse-content text-sm">
          <p>
            For sure! Our challenges have five different levels of difficulty. We'd recommend starting with the newbie ones. You might also want to start with the HTML & CSS only challenges 
            first. As you build up your skills and confidence, you can take on more complex projects.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How do I start?
        </div>
        <div className="collapse-content text-sm">
          <p>
            You can see all of our challenges. To start a challenge, click the "Start Challenge" button on the challenge page. This will take you to the Challenge Hub, where you can 
            download the starter files, including a README file which will help you get set up. We'd recommend starting with one of our newbie level challenges. You can then work your way up from there.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          How can I get help if I'm stuck on a challenge?
        </div>
        <div className="collapse-content text-sm">
          <p>
            The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a 
            dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Can I use libraries/frameworks on these projects?
        </div>
        <div className="collapse-content text-sm">
          <p>
          Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-100 border'>
        <input type="checkbox" name='my-accordion-3' />
        <div className="collapse-title text-lg font-semibold">
          Am I guaranteed to get hired through the Hiring Platform?
        </div>
        <div className="collapse-content text-sm">
          <p>
            We can't offer any guarantees, unfortunately. You can showcase your skills and knowledge to recruiters on our Hiring Platform by completing challenges and engaging with the community. This may lead 
            to job opportunities, but it also may not. We still recommend applying for jobs using traditional channels like job boards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LearningFAQ