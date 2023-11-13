import React, { useEffect, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { formatFullDate } from "node-format-date";
import { useDispatch, useSelector } from "react-redux";

// components
import CardMenu from "./CardMenu";
import Card from "@components/card";

// assets
import { BiLeftArrow, BiRightArrow, BiMessageSquareEdit } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";

// hooks
import { setCreateUserModal } from "@redux/features/user/userSlice";

const ColumnsTable = (props) => {
  const { columnsData, tableData, tableName, refetch } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const { createModal } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
    state,
    pageCount,
    setPageSize,
  } = tableInstance;
  initialState.pageSize = 10;

  useEffect(() => {
    if (!createModal) {
      refetch();
    }
  }, [createModal]);

  return (
    <Card extra={"w-full mb-10 pb-10 p-4 h-full"}>
      <header className="relative flex laptop:flex-row phone:flex-col laptop:items-center phone:items-start justify-between">
        <div className="text-xl font-bold text-indigo-700 dark:text-white">
          {tableName} User Data
        </div>

        <div
          className="flex items-center cursor-pointer border border-indigo-500 hover:bg-indigo-100 dark:border-white dark:hover:bg-indigo-100 rounded-lg px-2 py-1 phone:gap-2 "
          onClick={() => {
            dispatch(setCreateUserModal({ data: true }));
          }}
        >
          <CiSquarePlus className="w-6 h-6 text-indigo-500 dark:text-white font-black " />
          <h1 className="text-sm text-indigo-700 dark:text-white ">Add Data</h1>
        </div>
      </header>

      <div className="mt-8 overflow-x-scroll">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data;
                    if (cell.column.Header === "AVATAR") {
                      data = (
                        <div className="ml-3 relative w-8 h-8 rounded-full cursor-pointer">
                          <img
                            src={process.env.REACT_APP_PROFILE + cell.value}
                            alt={cell.value}
                            srcSet={process.env.REACT_APP_PROFILE + cell.value}
                            className="w-8 h-8 rounded-full "
                          />
                          <div className="w-8 h-8 rounded-full absolute top-0 left-0 z-10 flex items-center justify-center hover:bg-gray-400/80 ">
                            <BiMessageSquareEdit className="w-5 h-5 text-red-500 hidden hover:inline-block " />
                          </div>
                        </div>
                      );
                    } else if (cell.column.Header === "NAME") {
                      data = (
                        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "EMAIL") {
                      data = (
                        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "USERNAME") {
                      data = (
                        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "ROLE") {
                      data = (
                        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <p
                          className={`mr-[10px] text-sm font-semibold ${
                            cell.value === true
                              ? "text-teal-500"
                              : "text-red-500"
                          } `}
                        >
                          {cell.value === true ? "Active" : "Disable"}
                        </p>
                      );
                    } else if (cell.column.Header === "ACTION") {
                      data = (
                        <CardMenu data={cell.row.original} refetch={refetch} />
                      );
                    } else if (cell.column.Header === "MEMBER SINCE") {
                      data = (
                        <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                          {formatFullDate(cell.value)}
                        </p>
                      );
                    }

                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <hr className="my-10 dark:border-navy-700 " />

        {/* Pagination */}
        <div className="flex tablet:flex-row phone:flex-col-reverse items-center gap-2 text-indigo-500 dark:text-white laptop:mr-4 laptop:float-right">
          <h1 className="text-indigo-500 dark:text-white py-1 px-3 rounded border border-indigo-500 dark:border-white ">
            Total Data: {tableData.length}
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-indigo-500 dark:text-white">Page Size:</h1>
            <select
              className=" text-indigo-500 dark:text-white mr-3 rounded text-center border border-indigo-500 dark:border-white px-2 py-1 cursor-pointer focus:outline-none "
              style={{
                WebkitAppearance: "none",
                backgroundColor: "transparent",
              }}
              onChange={(e) => {
                setPageSize(e.target.value);
              }}
            >
              <option
                className="text-indigo-500 p-1 border-2 border-indigo-500  "
                value={10}
              >
                10
              </option>
              <option
                className="text-indigo-500 p-1 border-2 border-indigo-500  "
                value={25}
              >
                25
              </option>
              <option
                className="text-indigo-500 p-1 border-2 border-indigo-500  "
                value={50}
              >
                50
              </option>
              <option
                className="text-indigo-500 p-1 border-2 border-indigo-500  "
                value={100}
              >
                100
              </option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-indigo-500 dark:text-white ">
            <button
              className="border rounded px-3 py-1 hover:bg-indigo-200 "
              onClick={() => tableInstance.previousPage()}
            >
              <BiLeftArrow />
            </button>
            <h1 className="text-indigo-500 dark:text-white">
              Page {state.pageIndex + 1} of {pageCount}
            </h1>
            <button
              className="border rounded px-3 py-1 hover:bg-indigo-200 "
              onClick={() => tableInstance.nextPage()}
            >
              <BiRightArrow />
            </button>
          </div>
        </div>
        {/* End of Pagination */}
      </div>
    </Card>
  );
};

export default ColumnsTable;
