import React from 'react'
import "./memories.css"
import MemoriesCard from './MemoriesCard'
import NotFoundMemories from './NotFoundMemories'
const Memories = () => {
  const memories = [
    {
      name:"aminur",
    }
  ];
  return (
    <div className="memories">
      
      {memories.length > 0 ? (
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

export default Memories