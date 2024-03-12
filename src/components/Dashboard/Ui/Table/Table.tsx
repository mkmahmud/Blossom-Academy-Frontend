// @ts-nocheck
import { useState } from "react";
import { Table, message } from "antd";
import type { TableRowSelection } from "antd/es/table/interface";
import CustomButton from "../../../Buttons/CustomButton";
import { useForm } from "react-hook-form";
import CustomInput from "../Input/CustomInput";
import { useCreateMultipleNotificationsMutation } from "../../../../redux/api/notification/notification";

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const MyTable = ({ columns, data, pageSize }: any) => {
  // States for Selected
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [selecteId, setSelectedId] = useState([]);

  const [checkStrictly] = useState(false);

  const pagination = {
    pageSize, // Number of items displayed per page
    showTotal: (total: any) => `Total ${total} items`, // Display total number of items
  };

  // rowSelection objects indicates the need for row selection
  const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
      // @ts-ignore
      const userIds = selectedRows.map((row) => row?.userId);
      // @ts-ignore
      setSelectedId(userIds);
    },
  };

  // INput Types
  interface Inputs {
    status: boolean;
    content: string;
    link: string;
    receiver: string;
    id: [];
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  // Create Notification using Redux
  const [createMultipleNotifications] =
    useCreateMultipleNotificationsMutation();

  const onSubmit = async (data: Partial<Inputs>) => {
    data.status = true;
    data.receiver = "A-0001";
    // @ts-ignore
    data.id = selecteId;

    const res = await createMultipleNotifications(data);
    // @ts-ignore
    if (res?.data?.status) {
      message.success("Notification sent successfully");
    }
  };

  return (
    <>
      <div>
        {selecteId.length > 0 && (
          <div>
            <div className="flex justify-end my-4">
              <div
                onClick={() => {
                  setNotificationStatus(!notificationStatus);
                }}
              >
                <CustomButton type="button" content="Send Notification" />
              </div>
            </div>
            {notificationStatus && (
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-3 space-x-2 items-center "
                >
                  <CustomInput
                    name="content"
                    placeholder="Content  "
                    errors={errors}
                    control={control}
                  />

                  <CustomInput
                    name="link"
                    placeholder="Path"
                    errors={errors}
                    control={control}
                  />

                  <div>
                    <CustomButton type="submit" content="Send" />
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
        pagination={pagination}
      />
    </>
  );
};

export default MyTable;
