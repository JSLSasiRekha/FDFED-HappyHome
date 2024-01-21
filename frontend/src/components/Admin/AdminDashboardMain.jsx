import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";

import { AiOutlineArrowRight, AiOutlineMoneyCollect,AiOutlineDollarCircle } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineClipboardList } from "react-icons/hi";
import GraphComponent from "./GraphComponent";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
  }, []);

   const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


   const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = [];
  adminOrders &&
  adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " $",
        status: item?.status,
        createdAt: item?.createdAt.slice(0,10),
      });
    });

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4 bg-[#DBEAFE]">
        <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
        <div className="w-full block 800px:flex items-center justify-between">
          <div className=" mb-4 w-[30%] h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="ml-8 flex ">
            <AiOutlineDollarCircle  size={30}
                className="mr-4 "
                fill="#00000085"
                 />
             
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Earning
              </h3>
              
            </div>
            <h5 className="pt-2 pl-[55px] text-[22px] font-[500]">$ 50 {adminBalance}</h5>
          </div>
  
          <div className=" mb-4 w-[30%] h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className=" ml-8 flex ">
            <GrUserWorker size={28} className="mr-4"/>
              
              <h1
                className={`${styles.productTitle}  !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Sellers
              </h1>
            </div>
            <h5 className="pt-2 pl-[110px] text-[22px] font-[500]">{sellers && sellers.length}</h5>
            <Link to="/admin-sellers">
              <p className="pt-4 pl-2 -mt-2 text-[#2d6370]">View Workers</p>
            </Link>
          </div>
  
          <div className=" mb-4 w-[30%] h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="ml-8 flex ">
            <HiOutlineClipboardList size={30}
                className="mr-4"
                />

             
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Orders
              </h3>
            </div>
            <h5 className="pt-2 pl-[120px] text-[22px] font-[500]">6{adminOrders && adminOrders.length}</h5>
            <Link to="/admin-orders">
              <p className="pt-4 pl-2 text-[#2d6370]">View Orders</p>
            </Link>
          </div>
        </div>
  
        <br />
        <h3 className="text-[22px] font-Poppins pb-2">Statistics</h3>
       
      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;
