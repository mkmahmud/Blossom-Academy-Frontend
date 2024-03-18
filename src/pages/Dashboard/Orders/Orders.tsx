// @ts-nocheck
import { Badge, Button, Drawer } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import Font from "../../../components/icons/Font";
import { ColumnsType } from "antd/es/table";
import { useGetAllOrdersQuery } from "../../../redux/api/Payments/paymentsAPI";
import MyTable from "../../../components/Dashboard/Ui/Table/Table";
import { timeAndDate } from "../../../helpers/calculate/calculate";

const Orders = () => {
  interface DataType {
    key: React.ReactNode;
    _id: string;
    fullName: string;
    userId: string;
    phone: string;
    address: string;
    email: string;
    zipCode: string;
    amount: number;
    currency: string;
    courseName: string;
    method: string;
    status: boolean;
    tranID: string;
    courseId: string;
    updatedAt: string;
    createdAt: string;
  }

  //   Handle detials view in Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  //   Store Selected Dertails Data
  const [details, setDetails] = useState({});
  const paymentTime = timeAndDate(details?.createdAt);

  const handleView = (data: any) => {
    setDetails(data);
    showDrawer();
  };

  // Table Colmuns
  const columns: ColumnsType<DataType> = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "TranID",
      dataIndex: "tranID",
      key: "tranID",
    },
    {
      title: "Total Ammount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status:",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status ? (
          <Badge
            className="site-badge-count-109"
            count={"Paid"}
            style={{ backgroundColor: "#52c41a" }}
          />
        ) : (
          <Badge
            className="site-badge-count-109"
            count={"UnPaid"}
            style={{ backgroundColor: "#f55951" }}
          />
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Button
          className="bg-primary text-white"
          onClick={() => handleView(record)}
        >
          <Font iconName="fa-eye" />
        </Button>
      ),
    },
  ];

  let tableData: DataType[] = [];

  const [searchVal, setSearchVal] = useState("");
  const onSearch: SearchProps["onSearch"] = (value, _e) => setSearchVal(value);

  // Data
  const { data } = useGetAllOrdersQuery(undefined);

  if (data?.length > 0) {
    data.map((order: any) => {
      tableData.push({
        key: order._id,
        _id: order._id,
        fullName: order.fullName,
        userId: order.userId,
        phone: order.phone,
        address: order.address,
        email: order.email,
        zipCode: order.zipCode,
        amount: order.amount,
        currency: order.currency,
        courseName: order.courseName,
        method: order.method,
        status: order.status,
        tranID: order.tranID,
        courseId: order.courseId,
        updatedAt: order?.updatedAt,
        createdAt: order?.createdAt,
      });
    });
    tableData.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }

  // Filter data based on searchVal
  const filteredData = tableData.filter(
    (item) =>
      item.tranID.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.userId.toLowerCase().includes(searchVal.toLowerCase())
  );
  return (
    <div>
      <div>
        <div className="shadow p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-semibold text-secondary">Orders</h2>
          </div>
          <div className="my-4 ease-in-out duration-300  ">
            <p>Serach Transaction Id or User Id</p>
            <div className="flex items-center w-full">
              <Search
                placeholder="Type Course Code Or Course Name "
                className="my-1 text-lg "
                allowClear
                enterButton={
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-lg">
                    Search
                  </button>
                }
                size="large"
                onSearch={onSearch}
              />
              {searchVal && (
                <div className="mx-4 ease-in-out duration-300  ">
                  <Button
                    type="default"
                    color="primary"
                    onClick={() => setSearchVal("")}
                  >
                    <Font iconName="fa-rotate-right" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        width={600}
        key={"left"}
      >
        <div>
          <h2 className="text-center text-extraLarge text-primary font-bold">
            Invoice
          </h2>
          <div className=" mt-4">
            <h3 className="bg-gray p-2 font-semibold text-lg">
              User Information
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <h3 className="font-semibold ">Name:</h3>
                <p className="">{details?.fullName}</p>
              </div>
              <div>
                <h3 className="font-semibold ">User Id:</h3>
                <p className="font-bold text-primary">{details?.userId}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Phone Number:</h3>
                <p>{details?.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Address:</h3>
                <p>{details?.address}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Zip Code:</h3>
                <p>{details?.zipCode}</p>
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <h3 className="bg-gray p-2 font-semibold text-lg">
              Course Information
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <h3 className="font-semibold ">Course Name:</h3>
                <p className="">{details?.courseName}</p>
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <h3 className="bg-gray p-2 font-semibold text-lg">
              Payment Information
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <h3 className="font-semibold ">Currency:</h3>
                <p className="">{details?.currency}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Total Ammount:</h3>
                <p className="">{details?.amount}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Method:</h3>
                <p className="">{details?.method}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Transaction Id:</h3>
                <p className="">{details?.tranID}</p>
              </div>
              <div>
                <h3 className="font-semibold ">Date of purchase:</h3>
                <p className="">
                  {details?.createdAt
                    ? paymentTime.formattedDate
                    : "Not Available"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold ">Time of purchase:</h3>
                <p className="">
                  {details?.createdAt
                    ? paymentTime.formattedTime
                    : "Not Available"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2
              className={` ${
                details?.status ? "bg-[#52c41a]" : "bg-[#f55951]"
              }  text-white text-xl text-center p-2 font-bold`}
            >
              {details?.status ? "Paid" : "Un Paid"}
            </h2>
          </div>
        </div>
      </Drawer>
      <div className="my-4 p-4 ">
        <MyTable data={filteredData} columns={columns} pageSize="10" />
      </div>
    </div>
  );
};

export default Orders;
