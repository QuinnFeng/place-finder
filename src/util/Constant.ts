const gmKey = import.meta.env.VITE_GOOGLE_MAP;
const geoApiKey = import.meta.env.VITE_GEOAPI;
const baseUrl = "http://localhost:5173";
const geoAPiUrl = "https://api.geoapify.com/v2";
import landingImage from "../assets/landingpage.jpg";
import logo from "../assets/logo.png";

// import

//env variable
export { gmKey, baseUrl, geoAPiUrl, geoApiKey };

//images
export const images = { landingImage, logo };

export const appConstants = {
  // routes
  loginRoute: "/login",
  signUpRoute: "/sign_up",
  main: "/main",

  // actions
  LOGIN: "LOGIN",
  CHECK_LOGIN: "CHECK_LOGIN",
  SIGN_UP: "SIGN_UP",
  ADD_USER_DETAIL: "ADD_USER_DETAIL",
  CREATE_CATEGORY: "CREATE_CATEGORY",
  GET_CATEGORIES: "GET_CATEGORIES",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
  ADD_PLACE_TO_CATEGORY: "ADD_PLACE_TO_CATEGORY",
  REMOVE_PLACE_FROM_CATEGORY: "REMOVE_PLACE_FROM_CATEGORY",
  SEARCH_NEARBY_PLACES: "SEARCH_NEARBY_PLACES",
};

export interface ReduxState {
  names: string[];
  user: { username: string };
}
