import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Text from "../src/components/Text";
import Hashtag from "src/components/Hashtag/hashtag";
import Container from "src/components/Container/container";
import { CSSProperties } from "react";

export default function Home() {
  const styles = {
    margin: "20px auto",
    maxWidth: "1100px",
  };
  return (
    <div>
      <h1 style={styles}>Qoraqalam</h1>
      <Container>
        <h2>Text Component</h2>
        <Text size="sm">asdlf</Text>
        <Text size="md">asdlf</Text>
        <Text size="lg">asdlf</Text>
        <Text size="xl">asdlf</Text>
      </Container>
      <Container>
        <h2>Hashtag components</h2>
        <Hashtag color="blue" variant="filled" tagText="koronavirus" />
        <Hashtag color="pink" variant="filled" tagText="karantin" />
        <Hashtag color="pink" variant="not-filled" tagText="karantin" />
        <Hashtag color="gray" variant="not-filled" tagText="karantin" />
      </Container>
      <Link href="/components">
        <a>Components</a>
      </Link>
    </div>
  );
}
