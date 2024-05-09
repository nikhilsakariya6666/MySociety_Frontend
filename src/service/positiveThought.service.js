import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditPositiveThought = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id
    ? environment.UPDATE_POSITIVETHOUGHT_BY_ID + id
    : environment.CREATE_POSITIVETHOUGHT;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createPositiveThought = (data) => {
  console.log("data =>", data);
  const url = BASE_URL + environment.CREATE_POSITIVETHOUGHT;
  return handler.Post(url, data).then((res) => res);
};

const updatePositiveThoughtById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_POSITIVETHOUGHT_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deletePositiveThoughtById = (id) => {
  const url = BASE_URL + environment.DELETE_POSITIVETHOUGHT_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllPositiveThought = () => {
  const url = BASE_URL + environment.FIND_ALL_POSITIVETHOUGHT;
  return handler.Get(url).then((res) => res);
};

const getPositiveThoughtById = (data, id) => {
  const url = BASE_URL + environment.GET_POSITIVETHOUGHT_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginatePositiveThought = () => {
  const url = BASE_URL + environment.GET_PAGINATE_POSITIVETHOUGHT;
  return handler.Post(url).then((res) => res);
};

export {
  createPositiveThought,
  getPaginatePositiveThought,
  getPositiveThoughtById,
  deletePositiveThoughtById,
  updatePositiveThoughtById,
  getAllPositiveThought,
  addEditPositiveThought,
};
