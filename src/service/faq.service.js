import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditFAQ = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_FAQ_BY_ID + id : environment.CREATE_FAQ;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createFAQ = (data) => {
  const url = BASE_URL + environment.CREATE_FAQ;
  return handler.Post(url, data).then((res) => res);
};

const updateFaqById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_FAQ_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteFaqById = (id) => {
  const url = BASE_URL + environment.DELETE_FAQ_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllFAQ = () => {
  const url = BASE_URL + environment.FIND_ALL_FAQ;
  return handler.Get(url).then((res) => res);
};

const getfaqById = (data, id) => {
  const url = BASE_URL + environment.GET_FAQ_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateFAQ = () => {
  const url = BASE_URL + environment.GET_PAGINATE_SOCIETY;
  return handler.Post(url).then((res) => res);
};

export {
  createFAQ,
  getAllFAQ,
  updateFaqById,
  addEditFAQ,
  deleteFaqById,
  getfaqById,
  getPaginateFAQ,
};
