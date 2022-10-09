import {BrowserRouter,Link, Route, Routes} from "react-router-dom";

import {Home} from "./components/Home/Home";
import {Page1} from "./components/Project/Page1";
import {Page2} from "./components/Members/Page2";
import {Page3} from "./components/News/Page3";
import {Page4} from "./components/Other/Page4";



function App(){
  return(
    <>
    App
    <BrowserRouter>

    <div className="App">
      <Link to="/"> Home </Link>
      <br/>
      <Link to="/project"> Page1 </Link>
      <br/>
      <Link to="/members"> Page2 </Link>
      <br/>
      <Link to="/News"> Page3 </Link>
      <br/>
      <Link to="/Other"> Page4 </Link>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project" element={<Page1 />} />
          <Route path="Members" element={<Page2 />} />
          <Route path="News" element={<Page3 />} />
          <Route path="Other" element={<Page4/>}/>

      </Routes>
    </div>
    
    </BrowserRouter>
    </>
  );
}

export default App;