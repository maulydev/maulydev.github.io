import "../components/css/background.css";

const Background = () => {
  return (
    <ul className="background [&>*]:bg-cyan-800/20 bg-slate-900 -z-10">
      {/* <ul className="background [&>*]:bg-cyan-800/20 bg-gradient-to-br from-cyan-950 to-blue-950 -z-10"> */}
      <li className="md:hidden"></li>
      <li className="md:hidden"></li>
      <li className="md:hidden"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
    </ul>
  );
};

export default Background;
