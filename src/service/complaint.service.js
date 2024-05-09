import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditComplaint = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_COMPLAINT_BY_ID + id : environment.CREATE_COMPLAINT;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createComplaint = (data) => {
  const url = BASE_URL + environment.CREATE_COMPLAINT;
  return handler.Post(url, data).then((res) => res);
};
const updateComplaintById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_COMPLAINT_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteComplaintById = (id) => {
  const url = BASE_URL + environment.DELETE_COMPLAINT_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllComplaint = () => {
  const url = BASE_URL + environment.FIND_ALL_COMPLAINT;
  return handler.Get(url).then((res) => res);
};

const getComplaintById = (data, id) => {
  const url = BASE_URL + environment.GET_COMPLAINT_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateComplaint = () => {
  const url = BASE_URL + environment.GET_PAGINATE_COMPLAINT;
  return handler.Post(url).then((res) => res);
};

export {
  createComplaint,
  getAllComplaint,
  addEditComplaint,
  updateComplaintById,
  deleteComplaintById,
  getComplaintById,
  getPaginateComplaint,
};
