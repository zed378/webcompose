import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import Widget from "@components/widget/Widget";
import ColumnsTable from "./components/ColumnsTable";

// assets
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
import nodata from "@assets/img/nodata.svg";

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

export default function ApproachingManagement() {
  const { user } = useSelector((state) => state.auth);

  // total
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

  // search state
  const [search, setSearch] = useState("");

  // approaching data
  const [appData, setAppData] = useState([]);
  const allAppData = appData?.filter((val) => {});

  //   table name
  const [tbName, setTbName] = useState("Approaching");

  useEffect(() => {
    getApproaching().then((data) => {
      setApp(data?.total);
      setAppData(data?.data);
    });
    getMeeting().then((data) => {
      setMeeting(data?.total);
    });
    getQuoteSent().then((data) => {
      setQs(data?.total);
    });
    getContractSent().then((data) => {
      setCs(data?.total);
    });
    getDP().then((data) => {
      setDp(data?.total);
    });
    getProjectOnProgress().then((data) => {
      setPop(data?.total);
    });
    getProjectDone().then((data) => {
      setPd(data?.total);
    });
    getInvoiceSent().then((data) => {
      setIs(data?.total);
    });
    getLastPaymentDone().then((data) => {
      setLpd(data?.total);
    });
    getRejected().then((data) => {
      setRejected(data?.total);
    });
  }, []);

  return (
    <div>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
        <Widget
          icon={<RiMailSendLine className="h-7 w-7" />}
          title={"Approaching"}
          subtitle={app}
          styling={`cursor-pointer ${
            tbName === "Approaching" && "border border-indigo-600"
          }`}
          click={() => setTbName("Approaching")}
        />
        <Widget
          icon={<MdGroups3 className="h-6 w-6" />}
          title={"Meeting"}
          subtitle={meeting}
          styling={`cursor-pointer ${
            tbName === "Meeting" && "border border-indigo-600"
          }`}
          click={() => setTbName("Meeting")}
        />
        <Widget
          icon={<LuMailQuestion className="h-7 w-7" />}
          title={"Quotation Sent"}
          subtitle={qs}
          styling={`cursor-pointer ${
            tbName === "Quotation Sent" && "border border-indigo-600"
          }`}
          click={() => setTbName("Quotation Sent")}
        />
        <Widget
          icon={<FaFileContract className="h-6 w-6" />}
          title={"Contract Sent"}
          subtitle={cs}
          styling={`cursor-pointer ${
            tbName === "Contract Sent" && "border border-indigo-600"
          }`}
          click={() => setTbName("Contract Sent")}
        />
        <Widget
          icon={<RiSecurePaymentLine className="h-7 w-7" />}
          title={"Down Payment"}
          subtitle={dp}
          styling={`cursor-pointer ${
            tbName === "Down Payment" && "border border-indigo-600"
          }`}
          click={() => setTbName("Down Payment")}
        />
        <Widget
          icon={<RiLoader2Line className="h-6 w-6" />}
          title={"Project On Progress"}
          subtitle={pop}
          styling={`cursor-pointer ${
            tbName === "Project On Progress" && "border border-indigo-600"
          }`}
          click={() => setTbName("Project On Progress")}
        />
        <Widget
          icon={<AiOutlineFileDone className="h-6 w-6" />}
          title={"Project Done"}
          subtitle={pd}
          styling={`cursor-pointer ${
            tbName === "Project Done" && "border border-indigo-600"
          }`}
          click={() => setTbName("Project Done")}
        />
        <Widget
          icon={<LiaFileInvoiceDollarSolid className="h-7 w-7" />}
          title={"Invoice Sent"}
          subtitle={is}
          styling={`cursor-pointer ${
            tbName === "Invoice Sent" && "border border-indigo-600"
          }`}
          click={() => setTbName("Invoice Sent")}
        />
        <Widget
          icon={<MdOutlinePayments className="h-6 w-6" />}
          title={"Last Payment Done"}
          subtitle={lpd}
          styling={`cursor-pointer ${
            tbName === "Last Payment Done" && "border border-indigo-600"
          }`}
          click={() => setTbName("Last Payment Done")}
        />
        <Widget
          icon={<LiaBanSolid className="h-6 w-6" />}
          title={"Rejected"}
          subtitle={rejected}
          styling={`cursor-pointer ${
            tbName === "Rejected" && "border border-indigo-600"
          }`}
          click={() => setTbName("Rejected")}
        />
      </div>
      {/* End of Card widget */}
    </div>
  );
}
