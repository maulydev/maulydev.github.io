import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Background from "./components/Background";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

const Resume = lazy(() => import("./components/Resume"));

const App = () => {
  return (
    <div className="lg:min-h-screen text-slate-300 relative">
      <Background />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};

export default App;
