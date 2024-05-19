import { useAppSelector } from "../../redux/hooks";

 

const CQ = () => {
     // Get User Profile
  const {   } = useAppSelector((state) => state.userDetails);
    return (
        <div>
            CQ
        </div>
    );
};

export default CQ;