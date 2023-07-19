import Splash from "../components/Splash";
import Profile from "../components/Profile";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>하수환 | Home</title>
      </Head>
      {/* <Splash /> */}

      <Profile />
      <Stack />
      <Project />
    </>
  );
}
