import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditAnnouncement = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_ANNOUNCEMENT_BY_ID + id : environment.CREATE_ANNOUNCEMENT;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createAnnouncement = (data) => {
  const url = BASE_URL + environment.CREATE_ANNOUNCEMENT;
  return handler.Post(url, data).then((res) => res);
};
const updateAnnouncementById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_ANNOUNCEMENT_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteAnnouncementsById = (id) => {
  const url = BASE_URL + environment.DELETE_ANNOUNCEMENT_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllAnnouncement = () => {
  const url = BASE_URL + environment.FIND_ALL_ANNOUNCEMENT;
  return handler.Get(url).then((res) => res);
};

const getAnnouncementById = (data, id) => {
  const url = BASE_URL + environment.GET_ANNOUNCEMENT_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateAnnouncement = () => {
  const url = BASE_URL + environment.GET_PAGINATE_ANNOUNCEMENT;
  return handler.Post(url).then((res) => res);
};

export {
  createAnnouncement,
  getPaginateAnnouncement,
  getAnnouncementById,
  deleteAnnouncementsById,
  updateAnnouncementById,
  getAllAnnouncement,
  addEditAnnouncement,
};
