import "../components/css/background.css";

const Background = () => {
  return (
    <ul className="background [&>*]:bg-cyan-800/20">
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
      <li className="hidden md:block"></li>
    </ul>
  );
};

export default Background;
