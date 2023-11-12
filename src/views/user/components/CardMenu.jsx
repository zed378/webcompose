import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Dropdown from "./DropDown";

// Assets
import { BsThreeDots } from "react-icons/bs";
import {
  LiaUserEditSolid,
  LiaUserSlashSolid,
  LiaUserTimesSolid,
  LiaUserCheckSolid,
} from "react-icons/lia";

// hooks
import {
  setUserData,
  setOpenUserModal,
  setActiveModal,
} from "@redux/features/user/userSlice";

function CardMenu(props) {
  const { transparent, data, refetch } = props;
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { openModal, activeModal } = useSelector((state) => state.userSlice);

  useEffect(() => {
    if (!openModal || !activeModal) {
      refetch();
    }
  }, [openModal, activeModal]);

  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-1 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
      children={
        <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p
            className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:text-indigo-500"
            onClick={() => {
              dispatch(setUserData({ data }));
              dispatch(setOpenUserModal({ data: true }));
            }}
          >
            <span>
              <LiaUserEditSolid />
            </span>
            Edit User
          </p>
          <p
            className={`hover:text-black mt-2 flex ${
              data.isActive ? "cursor-not-allowed" : "cursor-pointer"
            } items-center gap-2 pt-1 text-gray-600 hover:text-indigo-500`}
            onClick={() => {
              if (!data.isActive) {
                dispatch(setUserData({ data }));
                dispatch(setActiveModal({ data: true }));
              }
            }}
          >
            <span>
              <LiaUserCheckSolid />
            </span>
            Activate User
          </p>
          <p
            className={`hover:text-black mt-2 flex ${
              data.isActive ? "cursor-pointer" : "cursor-not-allowed"
            } items-center gap-2 pt-1 text-gray-600 hover:text-indigo-500`}
          >
            <span>
              <LiaUserSlashSolid />
            </span>
            Disable User
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-indigo-500">
            <span>
              <LiaUserTimesSolid />
            </span>
            Delete User
          </p>
        </div>
      }
    />
  );
}

export default CardMenu;
