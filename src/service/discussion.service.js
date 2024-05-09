import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditDiscussion = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_DISCUSSION_BY_ID + id : environment.CREATE_DISCUSSION;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createDiscussion = (data) => {
  const url = BASE_URL + environment.CREATE_DISCUSSION;
  return handler.Post(url, data).then((res) => res);
};

const updateDiscussionById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_DISCUSSION_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteDiscussionById = (id) => {
  const url = BASE_URL + environment.DELETE_DISCUSSION_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllDiscussion = () => {
  const url = BASE_URL + environment.FIND_ALL_DISCUSSION;
  return handler.Get(url).then((res) => res);
};

const getDiscussionById = (data, id) => {
  const url = BASE_URL + environment.GET_DISCUSSION_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateDiscussion = () => {
  const url = BASE_URL + environment.GET_PAGINATE_DISCUSSION;
  return handler.Post(url).then((res) => res);
};

export {
  createDiscussion,
  addEditDiscussion,
  updateDiscussionById,
  deleteDiscussionById,
  getDiscussionById,
  getPaginateDiscussion,
  getAllDiscussion,
};
