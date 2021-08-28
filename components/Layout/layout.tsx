import { Fragment, ReactNode } from "react";
import { Header, Footer } from "components";
import Head from "next/head";
import cn from "classnames";
import classes from "./layout.module.scss";

type Props = {
  title?: string;
  children: ReactNode;
  right?: ReactNode;
  background?: "gray" | "white";
};

const Layout = ({ title, children, right }: Props) => (
  <Fragment>
    <Head>
      <meta name="og:title" content={title} />
      <title>{`${title ? `${title} - ` : ""}qoraqalam /^\ `}</title>
    </Head>
    <Header />
    <main
      className={cn(classes.container, {
        [classes["sided"]]: right,
        [classes["mini"]]: !right,
      })}
    >
      {children}
      {!!right && <aside className="right">{right}</aside>}
    </main>
    <Footer />
  </Fragment>
);

export default Layout;
