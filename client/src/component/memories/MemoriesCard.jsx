import { Link } from "react-router-dom";
import roki from "../../assets/roki.jpg"

const MemoriesCard = () => {
  return (
    <Link className="memoriescard" to="/">
      <div className="memoriescard-1">
        <img src={roki} alt="" />
      </div>
      <div className="memoriescard-2">
        <h3>❝পুরুষ আসক্ত হয় নারীর রূপে নয়, নারীর গুণে❞💞 Design- Believer</h3>
        <div className="memoriescard-2-1">
          <span>post .</span>
          <span>saved to For Later</span>
        </div>
        <div className="memoriescard-2-2">
          <img src={roki} alt="" />
          <span>
            Saved from{" "}
            <Link to="/" className="memoriescard-2-2-link">
              China Daily's post
            </Link>
          </span>
        </div>
        <div className="memoriescard-2-3">
          <div className="memoriescard-2-3-1">
            <button>Add to Collection</button>
          </div>
          <div className="memoriescard-2-3-2">
            <i class="fa-solid fa-share"></i>
          </div>
          <div className="memoriescard-2-3-2">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MemoriesCard