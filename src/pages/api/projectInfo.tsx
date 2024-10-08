import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'

type Data = {
  id: number
  name: string
  description: string
  image: StaticImageData | string
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
      name: "Image Match Game",
      description: "A card matching game featuring dynamic images",
      image: '/IMG.png',
      deployLink: "https://image-match-game.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/image-match-game"

    },
    {
      id: 2,
      name: "Mock Grocery Store App",
      description: "Grocery store application designed to simulate a seamless shopping experience",
      image: '/MGA.png',
      deployLink: "https://fe-take-home-mgsa.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/fe-take-home-mgsa"

    },
    {
      id: 3,
      name: "Equalizer Landing Page",
      description: "A Frontend Mentor challenge, designed to practice responsive layouts",
      image: '/ELP.png',
      deployLink: "https://equalizer-landing-page-challenge-nine.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/equalizer-landing-page-challenge"

    },
    {
      id: 4,
      name: "A&W Movie Time!",
      description: "Movie previewing application which provides users with comprehensive information on the latest releases",
      image: '/A&W.png',
      deployLink: "https://rancid-tomatillos-ivory.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/rancid-tomatillos"

    },
    {
      id: 5,
      name: "Dungeons & Documents",
      description: "Dungeons & Dragons character creator app, complete with Monster Manual integration",
      image: '/D&D.png',
      deployLink: "https://ant-shell.github.io/dnd-stretch-tech/",
      githubRepo: "https://github.com/Ant-Shell/dnd-stretch-tech"
    },
    {
      id: 6,
      name: "The Fighting Game Compendium",
      description: "Application that enables users to view detailed information on some of the hottest titles in fighting games",
      image: '/FGC.png',
      deployLink: "https://fighting-game-compendium.vercel.app/",
      githubRepo: "https://github.com/Ant-Shell/fighting-game-compendium"
    },
  ]
  )
}