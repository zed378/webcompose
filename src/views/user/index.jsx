import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
import { VscCheckAll } from "react-icons/vsc";
import nodata from "@assets/img/nodata.svg";

// hooks
import {
  getSYS,
  getAdmin,
  getAuthenticated,
  getClient,
  getDev,
  getHR,
  getMarketing,
  allUsers,
} from "@hooks/userRole";
import { userColumns, noAction } from "./variables/tableColumns";

export default function UserManagement() {
  const { user } = useSelector((state) => state.auth);

  // total
  const [sys, setSys] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [marketing, setMarketing] = useState(0);
  const [authenticated, setAuthenticated] = useState(0);
  const [client, setClient] = useState(0);
  const [dev, setDev] = useState(0);
  const [hrd, setHrd] = useState(0);
  const [all, setAll] = useState(0);

  const refetchData = () => {
    allUsers().then((data) => {
      setAll(data.total);
      setAllData(data.data);
    });
    getSYS().then((data) => {
      setSys(data.total);
      setSysData(data.data);
    });
    getAdmin().then((data) => {
      setAdmin(data.total);
      setAdmData(data.data);
    });
    getMarketing().then((data) => {
      setMarketing(data.total);
      setMarkData(data.data);
    });
    getAuthenticated().then((data) => {
      setAuthenticated(data.total);
      setAuth(data.data);
    });
    getClient().then((data) => {
      setClient(data.total);
      setClt(data.data);
    });
    getDev().then((data) => {
      setDev(data.total);
      setDevel(data.data);
    });
    getHR().then((data) => {
      setHrd(data.total);
      setHrds(data.data);
    });
  };

  const [search, setSearch] = useState("");

  // All User Data
  const [allData, setAllData] = useState([]);
  const allUserData = allData.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  //  Sys Admin data
  const [sysData, setSysData] = useState([]);
  const searchData = sysData.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // Admin Data
  const [admData, setAdmData] = useState([]);
  const adminData = admData.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // Marketing Data
  const [markData, setMarkData] = useState([]);
  const marketingData = markData.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // Authenticated Data
  const [auth, setAuth] = useState([]);
  const authData = auth.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // Client Data
  const [clt, setClt] = useState([]);
  const clientData = clt.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // Developer Data
  const [devel, setDevel] = useState([]);
  const devData = devel.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  // HR Data
  const [hrds, setHrds] = useState([]);
  const hrdData = hrds.filter((val) => {
    if (search === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      val.username.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return val;
    }
  });

  //   table name
  const [tbName, setTbName] = useState("All");

  useEffect(() => {
    allUsers().then((data) => {
      setAll(data?.total);
      setAllData(data?.data);
    });
    getSYS().then((data) => {
      setSys(data?.total);
      setSysData(data?.data);
    });
    getAdmin().then((data) => {
      setAdmin(data?.total);
      setAdmData(data?.data);
    });
    getMarketing().then((data) => {
      setMarketing(data?.total);
      setMarkData(data?.data);
    });
    getAuthenticated().then((data) => {
      setAuthenticated(data?.total);
      setAuth(data?.data);
    });
    getClient().then((data) => {
      setClient(data?.total);
      setClt(data?.data);
    });
    getDev().then((data) => {
      setDev(data?.total);
      setDevel(data?.data);
    });
    getHR().then((data) => {
      setHrd(data?.total);
      setHrds(data?.data);
    });
  }, []);

  return (
    <div>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 phone:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
        <Widget
          icon={<VscCheckAll className="h-7 w-7" />}
          title={"All User"}
          subtitle={all}
        />
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

      {/* Tab Menu */}
      <div className="border-b border-gray-200 dark:border-gray-700 mt-10">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li onClick={() => setTbName("All")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "All"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <VscCheckAll className="w-8 h-8 mr-1 " />
              All
            </p>
          </li>

          <li onClick={() => setTbName("System Admin")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "System Admin"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <MdOutlineAdminPanelSettings className="w-8 h-8 mr-1 " />
              Sys Admin
            </p>
          </li>

          <li onClick={() => setTbName("Admin")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "Admin"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <TbSettingsStar className="w-8 h-8 mr-1 " />
              Admin
            </p>
          </li>

          <li onClick={() => setTbName("Marketing")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "Marketing"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <MdOutlineMarkEmailRead className="w-8 h-8 mr-1 " />
              Marketing
            </p>
          </li>

          <li onClick={() => setTbName("Common User")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "Common User"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <MdPerson4 className="w-8 h-8 mr-1 " />
              Common User
            </p>
          </li>

          <li onClick={() => setTbName("Client")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "Client"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <BsPersonHearts className="w-8 h-8 mr-1 " />
              Client
            </p>
          </li>

          <li onClick={() => setTbName("Developer")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "Developer"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <GiDevilMask className="w-8 h-8 mr-1 " />
              Developer
            </p>
          </li>

          <li onClick={() => setTbName("HR")}>
            <p
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                tbName === "HR"
                  ? "text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg active dark:text-indigo-500 dark:border-indigo-500"
                  : "text-gray-700 cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }  group`}
            >
              <FaUserTie className="w-8 h-8 mr-1 " />
              HR
            </p>
          </li>
        </ul>
      </div>
      {/* End of Tab Menu */}

      {/* All User Table */}
      {tbName === "All" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={allUserData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={all}
          />
          <div
            className={`${
              all > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of All User Table */}

      {/* Sys Admin Table */}
      {tbName === "System Admin" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={user.role === "SYS" ? userColumns : noAction}
            tableData={searchData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={sys}
          />

          <div
            className={`${
              sys > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Sys Admin Table */}

      {/* Admin Table */}
      {tbName === "Admin" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={adminData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={admin}
          />

          <div
            className={`${
              admin > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Admin Table */}

      {/* Marketing Table */}
      {tbName === "Marketing" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={marketingData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={marketing}
          />
          <div
            className={`${
              marketing
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Marketing Table */}

      {/* Authenticated Table */}
      {tbName === "Common User" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={authData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={authenticated}
          />
          <div
            className={`${
              authenticated > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Authenticated Table */}

      {/* Client Table */}
      {tbName === "Client" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={clientData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={client}
          />
          <div
            className={`${
              client > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Client Table */}

      {/* Developer Table */}
      {tbName === "Developer" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={devData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={dev}
          />
          <div
            className={`${
              dev > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of Developer Table */}

      {/* HRD Table */}
      {tbName === "HR" && (
        <div className="mt-10">
          <ColumnsTable
            columnsData={userColumns}
            tableData={hrdData}
            tableName={tbName}
            setSearch={setSearch}
            refetch={refetchData}
            dataTotal={hrd}
          />
          <div
            className={`${
              hrd > 0
                ? "hidden"
                : "w-full flex flex-col mt-10 justify-center items-center"
            }`}
          >
            <img
              src={nodata}
              alt={nodata}
              srcSet={nodata}
              className="max-w-[500px] "
            />
            <h1 className="text-3xl text-indigo-500 font-medium mb-10 ">
              No Data Found
            </h1>
          </div>
        </div>
      )}
      {/* End of HRD Table */}
    </div>
  );
}
