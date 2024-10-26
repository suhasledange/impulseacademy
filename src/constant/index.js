import { ABC, Learning, Popularwoman, Trophy,BookReading, examIcon, onlineExam, Ellipse7, Ellipse8, Rectangle31, batch12019, batch22019, batch32019, batch42019, batch52019 } from "../assets";

export const Navlinks = [
    {id:1,title:"Home",link:"/"},
    {id:2,title:"Courses",link:"/courses"},
    {id:3,title:"About Us",link:"/about"},
    {id:4,title:"Blog",link:"/blogs"},
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
        id: 6,
        text: "Continuous Practice Papers",
        icon: ABC,
        bgColor: "bg-back-pink",
      },
  ];

  export const courses = [

    {id:1,title:"JEE",description:"Unlock your potential with our JEE course offering a well-rounded approach to mastering in physics Stay ahead with regular assessments, doubt-clearing sessions,and personalized mentoring",icon:examIcon},
    {id:2,title:"MHT-CET",description:"Achieve top scores in the MHTCET exam with our intensive course designedto cover all the essential topics with practical examples and mock tests",icon:onlineExam},
    {id:3,title:"11th/12th Grade",description:"Build a solid foundation in Physics with in-depth conceptual learning and regular assessments, setting you up for both board exams and competitive success",icon:examIcon},
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

  export const facutyInfo = [
    {id:1,title:"Qualifications",description:"B.E. (Mechanical Engineering), M.E. (Design Engineering)"},
    {id:2,title:"Experience",description:"With over 14 years of experience in coaching classes and 10 years in engineering college teaching, Prof.Manoj p. Badgujar brings a wealth of knowledge and experties to his students."},
    {id:3,title:"What i Provide",description:"Committed to delivering quality education,he ensures that students are fully prepared to excel in both acdemic and competitive settings.His teaching approach empowers students with the skills and confidence to succeed in any situation"}
  ]

  export const achievers = [
    {id:1,image:batch12019},
    {id:2,image:batch22019},
    {id:3,image:batch32019},
    {id:4,image:batch42019},
    {id:5,image:batch52019},

  ]

  export const CourseEnrollInfo = [
    {
      "id": 1,
      "title": "MHT-CET",
      image:onlineExam,
      "description": "Our MHT-CET Physics course covers the complete syllabus for both 11th and 12th standards, with a focus on understanding fundamental concepts and applying them to problem-solving. The syllabus is divided into two key sections:",
      "topics": {
        "class11": [
          "Motion in a Plane",
          "Laws of Motion",
          "Gravitation",
          "Thermal Properties of Matter",
          "Sound, Optics",
          "Electrostatics, and Semiconductors."
        ],
        "class12": [
          "Circular Motion",
          "Gravitation",
          "Laws of Motion",
          "Rotational Motion",
          "Thermal Properties of Matter",
          "Oscillations",
          "Surface Tension",
          "Wave Theory",
          "Interference and Diffraction",
          "Electrostatics, Magnetism & Semiconductors",
          "Communication Systems"
        ]
      }
    },
    {
      "id": 2,
      "title": "JEE Mains and Advanced Course Overview",
      image:examIcon,
      "description": "Our JEE Mains and Advanced Physics course thoroughly covers the syllabus for both 11th and 12th standards with a focus on understanding theoretical concepts and honing problem-solving skills required for competitive exams. The syllabus is divided into two main sections:",
      "topics": {
        "class11": [
          "Kinematics",
          "Laws of Motion",
          "Work-Energy-Power",
          "Rotational Motion",
          "Gravitation",
          "Thermodynamics",
          "Waves, and Oscillations"
        ],
        "class12": [
          "Electrostatics",
          "Current Electricity",
          "Magnetic Effects of Current",
          "Electromagnetic Induction",
          "Optics, Modern Physics",
          "Modern Physics",
          "Semiconductor Devices"
        ]
      }
    },
    {
      "id": 3,
      "title": "11th/12th Board Course Overview",
      image:examIcon,
      "description": "Our Maharashtra State Board Physics course comprehensively covers the syllabus for both 11th and 12th Board exams, primarily focusing on written, theoretical answers, derivations, and explanations, allowing students to showcase their conceptual clarity. The syllabus is divided into two main sections.",
      "topics": {
        "class11": [
          "Kinematics",
          "Laws of Motion",
          "Work-Energy-Power",
          "Thermal Properties of Matter",
          "Gravitation",
          "Waves and Sound",
          "Current Electricity",
          "Electromagnetic Waves",
          "Reflection and Refraction of Light"
        ],
        "class12": [
          "Circular Motion",
          "Rotational Motion",
          "Magnetic Effects of Current",
          "Electrostatics",
          "Magnetism",
          "Electromagnetic Induction",
          "Wave Optics",
          "Semiconductors",
          "Atoms, Nuclei",
          "Communication Systems"
        ]
      }
    }
  ]
  
  export const publications = [

    {id:1,title:"Target"},
    {id:2,title:"Arihant"},
    {id:3,title:"HC Verma"},
    {id:4,title:"DC Pandey"},
    {id:5,title:"Cengage"},
    {id:6,title:"NCERT"},
    {id:7,title:"Maharashtra State Board Textbooks"}

  ]

  export const AccessNotes = [
    {id:1,title:"Downloadable Notes",description:"Concise Physics notes for core topics - deal for quick review and deeper understanding",file:""},
    {id:2,title:"Problem Sets and Solutions",description:"Enhance problem-solving skills with structured practice questions and solutions.",file:""},
    {id:3,title:"Exclusive Formula Sheets",description:"Organized formula sheets to simplify last-minute revisions.",file:""},
  ]