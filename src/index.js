import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from './reducers/user/userReducer'





// const rootReducer = combineReducers({
//   user: userReducer,
//   job: jobReducer,
// });

// const store = createStore(rootReducer);

// export const changeFirstNameAction = (firstName) => {
//   return {
//     type: CHANGE_FIRST_NAME,
//     firstName,
//   };
// };

// export const changeLastNameAction = (lastName) => {
//   return {
//     type: CHANGE_LAST_NAME,
//     lastName,
//   };
// };

// export const changeCompanyNameAction = (companyName) => {
//   return {
//     type: CHANGE_COMPANY,
//     companyName,
//   };
// };

// export const upSallaryAction = () => {
//   return { type: UP_SALLARY };
// };

// export const lowSallaryAction = () => {
//   return { type: LOW_SALLARY };
// };

// export const changeSallaryAction = (sallary) => {
//   return {
//     type: CHANGE_SALLARY,
//     sallary,
//   };
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
