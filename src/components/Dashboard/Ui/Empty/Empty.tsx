import Font from "../../../icons/Font";

const Empty = ({ content }: any) => {
  return (
    <div className="text-center text-xl font-semibold text-primary my-10 border border-2 border-gray py-10 ">
      <Font iconName="fa-envelope-open-text text-extraLarge" /> <p> {content}</p>
    </div>
  );
};

export default Empty;
