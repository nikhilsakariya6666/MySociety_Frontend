import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditGallery = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_GALLERY_BY_ID + id : environment.CREATE_GALLERY;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createGallery = (data) => {
  const url = BASE_URL + environment.CREATE_GALLERY;
  return handler.Post(url, data).then((res) => res);
};

const updateGalleryById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_GALLERY_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteGalleryById = (id) => {
  const url = BASE_URL + environment.DELETE_GALLERY_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllGallery = () => {
  const url = BASE_URL + environment.FIND_ALL_GALLERY;
  return handler.Get(url).then((res) => res);
};

const getGalleryById = (data, id) => {
  const url = BASE_URL + environment.GET_GALLERY_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateGallery = () => {
  const url = BASE_URL + environment.GET_PAGINATE_GALLERY;
  return handler.Post(url).then((res) => res);
};

export {
  createGallery,
  addEditGallery,
  updateGalleryById,
  deleteGalleryById,
  getGalleryById,
  getPaginateGallery,
  getAllGallery,
};
