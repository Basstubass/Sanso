import {BrowserRouter,Route, Routes} from "react-router-dom";

import {Home} from "./components/Home/Home";
import {Project} from "./components/Project/Project";
import {Members} from "./components/Members/Members";
import {Page3} from "./components/News/Page3";
import {Page4} from "./components/Other/Page4";



function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="Members" element={<Members />} />
          <Route path="News" element={<Page3 />} />
          <Route path="Other" element={<Page4/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;