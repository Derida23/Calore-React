import {
  ArrowLeftOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const onDirect = (url: string) => {
    router.push(url);
  };
  return (
    <div>
      <Tooltip placement="right" title={"Homepage"}>
        <div
          onClick={() => onDirect("/")}
          className="card-sidebar w-12 h-12  hover:text-blue-500"
        >
          <ArrowLeftOutlined className="text-lg" />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Data Table"}>
        <div className="card-sidebar w-12 h-12  hover:text-blue-500">
          <TableOutlined className="text-lg" />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Order"}>
        <div className="card-sidebar w-12 h-12  hover:text-blue-500">
          <ShoppingCartOutlined className="text-lg" />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Product"}>
        <div className="card-sidebar w-12 h-12  hover:text-blue-500">
          <ProfileOutlined className="text-lg" />
        </div>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
