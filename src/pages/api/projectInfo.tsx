import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'
import AW_Preview from 'public/A&W.png'
import DD_Preview from 'public/D&D.png'
import EL_Preview from 'public/EatLocal.png'
import FGC_Preview from 'public/FGC.png'


type Data = {
  id: number
  name: string
  description: string
  image: StaticImageData
  deployLink: string
  githubRepo: string
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: 1,
      name: "A&W Movie Time!",
      description: "Movie previewing application which provides users with comprehensive information on the latest releases",
      image: AW_Preview,
      deployLink: "https://rancid-tomatillos-ivory.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/rancid-tomatillos"

    },
    {
      id: 2,
      name: "Dungeons & Documents",
      description: "Dungeons & Dragons character creator app, complete with Monster Manual integration",
      image: DD_Preview,
      deployLink: "https://ant-shell.github.io/dnd-stretch-tech/",
      githubRepo: "https://github.com/Ant-Shell/dnd-stretch-tech"
    },
    {
      id: 3,
      name: "Eat Local",
      description: "Application designed to connect potential patrons with local restaurants, markets and breweries",
      image: EL_Preview,
      deployLink: "https://eatlocal.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/eatlocal"
    },
    {
      id: 4,
      name: "The Fighting Game Compendium",
      description: "Application that enables users to view detailed information on some of the hottest titles in fighting games",
      image: FGC_Preview,
      deployLink: "https://fighting-game-compendium.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/fighting-game-compendium"
    },
  ]
  )
}