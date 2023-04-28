import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  overview: Array<string>
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: 1,
      name: "HeyAJob",
      role: "Worker",
      location: "Someplace, CO",
      duration: "Feb 2022 - Feb 2023",
      overview: ["I did a thing", "I did another thing", "Yay, another thing!"]
    },
    {
      id: 2,
      name: "OKJob",
      role: "Worker",
      location: "Overthere, CO",
      duration: "Feb 2021 - Feb 2022",
      overview: ["I did a thing", "I did another thing", "Yay, another thing!"]
    },
    {
      id: 3,
      name: "Job, Inc.",
      role: "Worker",
      location: "Overhere, CO",
      duration: "Feb 2020 - Feb 2021",
      overview: ["I did a thing", "I did another thing", "Yay, another thing!"]
    },
  ]
  )
}