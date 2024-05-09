import { environment, BASE_URL } from "../environment/environment";
import handler from "../common/handler";

const addEditExpenseIncome = (data, id) => {
  // eslint-disable-next-line no-unused-vars
  const url = id ? environment.UPDATE_EXPENSEINCOME_BY_ID + id : environment.CREATE_EXPENSEINCOME;
  return handler.Post(BASE_URL + url, data).then((res) => res);
};

const createExpenseIncome = (data) => {
  console.log("data =>", data);
  const url = BASE_URL + environment.CREATE_EXPENSEINCOME;
  return handler.Post(url, data).then((res) => res);
};

const updateExpenseIncomeById = (data, id) => {
  const url = BASE_URL + environment.UPDATE_EXPENSEINCOME_BY_ID + id;
  return handler.Post(url, data).then((res) => res);
};

const deleteExpenseIncomeById = (id) => {
  const url = BASE_URL + environment.DELETE_EXPENSEINCOME_BY_ID + id;
  return handler.Post(url, id).then((res) => res);
};

const getAllExpenseIncome = () => {
  const url = BASE_URL + environment.FIND_ALL_EXPENSEINCOME;
  return handler.Get(url).then((res) => res);
};

const getExpenseIncomeById = (data, id) => {
  const url = BASE_URL + environment.GET_EXPENSEINCOME_BY_ID + id;
  return handler.Get(url, data).then((res) => res);
};

const getPaginateExpenseIncome = () => {
  const url = BASE_URL + environment.GET_PAGINATE_EXPENSEINCOME;
  return handler.Post(url).then((res) => res);
};

export {
  createExpenseIncome,
  addEditExpenseIncome,
  updateExpenseIncomeById,
  deleteExpenseIncomeById,
  getExpenseIncomeById,
  getPaginateExpenseIncome,
  getAllExpenseIncome,
};
