import React, { FC } from "react";
import styles from "../../../styles/Master.module.scss";
import "antd/dist/antd.css";
import Head from "next/head";
import Sidebar from "../../sidebar";
import { Table } from "antd";
import { columnUoms } from "./dataTable";
import { IUoms } from "../../../libs/interface/uom";

interface Props {
  props: PropsItem;
}

interface PropsItem {
  dataUoms: Array<IUoms>;
}

const Uom: FC<Props> = ({ props }) => {
  const { dataUoms } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Master Unit of Measure | Calore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center w-full justify-center">
        <div className=" w-7/12">
          <div className="grid grid-rows-1 grid-cols-6 gap-5">
            <div className="flex items-center justify-center">
              <Sidebar />
            </div>
            <div className={`${styles.cardtable} col-span-5 card w-full`}>
              <p className="font-semibold text-lg">Unit of Measure</p>
              <div>
                <Table
                  rowKey={"id"}
                  dataSource={dataUoms}
                  columns={columnUoms}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Uom;
