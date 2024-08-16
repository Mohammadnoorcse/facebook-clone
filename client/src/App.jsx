import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Navbar from "./component/navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profile from "./component/profile/Profile";
import Friend from "./component/friend/Friend";
import Memories from "./component/memories/Memories";
import Saved from "./component/saved/Saved";
import MarketPlace from "./component/marketplace/MarketPlace";
import Group from "./component/group/Group";

const App = () => {
  const auth =true;
  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/friends" element={<Friend />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/groups" element={<Group />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App