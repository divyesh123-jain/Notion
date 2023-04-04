// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client'

import type { NextApiRequest, NextApiResponse } from 'next'

const notionsecret = process.env.NOTION_SECRET
const notiondatabaseid = process.env.NOTION_DATABASE_ID

const Notion = new Client({auth : notionsecret})

type Row = {
  Name : {id : string , title: {text : {content :string} }[] }
  email : {id : string , url : string}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(!notionsecret || !notiondatabaseid ) throw new Error("missing keys")   

  const query = await Notion.databases.query({
    database_id: notiondatabaseid,

  })

 // @ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[]

  const rowsStructured: rowsStructured = rows.map((row) => ({

    Name : row.Name.title[0].text.content,
    email : row.email.url,

  }))



  // console.log(query.results)




  res.status(200).json(JSON.stringify(rows))
}
