import React from "react";
import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Icy Creatures | Creatures from the Ice Age era",
  keyword:
    "crypto, nft, collectible",
  desc: "Twenty-thousand years ago, Earth is a wondrous, prehistoric world filled with great danger, not the least of which is the beginning of the Ice Age. To avoid a really bad frostbite, the planet's creatures. This is where ICY Creatures born with 200 limited edition and 5800 normal creatures popping out on Polygon Network.",
};

export default Meta;
