import Font from "../../../icons/Font";

const Empty = ({ content }: any) => {
  return (
    <div className="text-center text-xl font-semibold text-primary my-10">
      <Font iconName="fa-border-none text-large" /> <p> {content}</p>
    </div>
  );
};

export default Empty;
