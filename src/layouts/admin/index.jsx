import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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

import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  const nav = useNavigate();
  const {
    openModal,
    activeModal,
    disableModal,
    deleteModal,
    createModal,
    roleModal,
    updateProfileModal,
  } = useSelector((state) => state.userSlice);

  React.useEffect(() => {
    if (!localStorage.token) {
      nav("/login");
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          (routes[i].layout === "/admin" && "/dashboard") + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";

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
                <Routes>
                  {getRoutes(routes)}

                  <Route
                    path="/"
                    element={<Navigate to="/dashboard/default" replace />}
                  />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
