import React from "react";
import Header from "../components/Header";
export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let allAlbums = await res.json();

  return {
    props: {
      allAlbums: allAlbums.map((album) => album.title),
    },
  };
};

const Album = ({ allAlbums }) => {
  return (
    <div>
      <Header></Header>
      <h1>All Albums</h1>
      {allAlbums.map((album, idx) => (
        <div key={idx}>{album}</div>
      ))}
    </div>
  );
};

export default Album;
