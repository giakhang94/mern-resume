import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";
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
  USER_LOGIN_BEGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from "./action";
const initState = {
  isSubmit: false,
  isLoading: false,
  isCheckingUser: true,
  isLogin: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  user: null,
  allProject: null,
};
const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  //create custom axios
  const authFetch = axios.create({
    baseURL: "/api", //base url này là cái nằm sau localhost:5000 => không cần thêm localhost vào base
  });
  //interceptors
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("intercepter", error);
      if (error.response.data.status === 401) {
        console.log("auth error");
      }
      return Promise.reject(error);
    }
  );
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch.get("/user/getCurrentUser");

      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      console.log("login to continue");
      dispatch({ type: GET_CURRENT_USER_ERROR });
    }
  };
  const getAllProject = async () => {
    dispatch({ type: GET_ALL_PROJECT_BEGIN });
    try {
      const { data } = await authFetch.get("/project");
      console.log(data);
      dispatch({ type: GET_ALL_PROJECT_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_ALL_PROJECT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const login = async (dataLogin) => {
    dispatch({ type: USER_LOGIN_BEGIN });
    try {
      const { data } = await authFetch.post("/user/login", { ...dataLogin });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const createPJ = async (dataPJ) => {
    dispatch({ type: PJ_CREATE_BEGIN });
    const formData = new FormData();
    formData.append("thumb", dataPJ.thumb);
    try {
      const { data } = await authFetch.post(
        "/project/create",
        {
          ...dataPJ,
          formData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: PJ_CREATE_SUCCESS });
    } catch (error) {
      dispatch({ type: PJ_CREATE_ERROR });
    }
    clearAlert();
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <appContext.Provider
      value={{ ...state, getAllProject, getCurrentUser, login, createPJ }}
    >
      {children}
    </appContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(appContext);
};
export { useAppContext, AppContextProvider };
