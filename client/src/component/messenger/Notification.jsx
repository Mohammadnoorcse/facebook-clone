import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";


const Notification = ({value}) => {
    const type=value.type;
    
  return (
    <>
      <Link to="/" className="notification-item">
        <div className="notification-item-1">
          <img src={value.profile} alt="" />
        </div>
        <div className="notification-item-2">
          {type === "request" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                accepted your friend request.
              </span>
            </>
          ) : type === "invited" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                invited you to like{" "}
                <strong className="notification-header">{value.group}</strong>.
              </span>
            </>
          ) : type === "comment" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                commented on your post.
              </span>
            </>
          ) : type === "mention" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                mentioned you{" "}
                <strong className="notification-header">{value.group}</strong>
              </span>
            </>
          ) : type === "highlighted" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                highlighted a post for you to check out.
              </span>
            </>
          ) : type === "group" ? (
            <>
              <span className="notificaiton-text">
                <strong className="notification-header">{value.name}</strong>{" "}
                posted in{" "}
                <strong className="notification-header"> {value.group}</strong>.
              </span>
            </>
          ) : (
            <>
              <span className="notificaiton-text">
                You will now see ads during you pages experience..
              </span>
            </>
          )}
        </div>
        <div className="notification-item-3">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div className="notification-item-4">
          {type === "request" ? (
            <>
              <i class="fa-solid fa-user"></i>
            </>
          ) : type === "invited" ? (
            <>
              <i class="fa-solid fa-font-awesome"></i>
            </>
          ) : type === "ads" ? (
            <>
              <i class="fa-solid fa-chart-simple"></i>
            </>
          ) : type === "group" ? (
            <>
              <i class="fa-solid fa-users"></i>
            </>
          ) : (
            <>
              <i class="fa-solid fa-message"></i>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default Notification;
