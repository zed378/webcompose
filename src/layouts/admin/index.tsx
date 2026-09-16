"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

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

// hooks
import routes from "@route/routes";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

export default function Admin({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  [key: string]: any;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  const {
    openModal,
    activeModal,
    disableModal,
    deleteModal,
    createModal,
    roleModal,
    updateProfileModal,
  } = useSelector((state: RootState) => state.userSlice || {});

  React.useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.token) {
      router.push("/login");
    }
  }, [router]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.dir = "ltr";
    }
  }, []);

  React.useEffect(() => {
    const handleResize = () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!pathname) return;
    const matched = routes.find((r) => pathname.includes(r.path));
    if (matched) {
      setCurrentRoute(matched.name);
    }
  }, [pathname]);

  const getActiveNavbar = (routesArr: any[]) => {
    if (!pathname) return false;
    const matched = routesArr.find((r) => pathname.includes(r.path));
    return matched ? matched.secondary : false;
  };

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
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
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
                secondary={getActiveNavbar(routes)}
                {...rest}
              />
              <div className="pt-5s mx-auto mb-auto h-full min-h-[91vh] p-2 md:pr-2">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
