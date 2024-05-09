import { CiCircleInfo } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { toggler } from '../features/functionalities/functionalitiesSlice';
import Modal from './Modal';

const PlansItems = ({ plans, payment, number, members, time }) => {
  const { isOpen } = useSelector((store) => store.functionalities);
  const dispatch = useDispatch();

  const toggle = (modalTitle, modalSub) => {
    dispatch(toggler({ modalTitle, modalSub }));
  }

  return (
    <div className='flex flex-col gap-3 items-center md:mx-6 lg:mx-64 2xl:mx-96 p-5 rounded-lg bg-base-100 mx-3 mt-5'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-3 items-center md:place-self-start py-7 md:p-3 bg-base-100'>
        <div className='md:self-start md:block grid justify-items-center gap-2'>
          <div className='font-semibold text-lg'>{plans}</div>
          <div className='md:py-2 text-3xl font-bold'>{payment}</div>
          <div className='md:border-none w-11/12 pb-3 text-center md:text-left'>Billed {time}</div>
        </div>
        <div className='md:grid md:gap-3 md:border-l md:border-t-0 border-t pt-2 md:pt-0 md:pl-8 flex flex-col items-center gap-3'>
          <div className='flex items-center gap-2 pt-2'>
            <span className='font-bold'>{members} team member{members > 1 ? 's' : '' }</span> 
            <CiCircleInfo onClick={() => toggle('Team members', 'If you have multiple people on your hiring team, you can add them to your team so they can perform searches and message potential candidates')} />
          </div>
          <div className='flex items-center gap-2'>
            <span><span className='font-bold'>Message {number} candidates</span> per month</span>
            <CiCircleInfo onClick={() => toggle('Message candidates', "Depending on your tier, you'll receive a set number of monthly message credits. Credits are used when messaging a new candidate you have yet to contact. Messages sent in existing conversations don't count towards your usage")} />
          </div>
          <div className='flex items-center gap-2'>
            <span>Access a high-intent talent pool</span> 
            <CiCircleInfo onClick={() => toggle('Access a high-intent talent pool', "All developers visible on the Hiring Platform have set themselves as looking for work. This means they're actively seeking opportunities and are ready to be contacted by potential employers.")} />
          </div>
          <div className='flex items-center gap-2'>
            <span>Unlimited searches</span> 
            <CiCircleInfo onClick={() => toggle('Unlimited searches', 'You can perform as many searches as you like. This allows you to refine your searches to find the perfect candidates who meet your hiring needs.')} />
          </div>
          <div className='flex items-center gap-2'>
            <span>Review featured projects</span>
            <CiCircleInfo onClick={() => toggle('Review featured projects', 'All developers in the Programming Tutor community hone their skills by completing projects and giving others feedback. When they select up to six projects to feature for potential employers to review. This means you can check their code and abilities before making initial contact, saving everyone time.')} />
          </div>
          <div className='flex items-center gap-2'>
            <span>Transparent salary expectations</span>
            <CiCircleInfo onClick={() => toggle('Transparent salary expectations', 'Transparent salary expectations for each candidate means you will save time during the filtering process. You can immediately see which developers are within budget before making contact.')} />
          </div>
          <div className='flex items-center gap-2'>
            <span>Unlimited hires</span>
            <CiCircleInfo onClick={() => toggle('Unlimited hires', "Our subscription has no hidden fees. Whether you make one hire or multiple, you'll only ever pay the subscription costs. This can save you thousands when compared to traditional hiring channels.")} />
          </div>
          <div className='bg-red-600 hover:bg-red-800 font-semibold text-base-100 button-style md:w-fit'>START FREE TRIAL</div>
        </div>
      </div>
      {isOpen && <Modal closeModal={toggle} />}
    </div>
  )
}

export default PlansItems