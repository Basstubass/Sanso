import {BrowserRouter,Route, Routes} from "react-router-dom";

import {Home} from "./components/Home/Home";
import {Page1} from "./components/Project/Page1";
import {Page2} from "./components/Members/Page2";
import {Page3} from "./components/News/Page3";
import {Page4} from "./components/Other/Page4";
import {Dissertation} from "./components/Dissertation/dissertation";
import {Books} from "./components/Books/books";
import {Patent} from "./components/Patent/patent";
import {Information} from "./components/Information/information";




function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Page1 />} />
          <Route path="members" element={<Page2 />} />
          <Route path="news" element={<Page3 />} />
          <Route path="other" element={<Page4/>}/>
          <Route path="dissertation" element={<Dissertation/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="patent" element={<Patent/>}/>
          <Route path="information" element={<Information/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;