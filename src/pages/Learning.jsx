import { FcSupport } from 'react-icons/fc';
import { FAQs, Featured, Hero, Hire, Join, Pro, Recommendations, Review, Section } from '../components';
import { ImEvil2 } from 'react-icons/im';
import { RiStarSmileLine } from 'react-icons/ri';
import { GiFrozenOrb } from 'react-icons/gi';
import avatar2 from '/home-avatar-kevin.webp';
import avatar3 from '/home-avatar-jessica.webp';
import portfolio from '/home-benefit-2.webp';
import escape from '/home-benefit-1.webp';
import imposter from '/home-benefit-3.webp';
import tools from '/home-benefit-4.webp';
import opportunities from '/home-benefit-5.webp';
import { FaHandshake } from 'react-icons/fa';

const Learning = () => {
  return (
    <main>
      <Hero 
        title="Improve your coding skills by building realistic projects"
        sub="Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you
        can focus on the code and see your skills skyrocket!"
        action="LOG IN WITH GITHUB"
      />
      <div className='md:mx-7 2xl:mx-auto lg:align-element lg:grid lg:grid-cols-2'>
        <Recommendations 
          text="Programming Tutor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a
          job!" 
          avatar={avatar3}
          name='JESSICA CHAN'
          job='Web Developer & YouTuber'
        />
        <Recommendations 
          text="I highly recommend Programming Tutor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a
          developer." 
          avatar={avatar2}
          name='KEVIN POWELL'
          job='Web Developer & YouTuber'
        />
      </div>
      <Featured />
      <Section
        title='Escape tutorial hell'
        sub="Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world 
        problems yourself."
        icon={<ImEvil2 className='text-red-600' size={50} />}
        image={escape}
        isEven={false}
      />
      <Section 
        title='Build portfolio-worthy projects'
        sub="Design is hard. We take care of the project ideas and design so you can focus on the coding. You'll end up with an incredible portfolio 
        of stunning projects!"
        icon={<RiStarSmileLine color='orange' size={50} />}
        image={portfolio}
        isEven={true}
      />
      <Section 
        title='Banish imposter syndrome'
        sub="We've all felt out of our depth before. Getting hands-on experience is an incredible way to build confidence, refine your workflow, and 
        supercharge your learning."
        icon={<GiFrozenOrb color='lightblue' size={50} />}
        image={imposter}
        isEven={false}
      />
      <Section 
        title='Practice new tools'
        sub="The front-end landscape changes constantly. Our design-led challenges let you pick your tools to help you adapt, experiment, and keep up 
        with the latest trends."
        icon={<FcSupport size={50} />}
        image={tools}
        isEven={true}
      />
      <Section 
        title='Create job opportunities'
        sub="We have a Hiring Platform that runs alongside this platform. Just by building projects and engaging with the community, you could open up 
        job opportunities!"
        icon={<FaHandshake color='orange' size={50} />}
        image={opportunities}
        isEven={false}
      />
      <Pro />
      <Join />
      <Review />
      <FAQs />
      <Hire />
    </main>
  )
}

export default Learning