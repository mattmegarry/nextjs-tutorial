import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.poetryLine}>It's my site</p>

        <p className={utilStyles.poetryLine}>It's now or never</p>

        <p className={utilStyles.poetryLine}>
          This site will probably not live forever.
        </p>

        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  );
}
