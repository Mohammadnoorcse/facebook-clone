import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import demo from "../../assets/demo-1.png";
import mizan from "../../assets/mizan.jpg"
import StoryCard from './StoryCard';
import { storyData } from '../demodata/storyData';
const HomeMiddle = () => {
     const scrollerRef = useRef(null);
     const [count, setCount] = useState(0);
    const scrollLeft = () => {
        scrollerRef.current.scrollBy({
          left: -200, // Adjust this value for how far to scroll on each click
          behavior: "smooth",
        });
        if(count>0){
            setCount(count-1);
        }
      };
   
     const scrollRight = () => {
       scrollerRef.current.scrollBy({
         left: 200, // Adjust this value for how far to scroll on each click
         behavior: "smooth",
       });
       setCount(count+1);
     };

     console.log(count)
    
  return (
    <div className="homemiddle">
      <div className="homemiddle-1" ref={scrollerRef}>
        <Link to="/create" className="homemiddle-create">
          <img src={demo} alt="demo" />
          <span>create story</span>
          <div className="homemiddle-plus">
            {/* <span>+</span> */}
            <div className="homemiddle-plus-1">
              <span>+</span>
            </div>
          </div>
        </Link>

        {storyData.map((value) => (
          <StoryCard key={value._id}  value={value}/>
        ))}

       
      </div>
      {/* story button start */}
      <div
        className={count > 0 ? "click-button-left" : "story-active-hide"}
        onClick={scrollLeft}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div className="click-button-right" onClick={scrollRight}>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      {/* story button end */}
    </div>
  );
}

export default HomeMiddle