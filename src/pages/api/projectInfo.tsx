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
      name: "Project 1 Title",
      description: "A cool project 1",
      image: "https://picsum.photos/200/300",
      deployLink: "https://example.com/",
      githubRepo: "https://github.com/Ant-Shell/"

    },
    {
      id: 2,
      name: "Project 2 Title",
      description: "A cool project 2",
      image: "https://picsum.photos/200/300",
      deployLink: "https://example.com/",
      githubRepo: "https://github.com/Ant-Shell/"
    },
    {
      id: 3,
      name: "Project 3 Title",
      description: "A cool project 3",
      image: "https://picsum.photos/200/300",
      deployLink: "https://example.com/",
      githubRepo: "https://github.com/Ant-Shell/"
    },
    {
      id: 4,
      name: "Project 4 Title",
      description: "A cool project 4",
      image: "https://picsum.photos/200/300",
      deployLink: "https://example.com/",
      githubRepo: "https://github.com/Ant-Shell/"
    },
  ]
  )
}