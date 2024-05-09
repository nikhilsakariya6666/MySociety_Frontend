import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditUser = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_USER_DETAILS_BY_ID + id : environment.REGISTER_USER;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const registerUser = (data) => {
  console.log("data =>", data);
  const url = BASE_URL + environment.REGISTER_USER;
  return handler.Post(url, data).then((res) => res);
};

const updateUserDetailsById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_USER_DETAILS_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteUserById = (id) => {
  const url = BASE_URL + environment.DELETE_USER_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllUser = () => {
  const url = BASE_URL + environment.GET_ALL_USER;
  return handler.Get(url).then((res) => res);
};

const getUserById = (data, id) => {
  const url = BASE_URL + environment.GET_USER_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateUser = () => {
  const url = BASE_URL + environment.GET_PAGINATE_USER;
  return handler.Post(url).then((res) => res);
};

export {
  registerUser,
  getPaginateUser,
  getAllUser,
  getUserById,
  addEditUser,
  updateUserDetailsById,
  deleteUserById,
};
