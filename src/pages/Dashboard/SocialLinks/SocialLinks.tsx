import facebook from "../../../assets/icon/net-icon-02.png";
import google from "../../../assets/icon/net-icon-01.png";
import github from "../../../assets/icon/net-icon-03.png";
import twitter from "../../../assets/icon/net-icon-04.png";
import CustomOutlineButton from "../../../components/Buttons/CustomOutlineButton";

const SocialLinks = () => {
  return (
    <div>
      <div className="border-2 border-primaryHover p-2 mb-4">
        <h2 className="font-bold text-xl text-primary">Linked Accounts</h2>
        <p className="py-2">Delete or Close your account permanently.</p>
        <div className="mt-6">
          <div className="flex space-x-6 my-4">
            <div>
              <img src={google} alt="" />
            </div>
            <div>
              <h2>Sign In using Google</h2>
              <p className="my-4">
                Enable one-click login and receive more personalized course
                recommendations.
              </p>
              <div className="flex">
                <div>
                  <CustomOutlineButton content="Link Google Account" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex space-x-6 my-4">
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <h2>Facebook</h2>
              <p className="my-4">
                Enable one-click login and receive more personalized course
                recommendations.
              </p>
              <div className="flex">
                <div>
                  <CustomOutlineButton content="Link Facebook Account" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex space-x-6 my-4">
            <div>
              <img src={github} alt="" />
            </div>
            <div>
              <h2>Github</h2>
              <p className="my-4">
                Enable one-click login and receive more personalized course
                recommendations.
              </p>
              <div className="flex">
                <div>
                  <CustomOutlineButton content="Link Github Account" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="flex space-x-6 my-4">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <h2>Twitter</h2>
              <p className="my-4">
                Enable one-click login and receive more personalized course
                recommendations.
              </p>
              <div className="flex">
                <div>
                  <CustomOutlineButton content="Link Twitter Account" />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
