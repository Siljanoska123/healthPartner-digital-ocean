import service1 from "./assets/optimazing.jpg"
import service1in from './assets/optimazing2.jpg'
import service2 from "./assets/onlineSupport.jpg"
import service2in from './assets/onlineSupport2.jpg'
import service3 from "./assets/training1.jpg"
import service3in from './assets/trainin2.jpg'
import img_courses from './assets/service33.jpg'
import workPlaceSafty from './assets/workPlaceSafty.jpg'

export const projects = [
  {
    id: 0,
    image: service1,
    imageIn: service1in,
    title: 'Optimizing Psychological Health',
    text: 'Our Stress Management Plan is designed to provide companies with comprehensive insights into workplace stress, enabling proactive solutions that improve employee well-being, boost productivity, and reduce turnover. High workplace stress can lead to absenteeism and diminished performance, impacting the entire organization. By investing in our digital, customizable plan, your organization can foster a supportive work environment that promotes health, motivation, and loyalty among your employees. ',
    showCourses: false, // Нема да прикажува coursesCard
    showStressManagment: true,
    showSosConsultation: false
  },
  {
    id: 1,
    image: service2,
    imageIn: service2in,
    title: 'Mental Hygiene Support (Preventive Burnout)',
    text: 'In today\'s fast-paced work environment, stress and heavy workloads can easily lead to feelings of exhaustion, burnout, or even depression. For employees experiencing mental strain, our anonymous SOS consultation offers a confidential and effective way to address these challenges without the need to reveal personal information.',

    showCourses: false, // Нема да прикажува coursesCard
    showStressManagment: false,
    showSosConsultation: true
  },
  {
    id: 2,
    title: 'Trainings',
    text: '  In today\'s fast-paced work environment, stress and heavy workloads can easily lead to feelings of exhaustion, burnout, or even depression. For employees experiencing mental strain, our anonymous SOS consultation offers a confidential and effective way to address these challenges without the need to reveal personal information.',
    image: service3,
    imageIn: service3in,
    titlePrograms: 'Our Training Programs',
    titleOffer: 'What Do We Offer?',
    showCourses: true, // Ќе прикажува coursesCard
    showStressManagment: false,
    showSosConsultation: false
  }
];

export const coursesCard = [
  {
    id: 0,
    top: 'T r a i n i n g',
    image: img_courses,
    title: "Leadership and Organizational Culture",
    description: "Is designed to equip leaders with the tools they need to create thriving, innovative workplaces.",
    stars: '10',
    comments: '145'
  },
  {
    id: 1,
    top: 'T r a i n i n g',
    image: img_courses,
    title: "Optimizing Workplace Ergonomics",
    description: "Is crucial for protecting employees' health and well-being.",
    stars: '15',
    comments: '105'
  },
  {
    id: 2,
    top: 'T r a i n i n g',
    image: workPlaceSafty,
    title: "Ensuring Workplace Safety and Health",
    description: "Is crucial in any organization, no matter the industry.",
    stars: '20',
    comments: '155'
  },
];