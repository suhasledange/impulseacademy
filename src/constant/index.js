import { ABC, Learning, Popularwoman, Trophy,BookReading, examIcon, onlineExam, examIcon1, Ellipse7, Ellipse8, Rectangle31 } from "../assets";

export const Navlinks = [
    {id:1,title:"Home",link:"/"},
    {id:2,title:"Courses",link:"#Courses"},
    {id:3,title:"About Us",link:"/about"},
    {id:4,title:"Blog",link:"/blog"},
    {id:5,title:"Contact",link:"/contact"},
]

export const Counterdata =[
    {id:1,title:"Total Students Entrolled",count:1500},
    {id:2,title:"JEE Qualified Students",count:100},
    {id:3,title:"MHT CET Qualified",count:300},
    {id:4,title:"Years Of Teaching Experience",count:14},
    {id:5,title:"Gained Above 90% in Boards",count:50}
]

export const benefits = [
    {
      id: 1,
      text: "Experienced Faculty",
      icon: Popularwoman,
      bgColor: "bg-back-blue",
    },
    {
      id: 2,
      text: "Comprehensive Study Material",
      icon: Learning,
      bgColor: "bg-back-yellow",
    },
    {
      id: 3,
      text: "Interactive Learning",
      icon: Trophy,
      bgColor: "bg-back-orange",
    },
    {
      id: 4,
      text: "Regular Tests & Parent Meeting",
      icon: BookReading,
      bgColor: "bg-back-green",
    },
    {
      id: 5,
      text: "Extensive Practice",
      icon: ABC,
      bgColor: "bg-back-pink",
    },
    {
        id: 5,
        text: "Continuous Practice Papers",
        icon: ABC,
        bgColor: "bg-back-pink",
      },
  ];

  export const courses = [

    {id:1,title:"JEE",description:"Unlock your potential with our JEE course offering a well-rounded approach to mastering in physics Stay ahead with regular assessments, doubt-clearing sessions,and personalized mentoring",icon:examIcon},
    {id:2,title:"MHT-CET",description:"Achieve top scores in the MHTCET exam with our intensive course designedto cover all the essential topics with practical examples and mock tests",icon:onlineExam},
    {id:3,title:"11th/12th Grade",description:"Build a solid foundation in Physics with in-depth conceptual learning and regular assessments, setting you up for both board exams and competitive success",icon:examIcon1},
  ]

  export const review =[
    {id:1,review:"The MHT CET Physics course was a game-changer for me!he detailed explanations of complex topics Electromagnetism and Thermodynamics helped me grasp the concepts easily",name:"Rohit S.",batch:"MHT CET Student",image:Ellipse7},
    {id:2,review:"The JEE Physics course was outstanding! The mock tests were incredibly helpful in understanding the exam pattern. I'm grateful for this academy's guidance!",name:"Priya S.",batch:"JEE Aspirant",image:Ellipse8},
  ]

  export const blog =[
    {id:1,image:Rectangle31,title:"Mastering physics for jee",date:"25th Oct 2024"},
    {id:2,image:Rectangle31,title:"To Score High In MHT-CET Physics",date:"26th Oct 2024"},
    {id:3,image:Rectangle31,title:"Mastering physics for jee",date:"25th Oct 2024"},
  ] 