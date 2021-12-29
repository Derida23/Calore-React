import React, { FC } from "react";
import Modal from "antd/lib/modal/Modal";
import { InfoCircleOutlined } from "@ant-design/icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Intro: FC<Props> = ({ isOpen, onClose }) => {
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
            <p className="text-xl ml-2 my-0">What is ? </p>
          </div>
          <div>
            <p>
              <b>Calore System </b>is a Point of Sale application based on a
              website, this is a project to learn Next and Typescript, for API
              you can use
              <a
                href="https://github.com/Derida23/Calore-Backend"
                target="_blank"
              >
                {" "}
                Calore Backend{" "}
              </a>
              and Repository Calore System you can download it on
              <a
                href="https://github.com/Derida23/Calore-Frontend"
                target="_blank"
              >
                {" "}
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Intro;
