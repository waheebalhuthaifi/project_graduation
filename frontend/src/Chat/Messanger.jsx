import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import Pusher from "pusher-js";
import axios from "./../axios/axios";
import { auto, bottom } from "@popperjs/core";
import { useParams } from "react-router-dom";
// import.meta.env.REACT_APP_API_URL;
import Echo from "laravel-echo";

const Messanger = () => {
  const { user, csrfToken } = useAuth();
  const [messages, setMessages] = useState([]);
  // const [firstName, setFirstName] = useState('Ali');
  // const [message, setMessage] = useState([]);
  //   const [pusher, setPusher] = useState(null);
  // const [m, setM] = useState([]);
  // const apiUrl = import.meta.env.REACT_APP_API_URL;
  // import Index from './../notus-react-main/src/views/Index';

  const [Freelancer_id, setFreelancer_id] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState([]);

  const [Client_ID, setClient_ID] = useState();
  const [conversation, setConversation] = useState(null);
  const [service_id, setService_id] = useState();
  const { id } = useParams(); //id is services of ID
  const [serviceInfo, setServiceInfo] = useState({
    name: "محمد بندر",
    description: "تطوير موقع الالكتروني",
    freelancer: {
      name: "John Doe",
      ratings: 4.5,
      avatar: "https://picsum.photos/200",
    },
  });

  console.log("Freelancer_id", Freelancer_id, "setClient_ID: ", Client_ID, id);

  // let allMessage=[];
  const chatAreaRef = useRef(null);
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTo({
        top: chatAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUserServices();

        console.log("Freelancer_id: ", Freelancer_id);
        axios
          .get(`/conversations`, {
            params: {
              Freelancer_id: Freelancer_id,
            },
          })
          .then((response) => {
            console.log("/conversations", response.data);
            setConversation(response.data.conversation);
            setMessages(response.data.messages);
          });
      } catch (error) {
        console.error("Error fetching messages:", error);
        // }
      }
    };
    fetchData();

    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "ad6755871b55733e71f4",
      cluster: "ap2",
      authEndpoint: "http://127.0.0.1:8000/api/pusher/auth",
      authorizer: (channel, options) => {
        return {
          authorize: (socketId, callback) => {
            axios
              .post(
                "pusher/auth",
                {
                  socket_id: socketId,
                  channel_name: channel.name,
                },
                { csrfToken }
              )
              .then((response) => {
                callback(false, response.data);
              })
              .catch((error) => {
                callback(true, error);
              });
          },
        };
      },
    });
    console.log(user.id, Freelancer_id);

    window.Echo.private(
      `private-events-conversation.${user.id}`
    ).listen("MessageEvent", (data) => {
      console.log("Received data:", data);

      setMessages((prevMessages) => [...prevMessages, data]);
    });

    window.Echo.private(
      `private-events-conversation.${Freelancer_id}`
    ).listen("MessageEvent", (data) => {
      console.log("Received data:", data);

      setMessages((prevMessages) => [...prevMessages, data]);
    });
    // return () => {
    //   window.Echo.private(`private-events-conversation.${conversation?.id}`)
    //     .stopListening('MessageEvent');
    // };
  }, [Freelancer_id]);

  //////////////////////////////////////////////////////////////

  const getUserServices = async () => {
    const response = await axios.get(`getIDFreelancerService/${id}`);
    const data = response.data; //20
    console.log("hello", response.data);
    setFreelancer_id(data); 
    // setClient_ID(user.id) //4 or 20
    console.log(
      "Freelancer_id",
      Freelancer_id,
      "setClient_ID: ",
      Client_ID,
      id
    );
  };

  console.log("window.Echo.privatedata", messages);

  const handleSendMessage = async () => {
    // console.log(services.id);
    const response = await axios.post("/store-message-contract", {
      newMessage: newMessage,
      client: user.id,
      Freelancer_id,
      serviceID:id,
      type :'PublicChat',
    });
    const data = response.data;
    console.log("handleSendMessage :", data.message);
  };
  // const handleSendMessage = () => {
  //   axios
  //     .post(`/conversations/${Freelancer_id}/messages`, {
  //       message: newMessage,
  //       //  Freelancer_id:conversation.user1_id === userId ? conversation.user2_id : conversation.user1_id,
  //       // Freelancer_id:Freelancer_id,
  //     })
  //     .then((response) => {
  //       console.log("response.data.message", response.data);
  //       setNewMessage("");
  //     });
  // };

  console.log(messages);
  return (
    <>
      <div className=" w-[85%] mx-auto flex justify-between ">
        {/* Chat Section */}
        <div className="flex flex-col w-full mt-4   bg-white border border-gray-300 rounded-lg shadow-md">
          <div
            ref={chatAreaRef}
            className="flex scrollbar flex-col h-[72vh]  overflow-y-auto px-4   "
          >
            
            <div className={`p-2 chat-message`}>

    
              {messages && messages.length > 0 ? (
                messages.map((message, index) => (
                  // <div key={index} className="flex items-start gap-2.5">
                  //   <div
                  //     className={`flex-grow mr-2 ${
                  //       message.client_id === user.id
                  //         ? "bg-blue-100"
                  //         : "bg-gray-100"
                  //     } rounded-lg p-2`}
                  //   >
                  //     <span className="text-gray-800">
                  //       {message.client_id === user.id
                  //         ? "You: "
                  //         : `${user.firstName} `}
                  //     </span>
                  //     <p>{message.message}</p>
                  //   </div>
                  // </div>
                  <><div className="flex items-start gap-2.5">
                  <img className="w-8 h-8 rounded-full" src="https://picsum.photos/200" alt="Jese image"/>
                  <div className="flex flex-col w-full max-w-1/2 leading-1.5">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 ">{user.firstName}</span>
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                      </div>
                      <p className="text-sm w-full font-normal py-2 text-gray-900"> {message.message}</p>
                      {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> */}
                  </div>
              </div>
                  </>
                  
                ))
              ) : (
                <div>No messages to display</div>
              )}
            </div>
          </div>
          <div className="flex items-center p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="w-full"
            >
              <input
                type="text"
                name="message"
                placeholder="اكتب رسالتك"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow border border-gray-300 rounded-lg p-2 w-full whitespace-normal"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={handleSendMessage}
                  className="bg-[#8e2de2] w-1/2 mt-2  text-white px-4 py-2 rounded-lg"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Service Information Card */}
        <div className="flex flex-col w-1/2 m-4 h-fit bg-white border border-gray-300 rounded-lg shadow-md mb-4">
          <div className="flex items-center  p-4 border-b border-gray-300">
            {/* <h3 className="text-sm font-medium">  <span>بخصوص :  </span> {serviceInfo.name}</h3> */}
            <p className="text-green-600 00 ml-2">
              {" "}
              <span className="text-md text-black  ">بخصوص : </span>{" "}
              {serviceInfo.description}
            </p>
          </div>
          <div className="flex justify-between items-center  p-4">
            <div className="flex items-center">
              <img
                src={serviceInfo.freelancer.avatar}
                alt="صاحب الخدمة"
                className="w-10 h-10 rounded-full mr-2"
              />
              <p className="font-medium mr-2">{serviceInfo.freelancer.name}</p>
            </div>

            <div className="">
              <button className="bg-green-600 text-white text-sm py-2 px-2 cursor-auto rounded-md">
                الملف الشخصي
              </button>
              {/* <p className="text-gray-600">تقييمات ({serviceInfo.freelancer.ratings})</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messanger;
