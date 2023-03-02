import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@components/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Cast Finder</title>
        <meta name="description" content="Find common actors across movies and tv shows" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
         <div>
            <h1 className="text-3xl font-bold underline">Movie Cast Finder</h1>
         </div>
      </main>
    </>
  )
}
