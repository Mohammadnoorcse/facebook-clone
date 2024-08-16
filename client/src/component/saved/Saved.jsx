import React from 'react'
import "./saved.css"
import NotFoundMemories from '../memories/NotFoundMemories'
import MemoriesCard from '../memories/MemoriesCard';
const Saved = () => {
    const saved =[];
  return (
    <div className="saved">
      {saved.length > 0 ? (
        <>
          <MemoriesCard />
        </>
      ) : (
        <>
          <NotFoundMemories />
        </>
      )}
    </div>
  );
}

export default Saved