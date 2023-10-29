import { Routes, Route } from "react-router-dom";

import Background from "./components/Background";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="lg:min-h-screen text-slate-300 relative">
      <Background />
        <Routes>
          <Route
            path=""
            element={
              <section className="container mx-auto grid lg:grid-cols-2 z-50">
                <Sidebar />
                <Main />
              </section>
            }
          />
        </Routes>
    </div>
  );
};

export default App;
