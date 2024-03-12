// @ts-nocheck
import { Input } from "antd";
import UserCard from "../../components/Messenger/UserCard";
import Font from "../../components/icons/Font";
import user from "../../assets/user/dummy.png";
import { io } from "socket.io-client";
import { getUserInfo } from "../../services/authService";
import { useEffect, useState } from "react";
import { timeAgo } from "../../helpers/calculate/calculate";
import { useMyContactQuery } from "../../redux/api/messenger/messengerAPI";
import Empty from "../../components/Dashboard/Ui/Empty/Empty";

const Messenger = () => {
  // Get User Info
  const userinfo = getUserInfo();

  // Get My Contacts
  const { data } = useMyContactQuery(userinfo?.userId);

  // Set Selected Contact
  const [selectedContact, setSelectedContact] = useState(null);

  // Store Messages
  const [messages, setMessages] = useState([]);

  // Init Socket
  const socket = io("http://localhost:5000", {
    query: {
      // @ts-ignore
      userId: userinfo.userId,
    },
  });

  // socket.on("engaged_user", (data) => {
  //   console.log(data);
  // });

  socket.on("getMessages", (data) => {
    setMessages(data);
  });

  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });

  const handlesend = async (e: any) => {
    e.preventDefault();
    const message = e.target.message.value;

    if (message !== "") {
      socket.emit("chat message", {
        // @ts-ignore
        sender: userinfo.userId,
        message,
        reciver: selectedContact?.reciver,
        status: true,
      });

      e.target.message.value = ' '
    }
     

  };

  useEffect(() => {
    console.log(userinfo?.userId, selectedContact?.reciver);

    if (userinfo?.userId && selectedContact?.reciver) {
      socket.emit("getMessages", {
        senderid: userinfo?.userId,
        reciverId: selectedContact?.reciver,
      });
    }
  }, [selectedContact]);

  return (
    <div className="mt-16 h-[90vh] overflow-hidden ">
      <div className="flex  w-full py-2 h-full">
        <div className="w-4/12 bg-gray  ">
          <div className="p-2">
            <Input placeholder={`Search`} className="text-lg rounded-full" />
          </div>
          <div className="border-t-2 border-gray mt-4 overflow-y-scroll h-[90%] ">
            {data &&
              data.map((user) => (
                <div
                  key={user?._id}
                  onClick={() => {
                    setSelectedContact(user);
                  }}
                >
                  {" "}
                  <UserCard data={user} />
                </div>
              ))}
          </div>
        </div>
        <div className="w-6/12 bg-  relative">
          {selectedContact && (
            <>
              <div className="p-2 bg-gray border-b-2 border-primary">
                <h2 className="text-xl font-bold">
                  {selectedContact ? selectedContact?.reciverName : "Name"}{" "}
                  <span className="text-sm">
                    {selectedContact ? selectedContact?.role : "Role"}
                  </span>{" "}
                </h2>

                <p>Last active 5m ago</p>
              </div>

              {/* Messages */}
              <div className="  h-[80%] overflow-y-scroll   w-full  ">
                <div>
                  {messages.length > 0 &&
                    messages
                      .slice()
                      // @ts-ignore
                      .sort(
                        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                      )
                      .map((m) => (
                        <div key={m._id}>
                          <div
                            className={`${
                              // @ts-ignore
                              m.sender === userinfo?.userId
                                ? "justify-end mr-2"
                                : "justify-start "
                            } flex items-end space-x-2 mt-4`}
                          >
                            <div>
                              {
                                // @ts-ignore
                                m.sender === userinfo?.userId ? (
                                  " "
                                ) : (
                                  <img
                                    src={selectedContact?.reciverImg}
                                    alt=""
                                    className="h-14 w-14 rounded-full"
                                  />
                                )
                              }
                            </div>
                            <div>
                              <div>
                                <h2 className="bg-primaryHover p-2 rounded-r-lg rounded-tl-lg">
                                  {m.message}
                                </h2>
                                <p className="text-sm">
                                  {timeAgo(m.createdAt)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                  {messages.length === 0 && (
                    <div className="m-4">
                      <Empty content="No Messages Found" />
                    </div>
                  )}
                </div>
              </div>

              {/* Send Message */}
              <div className="absolute bottom-4 py-2 px-6 w-full">
                <form onSubmit={handlesend} className="flex space-x-2 w-full">
                  <Input
                    placeholder={`Type Message`}
                    className="text-lg rounded w-full"
                    name="message"
                    id="messageInput"
                  />

                  <button type="submit" className="bg-primary px-2 text-white">
                    <Font iconName="fa-paper-plane" />
                  </button>
                </form>
              </div>
            </>
          )}

          {
            !selectedContact && <h2 className="text-extraLarge text-primary text-center font-semibold mt-20">Select a User to start conversation! </h2>
          }
        </div>
        <div className="w-3/12 bg- ">
          {selectedContact && (
            <>
              <div className="mt-6 ">
                <img
                  src={selectedContact ? selectedContact?.reciverImg : "Name"}
                  className="h-[200px] w-[200px] border-2 border-primary block mx-auto"
                  alt=""
                />
                <h2 className="text-large font-bold mt-2 text-center">
                  {selectedContact ? selectedContact?.role : "Role"}
                </h2>
              </div>

              <div className="m-4">
                <p className="font-bold">UserName</p>
                <h2 className="font-semibold ">
                  {selectedContact ? selectedContact?.reciverName : "Name"}
                </h2>

                <p className="font-bold mt-4">Bio</p>
                <p>This will be Bio</p>
              </div>
              <div className="m-4">
                <p className="cursor-pointer mt-2">Block User</p>
                <p className="cursor-pointer mt-2">Clear Chat</p>
                <p className="cursor-pointer mt-2">Delete Conversation</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messenger;