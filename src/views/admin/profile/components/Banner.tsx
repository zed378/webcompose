import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dateformat from "dateformat";

// components
import Card from "@components/card";

// assets
import avatar from "@assets/img/avatars/default.webp";
import banner from "@assets/img/profile/banner.webp";
import { FiEdit2, FiCamera } from "react-icons/fi";

// hooks
import {
  setUserData,
  setOpenUserModal,
  setUpdateProfileModal,
} from "@redux/features/user/userSlice";

const Banner = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex laptop:h-48 tablet:h-36 phone:h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div
          className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-white dark:!border-navy-700 bg-cover bg-center "
          style={{
            backgroundImage: `url(${
              user?.picture
                ? process.env.REACT_APP_PROFILE + user?.picture
                : avatar
            })`,
          }}
        >
          <span
            className="w-8 h-8 cursor-pointer rounded-full hover:bg-indigo-400 bg-indigo-600 absolute -bottom-0 -right-2 z-10 flex items-center justify-center"
            onClick={() => {
              dispatch(setUserData({ data: user }));
              dispatch(setUpdateProfileModal({ data: true }));
            }}
          >
            <FiCamera className="w-4 h-4 text-white" />
          </span>
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <div className="relative">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {user?.firstName} {user?.lastName}
          </h4>
          <span
            className="w-6 h-6 cursor-pointer rounded-full hover:bg-brandLinear absolute -top-0 -right-7 flex items-center justify-center"
            onClick={() => {
              dispatch(setUserData({ data: user }));
              dispatch(setOpenUserModal({ data: true }));
            }}
          >
            <FiEdit2 className="w-4 h-4 dark:text-white" />
          </span>
        </div>

        <p className="text-base font-normal text-gray-600">
          <span className="font-medium text-gray-700">Member since:</span>{" "}
          {dateformat(user?.join, "dddd, dS mmmm, yyyy")}
        </p>
        <p className="text-base font-normal text-gray-600">{user?.email}</p>
        <p className="text-base font-normal text-gray-600">{user?.username}</p>
        <p className="text-base font-normal text-gray-600">{user?.role}</p>
      </div>

      {/* Post followers */}
      {/* <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div> */}
    </Card>
  );
};

export default Banner;
