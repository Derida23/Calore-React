import { ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";

const ErrorField = ({ message }) => {
  return (
    <div className="flex items-center mt-1 -mb-2">
      <ExclamationCircleOutlined
        className="mb-3"
        style={{ color: "#F87171" }}
      />
      <p className="text-red-400 ml-1 ">{message}</p>
    </div>
  );
};

export default ErrorField;
