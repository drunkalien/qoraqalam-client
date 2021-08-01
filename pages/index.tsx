import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  Text,
  Hashtag,
  Container,
  Heading,
  Searchbar,
  Header,
  Card,
} from "components";

export default function Home() {
  const styles = {
    margin: "20px auto",
    maxWidth: "1100px",
  };
  return (
    <div>
      <Head>
        <title>qoraqalam /^\</title>
      </Head>
      <Header />
      <Container>
        <h2>Text Component</h2>
        <Text size="14">asdlf</Text>
        <Text size="16">asdlf</Text>
        <Text size="22">
          <Text italic size="14">
            Italic text.
          </Text>
          long text{" "}
          <Text bold size="14">
            bold text
          </Text>
        </Text>
      </Container>
      <Container>
        <h2>Hashtag components</h2>
        <Hashtag color="blue" variant="filled" tagText="koronavirus" />
        <Hashtag color="pink" variant="filled" tagText="karantin" />
        <Hashtag color="pink" variant="transparent" tagText="karantin" />
        <Hashtag color="gray" variant="transparent" tagText="karantin" />
      </Container>
      <Container>
        <Heading>Lorem ipsum dolor sit amet</Heading>
      </Container>
      <Container>
        <Searchbar />
      </Container>
      <Container>
        <Card
          date="1"
          starred={true}
          tagList={["#karantin", "#korona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="john"
          views={299}
        />
      </Container>
    </div>
  );
}
