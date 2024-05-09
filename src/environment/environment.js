export const environment = {
  // user service
  REGISTER_USER: "user/registerUser",
  LOG_IN: "user/loginUser",
  UPDATE_USER_DETAILS_BY_ID: "user/updateUserDetailsById/",
  DELETE_USER_BY_ID: "user/deleteUserById/",
  GET_USER_BY_ID: "user/getUserById/",
  GET_ALL_USER: "user/getAllUser",
  GET_PAGINATE_USER: "user/getPaginateUser",

  // society service
  REGISTER_SOCIETY: "society/registerSociety",
  LOG_IN_SOCIETY: "society/loginSociety",
  UPDATE_SOCIETY_DETAILS_BY_ID: "society/updateSocietyDetailsById/",
  DELETE_SOCIETY_BY_ID: "society/deleteSocietyById/",
  GET_SOCIETY_BY_ID: "society/getSocietyById/",
  GET_ALL_SOCIETY: "society/getAllSociety",
  GET_PAGINATE_SOCIETY: "society/getPaginateSociety",

  // Complaint service
  CREATE_COMPLAINT: "complaint/createComplaint",
  UPDATE_COMPLAINT_BY_ID: "complaint/updateComplaintById/",
  DELETE_COMPLAINT_BY_ID: "complaint/deleteComplaintById/",
  GET_COMPLAINT_BY_ID: "complaint/getComplaintById/",
  FIND_ALL_COMPLAINT: "complaint/findAllComplaints",
  GET_PAGINATE_COMPLAINT: "society/getPaginateComplaint",

  // PositiveThought service
  CREATE_POSITIVETHOUGHT: "positiveThought/createPositiveThought",
  UPDATE_POSITIVETHOUGHT_BY_ID: "positiveThought/updatePositiveThoughtById/",
  DELETE_POSITIVETHOUGHT_BY_ID: "positiveThought/deletePositiveThoughtById/",
  GET_POSITIVETHOUGHT_BY_ID: "positiveThought/getPositiveThoughtById/",
  FIND_ALL_POSITIVETHOUGHT: "positiveThought/findAllPositiveThoughts",
  GET_PAGINATE_POSITIVETHOUGHT: "society/getPaginatePositiveThought",

  // Announcement service
  CREATE_ANNOUNCEMENT: "announcement/createAnnouncement",
  UPDATE_ANNOUNCEMENT_BY_ID: "announcement/updateAnnouncementById/",
  DELETE_ANNOUNCEMENT_BY_ID: "announcement/deleteAnnouncementsById/",
  GET_ANNOUNCEMENT_BY_ID: "announcement/getAnnouncementById/",
  FIND_ALL_ANNOUNCEMENT: "announcement/findAllAnnouncements",
  GET_PAGINATE_ANNOUNCEMENT: "announcement/getPaginateAnnouncement",

  // Event service
  CREATE_EVENT: "event/createEvent",
  UPDATE_EVENT_BY_ID: "event/updateEventById/",
  DELETE_EVENT_BY_ID: "event/deleteEventById/",
  GET_EVENT_BY_ID: "event/getEventById/",
  FIND_ALL_EVENT: "event/findAllEvents",
  GET_PAGINATE_EVENT: "event/getPaginateEvent",

  // Discussion service
  CREATE_DISCUSSION: "discussion/createDiscussion",
  UPDATE_DISCUSSION_BY_ID: "discussion/updateDiscussionById/",
  DELETE_DISCUSSION_BY_ID: "discussion/deleteDiscussionById/",
  GET_DISCUSSION_BY_ID: "discussion/getDiscussionById/",
  FIND_ALL_DISCUSSION: "discussion/findAllDiscussions",
  GET_PAGINATE_DISCUSSION: "discussion/getPaginateDiscussion",

  // FAQ service
  CREATE_FAQ: "faq/createFaq",
  UPDATE_FAQ_BY_ID: "faq/updateFaqById/",
  DELETE_FAQ_BY_ID: "faq/deleteFaqById/",
  GET_FAQ_BY_ID: "faq/getfaqById/",
  FIND_ALL_FAQ: "faq/findAllFaqs",
  GET_PAGINATE_FAQ: "faq/getPaginateFAQ",

  // Gallery service
  CREATE_GALLERY: "gallery/createGallery",
  UPDATE_GALLERY_BY_ID: "gallery/updateGalleryById/",
  DELETE_GALLERY_BY_ID: "gallery/deleteGalleryById/",
  GET_GALLERY_BY_ID: "gallery/getGalleryById/",
  FIND_ALL_GALLERY: "gallery/findAllGallerys",
  GET_PAGINATE_GALLERY: "gallery/getPaginateGallery",

  // Notice service
  CREATE_NOTICE: "notice/createNotice",
  UPDATE_NOTICE_BY_ID: "notice/updateNoticeById/",
  DELETE_NOTICE_BY_ID: "notice/deleteNoticeById/",
  GET_NOTICE_BY_ID: "notice/getNoticeById/",
  FIND_ALL_NOTICE: "notice/findAllNotices",
  GET_PAGINATE_NOTICE: "notice/getPaginateNotice",

  // ExpenseIncome service
  CREATE_EXPENSEINCOME: "expenseIncome/createExpenseIncome",
  UPDATE_EXPENSEINCOME_BY_ID: "expenseIncome/updateExpenseIncomeById/",
  DELETE_EXPENSEINCOME_BY_ID: "expenseIncome/deleteExpenseIncomeById/",
  GET_EXPENSEINCOME_BY_ID: "expenseIncome/getExpenseIncomeById/",
  FIND_ALL_EXPENSEINCOME: "expenseIncome/findAllExpenseIncomes",
  GET_PAGINATE_EXPENSEINCOME: "expenseIncome/getPaginateExpenseIncome",
};

export const BASE_URL = "https://my-society-backend.vercel.app/";
