import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditSociety = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_SOCIETY_DETAILS_BY_ID + id : environment.REGISTER_SOCIETY;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const registerSociety = (data) => {
  const url = BASE_URL + environment.REGISTER_SOCIETY;
  return handler.Post(url, data).then((res) => res);
};

const updateSocietyDetailsById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_SOCIETY_DETAILS_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteSocietyById = (id) => {
  const url = BASE_URL + environment.DELETE_SOCIETY_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllSociety = () => {
  const url = BASE_URL + environment.GET_ALL_SOCIETY;
  return handler.Get(url).then((res) => res);
};

const getSocietyById = (data, id) => {
  const url = BASE_URL + environment.GET_SOCIETY_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateSociety = () => {
  const url = BASE_URL + environment.GET_PAGINATE_SOCIETY;
  return handler.Post(url).then((res) => res);
};

export {
  registerSociety,
  getAllSociety,
  addEditSociety,
  updateSocietyDetailsById,
  deleteSocietyById,
  getSocietyById,
  getPaginateSociety,
};
