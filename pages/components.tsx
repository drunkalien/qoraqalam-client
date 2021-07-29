import Head from "next/head";
import Image from "next/image";
import { Button } from "src/components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Components</h1>
      <h1>Buttons</h1>
			<Button color="primary" variant="outline">abcd</Button>
			<Button color="primary" variant="">abcd</Button>
    </div>
  );
}
