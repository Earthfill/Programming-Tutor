import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { FcClock, FcMoneyTransfer, FcSearch } from 'react-icons/fc';
import { Bookings, FAQs, Hero, Plans, Preview, Pricing, Questions, Recommendations, Section, Trial } from '../components';
import avatar1 from '/home-avatar-kieran.jpg';
import messages from '/home-benefit-1_.webp';
import talents from '/home-benefit-2_.webp';
import proofs from '/home-benefit-3_.webp';
import contacts from '/home-benefit-4_.webp';
import savings from '/home-benefit-5_.webp';
import { useState } from 'react';

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <main>
      <Hero 
        title="Expand your developer talent pool with skills-first hiring"
        sub="Connect with thousands of talented, motivated, ready-to-hire web developers from the Programming Tutor community.
        We help you discover top talent based on coding skills instead of credentials."
        action="START HIRING DEVELOPERS"
      />
      <Recommendations 
        text="We've been seriously impressed by the quality of the developers in the Programming Tutor community. There are so many potentially
        great hires to search through. The coding challenges they offer help us evaluate developer's skills before making contact, which saves so
        much time." 
        avatar={avatar1}
        name='KIERAN DELANEY'
        job='Founder, FlatPlan'
      />
      <Section 
        title='Evaluate proven skills, not self-reported claims'
        sub="Our project-based developer platform ensures you review candidates' work before making contact. Evaluate their competency based on
        completed projects rather than relying on self-reported skills"
        icon={<FcSearch size={50} />}
        image={proofs}
        isEven={false}
      />
      <Section 
        title='Save time by contacting high-intent candidates'
        sub="All candidates on our Hiring Platform are actively looking for work. So they are ready and waiting to hear about opportunities. Just
        find developers who meet your needs, and start chatting!"
        icon={<FcClock size={50} />}
        image={contacts}
        isEven={true}
      />
      <Section 
        title='Drastically reduce your hiring costs'
        sub="Our flexible subscription options come with no hidden hiring fees, enabling you to save significantly compared to other 
        talent-sourcing channels. Hire as many developers as you want with no additional expenses."
        icon={<FcMoneyTransfer size={50} />}
        image={savings}
        isEven={false}
      />
      <Section 
        title='Access a diverse, skilled, and passionate talent pool'
        sub="The Programming Mentor community is global. We have high-quality developers from all backgrounds who hone their coding skills by 
        building projects and giving each other feedback."
        icon={<MdPeopleAlt size={50} />}
        image={talents}
        isEven={true}
      />
      <Section 
        title='Start talking to qualified candidates in minutes'
        sub="Our powerful Talent Search helps you find the best developers based on your exact requirements - filter candidates by experience, 
        skills, location, contract type, and more. Don't wait for developers to come to you."
        icon={<IoChatboxEllipsesOutline size={50} />}
        image={messages}
        isEven={false}
      />
      <Preview />
      <Pricing 
        toggle={toggle} 
        setToggle={setToggle}
      />
      <Plans 
        toggle={toggle} 
      />
      <Bookings />
      <FAQs />
      <Trial />
      <Questions />
    </main>
  )
}

export default Landing