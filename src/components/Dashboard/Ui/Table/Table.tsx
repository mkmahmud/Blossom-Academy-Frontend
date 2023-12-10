import { useState } from "react";
import { Table } from "antd";
import type { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const MyTable = ({ columns, data, pageSize }: any) => {
  const [checkStrictly] = useState(false);

  const pagination = {
    pageSize, // Number of items displayed per page
    showTotal: (total: any) => `Total ${total} items`, // Display total number of items
  };

  return (
    <>
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
