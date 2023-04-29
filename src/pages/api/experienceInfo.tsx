import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'
import HA_Logo from '../../assets/HA_Logo.png'
import G_Logo from '../../assets/G_Logo.jpeg'
import CL_Logo from '../../assets/CL_Logo.png'

type Data = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  overview: Array<string>
  logo: StaticImageData
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
      {
        id: 1,
        name: "Chainlink Labs",
        role: "Network and Systems Administrator",
        location: "Remote",
        duration: "May 2021 - Aug 2021",
        logo: CL_Logo,
        overview: [
          "- Managed and maintained decentralized blockchain node applications in cloud environment",
          "- Ensured 24/7 performance of nodes through shift-based on-call rotation",
          "- Utilized AWS, Docker, Grafana and Prometheus for deployments and monitoring"
        ],
      },
      {
        id: 2,
        name: "Gensler",
        role: "Server Administrator",
        location: "Denver, CO",
        duration: "Feb 2019 - May 2021",
        logo: G_Logo,
        overview: [
          "- Administered server life-cycles across multiple co-locations",
          "- Improved existing technical infrastructure",
          "- Partnered with development team to successfully launch code releases"
        ]
      },
      {
        id: 3,
        name: "HomeAdvisor",
        role: "Systems Administrator",
        location: "Golder, CO",
        duration: "Feb 2012 - Feb 2019",
        logo: HA_Logo,
        overview: [
          "- Ensured infrastructure remained secure and up to date through regular maintenance",
          "- Investigated, evaluated and deployed solutions to meet business needs",
          "- Resolved system issues quickly and efficiently"
        ]
      },
    ]
  )
}