import { useRef } from "react";
import ReviewItem from "./ReviewItem";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
  };
  
  const previouss = () => {
    sliderRef.slickPrev();
  };

  const description = [
    {
      text: 'Programming Tutor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.',
      img: '/home-avatar-alfie.webp',
      name: 'Alfie',
      nickname: '@alfiemitchell123'
    },
    {
      text: "As a backend developer, I sought to improve my frontend skills. Programming Tutor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can't be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
      img: '/home-avatar-arturo.webp',
      name: 'Arturo',
      nickname: '@artimys'
    },
    {
      text: 'This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.',
      img: '/home-avatar-francesca.webp',
      name: 'Francesca',
      nickname: '@frrann'
    },
    {
      text: "Programming Tutor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It's a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
      img: '/home-avatar-hikmah.webp',
      name: 'Hikmah',
      nickname: '@hikmahx'
    },
    {
      text: "I began my frontend journey with Programing Tutor's newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.",
      img: '/home-avatar-marit.webp',
      name: 'Marit',
      nickname: '@maritxx'
    },
    {
      text: "After completing a software bootcamp, Programming Tutor let me build real-world projects, strengthening my developer skills. I wouldn't be where I am today without it.",
      img: '/home-avatar-michelle.webp',
      name: 'Michelle',
      nickname: '@maberizk'
    },
    {
      text: 'Programming Tutor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.',
      img: '/home-avatar-nuel.webp',
      name: 'Nuel',
      nickname: '@ijklmopffs'
    },
    {
      text: "Programming Tutor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It's both a skill-building platform and a community hub for web developers.",
      img: '/home-avatar-shashikant.webp',
      name: 'Shashikant',
      nickname: '@shashikantdev3'
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="align-element 2xl:m-0 2xl:max-w-full 2xl:px-[21vw] mb-10 md:mb-0 md:pb-10 md:bg-primary rounded-md">
      <div className="md:flex md:items-center md:justify-between md:mx-5 pb-3 md:pb-0 md:py-5">
        <div className="text-2xl md:text-4xl lg:text-5xl md:text-base-100 font-semibold text-center">A little <span className="text-red-600">&#x2764;</span> from our community</div>
        <div className="hidden md:flex justify-center gap-5 my-5">
          <button 
            onClick={previouss}
            className={`rounded-full p-4 bg-base-100 text-primary`}
          >
            <ImArrowLeft2 size={20} />
          </button>
          <button 
            onClick={next}
            className="rounded-full p-4 bg-base-100 text-primary"
          >
            <ImArrowRight2 size={20} />
          </button>
        </div>  
      </div>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
       {description.map((item, index) => (
        <div key={index}>
          <ReviewItem {...item} />
        </div>
       ))}  
      </Slider>
      <div className="md:hidden flex justify-center gap-5 my-5">
        <button 
          onClick={previouss}
          className={`rounded-full p-4 bg-primary text-base-100`}
        >
          <ImArrowLeft2 size={20} />
        </button>
        <button 
          onClick={next}
          className="rounded-full p-4 bg-primary text-base-100"
        >
          <ImArrowRight2 size={20} />
        </button>
      </div>
    </div>
  )
}

export default Review