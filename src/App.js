import Navbar from './Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexRouter from './Routes/IndexRouter';

function App() {

   return (

      <Router>
         <div className="App">
            <Navbar />
            <div className="content">
               <Routes>
                  {IndexRouter.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                  ))}
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
