import axios from "axios";
import setAuthToken from "./setAuthToken.js";
import jwt_decode from "jwt-decode";
import * as action from "./types";

//login user
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: action.AUTH_START });
  axios
    .post(
      "http://localhost:8095/auth/realms/portal-web-di/protocol/openid-connect/token",
      userData
    )
    .then((res) => {
      // Save to localStorage
      const { access_token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", access_token);
      // Set token to Auth headers
      setAuthToken(access_token);
      // Decode token to get user dataconst
      const decoded = jwt_decode(access_token);
      //Set current user
      console.log(decoded);
      dispatch(setCurrentUser(decoded));
      history.go(0);
    })
    .catch((err) => {
      dispatch({
        type: action.AUTH_FAIL,
        payload: "Nom d'utilisateur ou Mot de Passe Invalide",
      });
    })
    .finally(() => {
      dispatch({ type: action.AUTH_END });
    });
};
//set logged in user
export const setCurrentUser = (decoded) => {
  let user = {
    username: decoded.preferred_username,
    unite: decoded.unite,
    roles: decoded.realm_access.roles,
  };
  return {
    type: action.AUTH_SUCCESS,
    payload: user,
  };
};
// logout user
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: action.LOGOUT_START,
  });
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: action.LOGOUT_SUCCESS,
  });
};
