import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FormOutlined,
} from "@ant-design/icons";

export const columnUoms = [
  {
    title: "No.",
    dataIndex: "id",
    key: "id",
    width: 10,
    align: "center" as const,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center" as const,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center" as const,
    render: (status: boolean) =>
      status === true ? (
        <span className="text-green-500">Active</span>
      ) : (
        <span className="text-red-500">Non Active</span>
      ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "right" as const,
    render: (column: any, row: any) => (
      <div className="flex items-center justify-end">
        {row.status === 1 ? (
          <EyeInvisibleOutlined className="text-lg hover:text-blue-400" />
        ) : (
          <EyeOutlined className="text-lg hover:text-blue-400" />
        )}
        <FormOutlined className="mx-3 text-lg hover:text-blue-400" />
        <DeleteOutlined className="text-lg hover:text-blue-400" />
      </div>
    ),
  },
];
