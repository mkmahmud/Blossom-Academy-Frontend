const MainTag = ({ text }: any) => {
  return (
    <li className="mx-2 mt-6 cursor-pointer">
      <span className="p-2 bg-gray text-primary text-center"> {text}</span>
    </li>
  );
};

export default MainTag;
