import { Link } from "react-router-dom";

const Linked = ({ path, content }: any) => {
  return <Link className="underline uppercase text-primary text-base" to={path}>{content}</Link>;
};

export default Linked;
