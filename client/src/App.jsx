import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App