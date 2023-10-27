/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const SectionTitle = ({ title }) => {
  return (
    <h3 className="font-bold text-xl flex items-center gap-4">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-blue-300"></div>
      <span className="shrink-0">{title}</span>
    </h3>
  );
};

export default SectionTitle;
