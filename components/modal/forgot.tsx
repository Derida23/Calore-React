import React, { FC } from "react";
import Modal from "antd/lib/modal/Modal";
import { InfoCircleOutlined } from "@ant-design/icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Forgot: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal
        title={null}
        visible={isOpen}
        onOk={null}
        onCancel={onClose}
        footer={null}
        closable={true}
        keyboard={false}
        width={400}
      >
        <div>
          <div className="flex items-center mb-4">
            <InfoCircleOutlined />
            <p className="text-xl ml-2 my-0">Forgot Password ? </p>
          </div>
          <div>
            <p>
              For now, the forgot password feature does not exist, in the future
              this will be integrated by emailing your new password For that, if
              you have problems related to forgetting your password, you can
              contact admin.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Forgot;
