import React, { useEffect, useState, useRef } from "react";
import ImageService from "../assets/service1.webp";

import Messanger from "../Chat/Messanger";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Nav from "./Nav";
import {
  FaStar,
  FaPhone,
  FaEye,
  FaPersonBooth,
  FaTimes,
  FaUserTimes,
} from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import axios from "../axios/axios";
import { useAuth } from "../contexts/AuthContext";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
// import axios from './../axios/axios';

export default function DetailsService() {
  const { id } = useParams();
  var price = 0;
  const { user, csrfToken } = useAuth();
  const [services, setService] = useState([]);
  const [orders, setOrders] = useState("");
  const [createOrder, setCreateOrder] = useState([]);
  const [salesService, setSalesService] = useState();
  const [newMessage, setNewMessage] = useState([]);
  //   const [serviceStatus, SetserviceStatus] = useState('');
  const [timeRemaining, setTimeRemaining] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [approveOrRejectOrder, setApproveOrRejectOrder] = useState("");

  const [eventOrder, setEventOrder] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const [eventOrdershow, setEventOrdershow] = useState(false);

  const [conversation, setConversations] = useState([]);
  const [chatAboutOrder, setChatAboutOrder] = useState([]);
  const [DoRequest, setDoRequest] = useState(false);
  
  const [causeMessage, setcauseMessage] = useState('');
var AllMessage=[];
  const chatAreaRef = useRef(null);
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTo({
        top: chatAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatAboutOrder]);
  
  useEffect(()=>{

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
},[])
  useEffect(()=>{

    const fetchOrderUser = async () => {
      const response = await axios.get(`/order/${id}`, {
        seller_id: services.user_id,
        services_id: services.id,
      });
      const data = response.data;
      // setCreateOrder(data);
      setOrders(response.data);
      console.log("fetchOrderUser", response.data);
      console.log("orders:", orders.status);
    };
    const fetchServices = async () => {
      const response = await axios.get(`/service/${id}`);
      const data = response.data.service;
      setService(data);
      console.log(response.data.service);
      console.log(orders);
    };
    
    async function fetchSalesData() {
      try {
        const response = await axios.get("/orders/getServiceAsCompleted", {
          serviceID: services.id,
        });
        setSalesService(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }

   
    fetchServices();
    fetchOrderUser();
    fetchSalesData();

  },[])
  useEffect(() => {
   
    const fetchChatOrder = async () => {
    console.log(orders.buyer_id,services.user_id,services.id)
      const response = await axios.get("/get-message-contract", {
        // params: {
          Client_ID: orders.buyer_id,
          Freelancer_id: services.user_id,
          service_id:services.id,
        // },
      });
      const data = response.data;
      AllMessage.push(response.data);
      setChatAboutOrder(response.data)
      console.log("fetchChatOrder :", response.data);
      console.log("AllMessage :",AllMessage);
    };
    window.Echo.private(`private-ChatAboutOrder.${user.id}`).listen(
      "ChatOrderEvent",
      (data) => {
        //   AllMessage.push(data)
        // console.log("AllMessage :",AllMessage);
         setChatAboutOrder((prevMessages) => [...prevMessages, data]);
        console.log("ChatOrderEvent: ", data);
     
      }
    );

    window.Echo.private(`private-ChatAboutOrder.${orders.buyer_id}`).listen(
      "ChatOrderEvent",
      (data) => {
        // AllMessage.push(data)
        // console.log("AllMessage :",AllMessage);
        setChatAboutOrder((prevMessages) => [...prevMessages, data]);
        console.log("ChatOrderEvent: ", data);
       
      }
    );

 
     fetchChatOrder();
 

  },[orders.buyer_id,orders.seller,user.id]);

  useEffect(() => {
    // console.log(data)

   

    window.Echo.private(`private-events.${user.id}`).listen(
      "EventService",
      (data) => {
        // console.log('New order created:', data.message,data.order.seller_id ,data.order.service_id);
        setEventOrder(data);
        console.log(data);
      }
    );
    console.log(orders.seller_id,  orders.buyer_id);

   

    window.Echo.private(
      `private-eventForApproveOrRejectOrder.${services.user_id}`
    ).listen("EventForApproveOrRejectOrder", (data) => {
      console.log("hhhhhhjjj",data);
      // setShowPopup(true);
      setApproveOrRejectOrder(data);

      // setEventOrdershow(approveOrRejectOrder.sellerID && user.user_type==='freelancer')

      console.log("causeMessage: ", approveOrRejectOrder);
    });
    return () => {
      window.Echo.private(`private-eventForApproveOrRejectOrder.${services.user_id}`)
        .stopListening('EventForApproveOrRejectOrder');
    };
  }, [id]);

  const [serviceStatus, setServiceStatus] = useState("pending");
  const [deliveryDateService, setDeliveryDate] = useState("2020-10-10");

  const handleSendMessage = async () => {
    // console.log(services.id);
    const response = await axios.post("/store-message-contract", {
      newMessage: newMessage,
      client: orders.buyer_id,
      Freelancer_id: services.user_id,
      serviceID:services.id,
      type :'EventChat',
    });
    const data = response.data;
    console.log("handleSendMessageContract :", data);
  };


  const fetchOrders = async () => {
    try {
      const response = await axios.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


  const updateOrder = async (e, status) => {
    // setApproveOrRejectOrder("");

    e.preventDefault();
    try {
      if (status === "in_progress") {
        const response = await axios.post(`/sendOrder`, {
          seller_id: services.user_id,
          status,
        });
        const data = response.data;
        console.log(data);
      } else if (status === "completed") {
        const response = await axios.post(`/sendOrder`, {
          seller_id: services.user_id,
          status,
        });
        const data = response.data;
        console.log(data);
      }
      else if (status === "cancelled"){
        setDoRequest(true);
        // setcauseMessage(e.target.value);
        const response = await axios.post(`/sendOrder`, {
          seller_id: services.user_id,
          status,
          causeMessage,
        });
        const data = response.data;
        console.log(data);

      }
      
      else {
        const response = await axios.post(`/orders/${id}`, {
          orderID: orders.id,
          seller_id: services.user_id,
          service_id: services.id,
          status,
        });
        const UpdateStatus = response.data;

        console.log(UpdateStatus);

        setOrders(UpdateStatus);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };
  const updateStateOrder = async (e, status) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/orders/${id}`, {
        orderID: orders.id,
        seller_id: services.user_id,
        service_id: services.id,
        status,
      });
      const UpdateStatus = response.data;
      setShowPopup(!showPopup);

      console.log(UpdateStatus);

      setOrders(UpdateStatus);
      setApproveOrRejectOrder("");
      // }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  // Delete an order
  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`/orders/${orderId}/delete`);
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
      console.log("setOrders", orders);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };
  const createOrderService = async (e) => {
    e.preventDefault();
    // price=200;
    try {
      const response = await axios.post(`/create/order`, {
        seller_id: services.user_id,
        service_id: services.id,
        amount: 250,
      });
      const data = response.data;
      setCreateOrder(response.data);
      console.log("createOrder.createOrder", createOrder);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  if (!services) {
    return <div>Loading...</div>;
  }

  dayjs.extend(relativeTime); // Extend dayjs with the relativeTime plugin
  dayjs.locale("ar"); // Set the locale to Arabic

  const timeAgo = dayjs(services.created_at).fromNow();
  // const futureDate = dayjs(services.delivery_time).add( 'day').fromNow();
  const today = dayjs();
  const deliveryDate = dayjs(services.delivery_time);
  const numberOfDays = deliveryDate.diff(today, "day");
  //   const codeString = `
  //   const message = 'Hello, World!';
  //   console.log(message);
  // `;

  // const functionFromString = new Function(codeString);
  // functionFromString();
  // const displayCode = (codeText) => {
  //   document.getElementsByClassName('code-container').innerHTML = codeText; // Replace with your actual element ID
  // };
  return (
    <>
      <section className=" p-2 m-auto bg-gray-100">
        {/* ${approveOrRejectOrder.code } */}
        <div className="code-container">
          {showPopup && approveOrRejectOrder?.status && user.id === orders.seller_id && (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-md  mb-4">
                      تأكيد ارسال طلب لتنفيذ الخدمة
                    </h2>
                    {/* <p>A new order request has been made. Do you want to approve or reject it?</p> */}
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-12"
                        // onClick={handleApprove}
                        onClick={(e) => updateStateOrder(e, "in_progress")}
                      >
                        قبول
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        // onClick={handleReject}
                        onClick={(e) => updateStateOrder(e, "cancelled")}
                      >
                        رفض
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* مرحبا */}
            </>
          )}
        </div>

        <div className="code-container">
          {showPopup && approveOrRejectOrder?.status && user.id === orders.buyer_id && (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-md  mb-4">
                     تأكيد استلام الخدمة
                    </h2>
                    {/* <p>A new order request has been made. Do you want to approve or reject it?</p> */}
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-12"
                        // onClick={handleApprove}
                        onClick={(e) => updateStateOrder(e, "completed")}
                      >
                        قبول
                      </button>
                      {/* <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        // onClick={handleReject}
                        onClick={(e) => updateStateOrder(e, "cancelled")}
                      >
                        رفض
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* مرحبا */}
            </>
          )}
        </div>
        <div className="code-container">

          {/* {console.log(approveOrRejectOrder.status)} */}
          {showPopup && approveOrRejectOrder?.status && user.id === orders.seller_id && (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-md  mb-4">
                      موافقة على طلب الغاء الخدمة
                    </h2>
                    {/* <p>A new order request has been made. Do you want to approve or reject it?</p> */}
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-12"
                        // onClick={handleApprove}
                        onClick={(e) => updateStateOrder(e, "cancelled")}
                      >
                        قبول
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        // onClick={handleReject}
                        onClick={(e) => updateStateOrder(e, "in_progress")}
                      >
                        استمرار
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* مرحبا */}
            </>
          )}
        </div>

        <>
          <div
            key={services.id}
            className="bg-white  items-center shadow-lg  border-2"
          >
            <div className="text-right  mb-6 border-b-8 p-4 w-full mx-auto  ">
              <p className="text-lg mb-2  m-2 ">{services.title}</p>
              <figcaption className="flex justify-between mr-4 ">
                <div className="flex justify-around  mt-2">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium flex gap-2 text-left rtl:text-right ms-3">
                    <div> Jese Leos</div>
                    <div className="text-sm text-gray-500 ">
                      <FaUserTimes className="inline-block mr-2" /> مدة التسليم{" "}
                      <span> {services.delivery_time } </span>{" "}
                    </div>
                  </div>
                </div>

                <div className=" px-4 py-2 ml-4 rounded-md text-sm text-white  ">
                  {services.category && <>{services.category.name}</>}
                </div>
              </figcaption>
            </div>
            <div className=" m-2 flex bg-gray-100  justify-around ">
              <div className="md:w-[65%] w-full bg-white m-2">
                <div className="w-[80%]border-2 h-fit block ">
                  <img
                    src={"http://localhost:8000/" + services.image}
                    alt=""
                    className="h-fit p-2"
                  />
                </div>
                <div className="bg-gray-100 ">
                  <div className=" bg-white ">
                    <p className="text-xl   m-2 mt-2 w-full   p-2">
                      وصف الخدمة
                    </p>
                    <p className="mr-3 p-2  w-full ">{services.description}</p>
                  </div>
                  {/* <div className="mt-4 p-2  bg-white">
                    <p className="text-md m-2  rounded-md w-full  p-2">
                      المهارات المستخدمة
                    </p>

                    <div className="   text-right flex justify-start gap-2 flex-wrap m-2 p-1  ">
                      <div className=" w-fit border-2 shadow-sm  p-2">
                        <p> JavaSript </p>
                      </div>
                      <div className=" w-fit border-2 shadow-sm  p-2">
                        <p> Laravel Php</p>
                      </div>
                      <div className=" w-fit border-2  shadow-sm p-2">
                        <p> HTML</p>
                      </div>
                      <div className=" w-fit border-2  shadow-sm  p-2">
                        <p> HTML</p>
                      </div>
                    </div>
                  </div> */}

                  {orders.amount >= services.price && (
                    <>
                      {/* {
                                        
                    ((createOrder.seller_id===user.id) && (createOrder.buyer_id===7)) && (

                                                  <> */}
                      <div className="">
                        <div className="mt-4 p-2 bg-white  ">
                          <div>
                            <p className="p-3 text-lg">الرسائل </p>
                          </div>

                          <div className="flex flex-col w-full mt-4   bg-white border border-gray-300 rounded-lg shadow-md">
                            <div
                              ref={chatAreaRef}
                              className="flex scrollbar flex-col h-[72vh]  overflow-y-auto px-4   "
                            >
                              <div className={`p-2 chat-message`}>
                                {chatAboutOrder && chatAboutOrder.length > 0 ? (
                                  chatAboutOrder.map((message, index) => (
                                    <div
                                      key={message.userID}
                                      className="flex items-start mb-2"
                                    >
                                      {/* <div>
            <p>{message.message}</p>
        </div> */}

                                      <div className="flex items-start gap-2.5">
                                        <img
                                          className="w-8 h-8 rounded-full"
                                          src="https://picsum.photos/200"
                                          alt="Jese image"
                                        />
                                        <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                            <span className="text-sm font-semibold text-gray-900 ">
                                              {user.firstName}
                                            </span>
                                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                              11:46
                                            </span>
                                          </div>
                                          <p className="text-sm font-normal py-2 text-gray-900">
                                            {" "}
                                            {message.message}
                                          </p>
                                          {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span> */}
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div>No messages to display</div>
                                )}
                              </div>
                            </div>
                            <div className="flex  items-center p-4">
                              <form
                                className="w-full"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  setNewMessage("");
                                }}
                              >
                                <input
                                  type="text"
                                  name="message"
                                  placeholder="اكتب رسالتك"
                                  value={newMessage}
                                  onChange={(e) =>
                                    setNewMessage(e.target.value)
                                  }
                                  className="flex-grow border border-gray-300 rounded-lg p-2 w-full whitespace-normal"
                                />
                                <div className="flex justify-end">
                                  <button
                                    type="submit"
                                    onClick={handleSendMessage}
                                    className="bg-[#8e2de2] w-full  mt-2  text-white px-4 py-3 rounded-lg"
                                  >
                                    إرسال
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 p-2 bg-white">
                          <div className="flex  justify-between  border-b-2 mb-6 mt-2">
                            <div className="flex justify-start  items-center">
                              <p className="px-2 text-lg border-gray-300">
                                أدارة الطلبات
                              </p>
                              <div className="flex justify-center">
                                {orders.status === "pending" && (
                                  <p className="h-fit  bg-green-500 text-white px-2 mr-2 text-sm">
                                    بإنتظار تعليمات المشتري
                                  </p>
                                )}

                                {orders.status === "in_progress" && (
                                  <p className="h-fit  bg-blue-500 text-white px-2 mr-2   text-sm">
                                    جاري التنفيذ
                                  </p>
                                )}
                                {waiting && (
                                  <p className="h-fit  bg-blue-500 text-white px-2 mr-2 text-sm">
                                    ... إنتظار الموافقة المشتري
                                  </p>
                                )}
                                {orders.status === "completed" && (
                                  <p className="h-fit  bg-green-500 text-white px-2 mr-2 text-sm">
                                    تم التسليم
                                  </p>
                                )}
                                {orders.status === "cancelled" && (
                                  <p className="h-fit  bg-red-500 text-white px-2 mr-2 text-sm">
                                    تم الغاء المهام
                                  </p>
                                )}
                              </div>
                            </div>

                            <p className=" text-[12px] ">
                              تاريخ التسليم ({deliveryDateService})
                            </p>
                          </div>

                          <div className="flex justify-center w-full gap-3">
                            {orders.status === "in_progress" &&
                              user.user_type === "freelancer" && (
                                <form action="">
                                  <button
                                    type="button"
                                    className="py-2 px-2 bg-green-500 text-white rounded-md m-2"
                                    // onClick={updateOrder('completed')}
                                    // onClick={(e) => updateStateOrder(e, 'completed')}
                                    // onClick={() => setWaiting(true)}
                                    onClick={(e) =>
                                      updateOrder(e, "completed")
                                    }
                                  >
                                    ارسال طلب استلام الخدمة
                                  </button>
                                </form>
                              )}
                            {/* {waiting && user.id ===orders.buyer_id  &&
                               (
                                <form action="">
                                  <button
                                    type="button"
                                    className="py-2 px-2 bg-green-500 text-white rounded-md m-2"
                                    // onClick={updateOrder('completed')}
                                    // onClick={(e) => updateOrder(e, 'completed')}
                                    onClick={(e) =>
                                      updateStateOrder(e, "completed")
                                    }
                                  >
                                    تأكيد استلام الخدمة
                                  </button>
                                </form>
                              )}
                               */}
                            {user.user_type !== "freelancer" &&
                              orders.status !== "in_progress" &&
                              orders.status !== "completed" && (
                                <form action="">
                                  <button
                                    type="button"
                                    className="py-2 px-4 bg-red-400 text-white rounded-sm m-2"
                                    // onClick={updateOrder(id,'cancelled')}
                                    onClick={(e) =>
                                      updateOrder(e, "in_progress")
                                    }
                                    // onClick={() => setShowModal(!showModal)}
                                  >
                                    إرسال طلب بدء التنفيذ
                                  </button>
                                </form>
                              )}
                               {/* {user.id === orders.buyer_id &&
                              orders.status !== "in_progress" &&
                              orders.status !== "completed" && waiting && (
                                <form action="">
                                  <button
                                    type="button"
                                    className="py-2 px-4 bg-red-400 text-white rounded-sm m-2"
                                    // onClick={updateOrder(id,'cancelled')}
                                    onClick={(e) =>
                                      updateOrder(e, "in_progress")
                                    }
                                    // onClick={() => setShowModal(!showModal)}
                                  >
                                    استلام الخدمة
                                  </button>
                                </form>
                              )} */}

                            {orders.status !== "completed" && orders.status !== "cancelled" &&  (
                              <form action="">
                                <button
                                  type="button"
                                  className="py-2 px-4 bg-red-600 text-white rounded-sm m-2"
                                  // onClick={updateOrder(id,'cancelled')}
                                  // onClick={(e) => updateOrder(e, "cancelled")}
                                 
                                  onClick={() => setDoRequest(true)}
                                >
                                  الغاء الطلب
                                </button>
                              </form>
                            )}
                            
                            


                            <form action="">
                              <button
                                type="submit"
                                className="py-2 px-4 border-red-400 border-2 text-black rounded-sm m-2"
                                // onClick={handleReportProblem}
                              >
                                إبلغ عن مشكلة
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white mt-2 ">
                         { DoRequest && (
                              <form action="">
                                <span>سبب إلغاء الطلب</span>
                                <textarea
                                 value={causeMessage}
                                 onChange={(e) =>
                                  setcauseMessage(e.target.value)
                                 }
                                  className="w-full border-1 mt-2  " name="" id=""></textarea>
                                <button
                                  type="button"
                                  className="py-2 px-4 bg-red-600 text-white rounded-sm m-2"
                                  // onClick={updateOrder(id,'cancelled')}
                                  // onClick={(e) => updateOrder(e, "cancelled")}
                                  onClick={(e) => updateOrder(e, "cancelled")}
                                >
                                  الغاء الطلب
                                </button>
                              </form>
                            )}
                      </div>
                     
                      {/* </>

                                                 )
                                              } */}
                    </>
                  )}
                </div>
              </div>

              <div className="  w-1/2 px-6  bg-white ">
                <div id="detailed-pricing" className=" shadow-lg h-fit">
                  <p className="text-lg border-4 border-gray-300 font-bold p-2">
                    بطاقة معلومات المشروع
                  </p>
                  <div className=" ">
                    <div className="flex px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                      <div className="text-black font-bold w-1/2 ">
                        سعر الخدمة
                      </div>
                      <div>{services.price}$</div>
                    </div>

                    {/* <div className="bg-red-400 p-1 px-2">
                        {" "}
                        إنتظار التعليقات
                      </div> */}
                    {orders.amount > services.price && orders.status ? (
                      <>
                        <div className="flex px-2 py-2 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                          <div className="text-black font-bold w-1/2 ">
                            الحالة
                          </div>
                          <div className="flex justify-between   w-full">
                            {orders.status === "pending"  && (
                              <p className="text-white bg-red-400 p-1 font-bold w-full text-center text-sm">
                                بإنتظار تعليمات المشتري
                              </p>
                            )}

                            {orders.status === "in_progress" && (
                              <p className="text-black font-bold w-1/2 bg-blue-400 p-1">
                                جاري التنفيذ
                              </p>
                            )}
                            {orders.status === "completed" && (
                              <p className="text-black font-bold w-1/2 bg-green-400 p-1">
                                تم التسليم
                              </p>
                            )}
                            {orders.status === "cancelled" && (
                              <p className="text-black font-bold  bg-red-400 p-1 w-full">
                                تم الغاء المهام
                              </p>
                            )}
                          </div>
                        </div>{" "}
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="flex px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                      <div className="text-black font-bold w-1/2 ">
                        تاريخ النشر{" "}
                      </div>
                      <div>{timeAgo}</div>
                    </div>
                    <div className="flex px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                      <div className="text-black font-bold w-1/2 ">
                        مدة التنفيذ
                      </div>
                      <div>
                        {/* Time Remaining: {Math.floor(services.dalivery_time / 60)}m{' '}
                      {Math.floor(timeRemaining % 60)} */}
                        {-numberOfDays}
                      </div>
                    </div>
                    <div className="flex px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                      <div className="text-black font-bold w-1/2 ">
                        عدد الخدمات المباعة منها
                      </div>
                      <div>({salesService})</div>
                    </div>
                    <div className=" flex px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                      <div className="text-black font-bold w-1/2 ">
                        تقييم الخدمة
                      </div>
                      <div>****</div>
                    </div>
                  </div>
                </div>
                {orders.status !== "in_progress" &&
                  orders.status !== "pending" && (
                    <form action="">
                      <button
                        type="button"
                        onClick={createOrderService}
                        className=" text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center mt-6 w-full me-2 mb-2"
                      >
                        شراء الخدمة
                      </button>
                    </form>
                  )}

                <div className="bg-white  w-full justify-between  flex   p-4 m-2  shadow-lg ">
                  <div className="flex ">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={ImageService}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        محمد بندر
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        مهندس تقني
                      </p>
                    </div>
                  </div>
                  <div className=" text-white bg-green-500 hover:bg-green-400 border-2 border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    {/* <NavLink to={`/chat/${id}`}> تواصل مع بائع الخدمة </NavLink> */}
                    <NavLink to={`/chat/${services.id}`}>
                      تواصل مع بائع الخدمة
                      {/* {conversation.user1.name} - {conversation.user2.name} */}
                    </NavLink>
                  </div>
                  {/* <img
                    src={ImageService}
                    alt=""
                    className="bg-green-300 block  rounded-full w-32 h-32"
                  /> */}
                  {/* <div className="">
                    <NavLink to="/user-profile">علي حسن</NavLink>
                    <span> | مهندس برمجيات</span>

                    <div className="flex flex-row justify-center gap-1 m-2">
                      <p className="text-md font-semibold"> مستقل | </p>
                      <FaStar color="gray" /> <FaStar color="gray" />{" "}
                      <FaStar color="gray" /> <FaStar />{" "}
                      <span className="text-[12px]">(0.0)</span>
                    </div>
                    <div>
                      <p className="text-[15px]">
                        اخر ظهور : <span>منذ يوم</span>{" "}
                        <FaEye className="inline" />
                      </p>
                      <button className="px-11 py-2 mt-2 shadow-md border-none outline-none text-white  rounded-md bg-red-600 hover:bg-red-500">
                        <NavLink to="/message">
                          {" "}
                          <FaPhone className="inline ml-2" />
                          اتواصل معي
                        </NavLink>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white shadow-lg rounded-lg p-4 md:w-1/2  m-6 h-fit">
            <p className="text-xl font-bold mb-4 border-b-2 md:w-1/2">
              تقييمات واراء العملاء
            </p>
            <div className="flex items-center mb-2">
              <img
                src={ImageService}
                alt=""
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mr-2">محمد بندر </h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">تقيم</span>
                  <svg
                    className="w-4 h-4 text-yellow-500 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 0 1 .95.684l1.9 5.917a1 1 0 0 0 .949.684l6.737.003a1 1 0 0 1 .554 1.698L15.08 15.28a1 1 0 0 0-.296 1.09l1.667 5.55A1 1 0 0 1 16.05 24h-8.1a1 1 0 0 1-.99-.858l-1.667-5.55a1 1 0 0 0-.296-1.09l-5.33-4.256a1 1 0 0 1 .553-1.698l6.737-.003a1 1 0 0 0 .95-.684l1.9-5.917A1 1 0 0 1 10 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[13px] mt-1 mr-1">2020-10-2</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-2 ">
              فقط تواصل معي واطلب خدمتك سوف تحصل علي صفحة واحده فقط متجاوبة مع
              كل الشاشات مع خمس تعديلات كاملة لبرمجة الموقع كاملا يمكن طلب
              تطويرات الخدمة. ملحوظة الصفحة لا تشمل الheader and footer ويمكن
              طلبها من الخدمات الاضافية
            </p>
          </div> */}
        </>
        {/* ))} */}
        {/* </div> */}
      </section>
    </>
  );
}
