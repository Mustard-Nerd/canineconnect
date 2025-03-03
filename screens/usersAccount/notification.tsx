"use client";

import ProfileLayout from "@/components/layout/profileLayout";
import Image from "next/image";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function NotificationPage() {
  const [startDate, setStartDate] = useState(null);
  const datePickerRef = useRef<DatePicker>(null);

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [accountDetails, setAccountDetails] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const [newsLetter, setNewsLetter] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <ProfileLayout>
      {/* account overview */}

      {!accountDetails && !changePassword && !newsLetter && (
        <div>
          <div className="pb-6 font-benz font-[700] text-[24px] lg:text-[32px]">
            Account Overview
          </div>
          <div className=" grid lg:grid-cols-2 gap-10  grid-cols-1">
            <div className=" border rounded-[13px] border-primary dark:border-white">
              <div
                className="font-[700] lg:px-9 px-4 pt-5 pb-3 text-[20px] border-b rounded-[12px] lg:text-[28px] flex justify-between items-center border-primary dark:border-white cursor-pointer"
                onClick={() => setAccountDetails(true)}
              >
                <div>Account Details</div>
                <Image
                  src="/menu/Editing.svg"
                  alt="editing"
                  width={40}
                  height={40}
                  className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
                />
              </div>
              <div className="px-9 py-11 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3">
                  <div className="text-[20px]">Alex Brown</div>
                  <div className="text-[16px]">Alexbrown@gmail.com</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[20px]">Default shipping Address</div>
                  <div className="text-[16px]">
                    No 1, Ajalepaekun street lekki | Lagos{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className=" border rounded-[13px] border-primary dark:border-white">
              <div
                className="font-[700] lg:px-9 px-4 pt-5 pb-3 text-[20px] border-b rounded-[12px] lg:text-[28px] flex justify-between items-center border-primary dark:border-white cursor-pointer"
                onClick={() => setChangePassword(true)}
              >
                <div>Password Settings</div>
                <Image
                  src="/menu/Editing.svg"
                  alt="editing"
                  width={40}
                  height={40}
                  className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                />
              </div>
              <div className="px-9 py-11  ">
                <div className="text-[20px]">
                  You can change your password here
                </div>
              </div>
            </div>
            <div className=" border rounded-[13px] lg:h-[350px] border-primary dark:border-white">
              <div
                className="font-[700] lg:px-9 px-4 pt-5 pb-3 text-[20px] border-b rounded-[12px] lg:text-[28px] flex justify-between items-center border-primary dark:border-white cursor-pointer"
                onClick={() => setNewsLetter(true)}
              >
                <div>Newsletter Preferences</div>
                <Image
                  src="/menu/Editing.svg"
                  alt="editing"
                  width={40}
                  height={40}
                  className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]"
                />
              </div>
              <div className="px-9 py-11  ">
                <div className="text-[20px]">
                  You are currently not subscribed to our newsletters.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* account edit */}
      {accountDetails && (
        <div>
          <div
            className="pb-6 font-benz font-[700] flex items-center gap-2 text-[24px] lg:text-[32px] cursor-pointer"
            onClick={() => setAccountDetails(false)}
          >
            <span>
              <FaArrowLeft className=" w-8 h-8 " />
            </span>
            Account Details
          </div>

          <div>
            <form className=" flex flex-col gap-5">
              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  First Name
                </label>
                <input
                  type="text"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder="First Name"
                />
              </fieldset>
              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder="Middle Name"
                />
              </fieldset>
              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder="Last Name"
                />
              </fieldset>
              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder=" Mail "
                />
              </fieldset>

              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Date of Birth
                </label>
                <div className="flex items-center space-x-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="dd"
                    placeholderText="DD"
                    className="w-10 h-10 text-center border border-secondary bg-white rounded-md focus:outline-none focus:border-primary"
                    ref={datePickerRef}
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="MM"
                    placeholderText="MM"
                    className="w-10 h-10 text-center border border-secondary bg-white rounded-md focus:outline-none focus:border-primary"
                    ref={datePickerRef}
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="yyyy"
                    placeholderText="YY"
                    className="w-14 h-10 text-center border border-secondary bg-white rounded-md focus:outline-none focus:border-primary"
                    ref={datePickerRef}
                  />
                  <FaCalendarAlt
                    className="w-6 h-6 text-gray-500 cursor-pointer"
                    onClick={() => datePickerRef.current?.setFocus()}
                  />
                </div>
              </fieldset>

              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder=" 9134503504 "
                />
              </fieldset>

              <fieldset
                className={`flex flex-col font-normal w-full items-start gap-2 `}
              >
                <label className="text-[18px] font-[600] leading-[36px]">
                  Address
                </label>
                <input
                  type="text"
                  className="h-[30px] w-full outline-none text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white bg-white dark:bg-primary border-b border-secondary dark:border-white focus:border-primary dark:focus:border-secondary focus:ring-0 focus:outline-none"
                  placeholder="Street address "
                />
              </fieldset>

              <div className=" flex justify-end   mt-10 w-full">
                <div className="w-[190px]">
                  <Button text="Save" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* password change  */}
      {changePassword && (
        <div>
          <div
            className="pb-6 font-benz font-[700] flex items-center gap-2 text-[24px] lg:text-[32px] cursor-pointer"
            onClick={() => setChangePassword(false)}
          >
            <span>
              <FaArrowLeft className=" w-8 h-8 " />
            </span>
            Password Settings
          </div>

          <div>
            <form className=" flex flex-col gap-5">
              <div className="relative w-full">
                <Input
                  id="password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Current Password"
                  placeholder="Current Password"
                />
                <Icon
                  className="absolute right-2 top-14 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>

              <div className="relative w-full">
                <Input
                  id="password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="New Password"
                  placeholder="New Password"
                />
                <Icon
                  className="absolute right-2 top-14 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>

              <div className="relative w-full">
                <Input
                  id="password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Confirm New Password"
                  placeholder="Confirm New Password"
                />
                <Icon
                  className="absolute right-2 top-14 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>

              <div className=" flex justify-center  mt-20 w-full">
                <div className="  w-[190px]">
                  <Button text="Save Changes" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* newsletter  */}
      {newsLetter && (
        <div>
          <div
            className="pb-6 font-benz font-[700] flex items-center gap-2 text-[24px] lg:text-[32px] cursor-pointer"
            onClick={() => setNewsLetter(false)}
          >
            <span>
              <FaArrowLeft className=" w-8 h-8 " />
            </span>
            Newsletter Preferences
          </div>

          <div>
            <div className=" font-[600] text-[16px] lg:text-[20px] pb-5 lg:pb-2 border-b-2 border-primary dark:border-white text-center">
              Stay Ahead of The Pack; <br />
              Get the latest news, tips, and offers delivered straight to your
              inbox!
            </div>

            <div className=" lg:p-10 pt-4 lg:pt-10">
              <div className=" font-[600] text-[16px] lg:text-[28px] pb-5 lg:pb-10">
                Why Subscribe?
              </div>

              <ul className=" mb-10 lg:px-16 pl-5 font-[400] list-disc flex flex-col  gap-5">
                <li>Exclusive Discounts & Offers</li>
                <li>Expert Tips on Dog Care & Training</li>
                <li>First Access to New Products & Services</li>
                <li>Inspiring Dog Stories & DIY Ideas</li>
              </ul>

              <div className=" font-[400] text-[18px] ">
                Join our community of dog lovers and never miss out on what's
                new at Canine Connect.
              </div>
            </div>

            <div className=" flex justify-center  mt-20 w-full">
              <div className="  w-[190px]">
                <Button text="Subscribe Now" />
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
}
