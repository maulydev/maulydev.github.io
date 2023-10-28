import Background from "./components/Background";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

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
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
