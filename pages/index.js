import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {/* <h1 className="title">
        My Amplify app
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1> */}

        <h1 className={styles.title}>
          My Next.js fullstack app
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by AWS Amplify{' '}
          <img src="/amplify.svg" alt="Amplify Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
