import Font from "../../../../icons/Font";
import user from "../../../../../assets/user/user1.jpg";

const TeacherReviewCard = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={user} className="rounded-full h-16 w-16" alt="" />
          <div className="px-2">
            <h2 className="font-semibold">Nicole Brown</h2>
            <p>UX/UI Designer</p>
          </div>
        </div>
        <ul>
          <li className="text-primary">
            <Font iconName="fa-star" />
            <Font iconName="fa-star" />
            <Font iconName="fa-star" /> 
            <Font iconName="fa-star-half-stroke" />
            <Font iconName="fa-star-half-stroke" />
          </li>
        </ul>
      </div>
      <div>
        <p className="my-4">
          " &nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eaque deleniti nostrum ex debitis aliquam ducimus quasi placeat, ipsa
          voluptatibus corporis, quam iusto, commodi facilis? Provident,
          consequatur mollitia! Quo laborum consequuntur quibusdam, ad dolores
          dolorum facilis quisquam sunt ullam corrupti rem aut, voluptate quod
          voluptas illum.
        </p>
      </div>
    </div>
  );
};

export default TeacherReviewCard;
