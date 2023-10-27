import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-slate-900 md:min-h-screen text-slate-300">
      <section className="container mx-auto grid md:grid-cols-2">
        <Sidebar />
        <Main />
      </section>
    </div>
  );
};

export default App;
