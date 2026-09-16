"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// components
import Navbar from "@components/navbar";
import Sidebar from "@components/sidebar";
import {
  ModalEditUser,
  ModalActivateUser,
  ModalDisableUser,
  ModalDeleteUser,
  ModalCreatetUser,
  ModalEditRole,
  ModalUpdateUserPicture,
} from "@components/molecules/modal";

// routes
import routes from "@route/routes";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  const {
    openModal,
    activeModal,
    disableModal,
    deleteModal,
    createModal,
    roleModal,
    updateProfileModal,
  } = useSelector((state) => state.userSlice || {});

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const matchedRoute = routes.find((r) => pathname.includes(r.path));
    if (matchedRoute) {
      setCurrentRoute(matchedRoute.name);
    } else {
      setCurrentRoute("Main Dashboard");
    }
  }, [pathname]);

  const getActiveNavbar = () => {
    if (!pathname) return false;
    const matchedRoute = routes.find((r) => pathname.includes(r.path));
    return matchedRoute ? matchedRoute.secondary : false;
  };

  useEffect(() => {
    document.documentElement.dir = "ltr";
  }, []);

  return (
    <>
      {/* user table modal */}
      {createModal && <ModalCreatetUser />}
      {openModal && <ModalEditUser />}
      {activeModal && <ModalActivateUser />}
      {disableModal && <ModalDisableUser />}
      {deleteModal && <ModalDeleteUser />}
      {roleModal && <ModalEditRole />}
      {updateProfileModal && <ModalUpdateUserPicture />}
      {/* end of user table modal */}

      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        {/* Navbar & Main Content */}
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900 min-h-screen">
          {/* Main Content */}
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            {/* Routes */}
            <div className="h-full">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"Web Compose"}
                brandText={currentRoute}
                secondary={getActiveNavbar()}
              />
              <div className="pt-5 mx-auto mb-auto h-full min-h-[91vh] p-2 md:pr-2">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
