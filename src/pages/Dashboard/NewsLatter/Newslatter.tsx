import { Button } from "antd";
import Font from "../../../components/icons/Font";
import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { useGetNewslatterEmailQuery } from "../../../redux/api/newslatter/newslatter";
import MyTable from "../../../components/Dashboard/Ui/Table/Table";
import { timeAndDate } from "../../../helpers/calculate/calculate";
import CustomButton from "../../../components/Buttons/CustomButton";

const Newslatter = () => {
  interface DataType {
    key: React.ReactNode;
    email: string;
    createdAt: string;
    _id: string;
  }

  // Table Colmuns
  const columns: ColumnsType<DataType> = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "createdAt",
      //   @ts-ignore
      render: (render) =>
        timeAndDate(render).formattedDate +
        ", " +
        timeAndDate(render).formattedTime,
    },
  ];

  // Handle Search
  const [searchVal, setSearchVal] = useState("");
  const onSearch: SearchProps["onSearch"] = (value, _e) => setSearchVal(value);

  let tableData: DataType[] = [];

  //   Data
  const { data } = useGetNewslatterEmailQuery(undefined);

  if (data?.length > 0) {
    data.map((newsLatterEmail: any) => {
      tableData.push({
        email: newsLatterEmail.email,
        createdAt: newsLatterEmail.createdAt,
        _id: newsLatterEmail._id,
        key: newsLatterEmail._id,
      });
    });
  }

  // Filter data based on searchVal
  const filteredData = tableData
    .filter((item) =>
      item.email.toLowerCase().includes(searchVal.toLowerCase())
    )
    // @ts-ignore
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Store Email Data
  const allDownloadableEmail = filteredData
    .map((data) => data.email)
    .join(", ");

  // Function to initiate the download
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([allDownloadableEmail], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "emails.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <div>
        <div className="shadow p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-semibold text-secondary">
              NewsLatter Emails <br />
            </h2>
          </div>
          <div></div>
          <div className="my-4 ease-in-out duration-300  ">
            <p>Serach Emails </p>
            <div className="flex items-center w-full">
              <Search
                placeholder="Type here ..."
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
        <div className="my-4 flex">
          <div onClick={downloadTxtFile}>
            <CustomButton
              type="button"
              content="Download All Mails"
              icon="fa-download"
            />
          </div>
        </div>
        <div className="my-4 p-4 ">
          <MyTable data={filteredData} columns={columns} pageSize="10" />
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
