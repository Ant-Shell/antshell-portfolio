import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  description: string
  image: string
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
      image: "https://picsum.photos/200/300",
      deployLink: "https://rancid-tomatillos-ivory.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/rancid-tomatillos"

    },
    {
      id: 2,
      name: "Dungeons & Documents",
      description: "A D&D character creator and monster manual",
      image: "https://picsum.photos/200/300",
      deployLink: "https://ant-shell.github.io/dnd-stretch-tech/",
      githubRepo: "https://github.com/Ant-Shell/dnd-stretch-tech"
    },
    {
      id: 3,
      name: "Eat Local",
      description: "A search site for local eateries",
      image: "https://picsum.photos/200/300",
      deployLink: "https://eatlocal.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/eatlocal"
    },
    {
      id: 4,
      name: "The Fighting Game Compendium",
      description: "A fighting game info site",
      image: "https://picsum.photos/200/300",
      deployLink: "https://fighting-game-compendium.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/fighting-game-compendium"
    },
  ]
  )
}