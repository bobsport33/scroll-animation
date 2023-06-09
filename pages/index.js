import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Hero from "./Hero";
import ScrollText from "./scollText";

export default function Home() {
    return (
        <>
            <Head>
                <title>scroll animation</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <Hero />
                <ScrollText />
            </main>
        </>
    );
}
