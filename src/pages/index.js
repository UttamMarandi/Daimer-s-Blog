import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Post from "../components/Post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio/Bio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daimer's Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.bio}>
          <Bio
            img="https://images.pexels.com/photos/9938444/pexels-photo-9938444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            name="Daimer Haily"
            tagline="How you doing?"
            role="Developer Advocate @ Uttam"
          />
        </div>
        <h1 className={styles.title}>Daimer's Posts</h1>
        <ul className={styles.posts}>
          <li>
            <Post content="Hey I am a new Post" date="21/11/21" />
          </li>
          <li>
            <Post
              content="By default, Next.js pre-renders every page. This means that
              Next.js generates HTML for each page in advance, instead of having
              it all done by client-side JavaScript. Pre-rendering can result in
              better performance and SEO."
              date="10/12/21"
            />
            <p></p>
            <p></p>
          </li>
          <li>
            <Post
              content="Each generated HTML is associated with minimal JavaScript code
              necessary for that page. When a page is loaded by the browser, its
              JavaScript code runs and makes the page fully interactive. (This
              process is called hydration.)"
              date="10/12/21"
            />
          </li>
          <li>
            <Post
              content="Importantly, Next.js lets you choose which pre-rendering form
              you'd like to use for each page. You can create a hybrid Next.js
              app by using Static Generation for most pages and using
              Server-side Rendering for others."
              date="10/12/21"
            />
          </li>
        </ul>
        <PostForm />
      </main>
    </div>
  );
}