"use client";

import Island from "./Island";

function IslandList({ islands, setCurrentIsland }) {
  const islandCards = islands.map((island) => (
    <Island
      key={island.id}
      island={island}
      setCurrentIsland={setCurrentIsland}
    />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
