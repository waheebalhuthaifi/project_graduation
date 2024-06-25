import React, { useEffect,useState } from "react";
import { createPopper } from "@popperjs/core";
import { AiOutlineAlert, AiOutlineMessage } from "react-icons/ai";
// import Pusher from 'pusher-js';

const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  // const [notifications, setNotifications] = useState([]);
  // useEffect(()=>{
  //   Pusher.logToConsole = true;

  //     var pusher = new Pusher('ad6755871b55733e71f4', {
  //       cluster: 'ap2',
  //       encrypted: true,
  //     });

  //     var channel = pusher.subscribe('mo-77');
  //     channel.bind('NewNotificationService', data => {
  //       setNotifications(prevNotifications => [...prevNotifications, data.message]);
  //       console.log('New notification:', data);
  //     });

  // })

  const openDropdownPopover = () => {
  
  
    console.log("hey");
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className=" py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
            <AiOutlineMessage className='inline  mt-1 rounded-full w-7 h-7 md:h-8 md:w-8'/>
        {/* <i className="fas fa-bell"></i> */}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block  " : "hidden ") +
          "bg-green-500  text-base z-50 float-left py-2 list-none text-left rounded shadow-lg  min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
