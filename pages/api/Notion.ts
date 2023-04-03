// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client'

import type { NextApiRequest, NextApiResponse } from 'next'

const notionsecret = process.env.NOTION_SECRET
const notiondatabaseid = process.env.NOTION_DATABASE_ID

const Notion = new Client({auth : notionsecret})



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(!notionsecret || !notiondatabaseid ) throw new Error('missing keys')   

  const query = await Notion.databases.query({
    database_id: notiondatabaseid,

  })

  console.log(query.results)




  res.status(200).json({ name: 'John Doe' })
}
