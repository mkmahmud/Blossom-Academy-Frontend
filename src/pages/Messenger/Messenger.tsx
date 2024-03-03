import { Input } from "antd";
import UserCard from "../../components/Messenger/UserCard";
import Font from "../../components/icons/Font";
import user from "../../assets/user/dummy.png";

const Messenger = () => {
  return (
    <div className="mt-16 h-[90vh] overflow-hidden ">
      <div className="flex  w-full py-2 h-full">
        <div className="w-4/12 bg-primaryHover  ">
          <div className="p-2">
            <Input placeholder={`Search`} className="text-lg rounded-full" />
          </div>
          <div className="border-t-2 border-gray mt-4 overflow-y-scroll h-[90%] ">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
        <div className="w-6/12 bg-gray relative">
          <div className="p-2 bg-gray border-b-2 border-primary">
            <h2 className="text-xl font-bold">
              Jhon Sina <span className="text-sm">(Teacher)</span>{" "}
            </h2>

            <p>Last active 5m ago</p>
          </div>

          {/* Messages */}
          <div className="  h-[80%] overflow-y-scroll   w-full  ">
            <div className="flex items-end space-x-2 mt-4 ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end   mr-2">
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-l-lg rounded-tr-lg">
                    This is massage form My side
                  </h2>
                  <p className="text-sm">4:39 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end   mr-2">
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-l-lg rounded-tr-lg">
                    This is massage form My side
                  </h2>
                  <p className="text-sm">4:39 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end   mr-2">
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-l-lg rounded-tr-lg">
                    This is massage form My side
                  </h2>
                  <p className="text-sm">4:39 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end   mr-2">
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-l-lg rounded-tr-lg">
                    This is massage form My side
                  </h2>
                  <p className="text-sm">4:39 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2  ">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end   mr-2">
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-l-lg rounded-tr-lg">
                    This is massage form My side
                  </h2>
                  <p className="text-sm">4:39 AM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-2 mt-10">
              <div>
                <img src={user} alt="" className="h-14 w-14 rounded-full" />
              </div>
              <div>
                <div>
                  <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                    This is massage form Sender
                  </h2>
                  <p className="text-sm">4:38 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message */}
          <div className="absolute bottom-4 py-2 px-6 flex space-x-2 w-full">
            <Input
              placeholder={`Type Message`}
              className="text-lg rounded w-full"
            />

            <button className="bg-primary px-2 text-white">
              <Font iconName="fa-paper-plane" />
            </button>
          </div>
        </div>
        <div className="w-3/12 bg-primaryHover">
          <div className="mt-6 ">
            <img
              src={user}
              className="h-[200px] w-[200px] border-2 border-primary block mx-auto"
              alt=""
            />
            <h2 className="text-large font-bold mt-2 text-center">
              (Theacher)
            </h2>
          </div>

          <div className="m-4">
            <p className="font-bold">UserName</p>
            <h2 className="font-semibold ">Jhon Khobir</h2>

            <p className="font-bold mt-4">Bio</p>
            <p>This will be Bio</p>
          </div>
          <div className="m-4">
            <p className="cursor-pointer mt-2">Block User</p>
            <p className="cursor-pointer mt-2">Clear Chat</p>
            <p className="cursor-pointer mt-2">Delete Conversation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
