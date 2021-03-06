import Head from 'next/head'

import React, { useEffect, useState } from "react";

import { fetchData } from "../utils/fetchData.js";
import { Navbar } from "../components/navbar";
import { CompList } from "../components/complist";
import { LoadingSkeleton } from "../components/loadingskeleton";

export default function Home() {
  const [lastUpdate, setlastUpdate] = useState<string>("");
  const [compList, setCompList] = useState<object>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const loadData = () => {
    fetchData().then((response) => {
      setCompList(response.comps);
      setlastUpdate(response.lastUpdate);
      setDataLoaded(true);
    });
  };
  useEffect(loadData, []);

  return (
    <main className="bg-gray-100">
      <Head>
        <title>TFT Comps - Sologesang</title>
        <meta name="description" content="Sologesang Comps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar lastUpdate={lastUpdate} />
      {dataLoaded ? <CompList compList={compList} /> : <LoadingSkeleton />}
    </main>
  )
}
