import { ABC, Learning, Popularwoman, Trophy } from "../assets";

export const Navlinks = [
    {id:1,title:"Home",link:"/"},
    {id:2,title:"Courses",link:"/courses"},
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
      bgColor: "bg-back-cream",
    },
    {
      id: 4,
      text: "Regular Tests & Parent Meeting",
      icon: ABC,
      bgColor: "bg-back-green",
    },
    {
      id: 5,
      text: "Extensive Practice",
      icon: ABC,
      bgColor: "bg-back-pink",
    },
  ];