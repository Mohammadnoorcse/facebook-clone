import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Navbar from "./component/navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profile from "./component/profile/Profile";

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