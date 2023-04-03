import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const fetchfromnotion = async () => {
  const res = await fetch('http://localhost:3000/api/Notion')
  const data = await res.json()
  // return JSON.parse(data)
  return data

}


export default async function Home() {
  const data = await fetchfromnotion()


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div></div>
    </>
  )
}
