import { Navbar } from "../Navbar";
import Head from "next/head";
import React from "react";
import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pagina de Anthony</title>
        <meta name="description" content="Generando pagina de inicio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
