import { useState, useEffect } from "react";

import MiniCalendar from "@components/calendar/MiniCalendar";
import WeeklyRevenue from "@views/admin/default/components/WeeklyRevenue";
import TotalSpent from "@views/admin/default/components/TotalSpent";
import PieChartCard from "@views/admin/default/components/PieChartCard";
import { AiOutlineFileDone } from "react-icons/ai";
import { LuMailQuestion } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid, LiaBanSolid } from "react-icons/lia";
import { FaFileContract } from "react-icons/fa";
import { MdGroups3, MdOutlinePayments } from "react-icons/md";
import {
  RiMailSendLine,
  RiSecurePaymentLine,
  RiLoader2Line,
} from "react-icons/ri";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "@components/widget/Widget";
import CheckTable from "@views/admin/default/components/CheckTable";
import ComplexTable from "@views/admin/default/components/ComplexTable";
import DailyTraffic from "@views/admin/default/components/DailyTraffic";
import TaskCard from "@views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

// hooks
import {
  getApproaching,
  getMeeting,
  getQuoteSent,
  getContractSent,
  getDP,
  getProjectOnProgress,
  getProjectDone,
  getInvoiceSent,
  getLastPaymentDone,
  getRejected,
} from "@hooks/approachStatus";

const Dashboard = () => {
  const [app, setApp] = useState(0);
  const [meeting, setMeeting] = useState(0);
  const [qs, setQs] = useState(0);
  const [cs, setCs] = useState(0);
  const [dp, setDp] = useState(0);
  const [pop, setPop] = useState(0);
  const [pd, setPd] = useState(0);
  const [is, setIs] = useState(0);
  const [lpd, setLpd] = useState(0);
  const [rejected, setRejected] = useState(0);

  useEffect(() => {
    getApproaching().then((data) => setApp(data?.total));
    getMeeting().then((data) => setMeeting(data?.total));
    getQuoteSent().then((data) => setQs(data?.total));
    getContractSent().then((data) => setCs(data?.total));
    getDP().then((data) => setDp(data?.total));
    getProjectOnProgress().then((data) => setPop(data?.total));
    getProjectDone().then((data) => setPd(data?.total));
    getInvoiceSent().then((data) => setIs(data?.total));
    getLastPaymentDone().then((data) => setLpd(data?.total));
    getRejected().then((data) => setRejected(data?.total));
  }, []);

  return (
    <div>
      {/* Card widget */}
      <h1 className="text-2xl text-indigo-700 font-medium mt-10 ">
        Approaching Status
      </h1>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
        <Widget
          icon={<RiMailSendLine className="h-7 w-7" />}
          title={"Approaching"}
          subtitle={app}
        />
        <Widget
          icon={<MdGroups3 className="h-6 w-6" />}
          title={"Meeting"}
          subtitle={meeting}
        />
        <Widget
          icon={<LuMailQuestion className="h-7 w-7" />}
          title={"Quotation Sent"}
          subtitle={qs}
        />
        <Widget
          icon={<FaFileContract className="h-6 w-6" />}
          title={"Contract Sent"}
          subtitle={cs}
        />
        <Widget
          icon={<RiSecurePaymentLine className="h-7 w-7" />}
          title={"Down Payment"}
          subtitle={dp}
        />
        <Widget
          icon={<RiLoader2Line className="h-6 w-6" />}
          title={"Project On Progress"}
          subtitle={pop}
        />
        <Widget
          icon={<AiOutlineFileDone className="h-6 w-6" />}
          title={"Project Done"}
          subtitle={pd}
        />
        <Widget
          icon={<LiaFileInvoiceDollarSolid className="h-7 w-7" />}
          title={"Invoice Sent"}
          subtitle={is}
        />
        <Widget
          icon={<MdOutlinePayments className="h-6 w-6" />}
          title={"Last Payment Done"}
          subtitle={lpd}
        />
        <Widget
          icon={<LiaBanSolid className="h-6 w-6" />}
          title={"Rejected"}
          subtitle={rejected}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
