import {BrowserRouter,Route, Routes} from "react-router-dom";

import {Home} from "./components/Home/Home";
import {Page1} from "./components/Project/Page1";
import {Page2} from "./components/Members/Page2";
import {Page3} from "./components/News/Page3";
import {Page4} from "./components/Other/Page4";
import {Dissertation} from "./components/Dissertation/dissertation";
import {Books} from "./components/Books/books";
import {Patent} from "./components/Patent/patent";
// import {Information} from "./Information/information";




function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project" element={<Page1 />} />
          <Route path="Members" element={<Page2 />} />
          <Route path="News" element={<Page3 />} />
          <Route path="Other" element={<Page4/>}/>
          <Route path="Dissertation" element={<Dissertation/>}/>
          <Route path="Books" element={<Books/>}/>
          <Route path="Patent" element={<Patent/>}/>
          {/* <Route path="Information" element={<Information/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;