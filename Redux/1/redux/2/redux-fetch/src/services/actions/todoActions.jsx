import axios from "axios";
import {
  API_URL,
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../constants/todoConstants";

const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODO_REQUEST });
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: GET_TODO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODO_FAILED, payload: error.message });
  }
};

export default getAllTodos;
