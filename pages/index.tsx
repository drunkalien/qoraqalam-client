import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Qoraqalam</h1>
      <Link href="/components">
        <a>Components</a>
      </Link>
    </div>
  );
}
