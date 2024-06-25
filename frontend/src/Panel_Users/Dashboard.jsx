import React, { useEffect, useState } from "react";
import Nav from "../Pages/Nav";
import ImageUSer from "../assets/person.webp";
import ChangePassword  from "../components/auth/Change_password";

import {
  FaBriefcase,
  FaCartPlus,
  FaFileAlt,
 
  FaHome,
  FaMoneyBill,
  FaShoppingCart,
  FaStar,
  FaTags,
  FaTasks,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Set_username from "./set_username";
import { Withdraw } from "./withdraw";
// import axios from "../axios/axios";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditService from "./EditeService";
import axios from "../axios/axios";
// import axios from './../axios/axios';
export default function Dashboard_user() {
  const { user, setUser } = useAuth();
  const [u, setU] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // console.log(user.id);
        const response = await fetch(
          `http://127.0.0.1:8000/api/users/${user.id}`
        );
        const data = await response.json();
        setU(data);
        

        // console.log(u);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUser();

    // editInformationHandel();
  }, [1]);

  const [balance, setBalance] = useState(false);
  

  const [works, setWork] = useState(false);
  const [service, setService] = useState(false);
  const [project, setProjecte] = useState(false);
  const [account, setAccount] = useState(false);
  const [buy, setBuy] = useState(false);

  const [home, setHome] = useState(false);
  const [verification, setverification] = useState(false);

  const [fileNameFront, setFileNameFront] = useState("");
  const [fileNameBack, setFileNameBack] = useState("");

  const handleFileFront = (event) => {
    const file = event.target.files[0];
    setFileNameFront(URL.createObjectURL(file));
  };

  const handleFileBack = (event) => {
    const file = event.target.files[0];
    setFileNameBack(URL.createObjectURL(file));
  };

  function accountHandle() {
    setService(false);
    setverification(false);
    setBuy(false);
    setProjecte(false);
    setWork(false);
    setHome(false);
    setBalance(false);
    setAccount(!account);
  }

  function homeHandle() {
    setService(true);
    setBuy(true);
    setProjecte(true);
    setWork(true);
    setverification(true);
    setBalance(true);
    setAccount(true);
    setHome(true);
  }

  function BalanceHandle() {
    setService(false);
    setverification(false);
    setAccount(false);
    setBuy(false);
    setProjecte(false);
    setWork(false);
    setHome(false);
    setBalance(!balance);
  }

  function buyHandle() {
    setService(false);
    setProjecte(false);
    setAccount(false);

    setHome(false);
    setBalance(false);
    setverification(false);

    setWork(false);
    setBuy(!buy);
  }
  function projectHandle() {
    setAccount(false);

    setService(false);
    setBalance(false);
    setverification(false);

    setHome(false);
    setBuy(false);
    setWork(false);
    setProjecte(!project);
  }
  function ServiceHandle() {
    setAccount(false);

    setProjecte(false);
    setBalance(false);
    setverification(false);

    setHome(false);
    setBuy(false);
    setWork(false);
    setService(!service);
  }
  function WorksHandle() {
    setAccount(false);

    setService(false);
    setProjecte(false);
    setBalance(false);
    setverification(false);

    setHome(false);
    setBuy(false);
    setWork(!works);
  }
  function verificationHandle() {
    setAccount(false);

    setService(false);
    setProjecte(false);
    setBalance(false);

    setHome(false);
    setBuy(false);
    setverification(!verification);
  }
  function Account() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");

    const [birthdate, setBirthdate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ChangePasword, sethandleChangePassword] = useState(false);
    const [Information, sethandleInformation] = useState(true);
    const [InformationWork, setInformationWork] = useState(false);
    // const [u, setU] = useState([]);
    // const [selectedUser, setSelectedUser] = useState(null);
    // const [editMode, setEditMode] = useState(false);
    const [editUser, setEditUser] = useState(false);

    const [ChangePasswordColorButton, setChangePasswordColorButton] =
      useState(false);
    useEffect(
      (e) => {
        editInformationHandel(e);
      },
      [1]
    );

    const handleEditUser = async (e) => {
      const { firstName, lastName, email, city, gender, phone, date } =
        e.target.elements;
      const body = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone_number: phone.value,
        city: city.value,
        gender: gender.value,
        date_of_birth: date.value,
      };
      try {
        await axios.post(`/users/${user.id}`, body);
        toast.success("تم تحديث بياناتك بنجاح");
        // const updatedUser = response.data;
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };

    const handleChangePassword = () => {
      sethandleChangePassword(true);
      setChangePasswordColorButton(!ChangePasswordColorButton);
      setInformationWork(false);
      sethandleInformation(false);
    };

    const handleInformation = () => {
      sethandleChangePassword(false);
      setInformationWork(false);
      setFirstName(u.firstName);
      setLastName(u.lastName);
      setEmail(u.email);
      setPhoneNumber(u.phone_number);
      setBirthdate(u.date_of_birth);
      setGender(u.gander);
      setCity(u.city);

      sethandleInformation(true);
    };
    const handleInformationWork = () => {
      sethandleChangePassword(false);
      sethandleInformation(false);

      setInformationWork(true);
    };

    const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      Email: "",
      gender: "",
      password: "",
      ConfirmPassword: "",
    });
    const editInformationHandel = () => {
      // console.log('ss')

      setFirstName(u.firstName);
      setLastName(u.lastName);
      setEmail(u.email);
      setPhoneNumber(u.phone_number);
      setBirthdate(u.date_of_birth);
      setGender(u.gander);
      setCity(u.city);
      setEditUser(!editUser);

      // console.log("dd",u.firstName)
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      // التحقق من الحقول الفارغة
      let formIsValid = true;
      const newErrors = {
        firstName: "",
        lastName: "",
        Email: "",
        gender: "",
        password: "",
        ConfirmPassword: "",
      };

      if (firstName.trim() === "") {
        formIsValid = false;
        newErrors.firstName = "الرجاء إدخال الاسم الأول.";
      }

      if (lastName.trim() === "") {
        formIsValid = false;
        newErrors.lastName = "الرجاء إدخال الاسم الأب.";
      }

      if (Email.trim() === "") {
        formIsValid = false;
        newErrors.Email = "الرجاء إدخال البريد الالكتروني.";
      }

      if (password.trim() === "") {
        formIsValid = false;
        newErrors.password = "الرجاء اختيار كلمة السر.";
      }

      if (ConfirmPassword.trim() === "") {
        formIsValid = false;
        newErrors.ConfirmPassword = " الرجاء اخال كلمة السر لتاكيد";
      }

      setErrors(newErrors);

      // إذا كانت جميع الحقول صالحة، قم بالإجراء اللازم (مثل إرسال البيانات)
      if (formIsValid) {
        console.log("تم تقديم النموذج!");
      }
      handleEditUser(event);
    };

    return (
      <>
        <section className="mb-4   shadow-md ">
          {/* <h1 className="border-2 w-full p-2"></h1> */}
          <button
            type="button"
            className="text-gray-900 md:w-1/4 w-full border-emerald-300 border-b-2 hover:bg-green-200  font-medium text-lg px-10 py-2.5 sm:mb-2 mb-6 text-center inline-flex items-center  me-2 "
          >
            <svg
              className="w-4 h-4 me-2 -ms-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            حسابي
          </button>
          <button
                onClick={editInformationHandel}
                type="button"
                className=" focus:bg-red-200  bg-green-500 float-end text-white   focus:ring-gray-100 rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                تعديل
                {/* <svg
                  className="w-4 h-4 ms-2   text-[#626890]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="ethereum"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                  ></path>
                </svg> */}
              </button>

          <div className="mb-4 border-b-2 border-gray-200 ">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
            >
              <li className="me-2" role="presentation">
                <button
                  onClick={handleInformation}
                  className="focus:ring-blue-500 focus:border-blue-500 inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  {" "}
                  بيانات المستخدم
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  onClick={handleChangePassword}
                  className="focus:ring-blue-500 focus:border-blue-500 first-line:inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  تغير كلمة المرور
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  onClick={handleInformationWork}
                  className=" focus:ring-blue-500 focus:border-blue-500 inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  {" "}
                  معلومات العمل
                </button>
              </li>
              <li role="presentation">
                <button
                  className="focus:ring-blue-500 focus:border-blue-500  inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Contacts
                </button>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-row border-b-2 bg-slate-50 justify-start ">
            <button
              className="bg-amber-400 text-black px-4 py-2 rounded "
              onClick={handleInformation}
            >
              بيانات المستخدم
            </button>

            <button
              className={`bg-slate-50 text-black px-4 py-2 rounded ${
                ChangePasword ? " bg-amber-400 text-white" : ""
              }`}
              onClick={handleChangePassword}
            >
              تغير كلمة المرور
            </button>
            <button
              className="bg-slate-50 text-black px-4 py-2 rounded"
              onClick={handleInformationWork}
            >
              معلومات العمل
            </button>
          </div> */}
          {Information ? (
            <>
              {/* <button
                onClick={editInformationHandel}
                type="button"
                className=" focus:bg-red-200  bg-red-500 float-end text-gray-900   focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                تعديل
                <svg
                  className="w-4 h-4 ms-2   text-[#626890]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="ethereum"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                  ></path>
                </svg>
              </button> */}
              {/* <button
                className=" focus:ring-blue-500 focus:bg-blue-500 border-2 py-2 px-6 bg-red-700 text-white float-end m-2 shadow-md rounded-md "
               
              >
              
              </button> */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col container mx-auto  items-center w-[95%] border-r-2 border-blue-500   "
              >
                <div className=" mb-4 ">
                  <img
                    src={"http://localhost:8000/" + u.image}
                    alt="صورة شخصية"
                    className="rounded-full w-24 h-24"
                  />
                </div>
                <div className="mb-4   md:flex md:flex-row  w-full gap-1  md:justify-start">
                  {/* <div className="mb-4   md:w-1/3">
                    <label htmlFor="firstName" className="block mb-2">
                      الاسم الأول
                    </label>
                    <input
                      type="text"
                      readOnly={editUser}
                      name="firstName"
                      id="firstName"
                      className={`w-full border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 rounded-md`}
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 mt-1">{errors.firstName}</p>
                    )}
                  </div> */}

                  {/* <div className="mb-4 w-full  md:w-full">
                    <label htmlFor="lastName" className="block  mb-2">
                      اسم العائلة
                    </label>
                    <input
                      type="text"
                      readOnly={editUser}
                      name="lastName"
                      id="lastName"
                      className={` w-full border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 rounded-md`}
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 mt-1">{errors.lastName}</p>
                    )}
                  </div> */}

                  {/* //////////////////////////////////// */}

                  <div className=" w-full md:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      الاسم الأول
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-500 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        readOnly={editUser}
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className={` ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-none rounded-e-lg  border text-gray-900 focus:ring-blue-500 focus:border-blue-700 block flex-1 min-w-0 w-full text-sm border-gray-500 p-2.5 `}
                        placeholder="محمد"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 mt-2 md:mt-0 text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      اسم العائلة
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-500 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
                        <svg
                          className="w-4 h-4 text-white "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        readOnly={editUser}
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className={` ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        } rounded-none rounded-e-lg  border text-gray-900 focus:ring-blue-500 focus:border-blue-700 block flex-1 min-w-0 w-full text-sm border-gray-500 p-2.5 `}
                        placeholder="محمد"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="  w-full md:flex gap-2 justify-between">
                  <div className="w-full">
                    {/* <div className="mb-4  w-full">
                    <label htmlFor="email" className="block  mb-2">
                      البريد الالكتروني
                    </label>
                    <input
                      type="text"
                      readOnly={editUser}
                      name="email"
                      id="email"
                      className={` w-full border ${
                        errors.Email ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 rounded-md`}
                      value={Email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.Email && (
                      <p className="text-red-500 mt-1">{errors.Email}</p>
                    )}
                  </div> */}

                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      البريد الالكتروني{" "}
                    </label>
                    <div className="relative mb-6">
                      <div className="absolute px-2 rounded-sm bg-gray-500  inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4  text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        readOnly={editUser}
                        value={Email}
                        name="email"
                        id="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className={` border ${
                          errors.Email ? "border-red-500" : "border-gray-300"
                        } px-4 py-2 rounded-md border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full `}
                        placeholder="name@flowbite.com"
                      />
                    </div>
                    {errors.Email && (
                      <p className="text-red-500 text-sm ">{errors.Email}</p>
                    )}
                  </div>
                  <div className="mb-4 w-full ">
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      رقم الهاتف
                    </label>
                    {/* <input
                      type="text"
                      readOnly={editUser}
                      name="phone"
                      id="phoneNumber"
                      className={`w-full border ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      } px-4 py-2 rounded-md`}
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
                    )} */}
                    {/* //////////////////////////////////////////////// */}
                    <div className="flex " dir="ltr">
                      <button
                        id="dropdown-phone-button"
                        data-dropdown-toggle="dropdown-phone"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-1 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                      >
                        <svg
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4 me-2"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fillRule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clipRule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fillRule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clipRule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset="1" stopColor="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        +967{" "}
                        <svg
                          className="w-1 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown-phone"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 "
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-phone-button"
                        >
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              <span className="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  className="h-4 w-4 me-2"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#D02F44"
                                      fillRule="evenodd"
                                      d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                      clipRule="evenodd"
                                    />
                                    <path
                                      fill="#46467F"
                                      d="M0 .5h8.4v6.533H0z"
                                    />
                                    <g filter="url(#filter0_d_343_121520)">
                                      <path
                                        fill="url(#paint0_linear_343_121520)"
                                        fillRule="evenodd"
                                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                        clipRule="evenodd"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_343_121520"
                                      x1=".933"
                                      x2=".933"
                                      y1="1.433"
                                      y2="6.1"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#fff" />
                                      <stop offset="1" stopColor="#F0F0F0" />
                                    </linearGradient>
                                    <filter
                                      id="filter0_d_343_121520"
                                      width="6.533"
                                      height="5.667"
                                      x=".933"
                                      y="1.433"
                                      colorInterpolationFilters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset dy="1" />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_343_121520"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_343_121520"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                                Yemen (+967)
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <label
                        htmlFor="phoneNumber"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Phone number:
                      </label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          readOnly={editUser}
                          name="phone"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          className={`${
                            errors.phoneNumber
                              ? "border-red-500"
                              : "border-gray-300"
                          } block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg border-s-0 border border-gray-300
              focus:ring-blue-500 focus:border-blue-500   dark:focus:border-blue-500`}
                          // pattern=""
                          placeholder="123-456-7890"
                        />

                        {errors.phoneNumber && (
                          <p className="text-red-500 mt-1">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 md:w-full w-full md:flex md:flex-row  gap-1  md:justify-between">
                  <div className="mb-4 w-full md:w-1/3">
                    {/* <label htmlFor="city" className="block  mb-2">
                      اختار المحافظة
                    </label> */}
                    {/* <select
                    
                      className={`w-full  border ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      } px-4 py-2 rounded-md`}
                      id="city"
                      readOnly={editUser}
                      name="city"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                    >
                      {!editUser ? (
                        <>
                          <option value="">اختر...</option>
                          <option value="taiz">تعز</option>
                          <option value="Aden">عدن</option>
                          <option value="Sanaa">صنعاء</option>
                        </>
                      ) : (
                        <option value={u.city}>{u.city}</option>
                      )}
                    </select>
                    {errors.city && (
                      <p className="text-red-500 mt-1">{errors.city}</p>
                    )} */}

                    {/* //////////////////////////////// */}

                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      أختار المحافظة{" "}
                    </label>
                    <select
                      id="city"
                      readOnly={editUser}
                      name="city"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      className={` border ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      } block w-full p-2 mb-6 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    >
                      {!editUser ? (
                        <>
                          <option value="">اختر...</option>
                          <option value="taiz">تعز</option>
                          <option value="Aden">عدن</option>
                          <option value="Sanaa">صنعاء</option>
                        </>
                      ) : (
                        <option value={u.city}>{u.city}</option>
                      )}

                      {/* <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option> */}
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div className="mb-4 w-full md:w-1/3">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      الجنس
                    </label>
                    <select
                      id="gender"
                      readOnly={editUser}
                      name="gender"
                      className={`  ${
                        errors.gender ? "border-red-500" : "border-gray-300"
                      } block w-full p-2 mb-6 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                    >
                      {!editUser ? (
                        <>
                          <option disabled value="">
                            اختر...
                          </option>
                          <option value="male">ذكر</option>
                          <option value="female">أنثى</option>
                        </>
                      ) : (
                        <option value={u.gender}>{u.gender}</option>
                      )}
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="mb-4 w-full ">
                      <label
                        htmlFor="birthdate"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        تاريخ الميلاد
                      </label>
                      <input
                        type="date"
                        readOnly={editUser}
                        name="date"
                        id="birthdate"
                        value={birthdate}
                        className={` ${
                          errors.birthdate
                            ? "border-red-500"
                            : "border-gray-300"
                        } block w-full p-2 mb-6 text-sm border-2 border-gray-500 rounded-lg  focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        onChange={(event) => setBirthdate(event.target.value)}
                      />
                      {errors.birthdate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.birthdate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {!editUser ? (
                  <div className="w-full bg-emerald-500 mb-4 rounded-md p-2">
                    <input
                      type="submit"
                      value="تحديث بيانات"
                      className="w-full  "
                    />
                  </div>
                ) : (
                  ""
                )}
              </form>
            </>
          ) : ChangePasword ? (
            <ChangePassword />
          ) : InformationWork ? (
            <>
              <Set_username p={u} />
            </>
          ) : (
            <></>
          )}
        </section>
      </>
    );
  }

  function Buyme() {
    return (
      <>
        <p className="mt-2 text-xl   border-white shadow-sm m-2 p-2">
          <FaShoppingCart className="inline" /> مشترياتي (0){" "}
        </p>
        <div className="p-2  bg-amber-500  shadow-md rounded-md text-center block border-2">
          <NavLink>
            <button className="text-md ">تسوق الان</button>
          </NavLink>
        </div>

        <div className="flex flex-row flex-wrap gap-1 m-2 p-2">
          <div className="py-4 px-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>بإنتظار موافقة البائع (0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>قيد التنفيذ(0.0)</p>
          </div>

          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center  border-r-amber-500 border-r-4 border-2">
            <p>تم الالغاء(0.0)</p>
          </div>

          <div className="p-2 flex-auto border-r-amber-500 bg-white shadow-sm rounded-md text-center border-r-4 border-2">
            <p>مكتمل(0.0)</p>
          </div>
        </div>
      </>
    );
  }

  function Project() {
    return (
      <>
        <p className="mt-2 text-xl  border-white shadow-sm m-2 p-2">
          <FaBriefcase className="inline" /> المشاريع (0){" "}
        </p>
        <div className="p-2  bg-amber-500  shadow-md rounded-md text-center block border-2">
          <NavLink to="/add_project">
            <button className="text-md ">إضافة مشروع</button>
          </NavLink>
        </div>
        <div className="flex flex-row flex-wrap gap-1 m-2 p-2">
          <div className="py-4 px-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>المكتمل(0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>المرفوض(0.0)</p>
          </div>

          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center  border-r-amber-500 border-r-4 border-2">
            <p>قيد التنفيذ(0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>مرحلة تلقى العروض(0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>تم الالغاء(0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500  border-r-4 border-2">
            <p>بإنتظار موافقه الادارة(0.0)</p>
          </div>
          <div className="p-2 flex-auto border-r-amber-500 bg-white shadow-sm rounded-md text-center border-r-4 border-2">
            <p>المنشور(0.0)</p>
          </div>
        </div>

        {/* ................................. */}

        <p className="mt-2 text-xl  border-white shadow-sm m-2 p-2">
          <FaTags className="inline" /> عروضي على المشاريع (0){" "}
        </p>

        <div className="flex flex-row flex-wrap gap-1 m-2 p-2">
          <div className="py-4 px-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>المكتمل(0.0)</p>
          </div>

          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center  border-r-amber-500 border-r-4 border-2">
            <p>قيد التنفيذ(0.0)</p>
          </div>

          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500 border-r-4 border-2">
            <p>تم الرفض(0.0)</p>
          </div>
          <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-amber-500  border-r-4 border-2">
            <p>بإنتظار الموافقه (0.0)</p>
          </div>
        </div>
      </>
    );
  }

  function Services() {
    const [service, setService] = useState([]);
    const [hoverService, setHoverService] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [DeleteService, setDeleteService] = useState();

    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get(`/getUserServices/${user.id}`);
          const data = response.data;
          setService(data);
          console.log(data);
        } catch (error) {
          console.error("Failed to fetch service:", error);
        }
      };

      fetchServices();
    }, []);

    const togglePopup = (id) => {
      setShowPopup(!showPopup);
      setSelectedService(id);
    };

    const handleEdit = () => {
      setShowPopup(false);
    };

    const handleDelete = async (id) => {
      console.log("Delete option clicked:", id);

      try {
        const response = await axios.post(`/delete/${id}/service`);

        if (response.status === 200) {
          console.log("Service deleted successfully:", response.data);
        } else {
          console.error(
            "Error deleting service:",
            response.status,
            response.data
          );
        }
      } catch (error) {
        console.error("Error deleting service:", error);
      } finally {
        setShowPopup(false);
      }
    };

    const handleShow = () => {
      setShowPopup(false);
    };

    console.log(service);

    return (
      <>
        <div className="flex flex-row mb-4 justify-between">
          <button
            type="button"
            className="text-gray-900 md:w-1/3 w-full border-emerald-300 border-b-2 hover:bg-green-200  font-medium text-lg px-10 py-2.5 sm:mb-2 mb-6 text-center inline-flex items-center  me-2 "
          >
            {/* <svg
              className="w-4 h-4 me-2 -ms-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg> */}
            {/* <p className="text-xl   border-white shadow-sm m-2 p-2"> */}
            {/* <FaTags className="inline ml-1" /> */}
            {/* أعمالي ({portfolio.length}) */}
            {/* </p> */}
            <p className="   border-white shadow-sm">
              <FaTasks className="inline-block" /> الخدمات ({service.length})
            </p>
          </button>
          <div className="mt-4 ">
            {/* <div className="relative flex flex-col items-center justify-center py-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"> */}
            {/* <FaFileUpload size={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" /> */}
            <div className="">
              <NavLink to="/add_service">
                <button className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                  <span>أضف الخدمة </span>
                </button>
              </NavLink>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div>
          <div className="flex flex-row flex-wrap gap-2 m-2 p-2">
            <div className="flex-1  py-4 bg-white shadow-sm rounded-md text-center border-r-blue-500 border-r-4 border-2">
              <p>تم تسليم(0.0)</p>
            </div>
            <div className="flex-1 py-4  bg-white shadow-sm rounded-md text-center border-r-blue-500 border-r-4 border-2">
              <p>المرفوض(0.0)</p>
            </div>

            <div className=" flex-1 py-4 bg-white shadow-sm rounded-md text-center  border-r-blue-500 border-r-4 border-2">
              <p>قيد التنفيذ(0.0)</p>
            </div>
            <div className=" flex-1 py-4  bg-white shadow-sm rounded-md text-center border-r-blue-500  border-r-4 border-2">
              <p>بإنتظار موافقه الادارة(0.0)</p>
            </div>
            <div className=" flex-1 py-4 border-r-blue-500 bg-white shadow-sm rounded-md text-center border-r-4 border-2">
              <p>المنشور(0.0)</p>
            </div>
          </div>
          {/* <p className="text-2xl p-2  "> خدماتي</p> */}
          <div className="mt-5 borde-2 flex flex-row justify-center flex-wrap gap-2   bg-white  border-2 text-black rounded-xl  ">
            {service.length > 0 ? (
              <>
                {service.map((userService) => (
                  <div key={userService.id} className="m-2 ">
                    <div className="flex justify-center  w-full">
                      <div className="w-72 relative m-auto bg-white   border border-gray-200 rounded-lg shadow ">
                        <div className=" absolute  left-0 inline-block ">
                          <button
                            className="focus:outline-none inline-flex items-center p-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-2   "
                            onClick={() => togglePopup(userService.id)}
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 4 15"
                            >
                              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                          </button>

                          {showPopup && userService.id === selectedService && (
                            <div className="relative w-full ">
                              <div className=" absolute bg-white left-1  shadow-lg rounded-md">
                                {/* <div className="py-2"> */}
                                {/* <div className=" absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                              <div className="py-2"> */}
                                <button
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                  onClick={() => handleEdit(userService.id)}
                                >
                                  <NavLink
                                    to={`/edite/${userService.id}/service`}
                                  >
                                    Edite
                                  </NavLink>
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                  // onClick={handleDelete(userService.id )}
                                  onClick={() => handleDelete(userService.id)}
                                >
                                  Delete
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                  onClick={handleShow}
                                >
                                  Show
                                </button>
                              </div>
                            </div>
                          )}
                        </div>

                        <img
                          src={"http://localhost:8000/" + userService.image}
                          alt="Service"
                          className=" w-full h-36  "
                        />
                        <div className="p-2 overflow-hidden text-right">
                          <p>
                            {userService.title.split(" ").slice(0, 5).join(" ")}
                          </p>
                        </div>

                        <div className="border-t-2 flex  flex-row  justify-between  border-amber-500">
                          {/* <div className="flex flex-row  ">
                              <div>
                                <img
                                  src={
                                    "http://localhost:8000/" + userService.image
                                  }
                                  alt="Provider Icon"
                                  className="w-10 h-10 mr-2 rounded-full  block mt-3"
                                />
                              </div>
                              <div className="mt-2 mr-3 text-right ">
                                <h4 className="text-md font-bold ">
                                  {" "}
                                  {user.firstName}{" "}
                                </h4>
                                <div className="flex flex-row mb-2  justify-between ">
                                  <span className="text-gray-600 ">
                                    {user.field}
                                  </span>
                                </div>
                              </div>
                            </div> */}
                          <div className="group flex items-center">
                            <img
                              className="shrink-0 h-12 w-12 rounded-full"
                              src={"http://localhost:8000/" + userService.image}
                              alt=""
                            />
                            <div className="ltr:ml-3 rtl:mr-3">
                              <p className="text-sm font-medium text-slate-500 group-hover:text-black">
                                {" "}
                                {user.firstName}{" "}
                              </p>
                              <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                                {" "}
                                {user.field}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end mt-2 mb-2">
                            <div className="flex flex-row ml-1">
                              <p className="text-green-500  font-semibold ">
                                {userService.price}$
                              </p>

                              <p>
                                {" "}
                                <span>(0)</span>{" "}
                                <FaCartPlus className=" inline-block " />
                              </p>
                            </div>

                            <div className="flex m-2 ml-0 text-gray-300  justify-end w-fit ">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                          </div>
                        </div>

                        <NavLink to={`/details-service/${userService.id}`}>
                          <button className="p-2 text-center bg-emerald-500 rounded-md shadow-sm w-full hover:bg-emerald-600">
                            تصفح
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className=" h-32 w-full text-center pt-14 ">
                لم يتم إضافة الخدمات .
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
  function Works() {
    const [portfolio, setPortfolio] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log(user.id);
      const fetchPortfolioUser = async () => {
        try {
          const response = await axios.get(`portfolio/${user.id}`);
          setPortfolio(response.data);
          console.log(response);
        } catch (error) {
          setError(error);
        }
      };

      fetchPortfolioUser();
    }, []);
    const togglePopup = (id) => {
      setShowPopup(!showPopup);
      setSelectedService(id);
    };

    const handleEdit = () => {
      setShowPopup(false);
    };

    const handleDelete = async (id) => {
      console.log("Delete option clicked:", id);

      try {
        const response = await axios.delete(`/portfolio/${id}`);

        if (response.status === 200) {
          console.log("portfolio deleted successfully:", response.data);
          window.location.reload();
          toast.success("تم حذف بنجاح");
        } else {
          console.error(
            "Error deleting portfolio:",
            response.status,
            response.data
          );
        }
      } catch (error) {
        console.error("Error deleting portfolio:", error);
      } finally {
        setShowPopup(false);
      }
    };
    return (
      <>
        <div className="">
          <div className="flex flex-row mb-4 justify-between">
            <button
              type="button"
              className="text-gray-900 md:w-1/4 w-full border-emerald-300 border-b-2 hover:bg-green-200  font-medium text-lg px-10 py-2.5 sm:mb-2 mb-6 text-center inline-flex items-center  me-2 "
            >
              <svg
                className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="ethereum"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                ></path>
              </svg>
              {/* <p className="text-xl   border-white shadow-sm m-2 p-2"> */}
              {/* <FaTags className="inline ml-1" /> */}
              أعمالي ({portfolio.length}){/* </p> */}
            </button>
            <div className="mt-4 ">
              {/* <div className="relative flex flex-col items-center justify-center py-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"> */}
              {/* <FaFileUpload size={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" /> */}
              <div className="">
                <NavLink to="/add-portfolio">
                  <button className="flex items-center justify-center py-2.5 px-4 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600">
                    <span>أضف نموذج عملك</span>
                  </button>
                </NavLink>
              </div>
              {/* </div> */}
            </div>
          </div>

          {/* <div className="flex flex-row flex-wrap gap-1 m-2 p-2">
            <div className="py-4 px-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-blue-500 border-r-4 border-2">
              <p>المعروضة(0.0)</p>
            </div>

            <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-blue-500 border-r-4 border-2">
              <p>تم الرفض(0.0)</p>
            </div>
            <div className="p-2 flex-auto bg-white shadow-sm rounded-md text-center border-r-blue-500  border-r-4 border-2">
              <p>بإنتظار الموافقه (0.0)</p>
            </div>
          </div> */}

          <div className="flex w-full flex-wrap flex-row m-2 gap-4 md:gap-0 justify-center md:justify-start">
            {portfolio && portfolio.length > 0 ? (
              portfolio.map((portfolio) => (
                <div key={portfolio.id} className=" flex-shrink ">
                  <div className=" w-64 relative m-auto  border border-gray-200 rounded-lg shadow ">
                    <div className=" absolute  left-0 inline-block ">
                      <button
                        className="focus:outline-none inline-flex items-center p-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-2   "
                        onClick={() => togglePopup(portfolio.id)}
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 4 15"
                        >
                          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                      </button>

                      {showPopup && portfolio.id === selectedService && (
                        <div className="relative w-full ">
                          <div className=" absolute bg-white left-1  shadow-lg rounded-md">
                            <div className="py-2">
                              <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleEdit(portfolio.id)}
                              >
                                <NavLink
                                  to={`/edite/${portfolio.id}/portfolio`}
                                >
                                  تعديل
                                </NavLink>
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                // onClick={handleDelete(userService.id )}
                                onClick={() => handleDelete(portfolio.id)}
                              >
                                حذف
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full mx-auto ">
                      <img
                        src={ImageUSer}
                        alt="product image"
                        className=" w-full block h-36"
                      />
                    </div>

                    {/* <img
                      className="p-2 rounded-t-lg"
                      src={ImageUSer}
                      alt=""
                    /> */}

                    <div className="px-5 pb-2">
                      <div className="p-2 overflow-hidden text-right">
                        <p>
                          {portfolio.title.split(" ").slice(0, 5).join(" ")}
                        </p>
                        {/* <p className="mt-2">{service.category}</p> */}
                      </div>
                      {/* <a href="#">
                        <h5 className="text-md   text-gray-900 ">
                          {portfolio.title}
                        </h5>
                      </a> */}
                      <div className="flex items-center mt-2.5 mb-3">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">
                          5.0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        {/* <span className="text-3xl font-bold text-gray-900">$599</span> */}
                        <NavLink
                          to={`/portfolio/${portfolio.id}`}
                          className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 w-full py-2.5 text-center  dark:focus:ring-blue-800"
                        >
                          {" "}
                          تفاصيل
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    );
  }
  function Verification() {
    const [image, setImage] = useState();
    const [image2, setImage2] = useState();

    const [selectedImage, setSelectedImage] = useState();
    const [selectedImage2, setSelectedImage2] = useState();
    const handleImageChange2 = (e) => {
      const selectedFile = e.target.files[0];
      // const updatedFormData = { ...formData, file: selectedFile };
      setImage2(selectedFile);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage2(e.target.result); // Set image data in state
      reader.readAsDataURL(file);
    };
    const handleImageChange = (e) => {
      const selectedFile = e.target.files[0];
      // const updatedFormData = { ...formData, file: selectedFile };
      setImage(selectedFile);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result); // Set image data in state
      reader.readAsDataURL(file);
    };
    return (
      <>
        <button
          type="button"
          className="text-gray-900 md:w-1/4 w-full border-emerald-300 border-b-2 hover:bg-green-200  font-medium text-lg px-10 py-2.5 sm:mb-2 mb-6 text-center inline-flex items-center  me-2 "
        >
          <svg
            className="w-4 h-4 me-2 -ms-1 text-[#626890]"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="ethereum"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
            ></path>
          </svg>
          {/* <p className="text-xl   border-white shadow-sm m-2 p-2"> */}
          {/* <FaTags className="inline ml-1" /> */}
          توثيق الهوية
          {/* </p> */}
        </button>
        <section className=" container mx-auto   ">
          <div className="mb-3 flex flex-col items-center justify-center ">
            <div className="m-2 border-r-2 border-emerald-500 p-2 shadow-md rounded-sm  ">
              <p className="text-md p-2 ">
                يجب ان تكون الصور المرفوعة واضحه تاكد ان اسمك في البطاقة مطابقة
                لاسم حسابك على منصة الوسيط الحر
              </p>
            </div>
            <form action="" method="post">
              <div>
                <div className=" md:flex gap-2 justify-between ">
                  <div className="mb-4 border-2 p-2 shadow-sm">
                    <label htmlFor="file" className="block  mb-1">
                      فضلاً قم بتحميل صورة الوجهة الأمامية لبطاقتك الشخصية
                    </label>

                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 object-cover rounded-full"
                        src={selectedImage}
                        alt="Current profile photo"
                      />
                    </div>
                    <label className="block">
                      <span className="sr-only">أختار الصورة  </span>
                      <input
                        id="file"
                        name="file"
                        onChange={handleImageChange}
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                      />
                    </label>
                    {/* {errors.file &&
            <p className="text-red-500 text-sm mt-1">
             {errors.file}
            </p>
          } */}
          
                  </div>
                  <div className="mb-4 border-2 p-2 shadow-sm">
                    <label htmlFor="file" className="block  mb-1">
                      فضلاً قم بتحميل صورة الوجهة الخلفية لبطاقتك الشخصية
                    </label>

                    <div className="shrink-0">
                      <img
                        className="h-16 w-16 object-cover rounded-full"
                        src={selectedImage2}
                        alt="Current profile photo"
                      />
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        id="file"
                        name="filebck"
                        onChange={handleImageChange2}
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                      />
                    </label>
                    {/* {errors.file &&
            <p className="text-red-500 text-sm mt-1">
             {errors.file}
            </p>
          } */}
                  </div>
                </div>

                {/* <input
                  type="file"
                  className="bg-amber-500 hidden  mr-4"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileFront}
                  name=""
                  id="uploadFile"
                  placeholder=""
                />

                {fileNameFront.length > 0 && (
                  <div className="mt-4  mr-4 grid grid-cols-3 gap-4">
                    <img
                      src={fileNameFront}
                      alt="Front ID"
                      className="max-w-xs"
                    />
                  </div>
                )} */}
              </div>

              {/* <div>
                <div className=" mt-4 ">
                  <span htmlFor="" className="text-md font-medium mt-12 ">
                    فضلاً قم بتحميل صورة الوجهة الخلفية لبطاقتك الشخصية
                  </span>
                  <label
                    htmlFor="uploadFile1"
                    className=" md:w-1/2 block  bg-amber-500 p-3 text-center boreder-2 shadow-sm mt-2"
                  >
                    <FaFileUpload size={25} className="inline" />
                    اختار الصورة
                  </label>
                </div>
                <input
                  type="file"
                  className="bg-amber-500 hidden"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileBack}
                  name=""
                  id="uploadFile1"
                  placeholder=""
                />

                {fileNameBack.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <img
                      src={fileNameBack}
                      alt="Back ID"
                      className="max-w-xs  mr-4"
                    />
                  </div>
                )}
              </div> */}

              <input
                type="button"
                value="ارسال"
                className=" w-1/2 text-white rounded-md bg-emerald-500 p-3 text-center boreder-2 shadow-sm mt-2"
              />
            </form>
          </div>
        </section>
      </>
    );
  }

  function RechargeBalance() {
    const [formData, setFormData] = useState({
      sender_name: '',
      sender_whatsapp: '',
      amount: '',
      transaction_number: '',
      transaction_document: null,
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleFileChange = (e) => {
      setFormData({
        ...formData,
        transaction_document: e.target.files[0],
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('sender_name', e.target.sender_name.value);
      formData.append('sender_whatsapp', e.target.sender_whatsapp.value);
      formData.append('amount', e.target.amount.value);
      formData.append('transaction_number', e.target.transaction_number.value);
      formData.append('transaction_document', e.target.transaction_document.files[0] || null);
  
      try {
        console.log(e.target.transaction_document.files[0]);
        const response = await axios.post('/transactions', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        e.target.reset();
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
   
    

    return (
      <>
        <section className="md:flex md:justify-center ">
          <div className="w-full mb-4 shadow-md border-2">
            <div className="border-b-2 shadow-sm  rounded-md p-2  ">
              
<p className="text-gray-800   bg-gray-50 p-2 mb-2"> يمكنك من تغذية حسابك من الرصيد من اجل شرء الخدمات او دفع مستحقات
                من يقوم بمهام معين من خلال فئة المشاريع عن طريق ادخال المبلغ
                المراد ايداعه عبر نقطة حاسب الكريمي 9999999 باسم محمد بندر{" "}</p>
{/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/> */}
<p className="text-gray-800  bg-gray-50 p-2 mb-2"> 
او ارسال المبلغ حواله باسم محمد بندر محمد احمد بعد ذلك قم بادخال
                رقم الحواله وصورة سند التحويل او يمكنك من ارسال الينا عبر
                الواتساب 737257230 مستندات التحويل من اجل ايداع في حسابك المبلغ
                المحدد</p>

                <p className="text-gray-800  bg-gray-50 p-2 mb-2"> 
المنصة سوف تستقبل الطلب وتحقق منها وتستكمل الاجراءات لتنفيذ الخدمة
</p>

             
            </div>
 


      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="sender_name">
         اسم المرسل الكامل
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="sender_name"
          name="sender_name"
          value={formData.sender_name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="sender_whatsapp">
         رقم الوتساب
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="sender_whatsapp"
          name="sender_whatsapp"
          value={formData.sender_whatsapp}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
       المبلغ بالريال السعودي
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="transaction_number">
        رقم العملية التحويل
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="transaction_number"
          name="transaction_number"
          value={formData.transaction_number}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="transaction_document">
         ارفق صورة لعملية التحويل
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          id="transaction_document"
          name="transaction_document"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ارسال
        </button>
      </div>
    </form>
          </div>
        </section>
      </>
    );
  }

  function PageAlcrimi(){
    return (
      <>
      <p>Hello PageAlcrimi</p>
      </>
    )
  }
  function Pagecach(){
    return (
      <>
      <div className="flex justify-center p-12 m-2 bg-gray-200">

         <p className="">قريبا سوف تتوفر الخدمة....</p>
      </div>
     
      </>
    )
  }
  function ToWithdraw() {
    const [selectedMethod, setSelectedMethod] = useState("");
    const [amountError, setAmountError] = useState(''); 
    const [methodError, setMethodError] = useState(''); 
    const [balanceError, setBalanceError] = useState('');
    const [amount, setAmount] = useState();
    // const [selectedMethod, setSelectedMethod] = useState('');
    const [reason, setReason] = useState('');
    const [userBalance, setUserBalance] = useState(null); // State to store user balance
useEffect(()=>{
  const fetchUserBalance = async () => {
      try {
        const response = await axios.get('/balance');
        if (response.status === 200) {
          setUserBalance(response.data.total_balance); 
          console.log(response.data.total_balance)
        } else {
          console.error('Error fetching user balance:', response.data);
         
        }
      } catch (error) {
        console.error('Error fetching user balance:', error);
       
      }
    };
    fetchUserBalance();
},[])
    
  
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
      console.log(event.target.value)
    };
  
    const handleMethodChange = (event) => {
      setSelectedMethod(event.target.value);
      console.log(event.target.value)
    };
  
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setAmountError('');
      setMethodError('');
      setBalanceError('');
  
      if (!amount || amount <= 0) {
        setAmountError('فضلا ادخل المبلغ المستحق');
        return;
      }
  
      else if (!selectedMethod) {
        setMethodError('فضلا اختار طريقه الدفع');
        return;
      }
  
      // Check if user balance is sufficient
      else if (userBalance.length<=0 || amount > userBalance) {
        setBalanceError('رصيدك غير كافي لسحب');
        return;
      }
  
      try {
        console.log("Hello")
        const response = await axios.post('/withdrawals', {
          amount,
          selectedMethod, 
          // reason,
        });
  
        if (response.status === 201) {
          console.log('Withdrawal request submitted successfully!');
          setAmount('');
          setSelectedMethod('');
          setBalanceError('')
          // setReason('');
        } else {
          console.error('Error submitting withdrawal request:', response.data);
        }
      } catch (error) {
        console.error('Error submitting withdrawal request:', error);
      }
    };
    return (
      <>
        <section className="flex justify-center m-4 ">
          <div className="md:w-1/2 mb-4  bg-gray-50 shadow-md border-2">
            <div className="border-b-2 shadow-sm bg-white rounded-md m-4 p-2 ">
              <p>
                يمكنك من تقديم طلب سحب المبلغ عن طريق ادخال المبلغ المراد سحبه
                من حسابك <br />
                يجب ان يكون مبلغ المراد سحبه لا يتجاوز مبلغ المتوفر في حسابك ثم
                بعد ذلك قم باختيار طريقة السحب المتوفرة في هذه المنصة <br />
                وانتظر حتى يصل اليك اشعار اليك والتي سوف تبلغك بامكانك استلام
                المال عبر نقطة حاسب او وان كاش او النجم
              </p>
            </div>

            <div className="">
              <form action="" onSubmit={handleSubmit}>
                <div className="bg-white border-b-2 rounded-md p-2 m-4 ">
                  <label htmlFor="">المبلغ</label>
                  <input
                    type="text"
                    placeholder="المبلغ"
                    name="amount"
                    className="mt-2 p-2 block rounded-md "
                    value={amount}
                    onChange={handleAmountChange}
                  />
               {(balanceError.length>0 && <p className="text-red-500">{balanceError}</p> )}
               {(amountError.length>0 && <p className="text-red-500">{amountError}</p> )}


                  <label
                    htmlFor="paymentMethod"
                    className="block font-medium text-gray-700"
                  >
                    اختار طريقة السحب
                  </label>
                  <select
                    id="paymentMethod"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={selectedMethod}
                    onChange={handleMethodChange}
                  >
                    <option value=""> اختيار طريقة السحب </option>
                    <option value="نقطة حاسب ">نقطة حاسب </option>
                    <option value="وان كاش">وان كاش</option>
                    <option value="النجم"> النجم</option>
                  </select>
                  {methodError.length>0 && <p className="text-red-500">{methodError}</p>}



                  <div className="bg-green-500 text-center text-white  rounded-md  md:w-1/3 w-full p-2 ">
                    <input type="submit" value="إرسال" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  function Balance() {
    const [Withdraw, setWithdraw] = useState(false);
    const [userBalance, setUserBalance] = useState([]);
   
    const [Alcrimi, setAlcrimi] = useState(false);
    const [cach, setcach] = useState(false);
  
    const [selectedRechargeBalance, setelectedRechargeBalance] =useState(false);
    function handelRechargeBalance() {
      
      setAlcrimi(false)
      setcach(false)
      setWithdraw(false);
      setelectedRechargeBalance(!selectedRechargeBalance);
    } 
    function AlcrimiHandle (){
      setcach(false)
      setelectedRechargeBalance(false);
      setWithdraw(false);
      setAlcrimi(!Alcrimi)
    }
    function cachHandle (){
      setelectedRechargeBalance(false);

      setAlcrimi(false)
      setWithdraw(false);

      setcach(!cach)
    }
    function handelWithdraw() {
      setelectedRechargeBalance(false);

      setcach(false)
      setAlcrimi(false)
      setWithdraw(!Withdraw);
      
    }
    useEffect(() => {
      const fetchBalance = async () => {
        const response = await axios.get(`/balance`);
        const data=response.data;
        setUserBalance(data);
        console.log("userBalance:",data);
      };
  
      fetchBalance();
    }, []);
    return (
      <>
        <div className="">
          {/* <p className="text-xl font-bold border-r-amber-500 border-r-4 border-2 border-white shadow-sm m-2 p-2">
            <FaMoneyBill size={25} className="inline ml-1" />
            الرصيد
          </p> */}
          <button
            type="button"
            className="text-gray-900 md:w-1/4 w-full border-emerald-300 border-b-2 hover:bg-green-200  font-medium text-lg px-10 py-2.5 sm:mb-2 mb-6 text-center inline-flex items-center  me-2 "
          >
            <svg
              className="w-4 h-4 me-2 -ms-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            الرصيد
          </button>
          <div className="flex justify-center md:justify-end text-center">
            {/* <button onClick={handelRechargeBalance}>
              <div className="px-6 py-3   bg-amber-500 rounded-md shadow-sm border-2 m-2 ">
              
              </div>
            </button> */}
            <button
              type="button"
              onClick={handelRechargeBalance}
              className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="ethereum"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                ></path>
              </svg>
              <NavLink >شحن رصيد</NavLink>
            </button>

        
            <button
              type="button"
              onClick={handelWithdraw}
            
             
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="ethereum"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                ></path>
              </svg>
              <NavLink>سحب رصيد</NavLink>
            </button>
          </div>
          <div className="flex justify-center items-center m-2">
            <button
            onClick={AlcrimiHandle}
            type="button" className="text-gray-900 bg-white hover:bg-gray-100 border bg-purple-600 border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
<svg aria-hidden="true" className="w-5 h-5 me-2 -ms-1" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#ff1b2d"/><stop offset=".3" stop-color="#ff1b2d"/><stop offset=".614" stop-color="#ff1b2d"/><stop offset="1" stop-color="#a70014"/></linearGradient><linearGradient id="b" gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)" gradientUnits="userSpaceOnUse" x2="1"><rect width="80" height="80" fill="white" transform="translate(0.519043 0.132812)"/> <stop offset="0" stop-color="#9c0000"/><stop offset=".7" stop-color="#ff4b4b"/><stop offset="1" stop-color="#ff4b4b"/></linearGradient><g transform="matrix(1.3333 0 0 -1.3333 0 107.2)"><path d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z" fill="url(#a)"/><path d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297" fill="url(#b)"/></g></svg>
عبر نقطة حاسب - الكريمي
</button>
<button type="button" 
 onClick={cachHandle}
className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
عبر محفظة كاش 
</button>
<button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
عبر موبايل موني
</button>

            </div>
          {Alcrimi ? (
            <>
              <RechargeBalance />
            </>
          ) : (
            <></>
          )}
             {cach ? (
            <>
              <Pagecach />
            </>
          ) : (
            <></>
          )}
          {Withdraw ? (
            <>
              <ToWithdraw />
            </>
          ) : (
            <></>
          )}
          {selectedRechargeBalance ? (
            <>
              <RechargeBalance />
            </>
          ) : (
            <></>
          )}

          <div className="flex flex-row flex-wrap gap-2  justify-around text-center  ">

            <div className="flex-1 p-4  border-r-[#2557D6] border-r-4 border-2 rounded-md">
              <p>مجموع الارباح</p>
              <p>{userBalance.total_balance}</p>
            </div>
            <div className="flex-1 p-4  bg-white  rounded-md border-r-[#2557D6] border-r-4 border-2">
              <p>إجمالي الرصيد </p>
              <p>{userBalance.withdrawable_balance}</p>
            </div>
            <div className="flex-1 p-4  bg-white border-r-[#2557D6] border-r-4 border-2 rounded-md">
              <p> الرصيد القابل للسحب</p>
              <p>{userBalance.total_earnings}</p>
            </div>
            <div className="flex-1 p-4  bg-white border-r-[#2557D6] border-r-4  border-2 rounded-md">
              <p> الرصيد المعلق </p>
              <p>{userBalance.pending_balance}</p>
            </div>
          </div>
          

<div className="relative overflow-x-auto mt-4">
    <table className="w-full text-sm text-left rtl:text-right text-gray-800 ">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                   القيمة
                </th>
                <th scope="col" className="px-6 py-3">
                    التفاصيل
                </th>
                <th scope="col" className="px-6 py-3">
                  محموع الرصيد 
                </th>
                <th scope="col" className="px-6 py-3">
                    التاريخ
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">أكمال بيع خدمة
                 <span className="text-green-400"> تطوير موقع </span>  
                   
                </td>
                <td className="px-6 py-4">
                  $20
                </td>
                <td className="px-6 py-4">
                   2024-10-11
                </td>
            </tr>

         
        </tbody>
    </table>
</div>

        </div>
      </>
    );
  }

  return (
    <>
      <section className="md:flex ">
        {/* <div className="  md:flex"> */}
        <div className=" bg-white shadow-xl  md:w-1/2  ">
          <div className=" flex flex-col items-center mt-4 p-1">
            <div className=" border-2 border-amber-500 rounded-full">
              <img src={ImageUSer} alt=" " className="rounded-full block " />
            </div>
            <div>
              <p className="text-md mt-2  ">محمد بندر </p>
            </div>
          </div>

          <div>
            <p className="text-xl mt-2 p-2 mb-4 border-b-2 border-slate-300 w-1/3">
              لوحه التحكم
            </p>
          </div>
          <div className="flex flex-row gap-2 m-2 flex-wrap ">
            <button onClick={homeHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaHome size={25} className=" text-center w-full" />
                <p>الرئيسية </p>
              </div>
            </button>

            <button onClick={accountHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaUser size={25} className="text-center w-full" />
                <p>حسابي </p>
              </div>
            </button>

            <button onClick={BalanceHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaMoneyBill size={25} className="text-center w-full" />
                <p>الرصيد </p>
              </div>
            </button>
            <button onClick={WorksHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaBriefcase size={25} className="text-center w-full" />
                <p>اعمالي </p>
              </div>
            </button>
            <button onClick={projectHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaBriefcase size={25} className="text-center w-full" />
                <p>مشاريعي </p>
              </div>
            </button>

            <button onClick={ServiceHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaTasks size={25} className="text-center w-full" />
                <p>خدماتي </p>
              </div>
            </button>
            <button onClick={buyHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaTasks size={25} className="text-center w-full" />
                <p>مشترياتي </p>
              </div>
            </button>
            <button onClick={verificationHandle} className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaFileAlt size={25} className="text-center w-full" />
                <p>التوثيق </p>
              </div>
            </button>
            <button className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaUsers size={25} className="text-center w-full" />
                <p>المجتمع </p>
              </div>
            </button>
            <button className=" flex-1">
              <div className="p-6 bg-white border-r-amber-500 border-r-4 border-2 rounded-md">
                <FaStar size={25} className="text-center w-full" />
                <p>التقييمات والاراء </p>
              </div>
            </button>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        <div className=" md:w-full m-3 ">
          {balance ? (
            <>
              <Balance />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}
          {works ? (
            <>
              <Works />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}
          {service ? (
            <>
              <Services />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}

          {project ? (
            <>
              <Project />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}
          {buy ? (
            <>
              <Buyme />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}
          {verification ? (
            <>
              <Verification />
            </>
          ) : (
            <></>
          )}

          {/* ///////////////////////////////////////////////////// */}
          {account ? (
            <>
              <Account />
            </>
          ) : (
            <></>
          )}
        </div>

        {/* </div> */}
      </section>
    </>
  );
}
