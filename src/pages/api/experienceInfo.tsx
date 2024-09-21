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
    [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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