"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@components/navbar/RTL";
import Sidebar from "@components/sidebar/RTL";
import Footer from "@components/footer/Footer";

export default function RtlLayout({ children }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    return () => {
      document.documentElement.dir = "ltr";
    };
  }, []);

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900 min-h-screen">
        <main className={`mx-[12px] h-full flex-none transition-all md:pe-2 xl:mr-[313px]`}>
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Web Compose RTL"}
              brandText={"RTL Dashboard"}
            />
            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
