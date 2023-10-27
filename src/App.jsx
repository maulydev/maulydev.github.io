import Background from "./components/Background";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="md:min-h-screen text-slate-300 relative">
      <Background />
      <section className="container mx-auto grid md:grid-cols-2 z-50">
        <Sidebar />
        <Main />
      </section>
    </div>
  );
};

export default App;
