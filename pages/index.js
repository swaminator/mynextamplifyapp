import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { DataStore } from 'aws-amplify'
import { Post } from '../src/models'
import { useState, useEffect } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post)
      setPosts(postData)
    }
    const subscription = DataStore.observe(Post).subscribe(() => fetchPosts())
    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>
          My Next.js fullstack app
        </h1>
      <Table variant="simple">
        <Thead>
      <Tr>
      <Th>Post title</Th>
      <Th>Content</Th>
    </Tr>
      </Thead>
      <Tbody>
        {posts.map(post => (
          <Tr key={post.id}>
            <Td>{post.title}</Td>
            <Td> <Link href={`/posts/${post.id}`}>
            <a>
              <h2>View</h2>
            </a>
          </Link></Td>
          </Tr>
        ))}
      </Tbody>
      </Table>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://amplify.aws"
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
