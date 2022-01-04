import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import { Uom } from "../../../components/master/uom";
import { decrypt } from "../../../libs";
import { Filter, getUoms } from "../../../libs/directory/uom";
import { IUoms } from "../../../libs/interface/uom";

const UomPage = ({ DATA_UOM }) => {
  const [dataUoms, setDataUoms] = useState<Array<IUoms>>(DATA_UOM);

  return <Uom props={{ dataUoms }} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const { req } = context;
  const { cookies } = req;
  const user = await decrypt(cookies.__UUID);

  const filter: Filter = {
    search: "",
    page: 1,
    limit: 10,
    status: user.role === 1 ? null : 1,
  };

  const cookie: string = session.accessToken.toString();
  const apiUom = await getUoms(cookie, filter);

  return {
    props: { DATA_UOM: apiUom.data },
  };
};

export default UomPage;
