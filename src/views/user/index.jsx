import { useState, useEffect } from "react";

// components
import Widget from "@components/widget/Widget";
import ColumnsTable from "./components/ColumnsTable";

// assets
import {
  MdOutlineAdminPanelSettings,
  MdOutlineMarkEmailRead,
  MdPerson4,
} from "react-icons/md";
import { TbSettingsStar } from "react-icons/tb";
import { BsPersonHearts } from "react-icons/bs";
import { GiDevilMask } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";

// hooks
import {
  getSYS,
  getAdmin,
  getAuthenticated,
  getClient,
  getDev,
  getHR,
  getMarketing,
} from "@hooks/userRole";
import { userColumns } from "./variables/tableColumns";

export default function UserManagement() {
  // total
  const [sys, setSys] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [marketing, setMarketing] = useState(0);
  const [authenticated, setAuthenticated] = useState(0);
  const [client, setClient] = useState(0);
  const [dev, setDev] = useState(0);
  const [hrd, setHrd] = useState(0);

  //   data
  const [sysData, setSysData] = useState([]);

  //   table name
  const [tbName, setTbName] = useState("System Admin");

  useEffect(() => {
    getSYS().then((data) => {
      setSys(data.total);
      setSysData(data.data);
    });
    getAdmin().then((data) => setAdmin(data.total));
    getMarketing().then((data) => setMarketing(data.total));
    getAuthenticated().then((data) => setAuthenticated(data.total));
    getClient().then((data) => setClient(data.total));
    getDev().then((data) => setDev(data.total));
    getHR().then((data) => setHrd(data.total));
  }, []);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 phone:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <Widget
          icon={<MdOutlineAdminPanelSettings className="h-7 w-7" />}
          title={"System Admin"}
          subtitle={sys}
        />
        <Widget
          icon={<TbSettingsStar className="h-7 w-7" />}
          title={"Admin"}
          subtitle={admin}
        />
        <Widget
          icon={<MdOutlineMarkEmailRead className="h-7 w-7" />}
          title={"Marketing"}
          subtitle={marketing}
        />
        <Widget
          icon={<MdPerson4 className="h-7 w-7" />}
          title={"Common User"}
          subtitle={authenticated}
        />
        <Widget
          icon={<BsPersonHearts className="h-7 w-7" />}
          title={"Client"}
          subtitle={client}
        />
        <Widget
          icon={<GiDevilMask className="h-7 w-7" />}
          title={"Developer"}
          subtitle={dev}
        />
        <Widget
          icon={<FaUserTie className="h-7 w-7" />}
          title={"HR"}
          subtitle={hrd}
        />
      </div>
      {/* End of Card widget */}

      <div className="mt-10">
        <ColumnsTable
          columnsData={userColumns}
          tableData={sysData}
          tableName={tbName}
          refetch={() => {
            getSYS().then((data) => {
              setSys(data.total);
              setSysData(data.data);
            });
          }}
        />
      </div>
    </div>
  );
}
