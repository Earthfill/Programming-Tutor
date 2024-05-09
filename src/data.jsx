import { nanoid } from "nanoid";
import { FaCode, FaDollarSign, FaRegNewspaper, FaSignOutAlt } from "react-icons/fa";
import { TbMessage, TbQuestionMark } from "react-icons/tb";
import { FaArrowTrendUp } from 'react-icons/fa6';
import { PiDevices } from 'react-icons/pi';
import { GoUnlock } from 'react-icons/go';

export const links = [
  { 
    id: nanoid(), 
    text: 'PRICING',
    icon: <FaDollarSign />
  },
  { 
    id: nanoid(), 
    text: 'FAQS',
    icon: <TbQuestionMark />
  },
  { 
    id: nanoid(), 
    text: 'CONTACT',
    icon: <TbMessage />
  },
  { 
    id: nanoid(), 
    text: 'SIGN IN',
    icon: <FaSignOutAlt color="red" />
  },
];

export const learningLinks = [
  {
    id: nanoid(),
    text: 'LEARNING PATHS',
    icon: <FaArrowTrendUp />
  },
  {
    id: nanoid(),
    text: 'CHALLENGES',
    icon: <PiDevices />
  },
  {
    id: nanoid(),
    text: 'SOLUTIONS',
    icon: <FaCode />
  },
  {
    id: nanoid(),
    text: 'ARTICLES',
    icon: <FaRegNewspaper />
  },
  {
    id: nanoid(),
    text: 'UNLOCK PRO',
    icon: <GoUnlock />
  },
]