import Head from "next/head";
import Button from "components/Button/button";

export default function Home() {
  const methodExist = (e) => {
    const noReassign = true;
    noReassign = false;
  };

  return (
    <div className="container">
      <Head>
        <title>HomePage</title>
      </Head>
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <Button onClick={methodExist}>Break the world</Button>
      </main>
    </div>
  );
}
