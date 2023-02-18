import {
  CLEAR_ALERT,
  GET_ALL_PROJECT_BEGIN,
  GET_ALL_PROJECT_ERROR,
  GET_ALL_PROJECT_SUCCESS,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
  PJ_CREATE_BEGIN,
  PJ_CREATE_ERROR,
  PJ_CREATE_SUCCESS,
  PJ_GET_BY_ID_BEGIN,
  PJ_GET_BY_ID_ERROR,
  PJ_GET_BY_ID_SUCCESS,
  PJ_UPDATE_BEGIN,
  PJ_UPDATE_ERROR,
  PJ_UPDATE_SUCCESS,
  USER_LOGIN_BEGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === GET_ALL_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_ALL_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      allProject: action.payload.data,
    };
  }
  if (action.type === GET_ALL_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  //get current user
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return {
      ...state,
      isCheckingUser: true,
    };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      isCheckingUser: false,
      user: action.payload.data.user,
    };
  }
  if (action.type === GET_CURRENT_USER_ERROR) {
    return {
      ...state,
      isCheckingUser: false,
    };
  }
  if (action.type === USER_LOGIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.data.user,
      showAlert: true,
      alertText: "Login Successfully",
      alertType: "success",
    };
  }
  if (action.type === USER_LOGIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === PJ_CREATE_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isSubmit: true,
    };
  }
  if (action.type === PJ_CREATE_SUCCESS) {
    return {
      ...state,
      isSubmit: false,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Add Project Successfully",
    };
  }
  if (action.type === PJ_CREATE_ERROR) {
    return {
      ...state,
      isSubmit: false,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === PJ_UPDATE_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isSubmit: true,
    };
  }
  if (action.type === PJ_UPDATE_SUCCESS) {
    return {
      ...state,
      isSubmit: false,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Project Updated!",
    };
  }
  if (action.type === PJ_UPDATE_ERROR) {
    return {
      ...state,
      isSubmit: false,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.data.msg,
    };
  }
  if (action.type === PJ_GET_BY_ID_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === PJ_GET_BY_ID_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      projectById: action.payload.data.PJ,
    };
  }
  if (action.type === PJ_GET_BY_ID_ERROR) {
    return {
      ...state,

      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
};
export default reducer;
