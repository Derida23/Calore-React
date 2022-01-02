import { ILogin, IRegister } from "../../interface/authentication";

export const validateRegister = async (dataRegister: IRegister) => {
  let errors = { code: 422, message: "validation error", data: [] };

  if (!dataRegister.name) {
    errors.data.push({
      value: "",
      msg: "name is required",
      param: "name",
      location: "client",
    });
  } else if (!/^[A-Za-z ]+$/.test(dataRegister.name)) {
    errors.data.push({
      value: "",
      msg: "name only alphabet",
      param: "name",
      location: "client",
    });
  }

  if (!dataRegister.email) {
    errors.data.push({
      value: "",
      msg: "email is required",
      param: "email",
      location: "client",
    });
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      dataRegister.email
    )
  ) {
    errors.data.push({
      value: "",
      msg: "incorrect email format",
      param: "email",
      location: "client",
    });
  }

  if (!dataRegister.password) {
    errors.data.push({
      value: "",
      msg: "password is required",
      param: "password",
      location: "client",
    });
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/.test(
      dataRegister.password
    )
  ) {
    errors.data.push({
      value: "",
      msg: "example format pAss123!",
      param: "password",
      location: "client",
    });
  }

  if (!dataRegister.confirm_password) {
    errors.data.push({
      value: "",
      msg: "confirm password is required",
      param: "confirm_password",
      location: "client",
    });
  } else if (dataRegister.confirm_password !== dataRegister.password) {
    errors.data.push({
      value: "",
      msg: "confirm password not same",
      param: "confirm_password",
      location: "client",
    });
  }

  if (!dataRegister.phone) {
    errors.data.push({
      value: "",
      msg: "phone is required",
      param: "phone",
      location: "client",
    });
  } else if (
    !/^[0-9]*$/.test(dataRegister.phone) ||
    dataRegister.phone.length < 11 ||
    dataRegister.phone.length > 13
  ) {
    errors.data.push({
      value: "",
      msg: "incorrect phone format",
      param: "phone",
      location: "client",
    });
  }

  if (!dataRegister.address) {
    errors.data.push({
      value: "",
      msg: "address is required",
      param: "address",
      location: "client",
    });
  }

  if (!dataRegister.province_id) {
    errors.data.push({
      value: "",
      msg: "province is required",
      param: "province",
      location: "client",
    });
  }

  if (!dataRegister.regencie_id) {
    errors.data.push({
      value: "",
      msg: "city is required",
      param: "regency",
      location: "client",
    });
  }

  if (!dataRegister.district_id) {
    errors.data.push({
      value: "",
      msg: "district is required",
      param: "district",
      location: "client",
    });
  }

  if (errors.data.length) {
    return errors;
  } else {
    return null;
  }
};

export const validateLogin = async (dataLogin: ILogin) => {
  let errors = { code: 422, message: "validation error", data: [] };

  if (!dataLogin.email) {
    errors.data.push({
      value: "",
      msg: "email is required",
      param: "email",
      location: "client",
    });
  }

  if (!dataLogin.password) {
    errors.data.push({
      value: "",
      msg: "password is required",
      param: "password",
      location: "client",
    });
  }

  if (errors.data.length) {
    return errors;
  } else {
    return null;
  }
};
