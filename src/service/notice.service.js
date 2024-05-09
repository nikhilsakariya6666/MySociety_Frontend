import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditNotice = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_NOTICE_BY_ID + id : environment.CREATE_NOTICE;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createNotice = (data) => {
  const url = BASE_URL + environment.CREATE_NOTICE;
  return handler.Post(url, data).then((res) => res);
};
const updateNoticeById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_NOTICE_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteNoticeById = (id) => {
  const url = BASE_URL + environment.DELETE_NOTICE_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllNotice = () => {
  const url = BASE_URL + environment.FIND_ALL_NOTICE;
  return handler.Get(url).then((res) => res);
};

const getNoticeById = (data, id) => {
  const url = BASE_URL + environment.GET_NOTICE_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateNotice = () => {
  const url = BASE_URL + environment.GET_PAGINATE_NOTICE;
  return handler.Post(url).then((res) => res);
};

export {
  createNotice,
  updateNoticeById,
  deleteNoticeById,
  getNoticeById,
  getPaginateNotice,
  addEditNotice,
  getAllNotice,
};
