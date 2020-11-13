import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
} from "../../actions/action_constants";
import initialState from "../../store/store";

// export const userReducer = (state = initialState.user, action) => {
//   switch (action.type) {
//     case CHANGE_FIRST_NAME:
//       return { ...state, firstName: action.firstName };
//     case CHANGE_LAST_NAME:
//       return { ...state, lastName: action.lastName };
//     default:
//       return state;
//   }
// };
// export default userReducer;