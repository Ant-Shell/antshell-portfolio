import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'
import AW_Preview from '../../assets/A&W.png'
import DD_Preview from '../../assets/D&D.png'
import EL_Preview from '../../assets/EatLocal.png'
import FGC_Preview from '../../assets/FGC.png'


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
      description: "A movie information site",
      image: AW_Preview,
      deployLink: "https://rancid-tomatillos-ivory.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/rancid-tomatillos"

    },
    {
      id: 2,
      name: "Dungeons & Documents",
      description: "A D&D character creator and monster manual",
      image: DD_Preview,
      deployLink: "https://ant-shell.github.io/dnd-stretch-tech/",
      githubRepo: "https://github.com/Ant-Shell/dnd-stretch-tech"
    },
    {
      id: 3,
      name: "Eat Local",
      description: "A search site for local eateries",
      image: EL_Preview,
      deployLink: "https://eatlocal.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/eatlocal"
    },
    {
      id: 4,
      name: "The Fighting Game Compendium",
      description: "A fighting game info site",
      image: FGC_Preview,
      deployLink: "https://fighting-game-compendium.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/fighting-game-compendium"
    },
  ]
  )
}