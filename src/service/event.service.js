import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditEvent = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_EVENT_BY_ID + id : environment.CREATE_EVENT;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createEvent = (URL, data) => {
  const url = BASE_URL + environment.CREATE_EVENT;
  return handler.Post(url, data).then((res) => res);
};

const updateEventById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_EVENT_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteEventById = (id) => {
  const url = BASE_URL + environment.DELETE_EVENT_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllEvent = () => {
  const url = BASE_URL + environment.FIND_ALL_EVENT;
  return handler.Get(url).then((res) => res);
};

const getEventById = (data, id) => {
  const url = BASE_URL + environment.GET_EVENT_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateEvent = () => {
  const url = BASE_URL + environment.GET_PAGINATE_EVENT;
  return handler.Post(url).then((res) => res);
};

export {
  createEvent,
  getPaginateEvent,
  getEventById,
  deleteEventById,
  updateEventById,
  addEditEvent,
  getAllEvent,
};
