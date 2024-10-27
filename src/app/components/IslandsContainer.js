"use client";

import { useState } from "react";
import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);
  const [visitors, setVisitors] = useState(0);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function onBooking() {
    console.log(`Booking confirmed for ${currentIsland.name}!`);
    incrementVisitors();
  }

  function incrementVisitors() {
    setVisitors((prevCount) => prevCount + 1);
  }

  const filteredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList
          islands={filteredIslands}
          setCurrentIsland={setCurrentIsland}
        />
      </div>
      <IslandForm
        island={currentIsland}
        onBooking={onBooking}
        visitors={visitors}
      />
    </div>
  );
}

export default IslandsContainer;
