import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'

type Data = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  overview: Array<string>
  logo: StaticImageData | string
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [ {
      id: 1,
      name: "SumUp",
      role: "Junior Software Engineer",
      location: "Boulder, CO",
      duration: "May 2024 - Aug 2024",
      logo: '/SU_Logo.png',
      overview: [
        "- Developed a social media presence application using agile methodologies",
        "- Designed and implemented an engaging front-end user experience",
        "- Continuously improved React application performance through code reviews, feedback, and refactoring",
        "- Translated high-quality designs into compelling user interfaces"
      ]
    }, {
      id: 2,
      name: "makeitMVP",
      role: "Software Engineer Apprentice",
      location: "Remote",
      duration: "Jan 2024 - May 2024",
      logo: '/MVP-Logo.png',
      overview: [
        "- Engaged in agile methodologies to collaborate effectively with a cross-functional team",
        "- Developed and maintained key functionality in new and existing features",
        "- Recognized with the “Growth Award” for demonstrating exceptional advancement in skills and capabilities throughout project duration"
      ]
    }, {
      id: 3,
      name: "Helio Home",
      role: "Software Engineer Intern",
      location: "Hybrid",
      duration: "Sep 2023 - Dec 2023",
      logo: '/HH_Logo.png',
      overview: [
        "- Collaborated with team members through pair programming, fostering effective teamwork",
        "- Conducted independent research to gather information and proactively solve complex problems",
        "- Developed an internally facing (Retool) application tailored for the Sales Team, facilitating efficient information display",
        "- Actively participated in manual QA testing, covering user flows, regression testing, and other critical aspects"
      ]
    },
      {
        id: 4,
        name: "Turing School of Software & Design",
        role: "Software Engineering Student",
        location: "Denver, CO",
        duration: "May 2022 - Jan 2023",
        logo: '/T_Logo.png',
        overview: [
          "- Front End Engineering Certificate",
          "- 1700 hours of programming experience",
          "- Intensive 7-month, 80 hour a week ACCET accredited software development program"
        ]
      },
      {
        id: 5,
        name: "Chainlink Labs",
        role: "Network and Systems Administrator",
        location: "Remote",
        duration: "May 2021 - Aug 2021",
        logo: '/CL_Logo.png',
        overview: [
          "- Managed and maintained decentralized blockchain applications in cloud-based environments",
          "- Ensured optimal performance through shift-based on-call rotation"
        ],
      },
      {
        id: 6,
        name: "Gensler",
        role: "Server Administrator",
        location: "Denver, CO",
        duration: "Feb 2019 - May 2021",
        logo: '/G_Logo.jpeg',
        overview: [
          "- Administered server life-cycles across multiple co-locations",
          "- Improved existing technical infrastructure",
          "- Partnered with development team to successfully deploy code releases"
        ]
      },
      {
        id: 7,
        name: "HomeAdvisor",
        role: "Systems Administrator",
        location: "Golden, CO",
        duration: "Feb 2012 - Feb 2019",
        logo: '/HA_Logo.png',
        overview: [
          "- Ensured infrastructure integrity via regular maintenance, troubleshooting and issue remediation",
          "- Researched, evaluated and deployed new hardware and software"
        ]
      },
      {
        id: 8,
        name: "Metropolitan State University of Denver",
        role: "Student",
        location: "Denver, CO",
        duration: "May 2010 - Dec 2016",
        logo: '/MSU_Logo.png',
        overview: [
          "- Bachelor's Degree, Computer Information Systems"
        ]
      },
    ]
  )
}