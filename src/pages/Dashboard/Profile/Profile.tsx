import { useEffect, useState } from "react";
import userImage from "../../../assets/user/dummy.png";
import CustomInput from "../../../components/Dashboard/Ui/Input/CustomInput";
import { useAppSelector } from "../../../redux/hooks";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import CustomTextArea from "../../../components/Dashboard/Ui/Input/CustomTextArea";
import Font from "../../../components/icons/Font";
import CustomButton from "../../../components/Buttons/CustomButton";
import { useUpdateUserDetailsMutation } from "../../../redux/api/users/usersAPI";
import { message } from "antd";

const Profile = () => {
  // Handle Edit
  const [editProfile, setEdtiProfile] = useState(false);

  // Get User Profile
  const { user } = useAppSelector((state) => state.userDetails);

  // Use Hook form
  const methods = useForm({
    defaultValues: user || {}, // Provide an empty object if user is null
  });

  // If the user details change, update the default values
  useEffect(() => {
    if (user) {
      methods.reset(user); // Use reset to update the default values
    }
  }, [user?.email]);

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "career.0.aboutMe",
  });

  const { fields: educationFields, append: educationAppend } = useFieldArray({
    control: methods.control,
    name: "career.0.education",
  });

  const { fields: experienceFields, append: experienceAppend } = useFieldArray({
    control: methods.control,
    name: "career.0.experience",
  });

  const { fields: certificationsFields, append: certificationsAppend } =
    useFieldArray({
      control: methods.control,
      name: "career.0.certifications",
    });

  // Update User Detail By
  const [updateUserDetails] = useUpdateUserDetailsMutation();

  const onSubmit = async (data: any) => {
    const res = await updateUserDetails(data);
    if (res) {
      // setEdtiProfile(false);
      message.success("Profile Updated successfully");
    }
  };

  const handleProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=1d6ada8096c65528a8b7c88a0c385e22`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          const imageUrl = responseData.data.display_url;
          const data = {
            userId: user.userId,
            email: user.email,
            profileImage: imageUrl,
          };
          const res = await updateUserDetails(data);
          if (res) {
            // setEdtiProfile(false);
            message.success("Profile Image successfully");
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className=" ">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <div className="">
              <div className="md:flex space-x-4 p-4 border-2  border-primaryHover">
                <div className="w-full md:w-3/12">
                  <div>
                    <label
                      className="relative overflow-hidded group"
                      htmlFor="profile"
                    >
                      <img
                        src={
                          user?.profileImage ? user?.profileImage : userImage
                        }
                        className="h-[200px] w-[200px] rounded"
                        alt="User Image"
                      />
                      <div className="hidden group-hover:block">
                        <div className="  flex items-center justify-center absolute top-0 bg-gray text-extraLarge h-full w-full  rounded  ">
                          <Font iconName="fa-edit" />
                        </div>
                      </div>
                    </label>
                    <input
                      type="file"
                      className="bg-whiteGray hidden outline-none border border-gray px-4 py-2 w-full text-[16px] "
                      name="profile"
                      id="profile"
                      onChange={handleProfileImage}
                    />
                  </div>
                  <div className=" my-4">
                    <div className="my-1 flex space-x-2">
                      {" "}
                      <span className="text-primary mx-2">
                        <Font iconName="fa-location-dot" />{" "}
                      </span>{" "}
                      {editProfile ? (
                        <div className="gird grid-cols-2 gap-x-2">
                          <CustomInput name={`city`} placeholder="City" />
                          <CustomInput name={`country`} placeholder="Country" />
                        </div>
                      ) : (
                        <p>
                          {" "}
                          {user?.city}, <span>{user?.country}</span>
                        </p>
                      )}
                    </div>
                    <p className="my-1">
                      {" "}
                      <span className="text-primary mx-2">
                        <Font iconName="fa-id-badge" />{" "}
                      </span>{" "}
                      Joined Octobor, 2023
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-9/12">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-large font-semibold text-secondary">
                        {user?.firstName} {user?.lastName}
                      </h2>
                      {editProfile ? (
                        <CustomInput name={`bio`} />
                      ) : (
                        <p> {user?.bio}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <Font iconName="fa-share-nodes" />
                      </div>
                      {!editProfile ? (
                        <div
                          onClick={() => {
                            setEdtiProfile(!editProfile);
                          }}
                        >
                          <CustomButton content="Edit" icon="fa-edit" />
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEdtiProfile(!editProfile);
                          }}
                        >
                          <CustomButton content="Cancel" icon="fa-close" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="     ">
                    <div className="flex justify-between  mt-4 cursor-pointer   py-2">
                      <div>
                        <h2 className="text-xl font-semibold text-secondary">
                          About Me
                        </h2>
                      </div>
                    </div>
                    {/* Edit Profile */}
                    {editProfile ? (
                      <div>
                        {methods.getValues("career.0.aboutMe").length > 1
                          ? methods
                              .getValues("career.0.aboutMe")
                              .map((about, index) => (
                                <CustomTextArea
                                  key={about.index}
                                  name={`career.0.aboutMe.${index}.title`}
                                />
                              ))
                          : ""}

                        <div
                          className="my-4"
                          onClick={() => {
                            append({
                              index:
                                methods.getValues("career.0.aboutMe").length +
                                1,
                              title: "",
                            });
                          }}
                        >
                          <CustomButton content="ADD" icon="fa-plus" />
                        </div>
                      </div>
                    ) : (
                      // about Me
                      <div>
                        {user &&
                          user?.career[0]?.aboutMe.map((p, index) => (
                            <div key={index} className="my-2">
                              {p.title}{" "}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="my-10 border-2 border-primaryHover  ">
                <div className="flex border-b border-primary justify-between  mb-4 cursor-pointer   px-4 py-2">
                  <div className="">
                    <h2 className="text-xl font-semibold text-secondary ">
                      Education
                    </h2>
                  </div>
                  <div className="mx-2">
                    <button
                      onClick={() => {
                        educationAppend({
                          institution: " ",
                          title: "",
                          location: "",
                          startYear: 2024,
                          endYear: 2024,
                          result: 4.0,
                          description: " ",
                        });
                        setEdtiProfile(true);
                      }}
                    >
                      <Font iconName="fa-plus" />
                    </button>
                  </div>
                </div>

                {!editProfile &&
                  user?.career[0]?.education.map((p, index) => (
                    <div key={index} className="my-4   px-4 pb-2">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          {p.institution}, <span>{p.location}</span>
                        </h2>
                        <button>
                          <Font iconName="fa-ellipsis" />
                        </button>
                      </div>
                      <h3 className="text-lg font-semibold">{p.description}</h3>
                      <p className="py-2">{p.description}</p>
                      <div className=" ">
                        <div className="flex space-x-2">
                          <p>{p.startYear}</p>
                          <p>~</p>
                          <p>{p.endYear}</p>
                        </div>
                        <p>CGPA: {p.result}</p>
                      </div>
                    </div>
                  ))}

                {editProfile && methods.getValues("career.0.education")
                  ? methods
                      .getValues("career.0.education")
                      .map((_education, index) => (
                        <div
                          key={index}
                          className="px-4 my-4 border-b-2 border-primaryHover"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
                            <CustomInput
                              name={`career.0.education.${index}.title`}
                              placeholder="Education Title"
                            />
                            <CustomInput
                              name={`career.0.education.${index}.institution`}
                              placeholder="Institution"
                            />
                            <CustomInput
                              name={`career.0.education.${index}.location`}
                              placeholder="location"
                            />
                          </div>
                          <CustomTextArea
                            name={`career.0.education.${index}.description`}
                            placeholder="Description"
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                            <CustomInput
                              name={`career.0.education.${index}.startYear`}
                              placeholder="Start Year"
                            />
                            <CustomInput
                              name={`career.0.education.${index}.endYear`}
                              placeholder="End Year"
                            />
                          </div>
                          <CustomInput
                            name={`career.0.education.${index}.result`}
                            placeholder="Result"
                          />
                        </div>
                      ))
                  : ""}
              </div>

              {/* Experience */}
              <div className="my-10 border-2 border-primaryHover  ">
                <div className="flex border-b border-primary justify-between  mb-4 cursor-pointer   px-4 py-2">
                  <div className="">
                    <h2 className="text-xl font-semibold text-secondary ">
                      Experience
                    </h2>
                  </div>
                  <div className="mx-2">
                    <button
                      onClick={() => {
                        experienceAppend({
                          institution: " ",
                          title: "",
                          location: "",
                          startYear: 2024,
                          endYear: 2024,
                          result: 0,
                          description: " ",
                        });
                        setEdtiProfile(true);
                      }}
                    >
                      <Font iconName="fa-plus" />
                    </button>
                  </div>
                </div>

                {!editProfile &&
                  user?.career[0]?.experience.map((p, index) => (
                    <div key={index} className="my-4   px-4 pb-2">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">
                          {p.description}
                        </h2>
                        <button>
                          <Font iconName="fa-ellipsis" />
                        </button>
                      </div>
                      <h3 className="text-lg font-semibold">
                        {" "}
                        {p.institution}, <span>{p.location}</span>
                      </h3>
                      <p className="py-2">{p.description}</p>
                      <div className=" ">
                        <div className="flex space-x-2">
                          <p>{p.startYear}</p>
                          <p>~</p>
                          <p>{p.endYear}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                {editProfile && methods.getValues("career.0.experience")
                  ? methods
                      .getValues("career.0.experience")
                      .map((_experience, index) => (
                        <div
                          key={index}
                          className="px-4 my-4 border-b-2 border-primaryHover"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
                            <CustomInput
                              name={`career.0.experience.${index}.title`}
                              placeholder="experience Title"
                            />
                            <CustomInput
                              name={`career.0.experience.${index}.institution`}
                              placeholder="Institution"
                            />
                            <CustomInput
                              name={`career.0.experience.${index}.location`}
                              placeholder="location"
                            />
                          </div>
                          <CustomTextArea
                            name={`career.0.experience.${index}.description`}
                            placeholder="Description"
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                            <CustomInput
                              name={`career.0.experience.${index}.startYear`}
                              placeholder="Start Year"
                            />
                            <CustomInput
                              name={`career.0.experience.${index}.endYear`}
                              placeholder="End Year"
                            />
                          </div>
                          <CustomInput
                            name={`career.0.experience.${index}.result`}
                            placeholder="Result"
                          />
                        </div>
                      ))
                  : ""}
              </div>
              {/* Certifications */}
              <div className="my-10 border-2 border-primaryHover  ">
                <div className="flex border-b border-primary justify-between  mb-4 cursor-pointer   px-4 py-2">
                  <div className="">
                    <h2 className="text-xl font-semibold text-secondary ">
                      Certifications
                    </h2>
                  </div>
                  <div className="mx-2">
                    <button
                      onClick={() => {
                        certificationsAppend({
                          index:
                            methods.getValues("career.0.certifications")
                              .length + 1,
                          title: "",
                          credential: "",
                          year: 2024,
                        });
                        setEdtiProfile(true);
                      }}
                    >
                      <Font iconName="fa-plus" />
                    </button>
                  </div>
                </div>

                {!editProfile &&
                  user?.career[0]?.certifications.map((p, index) => (
                    <div key={index} className="my-4   px-4 pb-2">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-xl font-semibold">{p.title}</h2>
                          <h2 className="  ">{p.year}</h2>
                        </div>
                        <button>
                          <Font iconName="fa-link" />
                        </button>
                      </div>
                    </div>
                  ))}

                {editProfile && methods.getValues("career.0.certifications")
                  ? methods
                      .getValues("career.0.certifications")
                      .map((_certification, index) => (
                        <div
                          key={index}
                          className="px-4 my-4 border-b-2 border-primaryHover"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
                            <CustomInput
                              name={`career.0.certifications.${index}.title`}
                              placeholder="certifications Title"
                            />
                            <CustomInput
                              name={`career.0.certifications.${index}.year`}
                              placeholder="year"
                            />
                            <CustomInput
                              name={`career.0.certifications.${index}.credential`}
                              placeholder="credential"
                            />
                          </div>
                        </div>
                      ))
                  : ""}
              </div>

              <div>
                {editProfile && (
                  <CustomButton
                    type="submit"
                    content="Update"
                    icon="fa-check"
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
